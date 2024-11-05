// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"]; /* calling the arrys names*/

function writeCards(names) {
    const messages = []; /* this will tell our new const taht the message need to comes as ab array*/
    for (let i = 0; i < names.length; i++) {messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);}
    return messages;
}

console.log(writeCards(names));


function countDown(start) {
    while (start >= 0) {
        console.log(start);
        start--;
    }
}
countDown(11); 
