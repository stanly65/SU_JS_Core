function note(arrStr) {
    let map = new Map();
    for (let el of arrStr) {
        let arr = el.split('|');
        let col = arr[0];
        if (!map.has(col)) {
            map.set(col, {wins: 0, losses: 0, age: '', name: '', opponents: []})
        }
        switch (arr[1]) {
            case 'name':
                map.get(col)['name'] = arr[2];
                break;
            case 'age':
                map.get(col)['age'] = arr[2];
                break;
            case 'win':
                map.get(col).wins++;
                map.get(col).opponents.push(arr[2]);
                break;
            case 'loss':
                map.get(col).losses++;
                map.get(col).opponents.push(arr[2]);
                break;
        }
    }
    let sortMap = [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));

    let output = '{';
    for (let [col, obj] of sortMap) {

        if (obj.name === '' || obj.age === '') {
            continue;
        }
        obj.rank = ((obj.wins + 1) / (obj.losses + 1)).toFixed(2);
        obj.opponents.sort();

        delete obj.wins;
        delete obj.losses;

        output += `"${col}":${JSON.stringify(obj)},`;
    }
    // output = output.slice(0, output.length - 1); //изтрива последната запетайка в стринга
    // output = output + "}";
    output = output.lastIndexOf(",") != -1 ? output.slice(0, output.length - 1) + "}" : output + "}";
    console.log(output);
}

// note([
//     'purple|age|22',
//     'red l|age|44',
//     'blue|win|pesho',
//     'blue|win|mariya',
//     'purple|loss|Biro Kon',
//     'purple|loss|Apon Gi',
//     'purple|loss|Kiko K',
//     'purple|loss|Yana',
//     'purple|loss|abonda',
//     'purple|loss|Manov',
//     'purple|loss|banov',
//     'red l|name|Boris',
//     'blue|win|Vladko',
//     'purple|loss|Yana',
//     'purple|name|Asen',
//     'blue|age|21',
//     'blue|loss|Pesho'
// ]);
