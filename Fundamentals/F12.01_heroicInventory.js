//input comes as array of strings  “{heroName} / {heroLevel} / {item1}, {item2}, {item3}...”
function heroicInv(arrStr) {
    let heroes = [];

    for(let el of arrStr) {
        let arr = el.split(/\s*\/\s*/);
        let name = arr[0];
        let level = Number(arr[1]);
        let items = [];

        if(arr.length > 2) {
            items = arr[2].split(", ");
        }

        let hero = {name: name, level: level, items: items};
        heroes.push(hero);                                       //масив от обекти
    }
    console.log(JSON.stringify(heroes));
}
// heroicInv(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]