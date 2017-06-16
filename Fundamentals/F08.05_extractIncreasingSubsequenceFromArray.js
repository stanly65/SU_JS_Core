//input comes as array of numbers
function printAr(arr) {
    //сравняваме текущия елемент  >=  с всеки елемент от новия масив с край текущия елемент
    arr.filter((element, index) => element >= Math.max(...arr.slice(0, index + 1)))
        .forEach(element => console.log(element));
}
//printAr([1, 3, 8, 4, 10, 12, 3, 2, 24]);