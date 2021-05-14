/**
 * Created by Matthew on 2/2/2017.
 */

function addBand() {
    let myForm = document.getElementById('myForm');
    let formData = new FormData(myForm);

    let band = {
        "name": formData.get('name'),
        "city": formData.get('city'),
        "country": formData.get('country'),
        "yearFormed": formData.get('yearFormed'),
        "genres": formData.get('genres').split(',')
    };

    $.ajax({
        url: '/band',
        type: 'POST',
        data: band,
    });
}
