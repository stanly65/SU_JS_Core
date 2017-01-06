/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let str = args[0];
    let sum = 0;
    let avrSum=0;
    for (let i = 0; i < str.length; i++) {

        sum += +str[i];
    }
    avrSum = sum/str.length;
    while(avrSum<=5){
        str += '9';
        sum +=9;
        avrSum = sum/str.length;
    }
console.log(str);

}
solve(['101']); //1019999