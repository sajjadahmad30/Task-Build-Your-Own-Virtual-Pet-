//  Create the pet object with properties
let pet = {
    name:prompt("What is your pet's name?"), // Change this to personalize your pet's name
    type:prompt("What kind of pet is it(e.g, dog, cat, dragon) "), // Change to any type of pet you'd like
    age:+ prompt("How old your pet?"),
    happiness: + prompt("How happay is your pet?"),
    hunger: + prompt("How hungry is your pet?"),

    // Method to feed the pet
    feed: function() {
        this.hunger -= 20;
        if (this.hunger < 0) this.hunger = 0;
        alert(`${this.name} has been fed. Hunger is now: ${this.hunger}`);
    },
    
    // Method to play with the pet
    play: function() {
        this.happiness += 20;
        if (this.happiness > 100) this.happiness = 100;
        alert(`${this.name} played and is happier! Happiness is now: ${this.happiness}`);
    },
    
    // Method to age the pet
    agePet: function() {
        this.age += 1;
        this.happiness -= 5;
        this.hunger += 10;
        alert(`${this.name} is now ${this.age} years old. Happiness level: ${this.happiness}, Hunger level: ${this.hunger}`);
    }
};


//  Create an interactive function to choose an action for the pet
function interactWithPet() {
    let action;
    while (action !== "4") {
        action = prompt("What would you like to do? Type \n 1: 'feed' \n 2: 'play' \n 3: 'age' \n 4: 'quit' to exit.");

        // 1 for feed 
        if (action === "1") {
            pet.feed();
        } else if (action === "2") { //2 for play
            pet.play();
        } else if (action === "3") { //3 for age
            pet.agePet();
        } else if (action !== "4") { //4 quit
            alert("Invalid action. Please choose 'feed', 'play', 'age', or 'quit'.");
        }
    }
    // final status 
    alert(`Thanks for taking care of ${pet.name}! Final stats - Age: ${pet.age}, Happiness: ${pet.happiness}, Hunger: ${pet.hunger}`);
}

// interaction function call 
interactWithPet();



