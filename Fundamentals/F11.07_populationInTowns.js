//input comes as array of strings          “{townName} <-> {townPopulation}”
function popTowns(arrStr) {
    let map = new Map();

    for(let el of arrStr) {
        let arr = el.split(/\s+<->\s+/);
        let town = arr[0];
        let pop = Number(arr[1]);

        if(! map.has(town)) {
            map.set(town, 0);
        }
        map.set(town, map.get(town) + pop);
    }
    for(let kvp of map){
        console.log(`${kvp[0]} : ${kvp[1]}`)
    }
}
// popTowns(['Sofia <-> 100000','Montana <-> 20000','New York <-> 10000000','Sofia <-> 12345']);
// Sofia : 112345
// Montana : 20000
// New York : 10000000