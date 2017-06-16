//input comes as array of strings    {town} -> {product} -> {amountOfSales} : {priceForOneUnit}
function cityMarkets(arrStr) {
    let map = new Map();

    for(let el of arrStr) {
        let arrCityData = el.split(/\s+->\s+/);
        let town = arrCityData[0];
        let product = arrCityData[1];
        let income = arrCityData[2].split(/\s+:\s+/).map(Number).reduce((a, b) => a *b);

        if(! map.has(town)) {
            map.set(town, new Map());
        }
        if(! map.get(town).has(product)) {
            map.get(town).set(product, 0);
        }
        map.get(town).set(product, map.get(town).get(product) + income);
    }
[...map].forEach(([town, product]) => {
        console.log(`Town - ${town}`);
       [...map.get(town)] .forEach(([product,income])=>
           console.log(`$$$${product} : ${income}`))
    });


    // for(let [town, product] of map) {
    //     console.log(`Town - ${town}`);
    //
    //     for(let [product, income] of map.get(town)) {
    //         console.log(`$$$${product} : ${income}`);
    //     }
    // }
}
// cityMarkets(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1', 'Montana -> Qgodas -> 20000 : 0.2', 'Montana -> Chereshas -> 1000 :' +
// ' 0.3']);
// Town - Sofia
// $$$Laptops HP : 400000
// $$$Raspberry : 300000000
// $$$Audi Q7 : 20000000
// Town - Montana
// $$$Portokals : 200000
// $$$Qgodas : 4000
// $$$Chereshas : 300