//The input comes as array of string elements
function aggr(arr) {
    let towns =[];
    let sum = 0;

    for(let line of arr) {
        let tokens = line.split('|').filter(token => token != '');
        let town = tokens[0].trim();
        let value = Number(tokens[1].trim());
        towns.push(town);
        sum += value;
    }

    console.log(towns.join(", "));
    console.log(sum);
}
// aggr(['| Sofia           | 300',
//       '| Veliko Tarnovo  | 500',
//       '| Yambol          | 275']
// );