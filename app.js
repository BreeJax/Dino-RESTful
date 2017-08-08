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

app.get("/", (request, responce) => {
  responce.render("index", { allDinos: allDinos })
})
let allDinos = [
  {
    id: 1,
    name: "Little foot",
    color: "Brown",
    size: "3 feet tall",
    weight: "As heavy as his Grandpa's Toe",
    Habitats: ["Jungle", "Grassland", "Mountain"]
  },
  {
    id: 2,
    name: "Cera",
    color: "orange",
    size: "2 feet tall",
    weight: "As heavy as her mother's tail",
    Habitats: ["Jungle", "Grassland", "Swamp"]
  },
  {
    id: 3,
    name: "Ducky",
    color: "Green",
    size: "1 foot tall",
    weight: "As heavy as a milk jug",
    Habitats: ["Swamp", "Jungle", "Rivers"]
  },
  {
    id: 4,
    name: "Petrie",
    color: "Brown",
    size: "3 feet tall",
    weight: "As heavy as his Grandpa's Toe",
    Habitats: ["Jungle", "Mountain"]
  },
  {
    id: 5,
    name: "Spike",
    color: "Green",
    size: "3 feet long",
    weight: "As heavy as 4 watermelons",
    Habitats: ["Jungle", "Grassland", "Mountain", "Swamp"]
  },
  {
    id: 6,
    name: "Chomper",
    color: "Brown-Purple",
    size: "2.5 feet tall",
    weight: "As heavy as four golden retrivers",
    Habitats: ["Jungle", "Grassland", "Mountain", "Vulcano"]
  }
]

app.get("/api/dino", (request, responce) => {
  responce.json(allDinos) //sending json back to my user
})

app.get("/api/dinos", (request, responce) => {
  responce.json(allDinos)
})

app.listen(3000, () => {
  console.log("I've got the magic in me!")
})
