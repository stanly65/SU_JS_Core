//input comes as two arguments – one string and one array of strings
function cens(text, arr) {
        for (let i = 0; i < arr.length; i++) {
        let replaced = arr[i];
        text = text.split(replaced)
            .join('-'.repeat(replaced.length));
    }
    console.log(text);
}
//cens ('roses are red, violets are blue', ['violets are', 'red']);
//roses are ---, ----------- blue