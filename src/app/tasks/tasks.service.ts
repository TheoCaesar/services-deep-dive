import { inject, Injectable, signal } from "@angular/core";
import { TaskStatus, type Task } from "./task.model";
import { LoggingService } from "../logging.service";
import { LogServiceToken } from "../../main";

@Injectable({
    providedIn: "root", // support DI anywhere in apk
})
export class TasksService{
    private tasks = signal<Task[]>([]);
    allTasks = this.tasks.asReadonly();
    // logService = inject(LoggingService);
    logService = inject(LogServiceToken);
    
    addTask(data: {title:string, description:string}){
        let newTask: Task = {
            ...data,
            id: Math.round((Math.random() * 1000)).toString(),
            status: 'OPEN',
        }        
        this.tasks.update((oldTasks)=>[...oldTasks,newTask ])
        this.logService.log(`Task Added Successfuly\n${newTask} `)
    }
    
  onUpdateTaskStatus(taskId:string, newStatus:TaskStatus){
    this.tasks.update((oldTasks)=>oldTasks.map(
        (task)=> task.id===taskId ? {...task, status:newStatus} : task 
    ))
    this.logService.log(`Task Status Updated to ${newStatus}...`)
  }
}