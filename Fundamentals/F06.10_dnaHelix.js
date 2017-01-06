/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let rows = +args[0];
    let str = 'ATCGTTAGGG';
    let currInd = 0;                    //имаме повтаряемост на разположението на буквите на всеки 4 реда

    for (let i = 0; i < rows; i++) {
        let currRow = i % 4;
        if (currRow === 0) {
            console.log(`**${str[currInd++ % str.length]}${str[currInd++ % str.length]}**`);
        } else if (currRow === 1 || currRow === 3) {
            console.log(`*${str[currInd++ % str.length]}--${str[currInd++ % str.length]}*`);
        } else {
            console.log(`${str[currInd++ % str.length]}----${str[currInd++ % str.length]}`);
        }
    }
}

solve(['20']);

