let mainPage = document.querySelector("#mainPage")

const allDinosURL = "/api/dinos"
fetch(allDinosURL).then(responce => responce.json()).then(allDinos => {
  for (var i = 0; i < allDinos.length; i++) {
    const markupMainPage = `
    <h2>The Land Before Time Dino's</h2>
      <p>This is ${allDinos[i].name}.
        <img src="${allDinos[i].imageurl}">
        <form class="" action="DinoId/${allDinos[i].id}" method="get">
          <button type="submit"></button>
        </form>
      ${allDinos[i].name} is ${allDinos[i].color} in body coloring.
      How heavy is this dino? About ${allDinos[i].weight}.</p>
      <h4>${allDinos[i].name} can live in these types of areas:</h4>
      <ul>
        ${allDinos[i].Habitats.map(Habitat => `<li>${Habitat}</li>`).join("")}
      </ul>
    </section>`
    mainPage.innerHTML += markupMainPage
  }
})
