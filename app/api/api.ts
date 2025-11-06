import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{ error: string }>;

export const lehlehkaApi = axios.create({
  baseURL: "https://lehlehka.b.goit.study",
  withCredentials: true,
});
