fetch("../json/ghibli.json")
  .then(response => response.json())
  .then(json => {
    for (const film of json) {
      // Create new card for each film and add title + description
      let div = document.createElement("div");
      div.className = "card";
      let heading = document.createElement("h2");
      let description = document.createElement("p");
      let container = document.getElementById("container");
      container.className = "container";

      heading.innerHTML = film.title;
      description.innerHTML = (film.description.length > 300) ? film.description.slice(0,300) + ". . ." : film.description.slice(0,300);

      div.appendChild(heading);
      div.appendChild(description);
      container.appendChild(div);
    }
  });
