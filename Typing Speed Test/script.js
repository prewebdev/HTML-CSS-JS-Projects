const startButton = document.getElementById("startButton");
const inputArea = document.getElementById("input");
const quoteDisplay = document.getElementById("quote");
const timerDisplay = document.getElementById("timer");
const timeLeftDisplay = document.getElementById("timeLeft");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");


let startTime, endTime , timeInterval, timer, timeLeft;
let quote = "";

const quotes = [
    // Add your quotes here
    "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
    "Don't walk in front of me… I may not followDon't walk behind me… I may not leadWalk beside me… just be my friend.",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
    "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    "Some women choose to follow men, and some choose to follow their dreams. If you're wondering which way to go, remember that your career will never wake up and tell you that it doesn't love you anymore."
];
function getRandomQuote() {
    return quotes[Math.floor(Math.random()* quotes.length)];
}

function updateResults() {
    const userText = inputArea.Value;
    const wordCount = userText.trim().split(/\s+/).length;
    const totalTime = 60-timeLeft;
    const typingSpeedWPM = Math.round((wordCount/totalTime) * 60);
    const accuracy = calculateAccuracy(quote,userText);

    wpmDisplay.textContent = typingSpeedWPM;
    accuracyDisplay.textContent = accuracy;
}

function calculateAccuracy(original, input) {
    const originalWords = original.trim().split(/\s+/);
    const inputWords = input.trim().split(/\s+/);
    let correctCount = 0;

    originalWords.forEach((word, index) => {
        if (inputWords[index] === word) {
            correctCount++;
        }
    });

    return Math.round((correctCount / originalWords.length) * 100);
}


function startTest() {
    startButton.disabled = true;
    inputArea.disabled = false;
    inputArea.value = "";
    inputArea.focus();
    quote =  getRandomQuote();
    quoteDisplay.textContent = quote;
    startTime = new Date().getTime();
    timeLeft = 60;
    timerDisplay.textContent = timeLeft;

    timeInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            endTest();
        } else {
            timerDisplay.textContent = timeLeft;
            updateResults();
        }
    }, 1000);
}

function endTest() {
    endTime = new Date().getTime();
    const totalTime = (endTime - startTime) / 1000;
    const userText = inputArea.value;
    const wordCount = userText.trim().split(/\s+/).length;
    const typingSpeedWPM = Math.round((wordCount / totalTime) * 60);
    const accuracy = calculateAccuracy(quote, userText);

    clearInterval(timeInterval);
    wpmDisplay.textContent = typingSpeedWPM;
    accuracyDisplay.textContent = accuracy;


    inputArea.disabled =true;
    inputArea.value = "";

    startButton.disabled = false;
}

startButton.addEventListener("click", startTest);
inputArea.addEventListener("input", updateResults);