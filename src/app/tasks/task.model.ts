import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

interface TaskStatusOpts{
  value : 'open' | 'in-progress' | 'done',
  taskStatus : TaskStatus,
  text: 'Open' | 'In-Progress' | 'Completed'
}
//injection token
export const TASK_STATUS_OPTS  = new InjectionToken<TaskStatusOpts[]>('task-status-options')

export const TaskStatusOptions:TaskStatusOpts[] = [
  {
    value: 'open', 
    taskStatus: 'OPEN',
    text: 'Open'
  },
  {
    value: 'in-progress', 
    taskStatus: 'IN_PROGRESS',
    text: 'In-Progress'
  },
  {
    value: 'done', 
    taskStatus: 'DONE',
    text: 'Completed'
  },
]