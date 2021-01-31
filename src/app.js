const express = require("express")


const app = express()


app.get("/user", (req, res) => {
  res.send("Yohannes learning Ci with Travis")
})

app.get("/helloworld", (req, res) => {
  res.send("helloworld")
})


const server = app.listen(3000, () => {
  console.log("App running on port 3000");
})