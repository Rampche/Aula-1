const numbers = [1, 2, 3, 4, 5, 6];
console.log("initial numbers:", numbers);

/* numbers.forEach((element, index) => {
  numbers[index] = element * 2;
  console.log('Loop: ', index, element, element * 2);
});

console.log(numbers); */

/* const doubles = numbers.map((e) => e * 2);
console.log("Doubles: ", doubles);

const triples = numbers.map((e) => e * 3);
console.log("Triples: ", triples);

const filteredNumbers = numbers.filter((element) => element % 2 === 0);

console.log("The filtered array is: ", filteredNumbers); */
/* 
const initialValue = 10;
const sum = numbers.reduce(
  (acc, currentValue) => acc + currentValue,
  initialValue
);
console.log("final sum is: ", sum); */

const customers = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
  {
    id: 3,
    name: "Mary",
  },
  {
    id: 4,
    name: "Paul",
  },
];

//TODO: TPC
const customerId = 2;
const customer = customers.find((e) => e === customerId); //Terminar

console.log(customer);

const namesPT = ["João", "Joana", "Maria", "Paulo"];

const customersPtMap = namesPt.map();
console.log(customersPtMap);
