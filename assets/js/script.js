const question = document.getElementById('question');
const scoreCount = document.getElementById('score');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const displayProgress = document.getElementById('displayProgress');
const progressFullBar = document.getElementById('complete-progress');
const correctScore = 10;
const maxQuestions = 5;

let questionCounter = 0;
let score = 0;
let currentQuestion = {};
let availableQuestions = [];
let acceptAnswers = false;

//Referred James Q Quick video on YouTube 

// Fetch questions from Json file
let questions = [];
fetch('./assets/js/questions.json')
    .then((res) => {
        return res.json();
    })
    .then(loadedQuestions => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((error) => {
        console.error(error);
});

// Start game function
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
if(availableQuestions.lenght === 0 || questionCounter >= maxQuestions) {
    localStorage.setItem('currentRoundScore', score);
    return window.location.assign('./game-over.html');
}
//Updates Progress Bar
questionCounter ++;
displayProgress.innerText = `Question ${questionCounter}/${maxQuestions}`;
progressFullBar.style.width = `${(questionCounter/maxQuestions)* 100}%`;

//Updates question and choices 
const questionSelecter = Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions[questionSelecter];
question.innerText = currentQuestion.question;

// Setting choices
choices.forEach((choice) => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
});

// Removing used questions
availableQuestions.splice(questionSelecter, 1);
acceptAnswers = true;
};

// Attaching click event to all answers
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if(!acceptAnswers) return; // if answer not accepted end the function.
        acceptAnswers = false; // set accept answers to false once an answer has been selected.
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        const classToApply =
        selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'; 

        if (classToApply === 'correct') {
            incrementScore(correctScore);
          }
      
          selectedChoice.parentElement.classList.add(classToApply);
      
          setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
          }, 1000);
    });
});

// Increment Score
incrementScore = num => {
score += num;
scoreCount.innerText = score;
};

// High Scores 
const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
highScoresList.innerHTML = highScores
  .map(score => {
    return `<ol class="high-score">${score.name} - ${score.score}</ol>`;
  })
  .join("");
