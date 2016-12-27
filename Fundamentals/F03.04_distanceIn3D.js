function solve(args) {
//разстояние междy две точки в пространството
    let x1 = +args[0];
    let y1 = +args[1];
    let z1 = +args[2];
    let x2 = +args[3];
    let y2 = +args[4];
    let z2 = +args[5];
    let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);
    console.log(distance);
}

solve([1, 1, 0, 5, 4, 0]);
solve([3.5, 0, 1, 0, 2, -1]);