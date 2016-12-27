/**
*
* @param {string[]} args
*/

function solve(args) {
    let first = +args[0];
    let second = +args[1];
    let third = +args[2];

    let sum = first + second + third;
    console.log(sum);
}

//test
//solve(['2', '3', '4']);        // 9
//solve(['1.5', '1.5', '-1']);  //  2