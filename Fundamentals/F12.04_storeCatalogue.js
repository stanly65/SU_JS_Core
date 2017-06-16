//input comes as array of strings         “{productName} : {productPrice}”
function storeCatalogue(arrStr) {
    let map = new Map();

    for(let el of arrStr){
        let arr = el.split(" : ");
        let product = arr[0];
        let price = arr[1];
        map.set(product, price);
    }
    function abSort(a, b) {
        return a[0].localeCompare(b[0])
    }
//console.log(map);   проверка на мапа

    let set = new Set();                                  //[] от масиви [ключ, стойност]
    [...map.keys()].forEach(k => set.add(k[0]));          //     //[] масив от първа буква уникални ключове
//console.log(set); проверка
     for(let char of [...set].sort()) {
         console.log(char);

         for(let product of [...map.keys()].sort()){
             if(product.startsWith(char)) {
                 console.log(`  ${product}: ${map.get(product)}`);
             }
         }
      }
}
 // storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
