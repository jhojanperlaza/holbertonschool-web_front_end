/*la primera vez se llama a la función pero retorna una funcion flecha 
por eso al volverla llamar hace la suma, por que a quien realmente esta 
llamdando es a la funcion felcha */

function divideBy(firstNumber) {
    return (secondNumber) => { return secondNumber / firstNumber }
}

function addBy(firstNumber) {
    return (secondNumber) => { return firstNumber + secondNumber }
}
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));