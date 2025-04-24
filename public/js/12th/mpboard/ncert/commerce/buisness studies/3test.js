const questions = [    
    {
      "num": 1,
      "question_en": "Which function of management is considered as the base of all other functions?",
      "question_hi": "प्रबंधन का कौन सा कार्य सभी अन्य कार्यों का आधार माना जाता है?",
      "options_en": ["Organising", "Planning", "Controlling", "Staffing"],
      "options_hi": ["संगठन", "योजनाबद्धता", "नियंत्रण", "स्टाफिंग"],
      "answer": "Planning",
      "answer_hi": "योजनाबद्धता",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Which principle of management emphasizes teamwork?",
      "question_hi": "प्रबंधन का कौन सा सिद्धांत टीमवर्क पर बल देता है?",
      "options_en": ["Discipline", "Order", "Espirit de Corps", "Authority"],
      "options_hi": ["अनुशासन", "क्रम", "एस्प्रिट डी कोर्प्स", "प्राधिकरण"],
      "answer": "Espirit de Corps",
      "answer_hi": "एस्प्रिट डी कोर्प्स",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Which level of management is responsible for framing policies?",
      "question_hi": "प्रबंधन का कौन सा स्तर नीतियाँ बनाने के लिए जिम्मेदार होता है?",
      "options_en": ["Top level", "Middle level", "Lower level", "Operational level"],
      "options_hi": ["शीर्ष स्तर", "मध्य स्तर", "निचला स्तर", "संचालन स्तर"],
      "answer": "Top level",
      "answer_hi": "शीर्ष स्तर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Which one is not a feature of management?",
      "question_hi": "निम्न में से कौन प्रबंधन की विशेषता नहीं है?",
      "options_en": ["Goal-oriented", "Universal", "Tangible", "Continuous"],
      "options_hi": ["लक्ष्य-उन्मुख", "सार्वत्रिक", "ठोस", "निरंतर"],
      "answer": "Tangible",
      "answer_hi": "ठोस",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Which of the following is not a step in the planning process?",
      "question_hi": "निम्नलिखित में से कौन योजना प्रक्रिया का चरण नहीं है?",
      "options_en": ["Setting objectives", "Developing premises", "Delegating authority", "Evaluating alternatives"],
      "options_hi": ["उद्देश्य निर्धारित करना", "पूर्वधारणाएँ विकसित करना", "प्राधिकरण सौंपना", "विकल्पों का मूल्यांकन"],
      "answer": "Delegating authority",
      "answer_hi": "प्राधिकरण सौंपना",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "The process of recruitment starts with:",
      "question_hi": "भर्ती की प्रक्रिया शुरू होती है:",
      "options_en": ["Selection", "Job analysis", "Orientation", "Training"],
      "options_hi": ["चयन", "नौकरी विश्लेषण", "परिचय", "प्रशिक्षण"],
      "answer": "Job analysis",
      "answer_hi": "नौकरी विश्लेषण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Which of the following is an internal source of recruitment?",
      "question_hi": "निम्नलिखित में से कौन भर्ती का आंतरिक स्रोत है?",
      "options_en": ["Transfer", "Advertisement", "Employment exchange", "Campus recruitment"],
      "options_hi": ["स्थानांतरण", "विज्ञापन", "रोजगार विनिमय", "कैंपस भर्ती"],
      "answer": "Transfer",
      "answer_hi": "स्थानांतरण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Which function of management ensures actual performance matches with planned performance?",
      "question_hi": "प्रबंधन का कौन सा कार्य यह सुनिश्चित करता है कि वास्तविक प्रदर्शन नियोजित प्रदर्शन से मेल खाता है?",
      "options_en": ["Staffing", "Controlling", "Planning", "Organising"],
      "options_hi": ["स्टाफिंग", "नियंत्रण", "योजनाबद्धता", "संगठन"],
      "answer": "Controlling",
      "answer_hi": "नियंत्रण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Which marketing function is concerned with informing customers about the product?",
      "question_hi": "कौन सा विपणन कार्य उत्पाद के बारे में ग्राहकों को सूचित करने से संबंधित है?",
      "options_en": ["Packaging", "Labelling", "Promotion", "Branding"],
      "options_hi": ["पैकेजिंग", "लेबलिंग", "प्रमोशन", "ब्रांडिंग"],
      "answer": "Promotion",
      "answer_hi": "प्रमोशन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Which financial decision affects the liquidity of business?",
      "question_hi": "कौन सा वित्तीय निर्णय व्यवसाय की तरलता को प्रभावित करता है?",
      "options_en": ["Investment decision", "Financing decision", "Dividend decision", "Working capital decision"],
      "options_hi": ["निवेश निर्णय", "वित्तपोषण निर्णय", "लाभांश निर्णय", "कार्यशील पूंजी निर्णय"],
      "answer": "Working capital decision",
      "answer_hi": "कार्यशील पूंजी निर्णय",
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


