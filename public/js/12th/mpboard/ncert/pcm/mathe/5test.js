const questions = [ 
  
    
        {
          "num": 1,
          "question_en": "The slope of a line perpendicular to a line with slope m is:",
          "question_hi": "एक रेखा जिसके ढाल m है, उसके लम्बवत रेखा की ढाल क्या होगी?",
          "options_en": ["-m", "1/m", "-1/m", "m"],
          "options_hi": ["-m", "1/m", "-1/m", "m"],
          "answer": "-1/m",
          "answer_hi": "-1/m",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "The value of the determinant of identity matrix of order 3 is:",
          "question_hi": "क्रम 3 के पहचान मैट्रिक्स का निर्धारक मान क्या है?",
          "options_en": ["0", "1", "2", "3"],
          "options_hi": ["0", "1", "2", "3"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the area under the curve y = x from 0 to 2?",
          "question_hi": "वक्र y = x के नीचे 0 से 2 तक का क्षेत्रफल क्या है?",
          "options_en": ["2", "3", "4", "2"],
          "options_hi": ["2", "3", "4", "2"],
          "answer": "2",
          "answer_hi": "2",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which of the following is not a vector quantity?",
          "question_hi": "निम्न में से कौन एक सदिश राशि नहीं है?",
          "options_en": ["Velocity", "Displacement", "Force", "Speed"],
          "options_hi": ["वेग", "विस्थापन", "बल", "गति"],
          "answer": "Speed",
          "answer_hi": "गति",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "The number of solutions of sin x = 0 in [0, 2π] is:",
          "question_hi": "[0, 2π] में sin x = 0 के कितने हल हैं?",
          "options_en": ["1", "2", "3", "4"],
          "options_hi": ["1", "2", "3", "4"],
          "answer": "2",
          "answer_hi": "2",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "If f(x) = x² + 3x + 2, then f(-1) = ?",
          "question_hi": "यदि f(x) = x² + 3x + 2, तो f(-1) = ?",
          "options_en": ["0", "1", "-2", "2"],
          "options_hi": ["0", "1", "-2", "2"],
          "answer": "0",
          "answer_hi": "0",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "If log 2 = 0.3010, what is the value of log 8?",
          "question_hi": "यदि log 2 = 0.3010 है, तो log 8 का मान क्या होगा?",
          "options_en": ["0.9030", "0.3010", "1.2040", "1.0000"],
          "options_hi": ["0.9030", "0.3010", "1.2040", "1.0000"],
          "answer": "0.9030",
          "answer_hi": "0.9030",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which of the following is a decreasing function in (0, ∞)?",
          "question_hi": "(0, ∞) में निम्न में से कौन सा घटता हुआ फलन है?",
          "options_en": ["f(x) = x", "f(x) = ln(x)", "f(x) = 1/x", "f(x) = x²"],
          "options_hi": ["f(x) = x", "f(x) = ln(x)", "f(x) = 1/x", "f(x) = x²"],
          "answer": "f(x) = 1/x",
          "answer_hi": "f(x) = 1/x",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What is the minimum value of the function f(x) = x² + 2x + 1?",
          "question_hi": "फलन f(x) = x² + 2x + 1 का न्यूनतम मान क्या है?",
          "options_en": ["1", "0", "-1", "-∞"],
          "options_hi": ["1", "0", "-1", "-∞"],
          "answer": "0",
          "answer_hi": "0",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "If A = [2 0; 0 3], then det(A) = ?",
          "question_hi": "यदि A = [2 0; 0 3], तो det(A) = ?",
          "options_en": ["5", "6", "0", "1"],
          "options_hi": ["5", "6", "0", "1"],
          "answer": "6",
          "answer_hi": "6",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "If a function is both one-one and onto, it is called:",
          "question_hi": "यदि एक फलन एक-एक और परिपूर्ण दोनों है, तो वह कहलाता है:",
          "options_en": ["Surjection", "Injection", "Bijection", "None"],
          "options_hi": ["सर्जेक्शन", "इंजेक्शन", "बाइ젝्शन", "कोई नहीं"],
          "answer": "Bijection",
          "answer_hi": "बाइ젝्शन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What is the angle between two perpendicular lines?",
          "question_hi": "दो लम्बवत रेखाओं के बीच कोण कितना होता है?",
          "options_en": ["0°", "45°", "90°", "180°"],
          "options_hi": ["0°", "45°", "90°", "180°"],
          "answer": "90°",
          "answer_hi": "90°",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which of the following is a solution of the equation x² = 9?",
          "question_hi": "निम्न में से कौन समीकरण x² = 9 का हल है?",
          "options_en": ["3", "-3", "Both", "None"],
          "options_hi": ["3", "-3", "दोनों", "कोई नहीं"],
          "answer": "Both",
          "answer_hi": "दोनों",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "If A = {1,2}, B = {a,b}, how many functions from A to B?",
          "question_hi": "यदि A = {1,2}, B = {a,b}, तो A से B में कितने फलन संभव हैं?",
          "options_en": ["2", "4", "6", "8"],
          "options_hi": ["2", "4", "6", "8"],
          "answer": "4",
          "answer_hi": "4",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "If f(x) = x³, then f'(x) = ?",
          "question_hi": "यदि f(x) = x³, तो f'(x) = ?",
          "options_en": ["x²", "2x", "3x²", "x³"],
          "options_hi": ["x²", "2x", "3x²", "x³"],
          "answer": "3x²",
          "answer_hi": "3x²",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "If f(x) = 1/x, then f'(x) = ?",
          "question_hi": "यदि f(x) = 1/x, तो f'(x) = ?",
          "options_en": ["-1/x²", "1/x²", "-x", "x²"],
          "options_hi": ["-1/x²", "1/x²", "-x", "x²"],
          "answer": "-1/x²",
          "answer_hi": "-1/x²",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "If sin²(x) + cos²(x) = ?",
          "question_hi": "sin²(x) + cos²(x) = ?",
          "options_en": ["0", "1", "2", "sin(x)cos(x)"],
          "options_hi": ["0", "1", "2", "sin(x)cos(x)"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "The graph of y = |x| is:",
          "question_hi": "y = |x| का ग्राफ कैसा होता है?",
          "options_en": ["V-shaped", "U-shaped", "Linear", "Parabolic"],
          "options_hi": ["V-आकार", "U-आकार", "रेखीय", "परवलयी"],
          "answer": "V-shaped",
          "answer_hi": "V-आकार",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What is the value of cos(0)?",
          "question_hi": "cos(0) का मान क्या है?",
          "options_en": ["0", "1", "-1", "Undefined"],
          "options_hi": ["0", "1", "-1", "अपरिभाषित"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "The maximum value of cos(x) is:",
          "question_hi": "cos(x) का अधिकतम मान क्या है?",
          "options_en": ["0", "1", "-1", "∞"],
          "options_hi": ["0", "1", "-1", "∞"],
          "answer": "1",
          "answer_hi": "1",
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


