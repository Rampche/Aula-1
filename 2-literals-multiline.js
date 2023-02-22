const person = "John Doe";
const message = "Hello i'm";

//ES5

// const str = message + ' ' +  person;
// console.log(str);

//ES6

/* const str = `${message} ${person}`;
console.log(str);

console.log(`2 + 2 = ${2 + 2}`); */

//ES5
/* const tpl =
  "<div>\n" +
  "\t<h1>" +
  person +
  "</h1>\n" +
  "\t<p>Very Long Message</p>\n" +
  "</div>";

console.log(tpl); */

//ES6

const tp6 = `<div>
    <h1> ${person} </h1>
    <p>Very Long Message</p>
</div>`;
console.log(tp6);


