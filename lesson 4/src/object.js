const dinner = {
    quantity: 1,
    size: "Medium",
    poison: false,
    time: {
        early: "18.00",
        medium: "19.00",
        hard: "20.00"
    },
    ingredients: ["rice", "meat", "tomatoes"],
    checkFridge() {
        console.log("Now your fridge is empty :)")
    },
    eatDinner() {
        console.log("You successfully ate ", this.ingredients);
    }
    
};

console.log(Object.keys(dinner));
console.log("<--------------->")
console.log(Object.values(dinner));
console.log("<--------------->")
console.log(Object.entries(dinner));
console.log("<--------------->")
dinner.checkFridge();
console.log("<--------------->")
dinner.eatDinner([]);