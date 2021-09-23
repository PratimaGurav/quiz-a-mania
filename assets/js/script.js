const questions = document.getElementById("question");
const scoreCount = document.getElementById("score");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const progressCount = document.getElementById("question-numbers");
const progressFullBar = document.getElementById("complete-progress");
const correctScore = 20;
const maxQuestions = 5;

let questionCounter = 0;
let score = 0;
let currentQuestion = {};
let availableQuestions = [];
let acceptAnswers = true;

//Referred James Q Quick video on YouTube 

// Fetch questions from Json file

fetch('./assets/js/questions.json')
    .then(res => res.json())
    .then(data => {
        questions = data;
        startGame()
    })
    .catch((error) => {
        alert("Sorry unable to load questions.")
})

// Start game function
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

if(questionCounter >= maxQuestions) {
    localStorage.setItem('currentRoundScore', score);
    return window.location.assign("./game-over.html");
}
//Updates Progress Bar
questionCounter ++;
progressCount.innerText = `Question ${questionCounter} / ${maxQuestions}`;
progressFullBar.style.width = `${(questionCounter/maxQuestions)* 100}%`;

//Updates question and choices 
const questionSelecter = Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions[questionSelecter];
questionText.innerText = currentQuestion.questions;

// Setting choices
choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice'+ number];
});

// Removing used questions
availableQuestions.splice(questionSelecter, 1);
acceptAnswers = true;

function increaseScore(total){
    score += total;
    scoreCount.innerText = score; 
}

// Attaching click event to all answers
choices.forEach(choice => {
    choice.addEventListener("click", function sortAnswer(e){
        if(!acceptAnswers) return; // if answer not accepted end the function.
        acceptAnswers = false; // set accept answers to false once an answer has been selected.
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset[number];

        //Styling correct or incorrect answers choosen
        let classToApply = selectedAnswer == currentQuestion.correctAnswer ? "correct-answer" : "wrong-answer";

        if(classToApply === "correctanswer") {
            increaseScore(correctScore);
        } else {

        }
        e.preventDefault();
        selectedOption.parentElement.classList.add(classToApply);
        selectedOption.parentElement.classList.add("answer-hover");
    });
});





