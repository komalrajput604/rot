const questions = [   
      {
      "num": 1,
      "question_en": "Which physical quantity is measured in joules?",
      "question_hi": "कौनसी भौतिक राशि जूल में मापी जाती है?",
      "options_en": ["Power", "Energy", "Force", "Pressure"],
      "options_hi": ["शक्ति", "ऊर्जा", "बल", "दाब"],
      "answer": "Energy",
      "answer_hi": "ऊर्जा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Which of the following is a scalar quantity?",
      "question_hi": "निम्नलिखित में से कौन एक अदिश राशि है?",
      "options_en": ["Velocity", "Acceleration", "Speed", "Force"],
      "options_hi": ["वेग", "त्वरण", "गति", "बल"],
      "answer": "Speed",
      "answer_hi": "गति",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "What is the SI unit of pressure?",
      "question_hi": "दाब की एस.आई. इकाई क्या है?",
      "options_en": ["Pascal", "Newton", "Joule", "Watt"],
      "options_hi": ["पास्कल", "न्यूटन", "जूल", "वॉट"],
      "answer": "Pascal",
      "answer_hi": "पास्कल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Which law states that current is directly proportional to voltage?",
      "question_hi": "कौन सा नियम कहता है कि धारा वोल्टेज के समानुपाती होती है?",
      "options_en": ["Ohm's Law", "Faraday's Law", "Lenz's Law", "Kirchhoff's Law"],
      "options_hi": ["ओम का नियम", "फैराडे का नियम", "लेन्ज़ का नियम", "किर्चॉफ का नियम"],
      "answer": "Ohm's Law",
      "answer_hi": "ओम का नियम",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Which of the following is a conductor?",
      "question_hi": "निम्नलिखित में से कौन चालक है?",
      "options_en": ["Rubber", "Glass", "Copper", "Plastic"],
      "options_hi": ["रबर", "कांच", "तांबा", "प्लास्टिक"],
      "answer": "Copper",
      "answer_hi": "तांबा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Which color of light has the shortest wavelength?",
      "question_hi": "किस रंग की प्रकाश तरंग की तरंगदैर्ध्य सबसे कम होती है?",
      "options_en": ["Red", "Blue", "Green", "Violet"],
      "options_hi": ["लाल", "नीला", "हरा", "बैंगनी"],
      "answer": "Violet",
      "answer_hi": "बैंगनी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Which mirror is used in vehicles as rearview mirrors?",
      "question_hi": "वाहनों में रियरव्यू मिरर के रूप में कौन सा दर्पण उपयोग किया जाता है?",
      "options_en": ["Concave", "Convex", "Plane", "None"],
      "options_hi": ["अवतल", "उत्तल", "समतल", "कोई नहीं"],
      "answer": "Convex",
      "answer_hi": "उत्तल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "What is the formula of acceleration?",
      "question_hi": "त्वरण का सूत्र क्या है?",
      "options_en": ["v/t", "s/t", "Δv/Δt", "u/t"],
      "options_hi": ["v/t", "s/t", "Δv/Δt", "u/t"],
      "answer": "Δv/Δt",
      "answer_hi": "Δv/Δt",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Which instrument is used to measure electric current?",
      "question_hi": "विद्युत धारा मापने के लिए कौन सा उपकरण उपयोग किया जाता है?",
      "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Wattmeter"],
      "options_hi": ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "वॉटमीटर"],
      "answer": "Ammeter",
      "answer_hi": "एमीटर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "What is the value of g on Earth?",
      "question_hi": "पृथ्वी पर g का मान कितना होता है?",
      "options_en": ["10 m/s²", "9.8 m/s²", "8.5 m/s²", "9.5 m/s²"],
      "options_hi": ["10 मी./से²", "9.8 मी./से²", "8.5 मी./से²", "9.5 मी./से²"],
      "answer": "9.8 m/s²",
      "answer_hi": "9.8 मी./से²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "Which of the following is a unit of frequency?",
      "question_hi": "निम्नलिखित में से कौन आवृत्ति की इकाई है?",
      "options_en": ["Joule", "Watt", "Hertz", "Newton"],
      "options_hi": ["जूल", "वॉट", "हर्ट्ज", "न्यूटन"],
      "answer": "Hertz",
      "answer_hi": "हर्ट्ज",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "What is the speed of light in vacuum?",
      "question_hi": "निर्वात में प्रकाश की गति क्या है?",
      "options_en": ["3 × 10^8 m/s", "3 × 10^6 m/s", "1.5 × 10^8 m/s", "9.8 m/s²"],
      "options_hi": ["3 × 10^8 मी./से.", "3 × 10^6 मी./से.", "1.5 × 10^8 मी./से.", "9.8 मी./से²"],
      "answer": "3 × 10^8 m/s",
      "answer_hi": "3 × 10^8 मी./से.",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "What is Newton's third law?",
      "question_hi": "न्यूटन का तीसरा नियम क्या है?",
      "options_en": [
        "F = ma",
        "For every action, there is an equal and opposite reaction",
        "An object in motion stays in motion",
        "Energy is conserved"
      ],
      "options_hi": [
        "F = ma",
        "प्रत्येक क्रिया के लिए एक समान एवं विपरीत प्रतिक्रिया होती है",
        "गति में वस्तु गति में ही रहती है",
        "ऊर्जा संरक्षित रहती है"
      ],
      "answer": "For every action, there is an equal and opposite reaction",
      "answer_hi": "प्रत्येक क्रिया के लिए एक समान एवं विपरीत प्रतिक्रिया होती है",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Which gas is responsible for the greenhouse effect?",
      "question_hi": "ग्रीनहाउस प्रभाव के लिए कौन सी गैस उत्तरदायी है?",
      "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
      "answer": "Carbon dioxide",
      "answer_hi": "कार्बन डाइऑक्साइड",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "What is the formula of Ohm's law?",
      "question_hi": "ओम के नियम का सूत्र क्या है?",
      "options_en": ["V = IR", "F = ma", "E = mc²", "P = VI"],
      "options_hi": ["V = IR", "F = ma", "E = mc²", "P = VI"],
      "answer": "V = IR",
      "answer_hi": "V = IR",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "Which particle is negatively charged?",
      "question_hi": "कौन सा कण ऋणात्मक आवेशित होता है?",
      "options_en": ["Proton", "Electron", "Neutron", "Nucleus"],
      "options_hi": ["प्रोटॉन", "इलेक्ट्रॉन", "न्यूट्रॉन", "नाभिक"],
      "answer": "Electron",
      "answer_hi": "इलेक्ट्रॉन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "Which is a non-renewable source of energy?",
      "question_hi": "निम्नलिखित में से कौन अक्षय ऊर्जा स्रोत नहीं है?",
      "options_en": ["Solar", "Wind", "Coal", "Hydro"],
      "options_hi": ["सौर", "पवन", "कोयला", "जल"],
      "answer": "Coal",
      "answer_hi": "कोयला",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "Which property of a sound wave determines its pitch?",
      "question_hi": "ध्वनि तरंग की कौन सी विशेषता उसकी पिच निर्धारित करती है?",
      "options_en": ["Amplitude", "Frequency", "Wavelength", "Speed"],
      "options_hi": ["आयाम", "आवृत्ति", "तरंगदैर्ध्य", "गति"],
      "answer": "Frequency",
      "answer_hi": "आवृत्ति",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Which element is most abundant in Earth's crust?",
      "question_hi": "पृथ्वी की परत में सबसे अधिक पाया जाने वाला तत्व कौन सा है?",
      "options_en": ["Aluminum", "Iron", "Oxygen", "Silicon"],
      "options_hi": ["एल्युमिनियम", "लोहा", "ऑक्सीजन", "सिलिकॉन"],
      "answer": "Oxygen",
      "answer_hi": "ऑक्सीजन",
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
    },
    {
      "num": 21,
      "question_en": "Which instrument is used to measure temperature?",
      "question_hi": "तापमान मापने के लिए कौन सा उपकरण प्रयोग किया जाता है?",
      "options_en": ["Thermometer", "Barometer", "Hygrometer", "Voltmeter"],
      "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "वोल्टमीटर"],
      "answer": "Thermometer",
      "answer_hi": "थर्मामीटर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_en": "Which of the following has the highest resistance?",
      "question_hi": "निम्न में से किसकी प्रतिरोधता सबसे अधिक होती है?",
      "options_en": ["Silver", "Copper", "Nichrome", "Gold"],
      "options_hi": ["चांदी", "तांबा", "नाइक्रोम", "सोना"],
      "answer": "Nichrome",
      "answer_hi": "नाइक्रोम",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_en": "Which device converts solar energy into electrical energy?",
      "question_hi": "कौन सा उपकरण सौर ऊर्जा को विद्युत ऊर्जा में परिवर्तित करता है?",
      "options_en": ["Electric cell", "Solar cell", "Battery", "Capacitor"],
      "options_hi": ["इलेक्ट्रिक सेल", "सोलर सेल", "बैटरी", "संधारित्र"],
      "answer": "Solar cell",
      "answer_hi": "सोलर सेल",
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


