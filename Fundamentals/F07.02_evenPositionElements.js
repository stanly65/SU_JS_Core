/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let result = [];
    for (let i in args) {
        if (i % 2 === 0) {
            result.push(args[i]);
        }
    }
    console.log(result.join(' '));
}
solve(['20', '30', '40']);