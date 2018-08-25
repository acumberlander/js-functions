const bananaDiv = document.getElementById("banana");
bananaDiv.innerHTML = "im a banana";

let counter = 0;
counter = counter + 1;
counter += 1;
counter++;

//counter = 3
console.log("counter: ", counter);

const greetingElement = document.getElementById("greeting");
const firstName = "Austin";
const lastName = "Cumberlander";
// greetingElement.innerHTML = "Hello my name is " + firstName+ " " + lastName;
greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;


//object shorthand nottation
let name = "callan";
let age = "1000000000";

// let person = {
//     name: name,
//     age: age
// };

let person = {name, age}

console.log("person: ", person.name);