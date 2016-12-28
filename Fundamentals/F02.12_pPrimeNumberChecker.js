/**
 *
 * @param {string[]} args
 */

function solve(args) {
    let prime = true;
    let n = +args[0];
    if (n < 2) {
        prime = false;
    }
    else {
        for (let x = 2; x <= Math.sqrt(n); x += 1) {
            if (n % x == 0) {
                prime = false;
                break;
            }
        }
    }
    console.log(prime);
}
solve(['81']);
