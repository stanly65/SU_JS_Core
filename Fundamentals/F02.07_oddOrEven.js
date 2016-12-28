function solve(args) {
    let num = +args[0];
    let rem = num % 2;
    if (rem == 0) {
        console.log('even');
    } else if (rem == Math.round(rem)) {
        console.log('odd');
    } else {
        console.log('invalid');
    }
}

solve(['5']);