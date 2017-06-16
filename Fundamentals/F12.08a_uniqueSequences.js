//input arrStr          всеки елемент е  JSON представяне на масив от числа '[2, 6, 7, 14, -1]' (e => e)
function unique(arrStr) {
    let setArr = new Set;
    for (let el of arrStr) {
        let arr = JSON.parse(el).map(Number).sort((a, b) => b - a);

        let toStore = `[${arr.join(', ')}]`;
        if (!mapArr.has(toStore)){
            mapArr.set(toStore, arr.length);
        }
    }
