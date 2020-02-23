async function getJson() {
  let response = await fetch(".netlify/functions/test");
  let myJson = await response.json();
  return myJson;
}

getJson().then(data => {
    for (const film of data) {
            let div = document.createElement("div");
        div.className = "card";
        let heading = document.createElement("h2");
        let description = document.createElement("p");
        let container = document.getElementById("container");
        container.className = "container";

        heading.innerHTML = film.title;
        description.innerHTML = film.description;

        
        div.appendChild(heading);
        div.appendChild(description);
        container.appendChild(div);
    }
});