/*jshint esversion:6*/
const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML =  highScores.map(
    function (score){
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
.join('');

// Clear highScore from local storage, alert the user to confirm the action when clicked. An onclick event called in highscore.html.
function clearScores() {
    if (confirm("Do you want to clear the high scores ?") == true) {
        localStorage.clear();
        return window.location.assign('./highscore.html');
    }
    else {
        return;
    }
}