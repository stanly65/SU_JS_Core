//input comes as single string argument which is an email
function emailVal(email) {
    let regex = /^[A-Za-z0-9]+@[a-z]+.[a-z]+$/;
    if(regex.test(email)) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}
// emailVal('valid@email.bg');         //Valid
// emailVal('invalid@email2.bg');      //Invalid