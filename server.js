let express = require('express');
let cors = require('cors')
const bodyParser = require("body-parser");
const request = require('request');
const cheerio = require('cheerio');


let PORT = 7000;

let app = express();
app.use(cors())


app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(bodyParser.json());

app.get('/', async function (req, res) {
    let message = req.query.message
    let sendMsg = {}
    var URL = "https://twitter.com/realDonaldTrump";
    if (message) {
        console.log('here')
        // request(URL, function (err, res, body) {
        //     if (err) {
        //         console.log(err);
        //     }
        //     else {
        //         let $ = cheerio.load(body);  //loading content of HTML body
        //         sendMsg.user = $('li.stream-item .fullname').first().text()
        //         sendMsg.tweet = $('li.stream-item p.tweet-text').first().text()
        //         console.log(sendMsg)
        //         res.send(message);
        //     }
        // });
        res.send(message);
    } else {
        res.status(200).send('no message');
    }
});

//get trump tweet
async function getTrumpTweet() {
    var URL = "https://twitter.com/realDonaldTrump";
    let sendMsg = {}
    // let response = await request(URL);
    //  async function (err, res, body) {
    //     if (err) {
    //         console.log("an error occured : " + err);
    //     }
    //     else {
    // $('li.stream-item').each(function (index) {
    //     var name = $(this).find('.fullname').text();
    //     var tweet = $(this).find('p.tweet-text').text();
    //     // console.log('user : ' + name);   //name of the user
    //     // console.log('tweet : ' + tweet);   //tweet content
    //     return ({ 'user': name, "tweet": tweet })
    // });

    const response = await request({ uri: URL })

    let $ = cheerio.load(response);  //loading content of HTML body
    sendMsg.user = $('li.stream-item .fullname').first().text()
    sendMsg.tweet = $('li.stream-item p.tweet-text').first().text()
    console.log(sendMsg)
    console.log('body')
}



app.listen(PORT, function () {
    console.log('Server is running on PORT:', PORT);
});