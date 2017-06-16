//input comes as 2 string arguments
function splitAStr(str, del) {
    str.split(del).forEach(s => console.log(s));
}
// splitAStr('one-two-three-four-five', '-');
// one
// two
// three
// four
// five