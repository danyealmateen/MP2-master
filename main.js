import { Tamagotchi } from "./modules/tamagotchi.js";

let addTamaButton = document.getElementById("addTamaButton");

addTamaButton.addEventListener("click", (event) => {
  event.preventDefault(event);
  const a = new Tamagotchi();
  a.setHappinessStat(10);
  a.setHungerStat(10);

  let select = document.getElementById("select").value;
  let tamaContainer = document.createElement("div");
  tamaContainer.style.border = "3px solid black";
  tamaContainer.style.margin = "5px";
  tamaContainer.style.padding = "20px";

  let inputText = document.getElementById("inputText").value;
  let tamaTitle = document.createElement("p");
  tamaTitle.innerText = `${inputText} ${select} `;

  let currentHappiness = a.getHappinessStat();
  let currentHungryness = a.getHungrynessStat();

  let statsForHappiness = document.createElement("p");
  let statsForHungryness = document.createElement("p");

  statsForHappiness.innerHTML = `Happiness : ${currentHappiness}`;
  statsForHungryness.innerHTML = `Hungryness : ${currentHungryness}`;

  let feedButton = document.createElement("button");
  feedButton.style.margin = "20px";
  feedButton.innerText = `Feed`;

  let happinessButton = document.createElement("button");
  feedButton.style.margin = "20px";
  happinessButton.innerText = `Play`;

  const interactWithTama = (stat) => {
    if (stat === "happiness") {
      let currentHappiness = a.getHappinessStat();
      if (currentHappiness < 10) {
        a.setHappinessStat(currentHappiness + 1);
      }
    }
    if (stat === "hungryness") {
      let currentHungryness = a.getHungrynessStat();
      if (currentHungryness < 10) {
        a.setHungerStat(currentHungryness + 1);
      }
    }
  };

  feedButton.addEventListener("click", () => interactWithTama("hungryness"));

  happinessButton.addEventListener("click", () =>
    interactWithTama("happiness")
  );

  //happiness interval
  const happinessInterval = setInterval(function () {
    let currentHappiness = a.getHappinessStat();
    a.setHappinessStat(currentHappiness - 1);

    statsForHappiness.innerHTML = `Happiness : ${currentHappiness}`;

    if (currentHappiness === 0) {
      let dead = document.createElement("h1");
      dead.innerHTML = `HE DIEDED`;
      document.body.append(dead);
      feedButton.disabled = true;
      happinessButton.disabled = true;
      tamaContainer.style.backgroundColor = "red";
      clearInterval(happinessInterval);
    }
  }, 1000);

  //hungryness interval
  const hungrynessInterval = setInterval(function () {
    let currentHungryness = a.getHungrynessStat();
    a.setHungerStat(currentHungryness - 1);

    statsForHungryness.innerHTML = `Hungryness : ${currentHungryness}`;

    if (currentHungryness === 0) {
      let dead = document.createElement("h1");
      dead.innerHTML = `HE DIEDED`;
      document.body.append(dead);
      feedButton.disabled = true;
      happinessButton.disabled = true;
      tamaContainer.style.backgroundColor = "red";
      clearInterval(hungrynessInterval);
    }
  }, 2000);

  tamaContainer.append(tamaTitle);
  tamaContainer.append(tamaTitle);
  tamaContainer.appendChild(feedButton);
  tamaContainer.appendChild(happinessButton);
  tamaContainer.append(statsForHappiness);
  tamaContainer.append(statsForHungryness);
  document.body.append(tamaContainer);
});
