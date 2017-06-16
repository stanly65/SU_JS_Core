//input comes as single string argument – the array of objects
function fromJSONToHTML(input) {
    let arrObj = JSON.parse(input); // от JSON -> масив от обекти
    //console.log(arrObj); проверка
    let html = '<table>\n';
    html += '  <tr>';

    for (let key of Object.keys(arrObj[0])) {  //от 1 обект итерираме ключовете
        html += `<th>${key}</th>`;            //и стават заглавия на таблица
            }
     html += "</tr>\n";

    for (let obj of arrObj) {                                       //за всеки обект в масива
        html += `  <tr>`;                                          //Object.keys(obj) ['ключ', 'ключ']
        for (let value of Object.keys(obj)) {                       //!!! стойността на всеки ключ от обекта obj
            html += `<td>${htmlEscape(String(obj[value]))}</td>`;  //obj[value]  Tomatoes & Chips
        }
        html += `</tr>\n`;
    }
    html += '</table>';
    console.log(html);

    function htmlEscape(text) {                            //!! Ескейпваме само стринг, а на числа
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
// fromJSONToHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
// <table>
//   <tr><th>Name</th><th>Price</th></tr>
//   <tr><td>Tomatoes &amp; Chips</td><td>2.35</td></tr>
//   <tr><td>J&amp;B Chocolate</td><td>0.96</td></tr>
// </table>