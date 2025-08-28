let js = "amazing";
const firstName = "Vikash";
const birthYear = 2004;
const year = 2025;
const job = "chess player";
console.log(40 + 8 + 23 - 10);

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + "years old" + job + "!";
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
  multiple
  lines`);

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license");
} else {
  console.log(
    `Sarah can not drive not at this moment but in ${
      18 - age
    } years from now she can drive `
  );
}

const birthYea = 1919;
let century;
if (birthYea <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const inputYear = "1991";
console.log(Number(inputYear) + 10);
console.log(typeof inputYear);

const money = 0;
if (money) {
  console.log("you have money fkr");
} else {
  console.log("get some job dude");
}

let height = 50;
if (height) {
  console.log("your height is good");
} else {
  console.log("drink complan brother");
}

// const favourite = Number(prompt("Enter your fav number"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("it is a good number");
// }

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
  console.log("she can drive");
} else {
  console.log("i should drive insted of sara");
}
