let person = “Jane”;
console.log(person);
person = “John”;
console.log(person);
(() => {
  console.log(Inside Function : Person =>“, person);
  if (person) {
    person = “Maria”;
    const animal = “Penguin”;
    console.log(“Inside Function : Person =>“, person);
    //console.log(“Inside Function : Animal =>“, animal);
  }
  console.log(“Outside Block : Person =>“, person);
  console.log(“Outside Block : Animal =>“, animal);
})();
console.log(“Outside Function : Person =>“, person);