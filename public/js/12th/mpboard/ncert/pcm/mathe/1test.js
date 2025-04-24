const questions = [ 

    
        {
          "num": 1,
          "question_en": "What is the value of sin(90°)?",
          "question_hi": "sin(90°) का मान क्या है?",
          "options_en": ["0", "1", "0.5", "√2/2"],
          "options_hi": ["0", "1", "0.5", "√2/2"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What is the derivative of sin(x)?",
          "question_hi": "sin(x) का अवकलज क्या है?",
          "options_en": ["cos(x)", "-cos(x)", "-sin(x)", "sec²(x)"],
          "options_hi": ["cos(x)", "-cos(x)", "-sin(x)", "sec²(x)"],
          "answer": "cos(x)",
          "answer_hi": "cos(x)",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "The value of log₁₀(1) is:",
          "question_hi": "log₁₀(1) का मान है:",
          "options_en": ["0", "1", "10", "-1"],
          "options_hi": ["0", "1", "10", "-1"],
          "answer": "0",
          "answer_hi": "0",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "The inverse of a 2x2 matrix exists only if:",
          "question_hi": "2x2 मैट्रिक्स का व्युत्क्रम तभी होता है जब:",
          "options_en": ["Determinant = 0", "Determinant ≠ 0", "Trace = 0", "All elements are equal"],
          "options_hi": ["डिटरमिनेंट = 0", "डिटरमिनेंट ≠ 0", "ट्रेस = 0", "सभी अवयव समान हों"],
          "answer": "Determinant ≠ 0",
          "answer_hi": "डिटरमिनेंट ≠ 0",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which function is not continuous at x = 0?",
          "question_hi": "x = 0 पर कौन सा फलन सतत नहीं है?",
          "options_en": ["sin(x)", "x²", "1/x", "eˣ"],
          "options_hi": ["sin(x)", "x²", "1/x", "eˣ"],
          "answer": "1/x",
          "answer_hi": "1/x",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "The slope of the tangent to the curve y = x² at x = 2 is:",
          "question_hi": "x = 2 पर वक्र y = x² के स्पर्श रेखा का ढाल है:",
          "options_en": ["2", "4", "1", "8"],
          "options_hi": ["2", "4", "1", "8"],
          "answer": "4",
          "answer_hi": "4",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "The general solution of the differential equation dy/dx = y is:",
          "question_hi": "dy/dx = y का सामान्य हल है:",
          "options_en": ["y = x", "y = e^x", "y = Ce^x", "y = x + C"],
          "options_hi": ["y = x", "y = e^x", "y = Ce^x", "y = x + C"],
          "answer": "y = Ce^x",
          "answer_hi": "y = Ce^x",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What is the sum of first n natural numbers?",
          "question_hi": "प्रथम n प्राकृतिक संख्याओं का योग क्या है?",
          "options_en": ["n(n+1)/2", "n(n-1)/2", "n²", "(n+1)²"],
          "options_hi": ["n(n+1)/2", "n(n-1)/2", "n²", "(n+1)²"],
          "answer": "n(n+1)/2",
          "answer_hi": "n(n+1)/2",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "If A and B are independent events, then P(A ∩ B) equals:",
          "question_hi": "यदि A और B स्वतंत्र घटनाएँ हैं, तो P(A ∩ B) का मान होगा:",
          "options_en": ["P(A) + P(B)", "P(A) × P(B)", "P(A) - P(B)", "P(A)/P(B)"],
          "options_hi": ["P(A) + P(B)", "P(A) × P(B)", "P(A) - P(B)", "P(A)/P(B)"],
          "answer": "P(A) × P(B)",
          "answer_hi": "P(A) × P(B)",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "The mean of first 5 even natural numbers is:",
          "question_hi": "प्रथम 5 सम प्राकृतिक संख्याओं का औसत है:",
          "options_en": ["4", "5", "6", "7"],
          "options_hi": ["4", "5", "6", "7"],
          "answer": "6",
          "answer_hi": "6",
          "attempted": false,
          "selected": ""
        }
      
      
  
];




let currentQuestion = 0;
let language = "en"; // Default English
let timeLeft = 180 * 60; // 180 minutes in seconds
let timerInterval;

function loadQuestion(index) {
const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

const optionsElement = document.getElementById("options");
optionsElement.innerHTML = "";

optionsArray.forEach(option => {
optionsElement.innerHTML += `
    <li>
        <input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}
    </li>
`;
});

updateNavigation();
}

function markAttempted(index, selectedAnswer) {
questions[index].attempted = true;
questions[index].selected = selectedAnswer;
updateNavigation();
}

function nextQuestion() {
if (currentQuestion < questions.length - 1) {
currentQuestion++;
loadQuestion(currentQuestion);
}
}

function prevQuestion() {
if (currentQuestion > 0) {
currentQuestion--;
loadQuestion(currentQuestion);
}
}

function changeLanguage() {
language = document.getElementById("languageSelect").value;
loadQuestion(currentQuestion);
}

function submitQuiz() {
let confirmation = confirm("Are you sure you want to submit the test?");
if (!confirmation) return;

clearInterval(timerInterval);

let attempted = 0, notAttempted = 0, score = 0;
const results = [];

questions.forEach(q => {
if (q.attempted) {
    attempted++;
    if (q.selected === q.answer || q.selected === q.answer_hi) {
        score++;
    }
} else {
    notAttempted++;
}
results.push({
    question: q.question_en,
    selected: q.selected || "Not Answered",
    correct: q.answer
});
});

localStorage.setItem("attempted", attempted);
localStorage.setItem("notAttempted", notAttempted);
localStorage.setItem("score", score);
localStorage.setItem("results", JSON.stringify(results));

let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
if (viewResult) {
window.location.href = "/Deshbord/category/test/submit-test.html";
}
}

function startTimer() {
const timerElement = document.getElementById("timer");

timerInterval = setInterval(() => {
if (timeLeft <= 0) {
    clearInterval(timerInterval);
    alert("Time's up! Submitting the quiz automatically.");
    submitQuiz();
} else {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    timerElement.textContent = `Time Left: ${hours.toString().padStart(2, '0')}:${minutes
        .toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeLeft--;
}
}, 1000);
}

function updateNavigation() {
const navElement = document.getElementById("circleContainer");
navElement.innerHTML = "";

questions.forEach((q, index) => {
let color = "gray";
if (q.attempted) color = "green";
if (q.selected === "") color = "gray";
if (index === currentQuestion) color = "blue";

navElement.innerHTML += `
    <div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>
        ${index + 1}
    </div>`;
});
}

window.onload = function () {
loadQuestion(currentQuestion);
startTimer();
};


