//input comes as array of strings (Всеки елемент е команда add или remove) , [] - Empty
// започва с числото 1 и всяка команда го увеличава
function printAr(input) {
    let result = [];
    let number = 1;

    for (let command of input) {                        //for (let value of arr) { итератор
        if (command === 'add') {
            result.push(number);                       // добавя число в масива
        } else {
            result.pop();                              // маха последния елемент
        }
        number++;
    }

    if (result.length === 0) {
        console.log("Empty");
    } else {
        result.forEach(element => console.log(element)); //печата елем. на масива по един на ред
    }
}
//printAr(['add', 'add', 'remove', 'add', 'add']); 1 4 5