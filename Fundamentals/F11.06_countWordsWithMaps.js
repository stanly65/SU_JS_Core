//input array string с една стойност            matching should be case insensitive
function countWords([input]) {
    let arrWords = input.toLowerCase()
        .split(/\W+/)                             //\W+ any non-word character един или повече пъти
        .filter(w => w !== "");                    //елементитв в масива !== ''
    let map = new Map();
    for (let word of arrWords) {                  //обхождаме масива от думи
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }
    let sorted = Array.from(map.keys()).sort();                   //от мап - масив от ключовете
                                                                   //Array.from(map.values()) - []от стойности
    for (let key of sorted) {
        //console.log("'" + key + "'" + " -> " + map.get(key) + " times");
    console.log(`'${key}' -> ${map.get(key)} times`)
    }
}
//countWords(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);