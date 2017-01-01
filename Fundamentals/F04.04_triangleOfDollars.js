/**
 *
 * @param {string[]} args
 */
// function solve(args) {
//     let row = +args[0];
//     let line = '';
//     for (let col = 1; col <= row; col++) {
//         line += '$';
//         console.log(line);
//     }
// }

//втори начин
// function solve(args) {
//     let n = +args[0];
//     for (let row = 1; row <= n; row++) {
//       let arr = new Array(row+1).join('$'); // празен масив от 2 елемента с разелител $
// console.log(arr);
//     }
// }

// трети начин
function solve(args) {
    let n = +args[0];
    for (let row = 1; row <= n; row++) {
        console.log('$'.repeat(row));      //повтаря стринга $, row пъти
    }
}
solve(['5']);