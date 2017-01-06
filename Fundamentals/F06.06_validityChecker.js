/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let x1 = +args[0];
    let y1 = +args[1];
    let x2 = +args[2];
    let y2 = +args[3];
    let x = 0;
    let y = 0;
    let dist_1_0 = Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2);
    let dist_2_0 = Math.sqrt((x2 - x) ** 2 + (y2 - y) ** 2);
    let dist_1_2 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    if (dist_1_0 === parseInt(dist_1_0, 10)) console.log(`{${x1}, ${y1}} to {${x}, ${y}} is valid`);
    else console.log(`{${x1}, ${y1}} to {${x}, ${y}} is invalid`);
    if (dist_2_0 === parseInt(dist_2_0, 10)) console.log(`{${x2}, ${y2}} to {${x}, ${y}} is valid`);
    else console.log(`{${x2}, ${y2}} to {${x}, ${y}} is invalid`);
    if (dist_1_2 === parseInt(dist_1_2, 10)) console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

}
solve(['2', '1', '1', '1']);