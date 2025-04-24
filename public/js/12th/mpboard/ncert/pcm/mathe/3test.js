const questions = [ 
        {
          "num": 1,
          "question_en": "What is the derivative of sin x?",
          "question_hi": "sin x का अवकलज क्या है?",
          "options_en": ["cos x", "-cos x", "sin x", "-sin x"],
          "options_hi": ["cos x", "-cos x", "sin x", "-sin x"],
          "answer": "cos x",
          "answer_hi": "cos x",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What is the value of sin 90°?",
          "question_hi": "sin 90° का मान क्या है?",
          "options_en": ["0", "1", "√2", "½"],
          "options_hi": ["0", "1", "√2", "½"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the integral of 1/x?",
          "question_hi": "1/x का समाकलन क्या है?",
          "options_en": ["ln|x| + C", "1/x² + C", "x + C", "x²/2 + C"],
          "options_hi": ["ln|x| + C", "1/x² + C", "x + C", "x²/2 + C"],
          "answer": "ln|x| + C",
          "answer_hi": "ln|x| + C",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "If A is a square matrix, then |A| is called?",
          "question_hi": "यदि A एक वर्ग मैट्रिक्स है, तो |A| को क्या कहते हैं?",
          "options_en": ["Transpose", "Determinant", "Adjoint", "Inverse"],
          "options_hi": ["संयुग्म", "निर्धारक", "सहपाठ", "व्युत्क्रम"],
          "answer": "Determinant",
          "answer_hi": "निर्धारक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What is the value of tan 45°?",
          "question_hi": "tan 45° का मान क्या है?",
          "options_en": ["0", "1", "∞", "√3"],
          "options_hi": ["0", "1", "∞", "√3"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "What is the derivative of e^x?",
          "question_hi": "e^x का अवकलज क्या है?",
          "options_en": ["x * e^x", "e^x", "ln x", "1/x"],
          "options_hi": ["x * e^x", "e^x", "ln x", "1/x"],
          "answer": "e^x",
          "answer_hi": "e^x",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "What is the domain of the function f(x) = √(x-2)?",
          "question_hi": "फलन f(x) = √(x-2) का परिभाषा क्षेत्र क्या है?",
          "options_en": ["x ≥ 2", "x > 0", "x ≤ 2", "All real numbers"],
          "options_hi": ["x ≥ 2", "x > 0", "x ≤ 2", "सभी वास्तविक संख्याएँ"],
          "answer": "x ≥ 2",
          "answer_hi": "x ≥ 2",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "The value of log 1 is?",
          "question_hi": "log 1 का मान क्या है?",
          "options_en": ["0", "1", "∞", "-1"],
          "options_hi": ["0", "1", "∞", "-1"],
          "answer": "0",
          "answer_hi": "0",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What is the slope of a line parallel to x-axis?",
          "question_hi": "x-अक्ष के समांतर रेखा का ढाल क्या होता है?",
          "options_en": ["0", "1", "∞", "-1"],
          "options_hi": ["0", "1", "∞", "-1"],
          "answer": "0",
          "answer_hi": "0",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is the solution of the equation x² = 9?",
          "question_hi": "समीकरण x² = 9 का हल क्या है?",
          "options_en": ["±3", "3", "-3", "0"],
          "options_hi": ["±3", "3", "-3", "0"],
          "answer": "±3",
          "answer_hi": "±3",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What is the value of cos 0°?",
          "question_hi": "cos 0° का मान क्या है?",
          "options_en": ["1", "0", "-1", "∞"],
          "options_hi": ["1", "0", "-1", "∞"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "The maximum value of sin x is?",
          "question_hi": "sin x का अधिकतम मान क्या है?",
          "options_en": ["1", "0", "-1", "∞"],
          "options_hi": ["1", "0", "-1", "∞"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What is the angle between two perpendicular lines?",
          "question_hi": "दो लंब रेखाओं के बीच कोण क्या होता है?",
          "options_en": ["90°", "0°", "180°", "45°"],
          "options_hi": ["90°", "0°", "180°", "45°"],
          "answer": "90°",
          "answer_hi": "90°",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which function is not differentiable at x = 0?",
          "question_hi": "निम्नलिखित में से कौन सा फलन x = 0 पर अवकलनीय नहीं है?",
          "options_en": ["|x|", "x²", "x³", "sin x"],
          "options_hi": ["|x|", "x²", "x³", "sin x"],
          "answer": "|x|",
          "answer_hi": "|x|",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What is the distance formula in 2D geometry?",
          "question_hi": "2D ज्यामिति में दूरी सूत्र क्या है?",
          "options_en": ["√[(x₂ - x₁)² + (y₂ - y₁)²]", "(x₂ + x₁)² + (y₂ + y₁)²", "x₂ - x₁", "x₁ + y₁"],
          "options_hi": ["√[(x₂ - x₁)² + (y₂ - y₁)²]", "(x₂ + x₁)² + (y₂ + y₁)²", "x₂ - x₁", "x₁ + y₁"],
          "answer": "√[(x₂ - x₁)² + (y₂ - y₁)²]",
          "answer_hi": "√[(x₂ - x₁)² + (y₂ - y₁)²]",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "What is the value of determinant of identity matrix of order 2?",
          "question_hi": "क्रम 2 की पहचान मैट्रिक्स का निर्धारक मान क्या है?",
          "options_en": ["1", "0", "2", "-1"],
          "options_hi": ["1", "0", "2", "-1"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "What is the range of sin x?",
          "question_hi": "sin x का संचरण क्षेत्र क्या है?",
          "options_en": ["[-1, 1]", "[0, 1]", "[0, ∞)", "(-∞, ∞)"],
          "options_hi": ["[-1, 1]", "[0, 1]", "[0, ∞)", "(-∞, ∞)"],
          "answer": "[-1, 1]",
          "answer_hi": "[-1, 1]",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "What is the value of a × a⁰?",
          "question_hi": "a × a⁰ का मान क्या है?",
          "options_en": ["a", "1", "0", "a²"],
          "options_hi": ["a", "1", "0", "a²"],
          "answer": "a",
          "answer_hi": "a",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What is the equation of a straight line with slope m and y-intercept c?",
          "question_hi": "ढाल m और y-अवरोध c के साथ सीधी रेखा का समीकरण क्या है?",
          "options_en": ["y = mx + c", "y = c", "x = my + c", "y = m + x"],
          "options_hi": ["y = mx + c", "y = c", "x = my + c", "y = m + x"],
          "answer": "y = mx + c",
          "answer_hi": "y = mx + c",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "What is the shape of the path of a projectile?",
          "question_hi": "प्रक्षिप्त पिंड की गति का पथ कैसा होता है?",
          "options_en": ["Circular", "Parabolic", "Linear", "Elliptical"],
          "options_hi": ["वृतीय", "परवलयी", "रेखीय", "दीर्घवृत्तीय"],
          "answer": "Parabolic",
          "answer_hi": "परवलयी",
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


