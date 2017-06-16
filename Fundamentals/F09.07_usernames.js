//input comes as an array of string elements
function usernames(arr) {
    let users = [];

    for(let email of arr) {
        let tokens = email.split('@');
        let username = tokens[0] + '.';
        let domain = tokens[1];
        domain.split('.').forEach(x => username += x[0]);
        users.push(username);
    }

    console.log(users.join(", "));
}
//usernames (['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
//peshoo.gc, todor_43.mdb, foo.bc