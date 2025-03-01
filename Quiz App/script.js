const data = [
    {
        question: "who is making the web standards?",
        a: "Google",
        b: "Microsoft",
        c: "Mozilla",
        d: "The World Wide Web Consortium",
        correct: "d",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        a: "<head>",
        b: "<heading>",
        c: "<h1>",
        d: "<h6>",
        correct: "c",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML Stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const optionA = document.getElementById("optionA")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const optionD = document.getElementById("optionD")

const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = data[currentQuiz]

    questionEl.innerText = currentQuizData.question
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
    optionD.innerText = currentQuizData.d 
}

function deselectAnswers() {
    answerEls.forEach((answerEl) =>(
        answerEl.checked = false
    ))
}

function getSelected() {
    let answer

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    if(answer) {
        if(answer === data[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < data.length) {
            loadQuiz()
        }
        else {
            quiz.innerHTML = `
               <h2>You Answered ${score}/${data.length} Quetions Correctly</h2>
    <button onclick="location.reload()">Do it Again</button>
            `
        }
    }
})