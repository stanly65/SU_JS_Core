//input comes as array of strings     “{carBrand} | {carModel} | {producedCars}”
function auto(arrStr) {
    let cars = new Map();

    for(let el of arrStr){
        let arr = el.split(" | ");
        let brand = arr[0];
        let model = arr[1];
        let count = Number(arr[2]);

        if(! cars.get(brand)){
            cars.set(brand, new Map());
        }
        if(! cars.get(brand).get(model)){
            cars.get(brand).set(model, 0);
        }

        cars.get(brand).set(model, cars.get(brand).get(model) + count);
    }

    for(let [brand, modelCount] of cars){
        console.log(brand);

        for(let [model, count] of modelCount){
            console.log(`###${model} -> ${count}`);
        }
    }
}
// auto(["Audi | Q7 | 1000", "Audi | Q6 | 100", "BMW | X5 | 1000", "BMW | X6 | 100", "Citroen | C4 | 123", "Volga | GAZ-24 | 1000000", "Lada | Niva | 1000000", "Lada | Jigula | 1000000", "Citroen | C4 | 22", "Citroen | C5 | 10"]);