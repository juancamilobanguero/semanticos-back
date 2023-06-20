import Express from "express"
import dotenv from "dotenv"
import apiRoutes from "./routes/index"
import { connectDB } from "./database"
import cors from "cors"
import upload from "./multer"



//crear instancia de Express
const app = Express();

//traer el puerto de las variables de entorno
dotenv.config()

//conexion a la BD
connectDB()

//establecer el puerto en el cual se ejecuta el api
const port = process.env.PORT || 3200;

// ESPECIFICAR QUE SERVIVIDORES TIENE ACCESO AL API 
app.use(cors());

// establecer usos de express
app.use(Express.json());

// Global de las rutas a utilizar en el api 
app.use("/api",apiRoutes)
app.use(Express.static('upload'))

// ejecucion de la api 
app.listen(port,() => console.log (`api is running in port ${port}`));