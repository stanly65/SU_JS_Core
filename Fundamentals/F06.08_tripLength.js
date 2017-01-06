/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let x1 = +args[0];
    let y1 = +args[1];
    let x2 = +args[2];
    let y2 = +args[3];
    let x3 = +args[4];
    let y3 = +args[5];

    let d12 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    let d13 = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2);
    let d23 = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
    let dmax = Math.max(d12, d13, d23);


    if (d13 === dmax)                           return (`1->2->3: ${d12 + d23}`);
    else if (d23 === dmax)                      return (`2->1->3: ${d12 + d13}`);
    else if (d12 === dmax)                      return (`1->3->2: ${d13 + d23}`);
}
console.log(solve([0, 0, 2, 0, 4, 0]));