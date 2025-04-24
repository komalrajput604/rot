const questions = [   
  {
    "num": 1,
    "question_en": "What is the SI unit of electric current?",
    "question_hi": "विद्युत धारा की SI इकाई क्या है?",
    "options_en": ["Volt", "Ohm", "Ampere", "Watt"],
    "options_hi": ["वोल्ट", "ओम", "एम्पियर", "वाट"],
    "answer": "Ampere",
    "answer_hi": "एम्पियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which of the following is a non-renewable source of energy?",
    "question_hi": "निम्नलिखित में से कौन एक अक्षय ऊर्जा स्रोत नहीं है?",
    "options_en": ["Solar energy", "Wind energy", "Coal", "Hydro energy"],
    "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "जल ऊर्जा"],
    "answer": "Coal",
    "answer_hi": "कोयला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the speed of light in vacuum?",
    "question_hi": "निर्वात में प्रकाश की गति कितनी होती है?",
    "options_en": ["3×10⁶ m/s", "3×10⁸ m/s", "3×10⁴ m/s", "3×10¹⁰ m/s"],
    "options_hi": ["3×10⁶ मी/से", "3×10⁸ मी/से", "3×10⁴ मी/से", "3×10¹⁰ मी/से"],
    "answer": "3×10⁸ m/s",
    "answer_hi": "3×10⁸ मी/से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is Ohm’s Law?",
    "question_hi": "ओम का नियम क्या है?",
    "options_en": ["V = IR", "P = VI", "V = I/R", "R = V + I"],
    "options_hi": ["V = IR", "P = VI", "V = I/R", "R = V + I"],
    "answer": "V = IR",
    "answer_hi": "V = IR",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which gas is mainly responsible for global warming?",
    "question_hi": "वैश्विक ऊष्मीकरण के लिए मुख्यतः कौन सी गैस जिम्मेदार है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the value of π (pi) approximately?",
    "question_hi": "π (पाई) का मान लगभग कितना होता है?",
    "options_en": ["2.14", "3.14", "4.14", "5.14"],
    "options_hi": ["2.14", "3.14", "4.14", "5.14"],
    "answer": "3.14",
    "answer_hi": "3.14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which is the largest planet in the solar system?",
    "question_hi": "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    "options_en": ["Earth", "Mars", "Jupiter", "Venus"],
    "options_hi": ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
    "answer": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the chemical formula of water?",
    "question_hi": "जल का रासायनिक सूत्र क्या है?",
    "options_en": ["H2O", "CO2", "O2", "NaCl"],
    "options_hi": ["H2O", "CO2", "O2", "NaCl"],
    "answer": "H2O",
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What type of lens is used in a magnifying glass?",
    "question_hi": "आवर्धक कांच में किस प्रकार का लेंस होता है?",
    "options_en": ["Concave", "Convex", "Plano-concave", "Cylindrical"],
    "options_hi": ["अवतल", "उत्तल", "सम-अवतल", "बेलनाकार"],
    "answer": "Convex",
    "answer_hi": "उत्तल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is Newton’s third law?",
    "question_hi": "न्यूटन का तीसरा नियम क्या है?",
    "options_en": [
      "F = ma",
      "Every action has equal and opposite reaction",
      "Objects in motion stay in motion",
      "Force equals mass times acceleration"
    ],
    "options_hi": [
      "F = ma",
      "प्रत्येक क्रिया की बराबर और विपरीत प्रतिक्रिया होती है",
      "गति में वस्तुएँ गति में ही रहती हैं",
      "बल = द्रव्यमान × त्वरण"
    ],
    "answer": "Every action has equal and opposite reaction",
    "answer_hi": "प्रत्येक क्रिया की बराबर और विपरीत प्रतिक्रिया होती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is a vector quantity?",
    "question_hi": "निम्नलिखित में से कौन एक सदिश राशि है?",
    "options_en": ["Speed", "Mass", "Temperature", "Velocity"],
    "options_hi": ["वेग", "द्रव्यमान", "तापमान", "विकिरण वेग"],
    "answer": "Velocity",
    "answer_hi": "विकिरण वेग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which organelle is known as the powerhouse of the cell?",
    "question_hi": "किस कोशिकांग को कोशिका का पावरहाउस कहा जाता है?",
    "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
    "options_hi": ["न्यूक्लियस", "माइटोकॉन्ड्रिया", "राइबोसोम", "गोल्जी निकाय"],
    "answer": "Mitochondria",
    "answer_hi": "माइटोकॉन्ड्रिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the full form of DNA?",
    "question_hi": "DNA का पूरा नाम क्या है?",
    "options_en": [
      "Deoxyribonucleic Acid",
      "Dinucleic Acid",
      "Deoxyribose Acid",
      "None of these"
    ],
    "options_hi": [
      "डिऑक्सीराइबोन्यूक्लिक अम्ल",
      "डाइन्यूक्लिक अम्ल",
      "डिऑक्सीराइबोज अम्ल",
      "इनमें से कोई नहीं"
    ],
    "answer": "Deoxyribonucleic Acid",
    "answer_hi": "डिऑक्सीराइबोन्यूक्लिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is measured using a vernier caliper?",
    "question_hi": "वर्नियर कैलिपर से क्या मापा जाता है?",
    "options_en": ["Mass", "Area", "Length", "Temperature"],
    "options_hi": ["द्रव्यमान", "क्षेत्रफल", "लंबाई", "तापमान"],
    "answer": "Length",
    "answer_hi": "लंबाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which color of light has the shortest wavelength?",
    "question_hi": "किस रंग की प्रकाश की तरंगदैर्घ्य सबसे छोटी होती है?",
    "options_en": ["Red", "Green", "Blue", "Violet"],
    "options_hi": ["लाल", "हरा", "नीला", "बैंगनी"],
    "answer": "Violet",
    "answer_hi": "बैंगनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which number system is used in computers?",
    "question_hi": "कंप्यूटरों में कौन सी संख्या प्रणाली प्रयुक्त होती है?",
    "options_en": ["Decimal", "Octal", "Binary", "Hexadecimal"],
    "options_hi": ["दशमलव", "आष्टाधारी", "द्विक", "हेक्साडेसीमल"],
    "answer": "Binary",
    "answer_hi": "द्विक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which of the following is an example of acidic substance?",
    "question_hi": "निम्नलिखित में से कौन अम्लीय पदार्थ है?",
    "options_en": ["Lime water", "Soap", "Vinegar", "Salt solution"],
    "options_hi": ["चूने का पानी", "साबुन", "सिरका", "नमक का घोल"],
    "answer": "Vinegar",
    "answer_hi": "सिरका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which law explains the reflection of light?",
    "question_hi": "प्रकाश के परावर्तन को कौन सा नियम समझाता है?",
    "options_en": [
      "Newton’s law",
      "Snell’s law",
      "Law of Reflection",
      "Ohm’s Law"
    ],
    "options_hi": [
      "न्यूटन का नियम",
      "स्नेल का नियम",
      "परावर्तन का नियम",
      "ओम का नियम"
    ],
    "answer": "Law of Reflection",
    "answer_hi": "परावर्तन का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which gas is used for photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण के लिए कौन सी गैस आवश्यक होती है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
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


