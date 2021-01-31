const express = require("express")


const app = express()


app.get("/user", (req, res) => {
  res.send("Yohannes learning Ci with Travis")
})


const server = app.listen(3000, () => {
  console.log("App running on port 3000");
})