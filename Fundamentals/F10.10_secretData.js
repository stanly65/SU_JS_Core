//input comes as an array of strings
function secretData(arr) {
    let name = /\*[A-Z][A-Za-z]*(?=\s|$)/g;
    let phone = /\+[0-9-]{10}(?=\s|$)/g;
    let id = /![a-zA-Z0-9]+(?=\s|$)/g;
    let base = /_[0-9A-Za-z]+(?=\s|$)/g;

// \* и \+ ескейпваме * и +   (! и _ и - ) не е необходимо)
// [a-z]*   нула или повече пъти от символа в скобите
// [a-z]+   един или повече пъти от символа в скобите
// (?=\s|$)matches any whitespace character or end of string         \s = [\r\n\t\f\v ]
// a{3} точно 3 пъти а   (а{3,} три или повече пъти

    for (let line of arr) {
        console.log(line
            .replace(name, m => '|'.repeat(m.length))
            .replace(phone, m => '|'.repeat(m.length))
            .replace(id, m => '|'.repeat(m.length))
            .replace(base, m => '|'.repeat(m.length))
        )
    }
}
// secretData(['Agent *Ivankov was in the room when it all happened.',
//     'The person in the room was heavily armed.',
//     'Agent *Ivankov had to act quick in order.',
//     'He picked up his phone and called some unknown number. ',
//     'I think it was +555-49-796...',
//     'I can\'t really remember...',
//     'He said something about "finishing work with subject !2491a23BVB34Q and returning to Base _Aurora21".',
//     'Then after that he disappeared from my sight.',
//     'As if he vanished in the shadows.',
//     'A moment, shorter than a second, later, I saw the person flying off the top floor.',
//     'I really don\'t know what happened there.',
//     'This is all I saw, that night.',
//     'I cannot explain it myself...']);
// Agent |||||||| was in the room when it all happened.
//     The person in the room was heavily armed.
//     Agent |||||||| had to act quick in order.
//     He picked up his phone and called some unknown number.
//     I think it was +555-49-796...
//     I can't really remember...
// He said something about "finishing work with subject |||||||||||||| and returning to Base _Aurora21".
//     Then after that he disappeared from my sight.
//     As if he vanished in the shadows.
//     A moment, shorter than a second, later, I saw the person flying off the top floor.
//     I really don't know what happened there.
// This is all I saw, that night.
//     I cannot explain it myself...