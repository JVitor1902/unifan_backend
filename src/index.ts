import { DevDataSource } from "./connections/dbDev"
import rotas from "./routes/routes"
import express = require("express")

// Inicializar a conexão com o banco de dados quando o servidor subir 
DevDataSource.initialize().then()
          console.log("DataBase connected!")

// Instancia o servidor express           
const app = express()
// Configura o servidor para a leitura de arquivos JSON 
app.use(express.json())

// Coloca o servidor para ouvir requisições 
app.listen(3333, () => console.log("Server online on port 3333"))
        

          