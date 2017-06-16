//input comes as array of strings   “{juiceName} => {juiceQuantity}”
function cappyJuice(arrStr) {
    let obj = {};
    let bottles = {};

    for(let el of arrStr) {
        let arr = el.split(" => ");
        let fruit = arr[0];
        let quant = Number(arr[1]);

        if(! obj.hasOwnProperty(fruit)) {
            obj[fruit] = 0;
        }

        obj[fruit] += quant;
        if(obj[fruit] >= 1000) {
            bottles[fruit] = parseInt(obj[fruit]/1000);
        }
    }

    for(let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }
}
// cappyJuice(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);
// Orange => 2
// Peach => 2