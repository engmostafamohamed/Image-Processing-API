import express from "express"
import routes from "./routes/index"
const app = express()
const port = 3000
app.use("/", routes)
//start the Express server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})
