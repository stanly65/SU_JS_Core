/**
 *
 * @param {string[]} args
 */
function solve(args) {               //Първият елемент е 1. Всеки следният елемент равен на
let n = +args[0];
let k = +args[1];
let arr = [1];
for(let j=1; j<k; j++){
    arr.unshift(0);
    }
console.log(arr);
// for (let i= 1; i<n; i++){
//     let start = Math.max(0,i-k);
//     let end = i-1;
//     let sum = slice(start,end).reduce((x,y) => x+y);
//     seq+=sum;
}
                                  // сбора от предходните k елементи

                                  //Дължината на последователността е n  елементи


solve(['8', '5']);