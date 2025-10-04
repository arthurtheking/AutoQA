const morty = {
    type: "Cat",
    age: 8, 
    toys: ["Mice", "Ball", "Rope"],
    hungry: true,
    joyful: false,
    sleepy: false,
    habits: {
        habit_1: "Play",
        habit_2: "Eat",
        habit_3: "Sleep",
    },
    feed() {
        setTimeout(() => console.log("Pouring the food"), 1000);
        setTimeout(() => console.log("Cat eats..."), 2000);
        if (this.hungry) {
            this.hungry = false;
            setTimeout(() => console.log("Cat is not hungry anymore! Not it wants to play!"), 3000);
            this.joyful = true;
        }
    },

    play() {
        setTimeout(() => console.log("Grabbing the Toy.."), 1000);
        setTimeout(() => console.log("Cat plays..."), 2000);
        if (this.joyful) {
            this.joyful = false;
            setTimeout(() => console.log("The Game was good! Now cat wants to sleep!"), 3000);
            this.sleepy = true;
        }
    },

    sleep() {
        setTimeout(() => console.log("Making the bed"), 1000);
        setTimeout(() => console.log("Cat sleeps..."), 2000);
        if (this.sleepy) {
            this.sleepy = false;
            setTimeout(() => console.log("Cat Woke up! IT'S TIME TO FEED THE CAT!"), 3000);
            this.hungry = true;
        }
    },

    get fullStatus() {
        return `Here is the full cat status: Cat is hungry: ${this.hungry}, Cat is bored: ${this.joyful}, Cat is tired: ${this.sleepy}.`
    },

    get toysList() {
        return `Here is the list of Cat's toys: ${this.toys.join(", ")}`
    },

    set buyNewToy(item) {
        this.toys.push(item);
        console.log(`Now cat has new toy: ${item}!`);
    }
}

console.log(morty.toysList);
morty.buyNewToy = "Rubber";
console.log(morty.toysList);