// input array nuber
function solve(arr) {
    let k = arr.shift();                                         // маха елемент от 0 позиция ( в примера числото 3)
    console.log(arr.slice(0, k).join(' '));                       // [от индекс до индекс)   само 1 от индекс до края
    console.log(arr.slice(- k).join(' '));
    console.log(arr.slice(arr.length - k, arr.length).join(' '));  //arr.length е излишно
}
solve([3, 1, 2, 3, 9, 9, 9, 3, 2, 1]);