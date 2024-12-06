
let userName = prompt('Hello, what is your name?')

userName
    ? document.getElementById('greeting').innerText = `Hello, ${userName}!` : document.getElementById('greeting').innerText = `Hello stranger!`


let responseImg = document.getElementById('response-img')
let responseText = document.getElementById('response-text')
let greeting = document.getElementById('greeting')


function shakeMagicEightBall() {
    //do not touch this code//
    let userQuestion = prompt('What do you want to ask the 8 ball?');

    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    let imageChoice = '';




    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain';
            imageChoice = 'imgs/itiscertain.jfif'
            break;
        case 1:
            eightBall = 'It is decidedly so';
            imageChoice = 'imgs/decidedlyso.jfif'
            break;
        case 2:
            eightBall = 'Reply hazy try again';
            imageChoice = 'imgs/tryagain.jfif'
            break;
        case 3:
            eightBall = 'Cannot predict now';
            imageChoice = 'cannotpredict.jfif'
            break;
        case 4:
            eightBall = 'Do not count on it';
            imageChoice = 'dontcountonit.jfif'
            break;
        case 5:
            eightBall = 'My sources say no';
            imageChoice = 'sayno.jfif'
            break;
        case 6:
            eightBall = 'Outlook not so good';
            imageChoice = 'notsogood.jfif'
            break;
        case 7:
            eightBall = 'Signs point to yes';
            imageChoice = 'pointyes.jfif'
        default:
            console.log(`There appears to be a problem ${userName}! Please contact eight ball services.`);
            eightBall = 'Error';
            imageChoice = 'error.jfif'
    }

    console.log(`Magic Eightball: ${eightBall}`);

    document.getElementById('response-text').innerText = `${userName} has asked ${userQuestion} to the almighty 8 Ball! The 8 Ball has replied ${eightBall}!`

    responseImg.src = imageChoice
}
