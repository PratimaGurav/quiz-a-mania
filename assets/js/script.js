/*jshint esversion: 6 */

//Constants
const question = document.getElementById('question');
const scoreCount = document.getElementById('score');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const displayProgress = document.getElementById('displayProgress');
const progressFullBar = document.getElementById('complete-progress');

//Points per correct answer
const correctScore = 20;
//Number of questions per game
const maxQuestions = 5;

//Let
let questionCounter = 0;
let score = 0;
let currentQuestion = {};
let availableQuestions = [];
let acceptAnswers = false;


// Speech Synthesis to read the questions, choices and prompt correct or incorrect.
function textToSpeech(text) {
    var msg = new SpeechSynthesisUtterance(text);
    msg.voice = window.speechSynthesis.default;
    msg.rate = 0.9;
    window.speechSynthesis.speak(msg);
}

//Referred James Q Quick video on YouTube (https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)

// Fetch questions from Json file
let questions = [];
fetch('./assets/js/questions.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(loadedQuestions){
        questions = loadedQuestions;
        startGame();
    })
    .catch((_error) => {
        console.log(_error);
    });
// Start game function.
function startGame(){
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

// Generate new random question from the available set of questions.
function getNewQuestion(){
if(availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    //Saves to local storage.
    localStorage.setItem('mostRecentScore', score);
    //Goes to the game-over page.
    return window.location.assign('./game-over.html');
}
//Updates Progress Bar.
questionCounter++;
displayProgress.innerText = `Question ${questionCounter}/${maxQuestions}`;
progressFullBar.style.width = `${(questionCounter/maxQuestions)* 100}%`;

//Updates random question and choices from the available set of questions.
const questionSelecter = Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions[questionSelecter];
question.innerText = currentQuestion.question;

//Sets choices
choices.forEach((choice) => {
    const number = choice.dataset.number;
    choice.innerText = currentQuestion['choice' + number];
});

//Removes used questions
availableQuestions.splice(questionSelecter, 1);
acceptAnswers = true;
}

//Attaching click event to all answers
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if(!acceptAnswers) return; // if answer not accepted end the function.
        acceptAnswers = false; // set accept answers to false once an answer has been selected.
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'; 

        if (classToApply === 'correct') {
            incrementScore(correctScore);
            textToSpeech(`correct!`);
        } else {
            textToSpeech(`incorrect!`);
        }
      
        selectedChoice.parentElement.classList.add(classToApply);
      
        // Adds delay before next question and removes CSS styling
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
          }, 1300);
    });
});

//Function to read out question and choices. called via onclick on question.html. Below code was modified with help of my Mentor.
function readQuestion() {
   textToSpeech(`${currentQuestion.question}`);
   textToSpeech('A');
   textToSpeech(`${currentQuestion.choice1}`);
   textToSpeech('B');
   textToSpeech(`${currentQuestion.choice2}`);
   textToSpeech('C');
   textToSpeech(`${currentQuestion.choice3}`);
   textToSpeech('D');
   textToSpeech(`${currentQuestion.choice4}`);
}

// Increment Score
function incrementScore(num){
    score += num;
    scoreCount.innerText = score;
}
