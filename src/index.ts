import { DevDataSource } from "./connections/dbDev"
import router from "./routes/routes"
import express = require("express")
import cors = require("cors")

// Inicializar a conexão com o banco de dados quando o servidor subir 
DevDataSource.initialize().then()
          console.log("DataBase connected!")

// Instancia o servidor express           
const app = express()
// Configura o servidor para a leitura de arquivos JSON 
app.use(express.json())

// Use CORS middlaware 
app.use(cors({
    origin: "http://localhost:3000"
}))

// Adiciona arquivo de rotas 
app.use(router)

// Coloca o servidor para ouvir requisições 
app.listen(3333, () => console.log("Server online on port 3333"))
        

          