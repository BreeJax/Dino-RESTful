console.log("testing 1 2 3 ")

const url = "/api/dino"
fetch(url).then(responce => responce.json()).then(json => {
  console.log(json)
  let container = document.createElement("div")
  container.textContent = json.name
  let output = document.querySelector("#output")
  output.appendChild(container)
})

const allDinosURL = "/api/dinos"
fetch(allDinosURL).then(responce => responce.json()).then(allDinos => {
  for (var i = 0; i < allDinos.length; i++) {
    let container = document.createElement("div")
    container.textContent = dinos.name
    let output = document.querySelector("#output")
    output.appendChild(container)
  }
})
