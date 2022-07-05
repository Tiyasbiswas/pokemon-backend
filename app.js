 const jsonData= require("./data.json");
 const express = require("express");
const cors=require("cors");
const port=process.env.PORT || 5000;
const app= express();

app.get("/", (req, res) =>
  res.send("Hello")
);

app.get("/about", (req, res) =>
res.send(`<ul>
  ${
    jsonData.map(item => `
      <li>
        <p>${item.name.english}:${item.type}</p>
      </li>`
    )
    .join("")
  }
  </ul>`
));

app.get("/pokemon/:id", (req, res) => {
  res.send(jsonData.find(e => e.id == req.params.id)) 
});


app.listen(port, () => console.log(`started listening on port ${port}`));