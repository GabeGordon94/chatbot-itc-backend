let list=["https://ancient-fjord-32267.herokuapp.com/message/?message=","https://boto20.herokuapp.com/message/?message="]

function getResponse() {
    let question = document.getElementById('q').value
    // console.log(question)
    fetch(`${list[1]}${question}`).then((response) => {
        return response.json();
    })
        .then((myJson) => {
            // console.log(myJson);
            document.getElementById('res').innerHTML =  myJson.message;
        });
}


 