import { DevDataSource } from "../connections/db_dev";
import { Task } from "../models/task";

// 1) Estabelece conexão com a tabela alvo no banco de dados através de um cursor. Um cursor é um objeto que permite fazer consultas ao banco de dados via aplicação. Essas consultas são feitas na tabela do Repository que está na conexão do DataSource. 

const cursor = DevDataSource.getRepository(Task)

// 2) Cria interfaces para receber dados do CONTROLLER, que por sua vez vieram da Requesição HTTP lá no FRONTEND 

type newTaskRequest = {
    description: string,
    date_task: Date
}

type findTaskRequest = {
    id: string 
}

export class TaskService {
    async createTask({description, date_task}:newTaskRequest):Promise<Task | Error> {
    // INSERT INTO tasks VALUES(description, date_task)    
    const task = cursor.create({
        description, date_task
    })
    // A função cursor.create() executa uma instrução INSERT na tabela  
    await cursor.save(task)  
    return task  
}

async readOneTask({ id } : findTaskRequest) : Promise<Task | Error> { 
    // SELECT FROM tasks WHERE id = id LIMIT 1  
    const task = await cursor.findOne({ where: {id}}) 
    if(!task) {
        return new Error("Task not found!") 
    } 
    return task  
}

async readAllTask() {
    // SELECT * FROM tasks 
    const tasks = await cursor.find()
    return tasks 
}

async updateTask() {
}

async deleteTask() {
}
}
