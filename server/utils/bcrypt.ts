export const hashPassword = async (str: string) => {
  return Bun.password.hash(str, "argon2d");
};

export const verifyPassword = async (str: string, hash: string) => {
  console.log("hi");
  return Bun.password.verify(str, hash, "argon2d");
};
