function getResponse() {
    let question = document.getElementById('q').value
    // console.log(question)
    fetch(`https://ancient-fjord-32267.herokuapp.com/?message=${question}`).then((response) => {
        return response.json();
    })
        .then((myJson) => {
            // console.log(myJson);
            document.getElementById('res').innerHTML =  myJson.message;
        });
}