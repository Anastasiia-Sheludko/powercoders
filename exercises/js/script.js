// Say hello

let name = prompt("What is your name?");
console.log("Hello, " + name + "!");

// Counting the number of characters

const inputString = prompt("Enter a string:");
const stringLength = inputString.length;
const outputString = `Input string: ${inputString}\nNumber of characters: ${stringLength}`;
alert(outputString);

// Printing quotes

let quotes = [
  {
    quote: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln",
  },
];

let randomIndex = Math.floor(Math.random() * quotes.length);
let randomQuote = quotes[randomIndex];
console.log(randomQuote.author + ' says, "' + randomQuote.quote + '"');

// Fortune teller

let numberOfChildren = 2;
let partnersName = "John";
let geographicLocation = "New York";
let jobTitle = "Software Engineer";

console.log(
  "You will be a " +
    jobTitle +
    " in " +
    geographicLocation +
    ", and married to " +
    partnersName +
    " with " +
    numberOfChildren +
    " kids."
);

// Age calculator

const birthYear = prompt("Please enter your birth year");
const futureYear = prompt(
  "Please enter the year in which you would like to know your age "
);
const age1 = futureYear - birthYear;
const age2 = age1 - 1;

typeof (birthYear === "number") && typeof (futureYear === "number")
  ? console.log(
      "I will be either " + age2 + " or " + age1 + " in " + futureYear
    )
  : console.log("Please enter a valid year");

//Translate days of the week

let day = prompt("Please enter a day of the week in English");
let result = "";

switch (day) {
  case "Monday":
    result = "Montag";
    break;

  case "Tuesday":
    result = "Dienstag";
    break;

  case "Wednesday":
    result = "Mittwoch";
    break;

  case "Thursday":
    result = "Donnerstag";
    break;

  case "Friday":
    result = "Freitag";
    break;

  case "Saturday":
    result = "Samstag";
    break;

  case "Sunday":
    result = "Sonntag";
}

console.log(result);

// Odd / even reporter

let yourNumber = prompt("Please enter a number between 0 and 20");

if (yourNumber % 2 === 0) {
  console.log(`${yourNumber} is even`);
} else {
  console.log(`${yourNumber} is odd`);
}

// Odd / even reporter 2.0

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// Multiplication tables

let randomNumber = prompt("Please enter a number between 0 and 10");
let result = randomNumber * 9;

console.log(`${randomNumber} * 9 = ${result}`);

// Multiplication tables 2.0 */

for (let i = 0; i <= 10; i++) {
  let result = i * 9;
  console.log(`${i} * 9 = ${result}`);
}
