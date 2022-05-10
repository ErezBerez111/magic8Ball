var userName = "Erez";
var userQuestion = "When will i code deadly";
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = "";


if (userName == undefined) {
    console.log('Hello!');
}
else {
    console.log(`Hello ${userName}`);
}
console.log(`${userName} seeks to know ${userQuestion} eh?`)


if (randomNumber === 0) {
    result = 'It is certain';
}
else if (randomNumber === 1) {
    result = 'It is decidedly so';
}
else if (randomNumber === 2) {
    result = 'Reply hazy try again';
}
else if (randomNumber === 3) {
    result = 'Cannot predict now';
}
else if (randomNumber === 4) {
    result = 'Do not count on it';
}
else if (randomNumber === 5) {
    result = 'My sources say no';
}
else if (randomNumber === 6) {
    result = 'Outlook not so good';
}
else if (randomNumber === 7) {
    result = 'Signs point to yes';
}


console.log(result)
