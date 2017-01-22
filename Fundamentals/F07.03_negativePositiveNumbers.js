/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let nums = args.map(Number);
    let result = [];
    for (let num of nums) {
        if (num < 0) result.unshift(num); //вмъква число в началото на масива
        else  result.push(num);         // вмъква число в края на масива
    }
    console.log(result.join('\n'));      //всяка стойност от новия масив на нов ред
}

solve(['7', '-2', '8', '9']);