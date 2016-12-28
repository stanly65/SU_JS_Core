/**
 *
 * @param {string[]} args
 */
function solve(args) {

    for (let num of args) {
     console.log(Math.log2(num));
    }
}

solve(['1024', '4', '16']);