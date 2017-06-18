//input array of strings с три вида елементи [color of the sheet]|[win/loss]|[opponent name]
//                                           [color of the sheet]|[name]|[player name]
//                                           [color of the sheet]|[age]|[player age]
function note(arrStr) {
    let pls = {};
    let obj = {};
    for (let el of arrStr) {
        let arr = el.split('|');
        let col = arr[0];
        if (!pls[col]){
            pls[col] = obj = {age: '', name: '', opponents: [], wins: 0, losses: 0};
        }

        switch (arr[1]) {
            case 'name':
                obj.name = arr[2];
                break;
            case 'age':
                obj.age = arr[2];
                break; // as string
            case 'win':
                obj.wins++;
                obj.opponents.push(arr[2]);
                break;
            case 'loss':
                obj.losses++;
                obj.opponents.push(arr[2]);
                break;
        }
    }
    let validPls = {};
    let sortCol = Object.keys(pls).sort((a, b) => a.localeCompare(b));     //сортираме по цвят ???
    for (let color of sortCol) {
        let obj = pls[color];
        if (obj.name && obj.age) {
            let rank = (obj.wins + 1 ) / (obj.losses + 1);
            validPls[color] = {
                age: player.age,
                name: player.name,
                opponents: player.opponents.sort(),
                rank: rank.toFixed(2)
            };
        }
    }
    // console.log(validPls);
    console.log(JSON.stringify(validPls));
}
note([
    'purple|age|99',
    'red|age|44',
    'blue|win|pesho',
    'blue|win|mariya',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Yana',
    'purple|loss|Yana',
    'purple|loss|Manov',
    'purple|loss|Manov',
    'red|name|gosho',
    'blue|win|Vladko',
    'purple|loss|Yana',
    'purple|name|VladoKaramfilov',
    'blue|age|21',
    'blue|loss|Pesho'
]);