//input comes as array of strings  {townName} | {productName} | {productPrice}
function lowePrice(arrStr) {
    let map = new Map();

    for(let el of arrStr) {
        let arr = el.split(" | ");
        let town = arr[0];
        let product = arr[1];
        let price = Number(arr[2]);

        if(! map.has(product)) {
            map.set(product, new Map());
        }

        map.get(product).set(town, price);
    }

    for(let [product, insideMap] of map) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let townWithLowestPrice = "";
        for(let [town, price] of insideMap) {
            if(price < lowestPrice) {
                lowestPrice = price;
                townWithLowestPrice = town;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
    }
}
// lowePrice ([
//     'Sofia City | Audi | 100000',
//     'Sofia City | BMW | 100000',
//     'Sofia City | Mitsubishi | 10000',
//     'Sofia City | Mercedes | 10000',
//     'Sofia City | NoOffenseToCarLovers | 0',
//     'Mexico City | Audi | 1000',
//     'Mexico City | BMW | 99999',
//     'New York City | Mitsubishi | 10000',
//     'New York City | Mitsubishi | 1000',
//     'Mexico City | Audi | 100000',
//     'Washington City | Mercedes | 1000'
// ]);