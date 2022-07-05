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

// app.get("/pokemon/:id/:info", (req, res) => {
//   const pokemon_id = jsonData[req.params.id];
//   const pokemon_type = pokemon_id[req.params.info];

//   console.log(pokemon_type);
//   res.send(`
//           <h1>${pokemon_type.type}</h1>
          
//     `);
// });


app.listen(port, () => console.log(`started listening on port ${port}`));


