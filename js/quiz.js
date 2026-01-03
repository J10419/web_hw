let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentCategoryId = '';

const categoryArea = document.getElementById('category');
const categoryContainer = document.getElementById('category-container');
const gameArea = document.getElementById('game');

const categoryNameDisplay = document.getElementById('category-name');
const questionText = document.getElementById('question-text');
const hintText = document.getElementById('hint-text');
const optionsContainer = document.getElementById('options-container');
const scoreDisplay = document.getElementById('score');
const currentNumDisplay = document.getElementById('current-question-num');
const totalNumDisplay = document.getElementById('total-question-num');
const resultArea = document.getElementById('result');
const resultMsg = document.getElementById('result-msg');
const nextBtn = document.getElementById('next-btn');
const restartArea = document.getElementById('restart');
const restartBtn = document.getElementById('restart-btn');
const backBtn = document.getElementById('back-btn');
const homeBtn = document.getElementById('home-btn');

function loadCategories() {

    categoryArea.classList.remove('d-none');
    gameArea.classList.add('d-none');
    categoryContainer.innerHTML = '<div class="spinner-border text-primary" role="status"></div>';

    fetch('../data/categories.json')
        .then(response => response.json())
        .then(result => {
            const categories = result.data.categories;
            renderCategories(categories);
        })
        .catch(error => {
            console.error('取得分類失敗', error);
            categoryContainer.innerHTML = '<p class="text-danger">無法載入分類</p>';
        });
}

function renderCategories(categories) {

    categoryContainer.innerHTML = '';

    categories.forEach(cat => {

        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4';
        colDiv.innerHTML = `
            <div class="card category-card h-100 shadow-sm text-white bg-primary bg-gradient">
                <div class="card-body d-flex align-items-center justify-content-center p-5">
                    <h3 class="m-0 fw-bold">${cat.name}</h3>
                </div>
            </div>
        `;

        colDiv.onclick = () => loadQuestionsByCategory(cat.id);

        categoryContainer.appendChild(colDiv);
    });
}

function loadQuestionsByCategory(categoryId) {
    currentCategoryId = categoryId;

    categoryArea.classList.add('d-none');
    gameArea.classList.remove('d-none');
    questionText.innerText = "Loading";
    optionsContainer.innerHTML = "";

    fetch(`../data/questions/${categoryId}.json`)
        .then(response => response.json())
        .then(result => {
            currentQuestions = result.data.questions;
            const catName = result.data.category.name;

            categoryNameDisplay.textContent = catName;

            console.log(`已載入 ${catName} 題目`, currentQuestions);

            initGame();
        })
        .catch(error => {
            console.error('取得題目失敗', error);
            questionText.innerText = "題目載入失敗";
        });
}

function initGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    totalNumDisplay.textContent = currentQuestions.length;
    restartArea.classList.add('d-none');
    resultArea.classList.add('d-none');
    loadQuestion();
}

function loadQuestion() {
    resultArea.classList.add('d-none');
    optionsContainer.innerHTML = '';
    hintText.classList.add('d-none');

    const currentQ = currentQuestions[currentQuestionIndex];

    questionText.textContent = currentQ.question;
    currentNumDisplay.textContent = currentQuestionIndex + 1;

    if(currentQ.hint) {
        hintText.textContent = `提示：${currentQ.hint}`;
        hintText.classList.remove('d-none');
    }

    currentQ.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-outline-primary option-btn p-3';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, selectedBtn) {

    const allBtns = optionsContainer.querySelectorAll('button');
    allBtns.forEach(btn => btn.disabled = true);

    const correctIndex = currentQuestions[currentQuestionIndex].answer;

    if (selectedIndex === correctIndex) {
        score += 100 / currentQuestions.length;
        score = Math.round(score);
        scoreDisplay.textContent = score;
        selectedBtn.className = 'btn btn-success option-btn p-3';
        resultMsg.textContent = "對";
        resultMsg.className = "text-success fw-bold mb-3";
    } else {
        selectedBtn.className = 'btn btn-danger option-btn p-3';
        allBtns[correctIndex].className = 'btn btn-success option-btn p-3'; // 顯示正確答案
        resultMsg.textContent = "錯";
        resultMsg.className = "text-danger fw-bold mb-3";
    }

    resultArea.classList.remove('d-none');
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        endGame();
    }
};

function endGame() {
    questionText.textContent = `遊戲結束,得分：${score} 分`;
    optionsContainer.innerHTML = '';
    hintText.classList.add('d-none');
    resultArea.classList.add('d-none');
    restartArea.classList.remove('d-none');
}

backBtn.onclick = () => {
    loadCategories();
};

restartBtn.onclick = () => {
    initGame();
};

homeBtn.onclick = () => {
    location.href = '../index.html';
};

loadCategories();