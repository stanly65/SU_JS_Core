/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let size = +args[0];
    for (let i = 1; i <= size; i++) {
        console.log('*'.repeat(i));
    }
    for (let i = size - 1; i >= 1; i--) {
        console.log('*'.repeat(i));
    }
}

solve(['5']);