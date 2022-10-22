import express, { Request, Response } from "express"
const routes = express.Router()
import resizeFunc from "../controller/imageProcessing"

// api for display home page
routes.get("/", (req: Request, res: Response) => {
  res.status(200).send("api server working")
})

//api for display photo
routes.get("/photo", resizeFunc)
export default routes
