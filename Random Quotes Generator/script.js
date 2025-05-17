const quotes =[{
    quote:`"Attitude is a little thing that makes a big difference."`,
    writer:`- Winston Churchill`
}, {
    quote:`"The best way to predict the future is to create it."`,
    writer:`- Peter Drucker`
}, {
    quote:`"Beware of missing chances; otherwise it may be altogether too late some day."`,
    writer:`- Franz Liszt`
}, {
    quote:`"Freedom is the right to tell people what they do not want to hear."`,
    writer:`- George Orwell`
}, {
    quote:`"Despite everything, I believe that people are really good at heart."`,
    writer:`- Anne Frank`
}, {
    quote:`"A friend is someone who knows all about you and still loves you."`,
    writer:`- Elbert Hubbard `
}, {
    quote:`“Life isn't about finding yourself. Life is about creating yourself.”`,
    writer:`― George Bernard Shaw`
}, {
    quote:`“The heart is an arrow. It demands aim to land true.”`,
    writer:`― Leigh Bardugo, Six of Crows`
}, {
    quote:`“The most important thing is to enjoy your life—to be happy—it's all that matters.”`,
    writer:`― Audrey Hepburn`
},]

let btn =document.querySelector("#Qbtn");
let quote =document.querySelector(".quote");
let writer =document.querySelector(".writer");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})
