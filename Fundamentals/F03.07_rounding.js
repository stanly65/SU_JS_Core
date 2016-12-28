function solve([num, n]) {
   [num, n] = [num,n].map(Number);


    if (n > 15) n = 15;

    // let denominator = Math.pow(10, n);
    // let secondVar = Math.round(num * denominator) / denominator;
let round1 = num.toFixed(n);          //закръглява математически и връща string (допълва с нули)
let round2= (+round1).toPrecision(); //първо с (+)string->number оставя значещите цифри и маха последните нули
    //console.log(secondVar);
    //console.log(round1);
    console.log(round2);

}
solve([4.6456456,123]);
solve(['3.14159125', '8']);
solve(['10.5', '3']);