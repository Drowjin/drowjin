import express from 'express'
import cors from 'cors'
import { writeFileSync } from 'fs'
import { data } from './data.js'
const app = express()

app.get("/api/v1/getData", (req, res) => {
    res.send({ data })

})
app.post("/api/v1/createData", (req, res) => {
    const { name, email } = req.body
    data.push({ name, email, id: Math.random() })
    writeFileSync('./data.js', `export const data = ${data}`)
})

app.put("/api/v1/updateData", (req, res) => {

})
app.delete("/api/v1/deleteData", (req, res) => {

})

app.listen(8080, () => {
    console.log('server is runing!');
})