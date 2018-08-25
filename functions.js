// input = animal ex. fish
//output = animal product ex. fish stix

function nuggetizer(animal){
    return `${animal} stix`;
}

console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat'));
console.log('bear:', nuggetizer('bear'));

const nuggetizer2 = (animal) => {
    return `${animal} jerky`
};

console.log('deer:', nuggetizer2('deer'));


const nomnom = (person, food) => {
    return `${person} devoured ${food}`;
};

const bearSticks = nuggetizer('bear');
const fishSticks = nuggetizer('fish');

console.log(nomnom('austin', bearSticks)); // austin devoured bear stix

//function numberAdder that takes in anumber and returns the number plus 3.
// ex. so input=22, output=25

const numberAdder = (num) => {
    const finalNumber = num + 3;
    printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers')
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

numberAdder(22);
numberAdder(4);