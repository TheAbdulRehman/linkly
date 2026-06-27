require('dotenv').config();
const {getAllUsers}=require('./queries')
const express = require('express');

const app = express()
const port = process.env.PORT

app.get('/api/users',async (req:any, res:any) => {
  const response=await getAllUsers()
const users=JSON.stringify(response)
console.log(users)
  res.send(users)
})
app.get('/api/boards',async (req:any, res:any) => {
  const response=await getAllUsers()
const users=JSON.stringify(response)
console.log(users)
  res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})