/**
 *
 * @param {string[]} args
 */
function solve(args) {
//разстояние междy две точки в равнината
    let x1 = +args[0];
    let y1 = +args[1];
    let x2 = +args[2];
    let y2 = +args[3];

    let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    console.log(distance);
}

solve(['2.34', '15.66', '-13.55', '-2.9985'])