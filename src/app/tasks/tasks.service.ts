import { Injectable, signal } from "@angular/core";
import { type Task } from "./task.model";

@Injectable({
    providedIn: "root", // support DI anywhere in apk
})
export class TasksService{
    tasks = signal<Task[]>([]);

    addTask(data: {title:string, description:string}){
        let newTask: Task = {
            ...data,
            id: (Math.random() * 1000).toString(),
            status: 'OPEN',
        }
        this.tasks.update((oldTasks)=>[...oldTasks,newTask ])
    }
}