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

const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license");
}
