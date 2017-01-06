/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let n = +args[0];
    for (let i = 1; i < args.length; i++) {
        let op = args[i];
        if (op === 'chop') {
            n = n / 2;
            console.log(n);
        } else if (op === 'dice') {
            n = Math.sqrt(n);
            console.log(n);
        } else if (op === 'spice') {
            n = n + 1;
            console.log(n);
        } else if (op === 'bake') {
            n = n * 3;
            console.log(n);
        } else {
            n = n - 0.2 * n;
            console.log(n);
        }
    }
}
solve(['9','dice','spice','chop','bake','fillet']); //4.8