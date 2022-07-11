const jsonData= require("./data.json");
const express = require("express");
const cors=require("cors");
const port=process.env.PORT || 5000;
const app= express();
const cors = require('cors');
app.use(cors())
app.get("/", (req, res) =>
res.send(`<ul>
  ${
    jsonData.map(item => `
      <li>
        <p>${item.name.english}</p>
        <p>Type:${item.type}</p>
        <p>Base:${item.base}</p>
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