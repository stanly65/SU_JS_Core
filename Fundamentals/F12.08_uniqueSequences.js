//input arrStr          всеки елемент е  JSON представяне на масив от числа '[2, 6, 7, 14, -1]' (e => e)
function unique(arrStr) {
    let mapArr = new Map;
    for (let el of arrStr) {
        let arr = JSON.parse(el).map(Number).sort((a, b) => b - a);
        let toStore = `[${arr.join(', ')}]`;
        if (!mapArr.has(toStore)){
            mapArr.set(toStore, arr.length);
        }
    }
    let customSort = (arrA, arrB, map) => map.get(arrA) - map.get(arrB);
    console.log([...mapArr.keys()].sort((a, b) => customSort(a, b, mapArr)).join('\n'));
}
//unique(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);