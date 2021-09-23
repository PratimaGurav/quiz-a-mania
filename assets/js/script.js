const question = document.getElementById("question");
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
let acceptingAnswers = false;
let questions = [];

//Referred James Q Quick video on YouTube 

// Fetch questions from Json file

fetch('./assets/js/questions.json')
    .then(res => {
        return res.json();
    })
    .then(loadedQuestions => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((error) => {
        alert("Sorry, Unable to load questions.")
})

// Start game function
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
if(availableQuestions.lenght === 0 || questionCounter >= maxQuestions) {
    localStorage.setItem('currentRoundScore', score);
    return window.location.assign(".game-over.html");
}
//Updates Progress Bar
questionCounter ++;
progressCount.innerText = `Question ${questionCounter}/${maxQuestions}`;
progressFullBar.style.width = `${(questionCounter/maxQuestions)* 100}%`;

//Updates question and choices 
const questionSelecter = Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions[questionSelecter];
questionText.innerText = currentQuestion.questions;

// Setting choices
answers.forEach(answer => {
    const number = answer.dataset['number'];
    answer.innerText = currentQuestion['answer' + number];
});

// Removing used questions
availableQuestions.splice(questionSelecter, 1);
acceptAnswers = true;
};

// Attaching click event to all answers
answers.forEach(answer => {
    answer.addEventListener('click', e => {
        if(!acceptAnswers) return; // if answer not accepted end the function.
        acceptAnswers = false; // set accept answers to false once an answer has been selected.
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset['number'];

        //Styling correct or incorrect answers choosen
        let classToApply = selectedAnswer == currentQuestion.correctAnswer ? 'correct-answer' : 'wrong-answer';

        if(classToApply == "correct-answer") {
            increaseScore(correctScore);
        } else {

        }
        e.preventDefault();
        selectedOption.parentElement.classList.add(classToApply);
        selectedOption.parentElement.classList.add("answer-hover");
    });

    function increaseScore(total){
        score += total;
        scoreCount.innerText = score; 
    }
});





