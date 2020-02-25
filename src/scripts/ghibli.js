fetch("/ghibli.json")
  .then(response => response.json())
  .then(json => {
    for (const film of json) {
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
