import { lehlehkaApi } from "./api";

export interface SessionResponse {
  success: boolean;
}

export async function checkSession(): Promise<SessionResponse> {
  const res = await lehlehkaApi.get("/auth/session");
  return res.data;
}
