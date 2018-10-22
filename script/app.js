document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");
   createJSON();
 });

function createJSON(){
    let button = document.querySelector('.js-save');
    let form = document.querySelector('.js-form');


    button.addEventListener('click', function(e){
        console.info('zit erin');
        var json = {
            "FirstName": document.getElementById("firstname").value,
            "Email": document.getElementById("email").value,
            "ZipCode": document.getElementById("zipcode").value,
            "Age": document.getElementById("age").value,
            "isfirsttimer": document.getElementById("isFirstTimer").value == 'on' ? true:false
        };
        console.info(json);
        postData(json);
        form.reset();

    })
}


function postData(data) {
    var url = 'https://registratie-tijldl.azurewebsites.net/api/v2/registrations';
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => console.log('Success:',JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
 }
