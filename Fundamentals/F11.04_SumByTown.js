//input comes as an array of strings (четен индекс - Град, нечетен - доход за града
function sumTowns(arr) {
    let towns = {};

    for (let i = 0, le = arr.length; i < le; i += 2) {
        let city = arr[i];
        let money = Number(arr[i + 1]);
        if (!towns.hasOwnProperty(city)) {
            towns[city] = 0;
        }
        towns[city] += money;
    }
    console.log(JSON.stringify(towns));
}
//sumTowns(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
// {"Sofia":25,"Varna":7}