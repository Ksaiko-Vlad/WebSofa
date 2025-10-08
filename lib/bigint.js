export function toPlainUser(u) {
    if (!u) return null;
    return {
      id: typeof u.id === 'bigint' ? u.id.toString() : u.id,
      role: u.role,
      email: u.email,
      first_name: u.first_name,
      second_name: u.second_name,
      last_name: u.last_name,
      phone: u.phone,
      active: u.active,
      created_at: u.created_at,
    };
  }