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
let questions = [];

// Speech Synthesis to read the questions
const speak = function textToSpeech(text) {
    var msg = new SpeechSynthesisUtterance(text);
    msg.voice = window.speechSynthesis.default;
    msg.rate = 0.9;
    window.speechSynthesis.speak(msg);
};

//Referred James Q Quick video on YouTube 

// Fetch questions from Json file

fetch('./assets/js/questions.json')
    .then((res) => {
        return res.json();
    })
    .then(loadedQuestions => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((_error) => {
        console.log("Unable to load questions");
});  

// Start game function
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
if(availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    //Saves to local storage
    localStorage.setItem('mostRecentScore', score);
    //Goes to the game-over page
    return window.location.assign('./game-over.html');
}
//Updates Progress Bar
questionCounter++;
displayProgress.innerText = `Question ${questionCounter}/${maxQuestions}`;
progressFullBar.style.width = `${(questionCounter/maxQuestions)* 100}%`;

//Updates question and choices 
const questionSelecter = Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions[questionSelecter];
question.innerText = currentQuestion.question;

//Sets choices
choices.forEach((choice) => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
});

//Removes used questions
availableQuestions.splice(questionSelecter, 1);
acceptAnswers = true;
};

//Attaching click event to all answers
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if(!acceptAnswers) return; // if answer not accepted end the function.
        acceptAnswers = false; // set accept answers to false once an answer has been selected.
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'; 

        if (classToApply === 'correct') {
            incrementScore(correctScore);
            speak(`correct!`);
        } else {
            speak(`incorrect!`);
        }
      
        selectedChoice.parentElement.classList.add(classToApply);
      
        // Adds delay before next question and removes CSS styling
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
          }, 1300);
    });
});

    //read out question function. called via onclick on quiz.html
        function readQuestion() {
            speak(`${currentQuestion.question}`);
        }

    // Increment Score
        incrementScore = num => {
        score += num;
        scoreCount.innerText = score;
        };

