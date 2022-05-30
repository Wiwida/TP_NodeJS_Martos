import Logger from "express-better-logger"
import cookieParser from "cookie-parser"
import cors from "cors"
import { createIndexRouter } from "./routes"
import { createPassagerRouter } from "./routes/passager"
import { createReservationRouter } from "./routes/reservation"
import { createTrainRouter } from "./routes/train"
import express from "express"
import path from "path"

const port = process.env.PORT || 8000
const url = `http://localhost:${port}/`
export const log = new Logger("EXPRESS-NODE")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", createIndexRouter)
app.use("/train", createTrainRouter)
app.use("/reservation", createReservationRouter)
app.use("/passager", createPassagerRouter)

app.listen(port, () => {
    log.info(` Server app listening on port ${port} ✅ `)
    log.info(` Go to with ${url} 🚀 `)
})
module.exports = app
