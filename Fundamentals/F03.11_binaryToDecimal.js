function solve(args) {
    let binary = +args[0];
    let digit = parseInt(binary, 2);
    console.log(digit);
}

solve(['00001001']);
solve(['11110000']);