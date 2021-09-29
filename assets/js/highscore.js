const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML =  highScores
    .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
.join('');

// Clear highScore
function clearScores() {
    if (confirm("Do you want to clear the high scores ?") == true) {
        localStorage.clear();
        return window.location.assign('./highscore.html');
    }
    else {
        return;
    }
}