import { Injectable, signal } from "@angular/core";
import { TaskStatus, type Task } from "./task.model";

// @Injectable({
//     providedIn: "root", // support DI anywhere in apk
// })
export class TasksService{
    private tasks = signal<Task[]>([]);
    allTasks = this.tasks.asReadonly()

    addTask(data: {title:string, description:string}){
        let newTask: Task = {
            ...data,
            id: Math.round((Math.random() * 1000)).toString(),
            status: 'OPEN',
        }
        console.log(newTask);
        
        this.tasks.update((oldTasks)=>[...oldTasks,newTask ])
        console.log(this.tasks())
    }
    
  onUpdateTaskStatus(taskId:string, newStatus:TaskStatus){
    this.tasks.update((oldTasks)=>oldTasks.map(
        (task)=> task.id===taskId ? {...task, status:newStatus} : task 
    ))
  }
}