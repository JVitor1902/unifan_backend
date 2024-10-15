import { Router } from "express"
import { TaskController } from "../controllers/taskController"


const router = Router()
const controller = new TaskController()

// Rota da tela principal
router.get("/", (request, response) => {
    return response.json("home page")
})

// Rota Read All
router.get("/tasks", controller.readAllTask)
// Rota Read One
router.get("/tasks/:id", controller.readOneTask)
// Rota Create
router.post("/tasks", controller.createTask)
// Rota Update
router.put("/tasks/:id", controller.updateTask)
// Rota Delete
router.delete("/tasks/:id", controller.deleteTask)

export default router