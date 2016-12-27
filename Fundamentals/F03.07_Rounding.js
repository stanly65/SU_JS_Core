function solve([num, n]) {
   [num, n] = [num,n].map(Number);


    if (n > 15) n = 15;

    let denominator = Math.pow(10, n);
    let secondVar = Math.round(num * denominator) / denominator;

    console.log(secondVar);
}
solve([4.6456456,123]);
solve(['3.1415926535897932384626433832795', '2']);
solve(['10.5', '3']);