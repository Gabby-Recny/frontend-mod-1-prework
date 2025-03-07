// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Gabby Recny";
var specialAbility = "doing dope shit";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = ("Woah! Look at " + heroName + " " + specialAbility + "!");
console.log(greeting);

// Declare two variables - power AND energy - set to integers
var power = 8;
var energy = 2000;


// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = (power * 500);
var fullEnergy = (energy + 150);

console.log(fullPower);
console.log(fullEnergy);

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;


// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Lenny", "Joe", "Dairy"];
var sideKicks = ["coffee", "Deanna", "The Internet"];

// Print the first sidekick to your console
console.log(sideKicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
var archEnemy = archEnemies.push("Bugs");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sideKicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sideKicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

function assessSituation (dangerLevel, saveTheDay, badExcuse) {
  console.log(dangerLevel, saveTheDay, badExcuse)
};


var dangerLevel = 9;
var saveTheDay = "All in a day's work....";
var badExcuse = "Nah, I'm good.";




// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

if (dangerLevel > 50) {
  console.log(badExcuse);
} else if (dangerLevel < 10) {
  console.log("Meh. Hard pass.");
} else{
  console.log(saveTheDay);
}


//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Muzzle Man",
  smell: "Putrid",
  Weight: 34567890,
  citiesDestroyed: ["NYC", "Boulder", "Taipei", "New Brunswick"],
  luckyNumbers: [378, 284, 7, 20],
  address: {
    number: 7903,
    street: "Ere Way",
    state: "Nova Stocia",
    zip: "94yr9hrf322"
     }
};


// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log("Th3 K0d3R");
  }
  maximizeEnergy(){
    this.energyLevel = 1000;
  }
  gainPower(){
    this.powerLevel = (this.powerLevel + 100);
  }
};

var name = new SuperHero;
name.sayName();

var firstSuperHero = new SuperHero ("Magma", "Melting anything", 67);
var secondSuperHero = new SuperHero ("Gaia", "Brings life", 4939);

firstSuperHero.maximizeEnergy();

secondSuperHero.gainPower();

console.log(firstSuperHero);
console.log(secondSuperHero);




// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class


// Reflection
// What parts were most difficult about this exerise?
+ Classes
+ Creating an object within an object

// What parts felt most comfortable to you?
+ Declaring variables
+ Array methods
+ Logging

// What skills do you need to continue to practice before starting Mod 1?
+ Definitely going over classes and how to update them! I have a loose grasp on it at this point. 
