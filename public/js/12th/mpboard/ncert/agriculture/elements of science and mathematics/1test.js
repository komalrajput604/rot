const questions = [  
  {
    "num": 1,
    "question_en": "Which physical quantity is represented by the area under a velocity-time graph?",
    "question_hi": "वेग-समय ग्राफ के नीचे का क्षेत्रफल किस भौतिक राशि को दर्शाता है?",
    "options_en": ["Speed", "Distance", "Acceleration", "Force"],
    "options_hi": ["गति", "दूरी", "त्वरण", "बल"],
    "answer": "Distance",
    "answer_hi": "दूरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "SI unit of electric current is?",
    "question_hi": "विद्युत धारा की SI इकाई क्या है?",
    "options_en": ["Volt", "Ohm", "Ampere", "Coulomb"],
    "options_hi": ["वोल्ट", "ओम", "एम्पीयर", "कूलॉम्ब"],
    "answer": "Ampere",
    "answer_hi": "एम्पीयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the value of acceleration due to gravity on Earth?",
    "question_hi": "पृथ्वी पर गुरुत्वाकर्षण के कारण त्वरण का मान क्या है?",
    "options_en": ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "9.2 m/s²"],
    "options_hi": ["8.9 मी./से²", "9.8 मी./से²", "10.8 मी./से²", "9.2 मी./से²"],
    "answer": "9.8 m/s²",
    "answer_hi": "9.8 मी./से²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the chemical formula of water?",
    "question_hi": "पानी का रासायनिक सूत्र क्या है?",
    "options_en": ["H2O", "CO2", "O2", "NaCl"],
    "options_hi": ["H2O", "CO2", "O2", "NaCl"],
    "answer": "H2O",
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which gas is used in the preparation of soda water?",
    "question_hi": "सोडा वाटर तैयार करने में किस गैस का प्रयोग किया जाता है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of the following is a non-metal?",
    "question_hi": "निम्न में से कौन एक अधातु है?",
    "options_en": ["Iron", "Copper", "Sulphur", "Aluminium"],
    "options_hi": ["लोहा", "तांबा", "गंधक", "एल्युमिनियम"],
    "answer": "Sulphur",
    "answer_hi": "गंधक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the SI unit of work?",
    "question_hi": "कार्य की SI इकाई क्या है?",
    "options_en": ["Watt", "Joule", "Newton", "Pascal"],
    "options_hi": ["वाट", "जूल", "न्यूटन", "पास्कल"],
    "answer": "Joule",
    "answer_hi": "जूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which instrument is used to measure atmospheric pressure?",
    "question_hi": "वायुमंडलीय दाब को मापने के लिए किस यंत्र का प्रयोग किया जाता है?",
    "options_en": ["Thermometer", "Barometer", "Anemometer", "Altimeter"],
    "options_hi": ["थर्मामीटर", "बैरोमीटर", "एनिमोमीटर", "एल्टीमीटर"],
    "answer": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which law explains the relationship between current and voltage?",
    "question_hi": "धारा और वोल्टेज के बीच संबंध को कौन-सा नियम समझाता है?",
    "options_en": ["Ohm’s Law", "Newton’s Law", "Faraday’s Law", "Hooke’s Law"],
    "options_hi": ["ओम का नियम", "न्यूटन का नियम", "फैरेडे का नियम", "हुक का नियम"],
    "answer": "Ohm’s Law",
    "answer_hi": "ओम का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which organelle is called the powerhouse of the cell?",
    "question_hi": "कोशिका का पावरहाउस किस अंगक को कहा जाता है?",
    "options_en": ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
    "options_hi": ["न्यूक्लियस", "क्लोरोप्लास्ट", "माइटोकॉन्ड्रिया", "राइबोसोम"],
    "answer": "Mitochondria",
    "answer_hi": "माइटोकॉन्ड्रिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the boiling point of water?",
    "question_hi": "पानी का क्वथनांक कितना होता है?",
    "options_en": ["90°C", "80°C", "100°C", "110°C"],
    "options_hi": ["90°C", "80°C", "100°C", "110°C"],
    "answer": "100°C",
    "answer_hi": "100°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which is the nearest planet to the Sun?",
    "question_hi": "सूर्य के सबसे निकट ग्रह कौन सा है?",
    "options_en": ["Venus", "Earth", "Mercury", "Mars"],
    "options_hi": ["शुक्र", "पृथ्वी", "बुध", "मंगल"],
    "answer": "Mercury",
    "answer_hi": "बुध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What type of lens is used in a magnifying glass?",
    "question_hi": "आवर्धक शीशे में किस प्रकार के लेंस का प्रयोग होता है?",
    "options_en": ["Concave", "Convex", "Plane", "Cylindrical"],
    "options_hi": ["अवतल", "उत्तल", "समतल", "सिलेंडर"],
    "answer": "Convex",
    "answer_hi": "उत्तल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which is a good conductor of electricity?",
    "question_hi": "निम्न में से कौन विद्युत का अच्छा चालक है?",
    "options_en": ["Plastic", "Wood", "Copper", "Glass"],
    "options_hi": ["प्लास्टिक", "लकड़ी", "तांबा", "काँच"],
    "answer": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which planet is known as the Red Planet?",
    "question_hi": "लाल ग्रह के नाम से कौन-सा ग्रह जाना जाता है?",
    "options_en": ["Jupiter", "Saturn", "Mars", "Neptune"],
    "options_hi": ["बृहस्पति", "शनि", "मंगल", "नेपच्यून"],
    "answer": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which is the hardest natural substance?",
    "question_hi": "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    "options_en": ["Gold", "Iron", "Diamond", "Silver"],
    "options_hi": ["सोना", "लोहा", "हीरा", "चाँदी"],
    "answer": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which part of the plant is responsible for photosynthesis?",
    "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण के लिए जिम्मेदार है?",
    "options_en": ["Root", "Stem", "Leaf", "Flower"],
    "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
    "answer": "Leaf",
    "answer_hi": "पत्ती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which is the largest source of energy on Earth?",
    "question_hi": "पृथ्वी पर ऊर्जा का सबसे बड़ा स्रोत क्या है?",
    "options_en": ["Coal", "Electricity", "Sun", "Petroleum"],
    "options_hi": ["कोयला", "बिजली", "सूरज", "पेट्रोलियम"],
    "answer": "Sun",
    "answer_hi": "सूरज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the formula of common salt?",
    "question_hi": "सामान्य नमक का सूत्र क्या है?",
    "options_en": ["NaCl", "KCl", "NaOH", "CaCl2"],
    "options_hi": ["NaCl", "KCl", "NaOH", "CaCl2"],
    "answer": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which device converts electrical energy into mechanical energy?",
    "question_hi": "कौन सा उपकरण विद्युत ऊर्जा को यांत्रिक ऊर्जा में परिवर्तित करता है?",
    "options_en": ["Motor", "Bulb", "Battery", "Transformer"],
    "options_hi": ["मोटर", "बल्ब", "बैटरी", "ट्रांसफॉर्मर"],
    "answer": "Motor",
    "answer_hi": "मोटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which mirror is used in vehicles as rear-view mirror?",
    "question_hi": "वाहनों में पीछे देखने वाले दर्पण के रूप में किस दर्पण का प्रयोग होता है?",
    "options_en": ["Plane", "Concave", "Convex", "None"],
    "options_hi": ["समतल", "अवतल", "उत्तल", "कोई नहीं"],
    "answer": "Convex",
    "answer_hi": "उत्तल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the pH value of pure water?",
    "question_hi": "शुद्ध जल का pH मान क्या होता है?",
    "options_en": ["5", "6", "7", "8"],
    "options_hi": ["5", "6", "7", "8"],
    "answer": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which part of the body controls reflex actions?",
    "question_hi": "शरीर का कौन सा भाग प्रत्युत्क्रियाओं को नियंत्रित करता है?",
    "options_en": ["Brain", "Spinal cord", "Heart", "Liver"],
    "options_hi": ["मस्तिष्क", "मेरुरज्जु", "हृदय", "यकृत"],
    "answer": "Spinal cord",
    "answer_hi": "मेरुरज्जु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which part of the cell contains genetic material?",
    "question_hi": "कोशिका का कौन सा भाग आनुवंशिक पदार्थ को रखता है?",
    "options_en": ["Nucleus", "Ribosome", "Cytoplasm", "Cell wall"],
    "options_hi": ["नाभिक", "राइबोसोम", "कोशिकाद्रव्य", "कोशिका भित्ति"],
    "answer": "Nucleus",
    "answer_hi": "नाभिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of the following is a renewable source of energy?",
    "question_hi": "निम्न में से कौन अक्षय ऊर्जा स्रोत है?",
    "options_en": ["Coal", "Petroleum", "Wind", "Natural gas"],
    "options_hi": ["कोयला", "पेट्रोलियम", "पवन", "प्राकृतिक गैस"],
    "answer": "Wind",
    "answer_hi": "पवन",
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


