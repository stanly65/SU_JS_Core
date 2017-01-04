/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let size = +args[0];
    for (let i = 1; i <= size; i++) {
        console.log('*' + ' *'.repeat(size-1));
    }
}

solve(['5']);