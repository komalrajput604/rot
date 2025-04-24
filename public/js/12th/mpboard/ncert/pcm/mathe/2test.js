const questions = [ 
        {
          "num": 1,
          "question_en": "If a matrix A has order 2x3, how many rows does it have?",
          "question_hi": "यदि मैट्रिक्स A का क्रम 2x3 है, तो इसमें कितनी पंक्तियाँ होती हैं?",
          "options_en": ["2", "3", "5", "6"],
          "options_hi": ["2", "3", "5", "6"],
          "answer": "2",
          "answer_hi": "2",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which of the following is not a conic section?",
          "question_hi": "निम्न में से कौन एक शंक्व खंड नहीं है?",
          "options_en": ["Circle", "Ellipse", "Parabola", "Cube"],
          "options_hi": ["वृत्त", "दीर्घवृत्त", "परवलय", "घन"],
          "answer": "Cube",
          "answer_hi": "घन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the area under y = x from x = 0 to x = 2?",
          "question_hi": "x = 0 से x = 2 तक y = x के नीचे का क्षेत्रफल क्या है?",
          "options_en": ["1", "2", "3", "4"],
          "options_hi": ["1", "2", "3", "4"],
          "answer": "2",
          "answer_hi": "2",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which of the following is the solution of the equation x² - 5x + 6 = 0?",
          "question_hi": "x² - 5x + 6 = 0 समीकरण का हल क्या है?",
          "options_en": ["x = 2, 3", "x = -2, -3", "x = 1, 6", "x = 0, 5"],
          "options_hi": ["x = 2, 3", "x = -2, -3", "x = 1, 6", "x = 0, 5"],
          "answer": "x = 2, 3",
          "answer_hi": "x = 2, 3",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What is the maximum value of sin(x)?",
          "question_hi": "sin(x) का अधिकतम मान क्या है?",
          "options_en": ["1", "0", "-1", "2"],
          "options_hi": ["1", "0", "-1", "2"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which identity is used in integration of sin²x?",
          "question_hi": "sin²x के समाकलन में कौन सी पहचाना (identity) उपयोगी है?",
          "options_en": ["sin²x = 1 - cos²x", "sin²x = 1/2 (1 - cos2x)", "sin²x = sinx * sinx", "None of these"],
          "options_hi": ["sin²x = 1 - cos²x", "sin²x = 1/2 (1 - cos2x)", "sin²x = sinx * sinx", "इनमें से कोई नहीं"],
          "answer": "sin²x = 1/2 (1 - cos2x)",
          "answer_hi": "sin²x = 1/2 (1 - cos2x)",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "If A is an identity matrix, then A × A equals:",
          "question_hi": "यदि A एक एकात्मक मैट्रिक्स है, तो A × A का मान है:",
          "options_en": ["A", "0", "2A", "A²"],
          "options_hi": ["A", "0", "2A", "A²"],
          "answer": "A",
          "answer_hi": "A",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "The value of the determinant of identity matrix is:",
          "question_hi": "एकात्मक मैट्रिक्स का डिटरमिनेंट का मान क्या होता है?",
          "options_en": ["0", "1", "-1", "2"],
          "options_hi": ["0", "1", "-1", "2"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "The domain of y = √(x-2) is:",
          "question_hi": "y = √(x-2) का परिभाषा क्षेत्र (domain) क्या है?",
          "options_en": ["x ≥ 2", "x > 2", "x < 2", "All real numbers"],
          "options_hi": ["x ≥ 2", "x > 2", "x < 2", "सभी वास्तविक संख्याएँ"],
          "answer": "x ≥ 2",
          "answer_hi": "x ≥ 2",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "If A = [2 3; 1 4], what is the trace of matrix A?",
          "question_hi": "यदि A = [2 3; 1 4], तो A का ट्रेस (trace) क्या है?",
          "options_en": ["6", "5", "7", "4"],
          "options_hi": ["6", "5", "7", "4"],
          "answer": "6",
          "answer_hi": "6",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What is the integral of eˣ?",
          "question_hi": "eˣ का समाकलन क्या है?",
          "options_en": ["eˣ + C", "eˣ", "x * eˣ", "ln(x)"],
          "options_hi": ["eˣ + C", "eˣ", "x * eˣ", "ln(x)"],
          "answer": "eˣ + C",
          "answer_hi": "eˣ + C",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "If f(x) = x², then f'(x) = ?",
          "question_hi": "यदि f(x) = x², तो f'(x) = ?",
          "options_en": ["2x", "x", "x²", "1"],
          "options_hi": ["2x", "x", "x²", "1"],
          "answer": "2x",
          "answer_hi": "2x",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What is the standard deviation of a constant data set?",
          "question_hi": "किसी नियतांक (constant) डेटा सेट का मानक विचलन क्या होता है?",
          "options_en": ["0", "1", "Undefined", "Equal to mean"],
          "options_hi": ["0", "1", "अपरिभाषित", "माध्य के बराबर"],
          "answer": "0",
          "answer_hi": "0",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "The angle between the x-axis and y-axis is:",
          "question_hi": "x-अक्ष और y-अक्ष के बीच कोण है:",
          "options_en": ["0°", "45°", "90°", "180°"],
          "options_hi": ["0°", "45°", "90°", "180°"],
          "answer": "90°",
          "answer_hi": "90°",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What is the mean of first 10 natural numbers?",
          "question_hi": "प्रथम 10 प्राकृतिक संख्याओं का औसत क्या है?",
          "options_en": ["5", "5.5", "6", "4.5"],
          "options_hi": ["5", "5.5", "6", "4.5"],
          "answer": "5.5",
          "answer_hi": "5.5",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which of the following is a quadratic equation?",
          "question_hi": "निम्न में से कौन सा द्विघात समीकरण है?",
          "options_en": ["x² + 2x + 1 = 0", "x + 2 = 0", "x³ + 1 = 0", "√x + 1 = 0"],
          "options_hi": ["x² + 2x + 1 = 0", "x + 2 = 0", "x³ + 1 = 0", "√x + 1 = 0"],
          "answer": "x² + 2x + 1 = 0",
          "answer_hi": "x² + 2x + 1 = 0",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "In probability, the value of P(E) lies between:",
          "question_hi": "प्रायिकता में P(E) का मान किस सीमा के बीच होता है?",
          "options_en": ["0 to 1", "1 to 2", "-1 to 1", "Any value"],
          "options_hi": ["0 से 1", "1 से 2", "-1 से 1", "कोई भी मान"],
          "answer": "0 to 1",
          "answer_hi": "0 से 1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "If tanθ = 1, then θ equals:",
          "question_hi": "यदि tanθ = 1, तो θ का मान है:",
          "options_en": ["30°", "45°", "60°", "90°"],
          "options_hi": ["30°", "45°", "60°", "90°"],
          "answer": "45°",
          "answer_hi": "45°",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "The solution set of |x| < 3 is:",
          "question_hi": "|x| < 3 का हल है:",
          "options_en": ["x < 3", "x > -3", "-3 < x < 3", "x > 3"],
          "options_hi": ["x < 3", "x > -3", "-3 < x < 3", "x > 3"],
          "answer": "-3 < x < 3",
          "answer_hi": "-3 < x < 3",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "If the angle between two vectors is 90°, then their dot product is:",
          "question_hi": "यदि दो सदिशों के बीच का कोण 90° है, तो उनका डॉट गुणनफल क्या होगा?",
          "options_en": ["0", "1", "-1", "Maximum"],
          "options_hi": ["0", "1", "-1", "अधिकतम"],
          "answer": "0",
          "answer_hi": "0",
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


