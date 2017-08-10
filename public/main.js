console.log("testing 1 2 3 ")

let output = document.querySelector("#output")

const allDinosURL = "/api/dinos"
fetch(allDinosURL).then(responce => responce.json()).then(allDinos => {
  for (var i = 0; i < allDinos.length; i++) {
    const markup = `
    <section id="serverRender">
      <p>This is ${allDinos[i].name}.
        <img src="${allDinos[i].imageurl}">
      ${allDinos[i].name} is ${allDinos[i].color} in body coloring.
      How heavy is this dino? About ${allDinos[i].weight}.</p>
      <h4>${allDinos[i].name} can live in these types of areas:</h4>
      <ul>
        ${allDinos[i].Habitats.map(Habitat => `<li>${Habitat}</li>`).join("")}
      </ul>
    </section>`
    output.innerHTML += markup
  }
})

// document.body.innerHTML = markup;
