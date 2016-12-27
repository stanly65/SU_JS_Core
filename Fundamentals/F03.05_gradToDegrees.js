function solve(args) {
    let grads = Number(args[0]);
    grads = grads % 400;
           grads += 400;
    grads = grads % 400;

    let degrees = grads / 400 * 360;

    console.log(degrees);
}

solve(['270']);