//input array string с една стойност
function countWords([input]) {
    //let text = input.join('\n');             // (/[^A-Za-z0-9_]+/) ^ което не е!
let arrWords = input.split(/\W+/)            //\W+ any non-word character един или повече пъти
    .filter(w => w !=='');                    //елементитв в масива !== ''
    let obj = {};
    for(let word of arrWords) {                 //обхождаме масива от думи
        if(! obj.hasOwnProperty(word)) {
            obj[word] = 1;
        } else {
            obj[word]++;
        }
    }
    console.log(JSON.stringify(obj));
}
//countWords(['Far too slow, you\'re far too slow.']);
//{"Far":1,"too":2,"slow":2,"you":1,"re":1,"far":1}