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
      