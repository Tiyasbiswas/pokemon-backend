const jsonData= require("./data.json");
const request=express();
// app.get("/pokemon/:id", (req, res) =>
//   res.send(`
//     <h1>list of ${req.params.id}</h1>
//     <ul>
//         ${jsonData[req.params.id]
//           .map(
//             (pokemon, index) =>
//               `<li><a href="${req.params.id}/${index}">${pokemon.name}</a></li>`
//           )
//           .join("")}
//     </ul>
//   `)
// );

request.get("/pokemon/:id", (req, res) => {
    res.send(jsonData.find(e => e.id == req.params.id)) 

});

