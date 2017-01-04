/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let arr = args;
    arr = arr.map(Number);

    let sum1 = arr.reduce((a, b) => a + b, 0);    //Sum(ai)
    let sum2 = arr.reduce((a, b) => a + 1/b, 0); //Sum(1/ai)
let concat = arr.reduce((a, b) => a + b, '');    //Concat(ai)

    console.log(sum1);
    console.log(sum2);
    console.log(concat);

}
solve(['2', '4', '8', '16']);