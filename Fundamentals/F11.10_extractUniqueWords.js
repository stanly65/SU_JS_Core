//input comes as array of strings
function extractWords(input) {
    let set = new Set();
    // let text = input.join('\n');
    // let words = text.toLowerCase().split(/\W+/)
    //     .filter(w => w !== '')
    //     .forEach(w => set.add(w));
    // console.log([...set].join(', '));

    for(let el of input) {
        let words = el.toLowerCase().split(/\W+/).filter(w => w !== '');
        for(let word of words) {
            set.add(word);
        }
    }
    console.log(Array.from(set.keys()).join(", "));
}
// extractWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.', 'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);
// lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, pellentesque, quis, hendrerit, dui, quisque, fringilla, est, urna, vitae, efficitur, vestibulum, diam, dignissim, variu