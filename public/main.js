let mainPage = document.querySelector("#mainPage")

const allDinosURL = "/api/dinos"
fetch(allDinosURL).then(responce => responce.json()).then(allDinos => {
  for (var i = 0; i < allDinos.length; i++) {
    const markupMainPage = `
    <h2>The Land Before Time Dino's</h2>
      <p>This is ${allDinos[i].name}.
        <img src="${allDinos[i].imageurl}">
        <form class="" action="DinoId/${allDinos[i].id}" method="get">
          <button type="submit">Find out more about ${allDinos[i].name}!</button>
        </form>
    </section>`
    mainPage.innerHTML += markupMainPage
  }
})
