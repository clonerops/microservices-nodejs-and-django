import express from "express";
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import api from "./routes/index"

const app = express()

export function runServer() {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    app.use(cors())
    app.use(helmet())

    app.use('/api', api)

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is up on Port: ${process.env.PORT}`)
    })
}