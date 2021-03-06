function getImages(num) {
    fetch('https://dog.ceo/api/breeds/image/random/' + num)
    .then(response => response.json())
    .then(responseJson => logResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function logResults(responseJson) {
    console.log(responseJson);
    
    for (let i = 0; i < responseJson.message.length; i++) {
        $(".pictures").append("<img src='" + responseJson.message[i] + "'>")
    }

    $(".images").removeClass('hidden');
}

function submitForm() {
    $('form').submit(function(event) {
        event.preventDefault();

        let num = $('#dogNumber').val();

        if (num < 1 || num > 50) {
            alert("You must select a number between 1 and 50");
            return;
        }; 

        $(".pictures").empty();

        getImages(num);
    });
}

$(submitForm);