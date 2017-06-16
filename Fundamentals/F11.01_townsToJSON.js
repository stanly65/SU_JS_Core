//input array of strings arr[0] - table’s headings, next string is a row from the table
function townsJSON(arr) {
    let towns = [];
              //let regex = /\s*\|\s*/; // \s* интервал нула или няколко      \| ескейп верт. черта
    arr.shift();
    for (let row of arr) {  //обхождаме масив с FOR OF  //arr.shift() модифицира масив без първия ред
        let tokens = row.split('|')
            .filter(e => e !== '')
            .map(e => e.trim());     //понеже е масив ползваме map за да тримваме всеки елемент
        // правим проверка console.log(tokens);

              // let tokens = row.split(regex);
             // let townObj = {Town: tokens[1], Latitude: Number(tokens[2]), Longitude: Number(tokens[3])};
        let townObj = {Town: tokens[0], Latitude: Number(tokens[1]), Longitude: Number(tokens[2])};
        towns.push(townObj);
    }
    console.log(JSON.stringify(towns));
}
// townsJSON(['| Town    | Latitude  | Longitude  |',
//            '| Sofia   | 42.696552 | 23.32601   |',
//            '| Beijing | 39.913818 | 116.363625 |']);
// [{"Town":"Sofia","Latitude":42.696552,"Longitude":23.32601},{"Town":"Beijing","Latitude":39.913818,"Longitude":116.363625}]