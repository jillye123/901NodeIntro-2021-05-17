/**
 * Created by Matthew on 2/1/2017.
 */

function bandsTable() {
    let xhr = new XMLHttpRequest();
    let url = '/band'; //API path

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let myArr = JSON.parse(xhr.responseText);
            bandsData(myArr);
            //console.log(xhr.response); //Outputs a DOMString by default
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}

function bandsData(jsonData) {
    let bands = jsonData;
    let out = '<h1>Bands</h1>' +
        '<table border="2"><tr><th>Name</th><th>Origin City</th><th>Origin Country</th><th>Year Formed</th><th>Action</th></tr>';

    for (let i = 0; i < bands.length; i++) {
        out += '<tr><td>' + bands[i].name + '</td><td>' + bands[i].city + '</td><td>' + bands[i].country + '</td>' +
            '<td>' + bands[i].yearFormed + '</td><td><input type="submit" value="Delete" onclick="deleteBand(' + bands[i].id + ')"></td></tr>';
    }

    out += '</table>';

    document.getElementById("showBands").innerHTML = out;
}

function deleteBand(id) {
    let xhr = new XMLHttpRequest();
    let url = '/band/' + id; //API path

    xhr.open('DELETE', url, true);
    xhr.send();

    showBands();
}

