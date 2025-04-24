const questions = [  
    {
      "num": 1,
      "question_en": "Which metal is the best conductor of electricity?",
      "question_hi": "कौन-सी धातु विद्युत की सबसे अच्छी चालक होती है?",
      "options_en": ["Copper", "Aluminium", "Silver", "Iron"],
      "options_hi": ["तांबा", "एल्युमिनियम", "चांदी", "लोहा"],
      "answer": "Silver",
      "answer_hi": "चांदी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "What is the unit of electric current?",
      "question_hi": "विद्युत धारा की इकाई क्या है?",
      "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
      "options_hi": ["वोल्ट", "एम्पीयर", "ओहम", "वॉट"],
      "answer": "Ampere",
      "answer_hi": "एम्पीयर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Which type of lens is used to correct myopia?",
      "question_hi": "निकट दृष्टि दोष को सुधारने के लिए किस प्रकार का लेंस प्रयोग किया जाता है?",
      "options_en": ["Convex", "Concave", "Cylindrical", "None"],
      "options_hi": ["उत्तल", "अवतल", " बेलनाकार", "कोई नहीं"],
      "answer": "Concave",
      "answer_hi": "अवतल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Which of the following is a non-renewable source of energy?",
      "question_hi": "निम्नलिखित में से कौन ऊर्जा का अक्षय स्रोत नहीं है?",
      "options_en": ["Solar energy", "Wind energy", "Coal", "Biogas"],
      "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "बायोगैस"],
      "answer": "Coal",
      "answer_hi": "कोयला",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Which gas is used in electric bulbs?",
      "question_hi": "बिजली के बल्बों में कौन-सी गैस भरी जाती है?",
      "options_en": ["Oxygen", "Nitrogen", "Helium", "Carbon dioxide"],
      "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "कार्बन डाइऑक्साइड"],
      "answer": "Nitrogen",
      "answer_hi": "नाइट्रोजन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "What is the SI unit of force?",
      "question_hi": "बल की एस.आई. इकाई क्या है?",
      "options_en": ["Joule", "Pascal", "Newton", "Watt"],
      "options_hi": ["जूल", "पास्कल", "न्यूटन", "वॉट"],
      "answer": "Newton",
      "answer_hi": "न्यूटन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Which of the following is used to measure temperature?",
      "question_hi": "निम्नलिखित में से किस यंत्र का उपयोग तापमान मापने के लिए किया जाता है?",
      "options_en": ["Barometer", "Thermometer", "Ammeter", "Voltmeter"],
      "options_hi": ["बैरोमीटर", "थर्मामीटर", "एमीटर", "वोल्टमीटर"],
      "answer": "Thermometer",
      "answer_hi": "थर्मामीटर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "What is the chemical formula of water?",
      "question_hi": "पानी का रासायनिक सूत्र क्या है?",
      "options_en": ["H2O", "CO2", "NaCl", "O2"],
      "options_hi": ["H2O", "CO2", "NaCl", "O2"],
      "answer": "H2O",
      "answer_hi": "H2O",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Which is the smallest unit of an element?",
      "question_hi": "किसी तत्व की सबसे छोटी इकाई कौन-सी होती है?",
      "options_en": ["Molecule", "Atom", "Electron", "Nucleus"],
      "options_hi": ["अणु", "परमाणु", "इलेक्ट्रॉन", "नाभिक"],
      "answer": "Atom",
      "answer_hi": "परमाणु",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Which instrument is used to measure atmospheric pressure?",
      "question_hi": "वायुमंडलीय दाब मापने के लिए किस यंत्र का प्रयोग किया जाता है?",
      "options_en": ["Barometer", "Thermometer", "Manometer", "Anemometer"],
      "options_hi": ["बैरोमीटर", "थर्मामीटर", "मैनोमीटर", "एनिमोमीटर"],
      "answer": "Barometer",
      "answer_hi": "बैरोमीटर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "What is the speed of light in vacuum?",
      "question_hi": "निर्वात में प्रकाश की गति कितनी होती है?",
      "options_en": ["3×10^8 m/s", "3×10^6 m/s", "3×10^5 m/s", "3×10^3 m/s"],
      "options_hi": ["3×10^8 मी./से.", "3×10^6 मी./से.", "3×10^5 मी./से.", "3×10^3 मी./से."],
      "answer": "3×10^8 m/s",
      "answer_hi": "3×10^8 मी./से.",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "What type of mirror is used in vehicles as rear-view mirrors?",
      "question_hi": "वाहनों में पीछे देखने वाले दर्पण के रूप में किस प्रकार के दर्पण का प्रयोग किया जाता है?",
      "options_en": ["Concave", "Convex", "Plane", "None"],
      "options_hi": ["अवतल", "उत्तल", "समतल", "कोई नहीं"],
      "answer": "Convex",
      "answer_hi": "उत्तल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "Which is the hardest naturally occurring substance?",
      "question_hi": "प्राकृतिक रूप से पाया जाने वाला सबसे कठोर पदार्थ कौन-सा है?",
      "options_en": ["Iron", "Quartz", "Diamond", "Gold"],
      "options_hi": ["लोहा", "क्वार्ट्ज़", "हीरा", "सोना"],
      "answer": "Diamond",
      "answer_hi": "हीरा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Which of the following is a vector quantity?",
      "question_hi": "निम्न में से कौन-सी सदिश राशि है?",
      "options_en": ["Speed", "Distance", "Mass", "Force"],
      "options_hi": ["वेग", "दूरी", "द्रव्यमान", "बल"],
      "answer": "Force",
      "answer_hi": "बल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "Which organelle is known as the powerhouse of the cell?",
      "question_hi": "कोशिका के ऊर्जा गृह के रूप में किस कोषांग को जाना जाता है?",
      "options_en": ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
      "options_hi": ["नाभिक", "राइबोसोम", "माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट"],
      "answer": "Mitochondria",
      "answer_hi": "माइटोकॉन्ड्रिया",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "What is the boiling point of water at sea level?",
      "question_hi": "समुद्र तल पर पानी का क्वथनांक कितना होता है?",
      "options_en": ["90°C", "100°C", "110°C", "120°C"],
      "options_hi": ["90°C", "100°C", "110°C", "120°C"],
      "answer": "100°C",
      "answer_hi": "100°C",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "Which acid is found in lemon?",
      "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
      "options_en": ["Acetic acid", "Citric acid", "Oxalic acid", "Hydrochloric acid"],
      "options_hi": ["एसिटिक अम्ल", "सिट्रिक अम्ल", "ऑक्सेलिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
      "answer": "Citric acid",
      "answer_hi": "सिट्रिक अम्ल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "Which gas is responsible for global warming?",
      "question_hi": "ग्लोबल वार्मिंग के लिए कौन सी गैस उत्तरदायी है?",
      "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
      "answer": "Carbon dioxide",
      "answer_hi": "कार्बन डाइऑक्साइड",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Which metal is liquid at room temperature?",
      "question_hi": "कौन-सी धातु सामान्य तापमान पर तरल अवस्था में रहती है?",
      "options_en": ["Mercury", "Silver", "Copper", "Zinc"],
      "options_hi": ["पारा", "चांदी", "तांबा", "जिंक"],
      "answer": "Mercury",
      "answer_hi": "पारा",
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


