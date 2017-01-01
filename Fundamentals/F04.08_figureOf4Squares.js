/**
 *
 * @param {string[]} args
 */
//
function solve(args) {
    let n = +args[0];
    let arr= new Array(n-1); // '-' са n-2, толкова са интервалите в масив n-1 елемента
    if (n == 2) {                      //hard code n=2
        console.log('+++');
    }
    else {
        console.log('+' + arr.join('-') + '+' + arr.join('-') + '+');           //първи ред
        for (let i = 1; i <= Math.floor((n - 3) / 2); i++) {                    // колко реда с празни интервали
            console.log('|' + arr.join(' ') + '|' + arr.join(' ') + '|');
        }
        console.log('+' + arr.join('-') + '+' + arr.join('-') + '+');           // среден ред
        for (let i = 1; i <= Math.floor((n - 3) / 2); i++) {
            console.log('|' + arr.join(' ') + '|' + arr.join(' ') + '|');
        }
        console.log('+' + arr.join('-') + '+' + arr.join('-') + '+');        // последен ред
    }
}

solve(['4']);