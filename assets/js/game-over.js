/*jshint esversion:6*/
const username = document.getElementById('username');
const saveScore = document.getElementById('saveScore');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const Max_HighScores = 10;

// Set final score to Most Recent Score.
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
});

//populate score with username and score, push score to highScores, sort highScores by asscending order of scores, splice highScores, store highScores in localStorage and return to homepage. This function is called onclick in game-over.html
function saveHighScore(e){
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('./highscore.html');
}