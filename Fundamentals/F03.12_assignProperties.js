function solve(args) {
let obj = {};
let fProp = args[0];
obj[fProp] = args[1];
let sProp = args[2];
obj[sProp] = args[3];
let tProp = args[4];
obj[tProp] = args[5];
console.log(obj);

}

solve(['name', 'Pesho', 'age', '23', 'gender', 'male']);