const questions = [
    {
        question: "What is the smallest unit of Bitcoin?",
        choices: ["Satoshi", "Wei", "Gwei", "Finney"],
        correctAnswer: "Satoshi"
    },
    {
        question: "Who is the pseudonymous creator of Bitcoin?",
        choices: ["Vitalik Buterin", "Satoshi Nakamoto", "Charlie Lee", "Roger Ver"],
        correctAnswer: "Satoshi Nakamoto"
    },
    {
        question: "What is the maximum supply of Bitcoin?",
        choices: ["10 million", "21 million", "100 million", "Unlimited"],
        correctAnswer: "21 million"
    },
    // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const resultMessage = document.getElementById("result-message");

function loadQuestion() {
    const questionData = questions[currentQuestion];
    questionElement.textContent = questionData.question;
    choicesElement.innerHTML = ""; // Clear previous choices

    questionData.choices.forEach((choice, index) => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", () => checkAnswer(choice));
        choicesElement.appendChild(li);
    });
}

function checkAnswer(selectedChoice) {
    const questionData = questions[currentQuestion];
    if (selectedChoice === questionData.correctAnswer) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    choicesElement.style.display = "none";
    nextButton.style.display = "none";
    resultContainer.style.display = "block";
    resultMessage.textContent = `You scored ${score} out of ${questions.length}!`;
}

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

loadQuestion(); // Load the first question
