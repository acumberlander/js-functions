const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

let bandNumber = 0;

const takeNumber = (bandName) => {
  bandNumber ++;
  bandName = `${bandNumber}. ${bandName}`;
  printToDom(`<h2>${bandName}</h2>`, 'allTheNumbers');  // you should already have this function written from the class lecture
};

takeNumber("Galactic Scum");
takeNumber("Underdogs");