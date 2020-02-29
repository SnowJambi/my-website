fetch("../json/stages.json")
  .then(response => response.json())
  .then(json => {
    for (const stage of json.stages) {
      let div = document.createElement("div");
      div.className = "stage";
      let heading = document.createElement("h2");
      let description = document.createElement("p");
      let root = document.getElementById("root");
      let date = document.createElement("p");

      for (const session of stage.stages) {
          if (session.description === "Race") {
              let utcDate = session.scheduled;
              let localDate = new Date(utcDate)
              date.innerHTML = localDate;
          }
      }

      heading.innerHTML = stage.description;

      div.appendChild(heading);
      div.appendChild(date);
      root.appendChild(div);
    }
  });