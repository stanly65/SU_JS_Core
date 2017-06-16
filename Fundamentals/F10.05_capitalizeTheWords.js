//The input comes as a single string
function capital(str) {
    console.log(str.toLowerCase()                       //"capitalize these words"
        .split(" ").                                    //["capitalize", "these", "words"]
        map(w => w[0].toUpperCase() + w.substr(1))      //["Capitalize", "These", "Words"]
        .join(' '));                                    //"Capitalize These Words"
}
// capital('Capitalize these words');