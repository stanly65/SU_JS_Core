//input comes as 2 string arguments (sentence, word)
function find(str, word) {
    let count = 0;
    let regex = new RegExp("\\b"+word+"\\b", "gi");
    let match;

    while (match = regex.exec(str)) {
        count++;
    }
    console.log(count)
}

//find('How do you plan on achieving that? How? How can you even think of that?', 'how');  //3
    
