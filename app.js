const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
const resetbutton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");



let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;
function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('w', 'loser');
    p2Display.classList.remove('w', 'loser');

}




p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('w');
            p2Display.classList.add('loser');

        }
        p1Display.textContent = p1Score;
    }

})
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('loser');
            p2Display.classList.add('w');

        }
        p2Display.textContent = p2Score;
    }

})
resetbutton.addEventListener('click', reset)
winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
})

