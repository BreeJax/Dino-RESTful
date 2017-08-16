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
    </section>
    <div class="addDinoBox">

    <form class="addDino" action="/api/dinos" method="post">
    <input type="text" name="name" placeholder="Dino Name" value="">
    <input type="text" name="imageurl" placeholder="Dino Picture" value="">
    <input type="text" name="color" placeholder="What Color is this Dino?" value="">
    <input type="text" name="weight" placeholder="How heavy is this Dino?" value="">
    <input type="text" name="Habitats" placeholder="Where can this Dino live?" value="">
    <button type="submit">Add Dino</button>
    </div>
`
    mainPage.innerHTML += markupMainPage
  }
})
