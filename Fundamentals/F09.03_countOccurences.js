//input comes as two string arguments
function prn(str, text) {
    let count = 0;
    let p = -1;                         //позиция

    while (true) {
        p = text.indexOf(str, p + 1);
        if (p === -1)
            return count;

        count++;
    }
}
//console.log(prn('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'));