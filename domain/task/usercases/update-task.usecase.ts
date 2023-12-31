import { UseCase } from "base/use-case";
import { TaskModel } from "../models/task.model";

import { Observable, catchError, of } from "rxjs";
import { TaskRepository } from "../repositories/task.repository";
import { ResponseBody } from "../dtype";

export class UpdateTaskUseCase implements UseCase<TaskModel, ResponseBody>{
  constructor(
    private taskRepository: TaskRepository
  ) {}
  
  execute(params: TaskModel): Observable<ResponseBody> {
    return this.taskRepository.updateTask(params)
  }

}