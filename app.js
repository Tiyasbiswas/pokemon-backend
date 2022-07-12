const express = require("express");
const cors=require("cors");
const jsonData= require("./data.json");

const port=process.env.PORT || 8080;
const app= express();
app.use(cors());

app.get("/", (req, res) =>
  res.send("Hello")
);
app.get("/pokemon", (req, res) =>
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

app.get("/pokemon/:pid/:p_type", function(req, res){
  const pids=jsonData[req.params.pid-1];
  console.log("-----------------",pids);
  const pok_type=pids.type;
  const names=pids.name.english;

 // res.send(pok_type);
// res.send({pok_type,names});
res.send({names});
});

app.listen(port, () => console.log(`started listening on port ${port}`));
