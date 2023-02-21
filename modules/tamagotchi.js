class Tamagotchi {
  #hunger;
  #happiness;

  constructor(hunger, happiness) {
    this.#hunger = hunger;
    this.#happiness = happiness;
  }
  setHungerStat(newHungerStat) {
    return (this.#hunger = newHungerStat);
  }
  setHappinessStat(newHappinessStat) {
    return (this.#happiness = newHappinessStat);
  }
  getHappinessStat() {
    return this.#happiness;
  }
  getHungrynessStat() {
    return this.#hunger;
  }
}

export { Tamagotchi };
