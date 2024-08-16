import bodyParser from "body-parser"
import compression from "compression"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import express from "express"
import http from "node:http"
import "reflect-metadata"
import { apolloConfig } from "./config/apollo.config"
import { corsConfig } from "./config/cors.config"
import { databaseConnection } from "./config/database.config"
dotenv.config()



const main = () => {
  const app = express()

  app.use(express.json())
  app.use(compression())
  app.use(bodyParser.json())
  app.use(cookieParser())

  // cors config
  corsConfig(app)

  // database connection
  databaseConnection()

  apolloConfig(app)

  const server = http.createServer(app)

  server.listen(process.env.PORT, () => {
    console.log("server listing to port 9000")
  })
}

main()
