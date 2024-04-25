const questions = [
    {
        question: 'which is the largest animal in the world',
        answers: [
            { text: 'shark', correct: false },
            { text: 'blue whale', correct: true },
            { text: 'elephant', correct: false },
            { text: 'giraffe', correct: false },
        ]
    },
    {
        question: 'which is the smallest continent in the world',
        answers: [
            { text: 'Africa', correct: false },
            { text: 'australia', correct: true },
            { text: 'asia', correct: false },
            { text: 'antartica', correct: false },
        ]
    },
    {
        question: 'which is the smallest country in the world',
        answers: [
            { text: 'bhutan', correct: false },
            { text: 'vatican city', correct: true },
            { text: 'nepal', correct: false },
            { text: 'sri lanaka', correct: false },
        ]
    },
    {
        question: 'which is the largest country in the world',
        answers: [
            { text: 'india', correct: false },
            { text: 'russia', correct: true },
            { text: 'china', correct: false },
            { text: 'usa', correct: false },
        ]
    },
    {
        question: 'which is the largest planet in the solar system',
        answers: [
            { text: 'earth', correct: false },
            { text: 'jupiter', correct: true },
            { text: 'mars', correct: false },
            { text: 'saturn', correct: false },
        ]
    }

];

const questionElement = document.querySelector('#question');
const answerBtn = document.querySelector('#answerbtn');
const nextBtn = document.querySelector('#nextBtn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'next';
    showQuestions();
}

function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '.' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;

        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = 'none';
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');

        score++;
    }
    else {
        selectedBtn.classList.add('incorrect');

    } Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "play again";
    nextBtn.style.display = 'block';
}

function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) { showQuestions(); }
    else { showScore(); }
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
})
startQuiz();