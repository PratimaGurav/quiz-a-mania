const username = document.getElementById('username');
const saveScore = document.getElementById('saveScore');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const Max_HighScores = 10;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};