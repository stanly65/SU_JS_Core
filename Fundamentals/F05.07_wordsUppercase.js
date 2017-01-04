function solve(args) {
    let str = args[0];
    let strU = str.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ');
    function extractWords() {
        return strU.split(/\W+/);
    }
}

console.log(solve(['Hi, how are you?']));