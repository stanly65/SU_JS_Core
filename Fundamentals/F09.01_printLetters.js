//input comes as a single string
function prLet(str) {
    for(let char in str) {
        console.log(`str[${char}] -> ${str[char]}`)
    }
}
//prLet('Hello, World!');