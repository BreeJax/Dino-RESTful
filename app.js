const express = require("express")
const mustacheExpress = require("mustache-express")
const bodyParser = require("body-parser")
//const jsonfile = require("jsonfile")

const app = express()

app.engine("mustache", mustacheExpress())
app.set("views", "./templates")
app.set("view engine", "mustache")
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine("mustache", mustacheExpress())

let allDinos = [
  {
    id: 1,
    name: "Little foot",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELUUCwxPk1IpH89o-fe2r7H4Qs9ctuu_of_okITshUpXwuS9c",
    color: "Brown",
    size: "3 feet tall",
    weight: "As heavy as his Grandpa's Toe",
    Habitats: ["Jungle", "Grassland", "Mountain"]
  },
  {
    id: 2,
    name: "Cera",
    imageurl: "https://i.ytimg.com/vi/lAi7p151PUY/maxresdefault.jpg",
    color: "orange",
    size: "2 feet tall",
    weight: "As heavy as her mother's tail",
    Habitats: ["Jungle", "Grassland", "Swamp"]
  },
  {
    id: 3,
    name: "Ducky",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfgZkrtR1jbA54w2uiWDfVkk8mDQhtiyx149bV3leIb1Z-G4Y",
    color: "Green",
    size: "1 foot tall",
    weight: "As heavy as a milk jug",
    Habitats: ["Swamp", "Jungle", "Rivers"]
  },
  {
    id: 4,
    name: "Petrie",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5me0dgPXlWKI6-TuF-Ai6ZAxs9vK8q5PAh2_v5ABqs59Wwk",
    color: "Brown",
    size: "3 feet tall",
    weight: "As heavy as his Grandpa's Toe",
    Habitats: ["Jungle", "Mountain"]
  },
  {
    id: 5,
    name: "Spike",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRoC1_YRQQE8BOYOcxFesKGCVty6_GfCALmJjYEZ7eizWWekT5",
    color: "Green",
    size: "3 feet long",
    weight: "As heavy as 4 watermelons",
    Habitats: ["Jungle", "Grassland", "Mountain", "Swamp"]
  },
  {
    id: 6,
    name: "Chomper",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnTg163_EmYwMPYKlrlyUFTXrd1hdpmNBAdjmUMN2PIUnQy2LZhQ",
    color: "Brown-Purple",
    size: "2.5 feet tall",
    weight: "As heavy as four golden retrivers",
    Habitats: ["Jungle", "Grassland", "Mountain", "Vulcano"]
  }
]

// app.get("/", (request, response) => {
//   response.render("index")
// })
//
// app.get("/data", (request, response) => {
//   response.json(allDinos)
// })
//
// app.get("/:id", (request, response) => {
//   const id = req.params.id
//
//   res.render("profile")
// })

//under this is everything from the day before- don't touch
app.get("/", (request, response) => {
  response.render("index", { allDinos: allDinos })
})

app.get("/api/dinos", (request, response) => {
  response.json(allDinos) //sending json back to my user
})
app.get("/api/dinos/:id", (request, response) => {
  const DinoId = parseInt(request.params.id)
  const thisDino = allDinos.find(dino => {
    return dino.id === DinoId
  })
  response.json(thisDino) //sending json back to my user
})

app.get("/api/dinos/:id/habitats", (request, response) => {
  response.json(allDinos)
})

app.post("/api/dinos", (request, response) => {
  let newDino = {
    id: allDinos.length + 1,
    name: request.body.name,
    color: request.body.color,
    size: request.body.size,
    weight: request.body.weight,
    Habitats: request.body.Habitats
  }
  allDinos.push(newDino)
  response.json(newDino)
})

app.put("/api/dinos/:id", (request, response) => {
  let updateDino = allDinos.find(oneDino => oneDino.id === parseInt(request.params.id))

  updateDino.name = request.body.name || updateDino.name
  updateDino.color = request.body.color || updateDino.color
  updateDino.size = request.body.size || updateDino.size
  updateDino.weight = request.body.weight || updateDino.weight
  updateDino.habitats = request.body.Habitats || updateDino.Habitats

  allDinos.splice(request.params.id - 1, 1, updateDino)
  //.splice(where in array, how many to delete after array index position, what to insert in array)

  response.json(allDinos)
})

app.delete("/api/dinos/:id", (request, response) => {
  const DinoId = parseInt(request.params.id)
  allDinos = allDinos.filter(dino => dino.id !== DinoId)
  //"==" checks the parameters and the value of the thing that it is checking
  response.json(allDinos)
})

app.listen(3000, () => {
  console.log("I've got the magic in me!")
})
