export type JwtPayload = {
  userId: string;
  role: "USER" | "ADMIN";
};
