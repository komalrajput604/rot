const questions = [ 
   
        {
          "num": 1,
          "question_en": "What is the derivative of sin(x)?",
          "question_hi": "sin(x) का अवकलज क्या है?",
          "options_en": ["cos(x)", "-cos(x)", "-sin(x)", "sec(x)"],
          "options_hi": ["cos(x)", "-cos(x)", "-sin(x)", "sec(x)"],
          "answer": "cos(x)",
          "answer_hi": "cos(x)",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What is the value of sin(90°)?",
          "question_hi": "sin(90°) का मान क्या है?",
          "options_en": ["0", "1", "√2/2", "1/2"],
          "options_hi": ["0", "1", "√2/2", "1/2"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "If A is a square matrix of order 3, then |kA| = ?",
          "question_hi": "यदि A क्रम 3 का एक वर्ग मैट्रिक्स है, तो |kA| = ?",
          "options_en": ["k|A|", "k²|A|", "k³|A|", "|A|"],
          "options_hi": ["k|A|", "k²|A|", "k³|A|", "|A|"],
          "answer": "k³|A|",
          "answer_hi": "k³|A|",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "The inverse of a matrix exists only if it is:",
          "question_hi": "किसी मैट्रिक्स का व्युत्क्रम तभी संभव है जब वह:",
          "options_en": ["Singular", "Non-singular", "Square", "Rectangular"],
          "options_hi": ["सिंगुलर", "गैर-सिंगुलर", "वर्गाकार", "आयताकार"],
          "answer": "Non-singular",
          "answer_hi": "गैर-सिंगुलर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What is the value of tan(45°)?",
          "question_hi": "tan(45°) का मान क्या है?",
          "options_en": ["0", "1", "√3", "1/√3"],
          "options_hi": ["0", "1", "√3", "1/√3"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "What is the integral of 1/x?",
          "question_hi": "1/x का समाकलन क्या है?",
          "options_en": ["x", "ln|x| + C", "e^x", "1/x²"],
          "options_hi": ["x", "ln|x| + C", "e^x", "1/x²"],
          "answer": "ln|x| + C",
          "answer_hi": "ln|x| + C",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "If A and B are two events, then P(A ∪ B) = ?",
          "question_hi": "यदि A और B दो घटनाएँ हैं, तो P(A ∪ B) = ?",
          "options_en": ["P(A) + P(B)", "P(A) - P(B)", "P(A) + P(B) - P(A ∩ B)", "P(A)P(B)"],
          "options_hi": ["P(A) + P(B)", "P(A) - P(B)", "P(A) + P(B) - P(A ∩ B)", "P(A)P(B)"],
          "answer": "P(A) + P(B) - P(A ∩ B)",
          "answer_hi": "P(A) + P(B) - P(A ∩ B)",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "The domain of the function f(x) = √(x - 3) is:",
          "question_hi": "सिद्ध करें कि f(x) = √(x - 3) का परिभाषा क्षेत्र क्या है?",
          "options_en": ["x ≥ 3", "x ≤ 3", "x > 3", "x < 3"],
          "options_hi": ["x ≥ 3", "x ≤ 3", "x > 3", "x < 3"],
          "answer": "x ≥ 3",
          "answer_hi": "x ≥ 3",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which of the following is a one-one function?",
          "question_hi": "निम्न में से कौन सा फलन एक-एक फलन है?",
          "options_en": ["f(x) = x²", "f(x) = sin x", "f(x) = e^x", "f(x) = |x|"],
          "options_hi": ["f(x) = x²", "f(x) = sin x", "f(x) = e^x", "f(x) = |x|"],
          "answer": "f(x) = e^x",
          "answer_hi": "f(x) = e^x",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is the maximum value of sin(x)?",
          "question_hi": "sin(x) का अधिकतम मान क्या है?",
          "options_en": ["0", "-1", "1", "∞"],
          "options_hi": ["0", "-1", "1", "∞"],
          "answer": "1",
          "answer_hi": "1",
          "attempted": false,
          "selected": ""
        },
      
        
      

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


