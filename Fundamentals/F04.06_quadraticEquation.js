/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];

    let d = b * b - 4 * a * c;
    if (d < 0) {
        console.log('no real roots');
    }
    else if (d == 0) {
        let x = -b / (2 * a);
        console.log('x1=x2=' + x.toFixed(2));
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log('x1=' + Math.min(x1, x2).toFixed(2) + '; x2=' + Math.max(x1, x2).toFixed(2));
    }
}

solve(['5', '2', '8']);