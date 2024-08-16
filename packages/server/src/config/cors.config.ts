import cors from "cors"


export const corsConfig = (app: any) => {
  app.use(cors({
    origin: process.env.NODE_ENV === "production" ? process.env.FrontEndUrl : "*",
    credentials: true
  }))

}
