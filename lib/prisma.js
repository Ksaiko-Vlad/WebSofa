import { PrismaClient } from '@prisma/client';

// Один экземпляр Prisma в dev (из-за hot-reload)
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma || new PrismaClient({ log: ['warn', 'error'] });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
