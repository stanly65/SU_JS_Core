/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let minAge = +args[0];
    let firstName = args[1];
    let firstAge = +args[2];
    let secondName = args[3];
    let secondAge = +args[4];
    let obj = {};
    if (firstAge >= minAge) {
        obj.name = firstName;
        obj.age = firstAge;
        console.log(obj);
    }
    if (secondAge >= minAge) {
        obj.name = args[3];
        obj.age = +args[4];
        console.log(obj);
    }
}
solve(['12', 'Ivan', '15', 'Asen', '9']);