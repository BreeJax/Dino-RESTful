let dinoInfo = document.querySelector("#dinoInfo")
const id = dinoInfo.dataset.id

const dinoInfoURL = `/api/dinos/${id}`
fetch(dinoInfoURL).then(responce => responce.json()).then(singleDino => {
  const markupDinoInfo = `
    <h2>The Land Before Time Dino's</h2>
      <p>This is ${singleDino.name}.
        <img src="${singleDino.imageurl}">
        <form class="" action="DinoId/${singleDino.id}" method="get">
          <button type="submit"></button>
        </form>
      ${singleDino.name} is ${singleDino.color} in body coloring.
      How heavy is this dino? About ${singleDino.weight}.</p>
      <h4>${singleDino.name} can live in these types of areas:</h4>
      <ul>
        ${singleDino.Habitats.map(Habitat => `<li>${Habitat}</li>`).join("")}
      </ul>
    </section>`
  dinoInfo.innerHTML += markupDinoInfo
})
