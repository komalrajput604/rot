

const questions = [
    {
      "num": 1,
      "question_en": "Which physical quantity is measured in farad?",
      "question_hi": "फैरेड में कौन सी भौतिक राशि मापी जाती है?",
      "options_en": ["Resistance", "Capacitance", "Inductance", "Conductance"],
      "options_hi": ["प्रतिरोध", "धारिता", "प्रेरकत्व", "चालकता"],
      "answer": "Capacitance",
      "answer_hi": "धारिता",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Which color of light has the shortest wavelength?",
      "question_hi": "किस रंग की प्रकाश तरंग की तरंगदैर्घ्य सबसे छोटी होती है?",
      "options_en": ["Red", "Blue", "Green", "Violet"],
      "options_hi": ["लाल", "नीला", "हरा", "बैंगनी"],
      "answer": "Violet",
      "answer_hi": "बैंगनी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "What is the SI unit of magnetic field?",
      "question_hi": "चुंबकीय क्षेत्र की SI इकाई क्या है?",
      "options_en": ["Tesla", "Weber", "Henry", "Ohm"],
      "options_hi": ["टेस्ला", "वेबर", "हेनरी", "ओम"],
      "answer": "Tesla",
      "answer_hi": "टेस्ला",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Which device converts AC to DC?",
      "question_hi": "कौन सा यंत्र AC को DC में बदलता है?",
      "options_en": ["Rectifier", "Amplifier", "Oscillator", "Transducer"],
      "options_hi": ["रेक्टिफायर", "एम्प्लीफायर", "ऑस्सीलेटर", "ट्रांसड्यूसर"],
      "answer": "Rectifier",
      "answer_hi": "रेक्टिफायर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Which of the following is not a unit of energy?",
      "question_hi": "निम्नलिखित में से कौन ऊर्जा की इकाई नहीं है?",
      "options_en": ["Joule", "Watt", "Kilowatt-hour", "Erg"],
      "options_hi": ["जूल", "वाट", "किलोवाट-घंटा", "एर्ग"],
      "answer": "Watt",
      "answer_hi": "वाट",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "In which medium does sound travel fastest?",
      "question_hi": "ध्वनि किस माध्यम में सबसे तेज गति से चलती है?",
      "options_en": ["Air", "Water", "Steel", "Vacuum"],
      "options_hi": ["वायु", "पानी", "इस्पात", "रिक्त स्थान"],
      "answer": "Steel",
      "answer_hi": "इस्पात",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "What is the unit of electric current?",
      "question_hi": "विद्युत धारा की इकाई क्या है?",
      "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
      "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
      "answer": "Ampere",
      "answer_hi": "एम्पियर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Which vitamin is synthesized from cholesterol?",
      "question_hi": "कौन सा विटामिन कोलेस्ट्रॉल से संश्लेषित होता है?",
      "options_en": ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin K"],
      "options_hi": ["विटामिन A", "विटामिन D", "विटामिन C", "विटामिन K"],
      "answer": "Vitamin D",
      "answer_hi": "विटामिन D",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "What is the focal length of a plane mirror?",
      "question_hi": "समतल दर्पण की फोकस दूरी क्या होती है?",
      "options_en": ["Zero", "Infinite", "Positive", "Negative"],
      "options_hi": ["शून्य", "अनंत", "धनात्मक", "ऋणात्मक"],
      "answer": "Infinite",
      "answer_hi": "अनंत",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "The dimensional formula of force is?",
      "question_hi": "बल का विमीय सूत्र क्या है?",
      "options_en": ["MLT⁻²", "ML²T⁻²", "MLT⁻¹", "ML⁻¹T⁻²"],
      "options_hi": ["MLT⁻²", "ML²T⁻²", "MLT⁻¹", "ML⁻¹T⁻²"],
      "answer": "MLT⁻²",
      "answer_hi": "MLT⁻²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "Which law is associated with the heating effect of electric current?",
      "question_hi": "विद्युत धारा के ऊष्मीय प्रभाव से कौन सा नियम संबंधित है?",
      "options_en": ["Ohm’s law", "Joule’s law", "Faraday’s law", "Lenz’s law"],
      "options_hi": ["ओम का नियम", "जूल का नियम", "फैरेडे का नियम", "लेन्ज़ का नियम"],
      "answer": "Joule’s law",
      "answer_hi": "जूल का नियम",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "Which mirror is used in a solar cooker?",
      "question_hi": "सौर कुकर में किस दर्पण का प्रयोग किया जाता है?",
      "options_en": ["Concave", "Convex", "Plane", "None"],
      "options_hi": ["अवतल", "उत्तल", "समतल", "कोई नहीं"],
      "answer": "Concave",
      "answer_hi": "अवतल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "SI unit of frequency is?",
      "question_hi": "आवृत्ति की SI इकाई क्या है?",
      "options_en": ["Hertz", "Watt", "Tesla", "Coulomb"],
      "options_hi": ["हर्ट्ज़", "वाट", "टेस्ला", "कूलॉम्ब"],
      "answer": "Hertz",
      "answer_hi": "हर्ट्ज़",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "What is the escape velocity on Earth?",
      "question_hi": "पृथ्वी से पलायन वेग कितना होता है?",
      "options_en": ["7.9 km/s", "11.2 km/s", "9.8 km/s", "8.4 km/s"],
      "options_hi": ["7.9 किमी/से", "11.2 किमी/से", "9.8 किमी/से", "8.4 किमी/से"],
      "answer": "11.2 km/s",
      "answer_hi": "11.2 किमी/से",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "Which of the following has the highest refractive index?",
      "question_hi": "निम्नलिखित में से किसका अपवर्तनांक सबसे अधिक है?",
      "options_en": ["Water", "Air", "Glass", "Diamond"],
      "options_hi": ["पानी", "वायु", "कांच", "हीरा"],
      "answer": "Diamond",
      "answer_hi": "हीरा",
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


