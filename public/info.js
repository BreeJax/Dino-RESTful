let dinoInfo = document.querySelector("#dinoInfo")
const id = dinoInfo.dataset.id

const dinoInfoURL = `/api/dinos/${id}`
fetch(dinoInfoURL).then(responce => responce.json()).then(singleDino => {
  const markupDinoInfo = `
    <h2>The Land Before Time Dinos</h2>
      <p>This is ${singleDino.name}.
        <img src="${singleDino.imageurl}">
      ${singleDino.name} is ${singleDino.color} in body coloring.</p>
      <p>How heavy is this dino? About ${singleDino.weight}.</p>
      <h4>${singleDino.name} can live in these types of areas:</h4>
      <ul>
        ${singleDino.Habitats.map(Habitat => `<li>${Habitat}</li>`).join("")}
      </ul>
      <form class="" action="/" method="get">
        <button type="submit">Learn more about other dinos!</button>
      </form>
      <form class="" action="/DinoId/${singleDino.id}/delete" method="post">
        <button type="submit">Delete ${singleDino.name}</button>
      </form>

        <div class="editDinoBox">

        <form class="editDino" action="/dinos/${singleDino.id}/edit" method="post">
        <input type="text" name="name" placeholder="Dino Name" value="${singleDino.name}">
        <input type="text" name="imageurl" placeholder="Dino Picture" value="${singleDino.imageurl}">
        <input type="text" name="color" placeholder="What Color is this Dino?" value="${singleDino.color}">
        <input type="text" name="weight" placeholder="How heavy is this Dino?" value="${singleDino.weight}">
        <input type="text" name="Habitats" placeholder="Where can this Dino live?" value="">
        <button type="submit">Edit Dino</button>
        </div>
      </section> `
  dinoInfo.innerHTML += markupDinoInfo
})

//create the form on page to edit.
//get the fetch to work when you click save
//the button is going to be a `click` event that sends a put using a fetch. If using the `submit` event,  I will need to use the e.prevent-default thingy in order to do this.

//once all that is done, worry about toggle.
