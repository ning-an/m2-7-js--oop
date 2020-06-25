// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);
class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.species = 'cat';
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }
    sleep = (hours) => {
        this.tiredness -= 5 * hours;
        this.happiness += 3 * hours;
    }
    eat = (numOfKibbles) => {
        this.hunger -= 0.2 * numOfKibbles;
        this.happiness += numOfKibbles;
    }
    play = (minutes) => {
        this.loneliness -= 3 * minutes;
        this.happiness += 5 * minutes;
    }
    wait = (minutes) => {
        this.tiredness += 0.5 * minutes;
        this.hunger += minutes;
        this.loneliness += 5 * minutes;
        this.happiness -= 3 * minutes;
    }
}

const boots = new Cat('Boots', 'Simaese');
boots.wait(40);
console.log(boots);