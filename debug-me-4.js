const weight = 110;
const height = 1.79;
const BMI = weight / (height * height);

let outcome;

console.log("Your BMI is: " + BMI.toFixed());

if (BMI > 25) {
  outcome = "Depending on your build, you might be overweight";
} else if (BMI < 18) {
  outcome = "Depending on your build, you might be underweight";
} else {
  outcome = "Looks like your height / weight ratio is pretty healthy";
}

console.log(outcome);