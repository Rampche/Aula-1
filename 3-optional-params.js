//ES5
/* function calcTax(income, state) {
  state = state || "Florida";
  console.log("Calculating tax for resident of", state, "with income", income);
}

calcTax(50000, "New York"); */

const calcTax = (income, state = "Florida") => {
  console.log(
    `Calculating tax for resident of ${state} with income of ${income}`
  );
};

calcTax(50000, "New York");
