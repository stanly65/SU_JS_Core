//input comes as a single string argument – the array of objects as a JSON
function scoreHTML(input) {
    let arrObj = JSON.parse(input); // от JSON -> масив от обекти

    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th></tr>\n";  //2 инт отстъп

    for (let obj of arrObj){
        html += `  <tr>`;
        html += `<td>${htmlEscape(obj['name'])}</td>`;
        html += `<td>${Number(obj['score'])}</td>`;
        html += `</tr>\n`;
    }
    return html + "</table>";

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
// console.log(scoreHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']));
// <table>
//   <tr><th>name</th><th>score</th></tr>
//   <tr><td>Pesho &amp; Kiro</td><td>479</td></tr>
//   <tr><td>Gosho, Maria &amp; Viki</td><td>205</td></tr>
// </table>