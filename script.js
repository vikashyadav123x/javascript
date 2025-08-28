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
