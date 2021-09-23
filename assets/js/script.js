const questions = document.getElementById("question");
const scoreCount = document.getElementById("score");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const progressCount = document.getElementById("question-numbers");
const progressFullBar = document.getElementById("complete-progress");

let questionCounter = 0;
let score = 0;
let currentQuestion = {};
let availableQuestions = questions;
let acceptAnswers = true;
const correctScore = 20;
const maxQuestions = 5;

if(questionCounter >= maxQuestions) {
    localStorage.setItem('currentRoundScore', score);
    return window.location.assign("./game-over.html");
}
questionCounter ++;
progressCount.innerText = `Question ${questionCounter} / ${maxQuestions}`;
progressFullBar.style.width = `${(questionCounter/maxQuestions)* 100}%`;
const questionSelecter = Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions[questionSelecter];
questionText.innerText = currentQuestion.questions;
answers.forEach(answer => {
    const number = answer.dataset.number;
    answer.innerText = currentQuestion[number];
});

availableQuestions.splice(questionSelecter, 1);
acceptAnswers = true;

function increaseScore(total){
    score += total;
    scoreCount.innerText = score; 
}

