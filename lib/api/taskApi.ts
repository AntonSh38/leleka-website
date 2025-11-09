import { Task } from "@/types/task";
import { nextServerApi } from "./api";

export interface TasksResponce {
  tasks: Task[];
  totalCount: number;
  totalPages: number;
  page: number;
}

export async function fetchTasks(): Promise<TasksResponce> {
  const res = await nextServerApi.get("/tasks");

  return res.data;
}
