//input comes as array of strings (Последният елемент е N - стъпката)
function printAr(input) {
    let step = Number(input.pop());

    input.filter((element, index) => index % step === 0)
        .forEach(element => console.log(element));
}
// printAr(['5', '20', '31', '4', '20', '2']);
// printAr(['dsa', 'asd', 'test', 'tset', '2']);