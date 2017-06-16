// input array of strings (Последният елемент е броя ротации)
function printAr(arr) {
    let rot = Number(arr.pop());     //pop() премахва последния елемент от масив и връща стойността му
    rot %= arr.length;                // остатъка след целочислено делене
    for (let i = 0; i < rot; i++) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);     //unshift() добавя елементи в началото на масива и връща нова дължината на масива
    }
    return arr.join(' ');          // печата масива на ред с разделител ' '
}
//console.log(printAr(['Banana', 'Orange', 'Coconut', 'Apple', '15']));

