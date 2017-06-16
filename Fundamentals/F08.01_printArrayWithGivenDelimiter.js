//input comes as array of strings (последния елемент от масива е делителя при печат)
function printAr(input) {
    let delimiter = input.pop();
    console.log(input.join(delimiter));
}
//printAr(['One', 'Two', 'Three', 'Four', 'Five', '-']);