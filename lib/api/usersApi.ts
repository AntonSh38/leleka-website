import { User } from "@/types/user";
import { lehlehkaApi } from "./api";

export async function getUser(): Promise<User> {
  const res = await lehlehkaApi.get("/users/me");
  return res.data;
}
