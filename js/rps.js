let wins = 0;
let loses = 0;
let draws = 0;

const choices = ['rock', 'paper', 'scissors'];

const icons = {
    'rock': '✊',
    'paper': '🖐️',
    'scissors': '✌️'
};

const winScoreEl = document.getElementById('win-score');
const loseScoreEl = document.getElementById('lose-score');
const drawScoreEl = document.getElementById('draw-score');

const userChoiceEl = document.getElementById('user-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const resultMsgEl = document.getElementById('result-msg');

function play(userChoice) {

    const rand = Math.floor(Math.random() * 3);
    const computerChoice = choices[rand];

    userChoiceEl.textContent = icons[userChoice];
    computerChoiceEl.textContent = icons[computerChoice];

    if (userChoice === computerChoice) {

        draws++;
        resultMsgEl.textContent = "平";
        resultMsgEl.className = "mt-3 text-secondary fw-bold";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {

        wins++;
        resultMsgEl.textContent = `贏`;
        resultMsgEl.className = "mt-3 text-success fw-bold";
    } else {

        loses++;
        resultMsgEl.textContent = `輸`;
        resultMsgEl.className = "mt-3 text-danger fw-bold";
    }

    updateScoreBoard();
}

function updateScoreBoard() {
    winScoreEl.textContent = wins;
    loseScoreEl.textContent = loses;
    drawScoreEl.textContent = draws;
}

function resetGame() {
    wins = 0;
    loses = 0;
    draws = 0;

    updateScoreBoard();

    userChoiceEl.textContent = '✊';
    computerChoiceEl.textContent = '✊';
    resultMsgEl.textContent = "已重置";
    resultMsgEl.className = "mt-3 text-secondary";
}