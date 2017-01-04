/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let str = args[0];
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    //console.log(str[str.length-1]);
    return true;

}
console.log(solve(['123staats321']));
