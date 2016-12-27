function solve(args) {
    let inches = +args[0]; //12 inches = 1 foot
    let foot = Math.trunc(inches / 12);
    let inch = inches % 12;
    console.log(foot + "'-" + inch + '"');
}
solve([36]);
solve([55]);
solve([11]);