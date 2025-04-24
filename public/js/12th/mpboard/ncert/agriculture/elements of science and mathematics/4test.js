const questions = [  
    {
      "num": 1,
      "question_en": "Which device is used to measure electric current?",
      "question_hi": "विद्युत धारा को मापने के लिए किस यंत्र का उपयोग किया जाता है?",
      "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"],
      "options_hi": ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "ओहममीटर"],
      "answer": "Ammeter",
      "answer_hi": "एमीटर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "What is the SI unit of force?",
      "question_hi": "बल की एसआई इकाई क्या है?",
      "options_en": ["Joule", "Watt", "Newton", "Pascal"],
      "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
      "answer": "Newton",
      "answer_hi": "न्यूटन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "The acceleration due to gravity on the Earth is approximately?",
      "question_hi": "पृथ्वी पर गुरुत्वाकर्षण के कारण त्वरण लगभग कितना होता है?",
      "options_en": ["8.9 m/s²", "9.8 m/s²", "10.5 m/s²", "7.6 m/s²"],
      "options_hi": ["8.9 मी./से²", "9.8 मी./से²", "10.5 मी./से²", "7.6 मी./से²"],
      "answer": "9.8 m/s²",
      "answer_hi": "9.8 मी./से²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "What is the chemical formula of water?",
      "question_hi": "जल का रासायनिक सूत्र क्या है?",
      "options_en": ["H2O", "CO2", "NaCl", "O2"],
      "options_hi": ["H2O", "CO2", "NaCl", "O2"],
      "answer": "H2O",
      "answer_hi": "H2O",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Which of the following is a renewable source of energy?",
      "question_hi": "निम्न में से कौन ऊर्जा का अक्षय स्रोत है?",
      "options_en": ["Coal", "Petroleum", "Wind", "Natural gas"],
      "options_hi": ["कोयला", "पेट्रोलियम", "पवन", "प्राकृतिक गैस"],
      "answer": "Wind",
      "answer_hi": "पवन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "What is the boiling point of water at sea level?",
      "question_hi": "समुद्र तल पर जल का क्वथनांक क्या होता है?",
      "options_en": ["50°C", "90°C", "100°C", "120°C"],
      "options_hi": ["50°से.", "90°से.", "100°से.", "120°से."],
      "answer": "100°C",
      "answer_hi": "100°से.",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Which gas is essential for photosynthesis?",
      "question_hi": "प्रकाश संश्लेषण के लिए आवश्यक गैस कौन-सी है?",
      "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
      "answer": "Carbon dioxide",
      "answer_hi": "कार्बन डाइऑक्साइड",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Which planet is known as the Red Planet?",
      "question_hi": "किस ग्रह को 'लाल ग्रह' कहा जाता है?",
      "options_en": ["Earth", "Mars", "Jupiter", "Venus"],
      "options_hi": ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
      "answer": "Mars",
      "answer_hi": "मंगल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "What is the speed of light in vacuum?",
      "question_hi": "निर्वात में प्रकाश की गति क्या होती है?",
      "options_en": ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
      "options_hi": ["3 × 10⁶ मी./से.", "3 × 10⁸ मी./से.", "3 × 10⁴ मी./से.", "3 × 10² मी./से."],
      "answer": "3 × 10⁸ m/s",
      "answer_hi": "3 × 10⁸ मी./से.",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Which metal is liquid at room temperature?",
      "question_hi": "कौन-सी धातु कमरे के तापमान पर द्रव अवस्था में रहती है?",
      "options_en": ["Mercury", "Iron", "Aluminium", "Copper"],
      "options_hi": ["पारा", "लोहा", "एल्युमिनियम", "तांबा"],
      "answer": "Mercury",
      "answer_hi": "पारा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "Which part of the plant is responsible for photosynthesis?",
      "question_hi": "पौधे का कौन-सा भाग प्रकाश संश्लेषण के लिए उत्तरदायी होता है?",
      "options_en": ["Root", "Stem", "Leaf", "Flower"],
      "options_hi": ["जड़", "तना", "पत्ता", "फूल"],
      "answer": "Leaf",
      "answer_hi": "पत्ता",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "Which of these is a good conductor of electricity?",
      "question_hi": "इनमें से कौन विद्युत का अच्छा चालक है?",
      "options_en": ["Rubber", "Plastic", "Copper", "Wood"],
      "options_hi": ["रबर", "प्लास्टिक", "तांबा", "लकड़ी"],
      "answer": "Copper",
      "answer_hi": "तांबा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "What is the main component of air?",
      "question_hi": "वायु का मुख्य घटक क्या है?",
      "options_en": ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
      "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
      "answer": "Nitrogen",
      "answer_hi": "नाइट्रोजन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Which instrument is used to measure temperature?",
      "question_hi": "तापमान मापने के लिए किस यंत्र का उपयोग किया जाता है?",
      "options_en": ["Thermometer", "Barometer", "Hygrometer", "Altimeter"],
      "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एल्टीमीटर"],
      "answer": "Thermometer",
      "answer_hi": "थर्मामीटर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "Which of the following is an example of a chemical change?",
      "question_hi": "निम्न में से कौन रासायनिक परिवर्तन का उदाहरण है?",
      "options_en": ["Melting of ice", "Boiling of water", "Rusting of iron", "Breaking of glass"],
      "options_hi": ["बर्फ का पिघलना", "जल का उबालना", "लौह का जंग लगना", "काँच का टूटना"],
      "answer": "Rusting of iron",
      "answer_hi": "लौह का जंग लगना",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "Which is the universal solvent?",
      "question_hi": "सार्वत्रिक विलायक कौन-सा है?",
      "options_en": ["Alcohol", "Water", "Acid", "Base"],
      "options_hi": ["एल्कोहल", "जल", "अम्ल", "क्षार"],
      "answer": "Water",
      "answer_hi": "जल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "Which type of mirror is used in vehicles for rear view?",
      "question_hi": "वाहनों में पीछे देखने के लिए किस प्रकार का दर्पण प्रयोग किया जाता है?",
      "options_en": ["Concave", "Convex", "Plane", "Spherical"],
      "options_hi": ["अवतल", "उत्तल", "समतल", "गोलाकार"],
      "answer": "Convex",
      "answer_hi": "उत्तल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "Which gas is used in fire extinguishers?",
      "question_hi": "अग्निशामकों में कौन-सी गैस प्रयुक्त होती है?",
      "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
      "answer": "Carbon dioxide",
      "answer_hi": "कार्बन डाइऑक्साइड",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Which planet has the most moons?",
      "question_hi": "किस ग्रह के सबसे अधिक उपग्रह हैं?",
      "options_en": ["Earth", "Mars", "Jupiter", "Venus"],
      "options_hi": ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
      "answer": "Jupiter",
      "answer_hi": "बृहस्पति",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "Which is the smallest unit of matter?",
      "question_hi": "द्रव्य की सबसे छोटी इकाई क्या होती है?",
      "options_en": ["Atom", "Molecule", "Electron", "Proton"],
      "options_hi": ["परमाणु", "अणु", "इलेक्ट्रॉन", "प्रोटॉन"],
      "answer": "Atom",
      "answer_hi": "परमाणु",
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


