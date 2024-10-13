let pet = {
    name: "Jakey 🐕‍🦺",
    type: "dog",
    age: 1,
    happiness: 50,
    hunger: 30,
  
    feed: function() {
        this.hunger -= 20;
        if (this.hunger < 0) {
          this.hunger = 0;
        }
      },
    
      play: function() {
        this.happiness += 20;
        if (this.happiness > 100) {
          this.happiness = 100;
        }
      },
      agePet: function() {
        this.age += 1;
        this.happiness -= 5;
        this.hunger += 10;
      }
    };

    
    let action = prompt("What do you want to do? (feed, play, age)");

    switch (action) {
      case "feed":
        pet.feed();
        alert("You fed " + pet.name + ". Hunger is now " + pet.hunger);
        break;
      case "play":
        pet.play();
        alert("You played with " + pet.name + ". Happiness is now " + pet.happiness);
        break;
      case "age":
        pet.agePet();
        alert("Your pet " + pet.name + " is now " + pet.age + " years old.");
        break;
      default:
        alert("Invalid action.");
    }