 const jsonData= require("./data.json");
 const express = require("express");
const cors=require("cors");
const port=process.env.PORT || 8000;
const app= express();

app.get("/", (req, res) =>
  res.send("Hello")
);



app.listen(port, () => console.log(`started listening on port ${port}`));