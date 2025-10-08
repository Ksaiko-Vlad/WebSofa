import { prisma } from "@/lib/prisma";
import bcrypt from 'bcryptjs';

export async function registerUser({
    email,
    password,
    first_name,
    last_name,
    second_name,
    phone }) {
    const normalizedEmail = String(email).trim().toLowerCase();

    const exists = await prisma.users.findUnique({ where: { email: normalizedEmail } });
    if (exists) {
        const err = new Error('Пользователь с таким email уже существует');
        err.code = 'EMAIL_TAKEN';
        throw err;
    }

    const password_hash = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
        data: {
            email: normalizedEmail,
            password_hash,
            role: 'customer',
            first_name: first_name || null,
            last_name: last_name || null,
            second_name: second_name || null,
            phone: phone || null,
        },
    });

    return user;
}

export async function loginUser({ email, password, phone }) {
  const normalizedEmail = String(email).trim().toLowerCase();

  const user = await prisma.users.findUnique({ where: { email: normalizedEmail } });

  if (!user || !user.password_hash) {
    const err = new Error('Неверный e-mail или пароль');
    err.code = 'BAD_CREDENTIALS';
    throw err;
  }

  if (phone && user.phone && user.phone !== phone) {
    const err = new Error('Неверные данные');
    err.code = 'BAD_CREDENTIALS';
    throw err;
  }

  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) {
    const err = new Error('Неверный пароль');
    err.code = 'BAD_PASSWORD';
    throw err;
  }

  return user;
}

