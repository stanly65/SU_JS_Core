/**
 *
 * @param {string[]} args
 */
//function solve(args) {  //Array destructuring
function countLetter([str, letter]) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {         //itar WebStorm
        if (str[i] == letter) {
            count++
        }
    }
    console.log(count);
}

countLetter(['hello', 'l']);