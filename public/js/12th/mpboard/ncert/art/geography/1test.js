const questions = [ 
  
        {
          "num": 1,
          "question_en": "What is the capital city of India?",
          "question_hi": "भारत की राजधानी कौन सी है?",
          "options_en": ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
          "options_hi": ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
          "answer": "New Delhi",
          "answer_hi": "नई दिल्ली",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which river is known as the 'Ganga of the South'?",
          "question_hi": "कौन सी नदी को 'दक्षिण गंगा' कहा जाता है?",
          "options_en": ["Godavari", "Krishna", "Kaveri", "Narmada"],
          "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
          "answer": "Godavari",
          "answer_hi": "गोदावरी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which state is the largest producer of rice in India?",
          "question_hi": "भारत में चावल का सबसे बड़ा उत्पादक राज्य कौन सा है?",
          "options_en": ["West Bengal", "Punjab", "Uttar Pradesh", "Madhya Pradesh"],
          "options_hi": ["पश्चिम बंगाल", "पंजाब", "उत्तर प्रदेश", "मध्य प्रदेश"],
          "answer": "West Bengal",
          "answer_hi": "पश्चिम बंगाल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which is the longest river in India?",
          "question_hi": "भारत में सबसे लंबी नदी कौन सी है?",
          "options_en": ["Ganga", "Yamuna", "Indus", "Godavari"],
          "options_hi": ["गंगा", "यमुन", "सिंधु", "गोदावरी"],
          "answer": "Ganga",
          "answer_hi": "गंगा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which mountain range forms the northern boundary of India?",
          "question_hi": "कौन सी पर्वत श्रंखला भारत की उत्तरी सीमा बनाती है?",
          "options_en": ["Himalayas", "Vindhyas", "Satpuras", "Aravalis"],
          "options_hi": ["हिमालय", "विंध्य", "सतपुड़ा", "अरावली"],
          "answer": "Himalayas",
          "answer_hi": "हिमालय",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "What is the main occupation of people in the Ganga-Brahmaputra delta?",
          "question_hi": "गंगा-ब्रह्मपुत्र डेल्टा के लोग मुख्य रूप से किस पेशे से जुड़े होते हैं?",
          "options_en": ["Fishing", "Agriculture", "Mining", "Tourism"],
          "options_hi": ["मछली पकड़ना", "कृषि", "खनन", "पर्यटन"],
          "answer": "Agriculture",
          "answer_hi": "कृषि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which state has the highest literacy rate in India?",
          "question_hi": "भारत में किस राज्य में सबसे अधिक साक्षरता दर है?",
          "options_en": ["Kerala", "Goa", "Maharashtra", "Tamil Nadu"],
          "options_hi": ["केरल", "गोवा", "महाराष्ट्र", "तमिलनाडु"],
          "answer": "Kerala",
          "answer_hi": "केरल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which of the following is the major cash crop of India?",
          "question_hi": "निम्नलिखित में से कौन सा प्रमुख नकद फसल है?",
          "options_en": ["Wheat", "Rice", "Cotton", "Barley"],
          "options_hi": ["गेहूं", "चावल", "कपास", "जौ"],
          "answer": "Cotton",
          "answer_hi": "कपास",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "The Indian Ocean is bounded by which continents?",
          "question_hi": "भारतीय महासागर किन महाद्वीपों से घिरा हुआ है?",
          "options_en": ["Africa, Asia, Australia", "Asia, Europe, Africa", "Africa, Europe, North America", "Asia, North America, South America"],
          "options_hi": ["अफ्रीका, एशिया, ऑस्ट्रेलिया", "एशिया, यूरोप, अफ्रीका", "अफ्रीका, यूरोप, उत्तरी अमेरिका", "एशिया, उत्तरी अमेरिका, दक्षिणी अमेरिका"],
          "answer": "Africa, Asia, Australia",
          "answer_hi": "अफ्रीका, एशिया, ऑस्ट्रेलिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is the name of the largest desert in India?",
          "question_hi": "भारत का सबसे बड़ा मरुस्थल का नाम क्या है?",
          "options_en": ["Thar Desert", "Kutch Desert", "Rann of Kutch", "Ladakh Desert"],
          "options_hi": ["थार मरुस्थल", "कच्छ मरुस्थल", "कच्छ का रण", "लद्दाख मरुस्थल"],
          "answer": "Thar Desert",
          "answer_hi": "थार मरुस्थल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which of the following is a major port on the west coast of India?",
          "question_hi": "निम्नलिखित में से कौन सा भारत के पश्चिमी तट पर एक प्रमुख बंदरगाह है?",
          "options_en": ["Chennai", "Kochi", "Mumbai", "Kandla"],
          "options_hi": ["चेन्नई", "कोच्चि", "मुंबई", "कांदला"],
          "answer": "Mumbai",
          "answer_hi": "मुंबई",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which is the largest state in India by area?",
          "question_hi": "भारत का सबसे बड़ा राज्य क्षेत्रफल में कौन सा है?",
          "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Maharashtra"],
          "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "महाराष्ट्र"],
          "answer": "Rajasthan",
          "answer_hi": "राजस्थान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which of the following is the primary source of water for agriculture in India?",
          "question_hi": "भारत में कृषि के लिए जल का प्राथमिक स्रोत कौन सा है?",
          "options_en": ["Rainwater", "Groundwater", "Rivers", "Canals"],
          "options_hi": ["वर्षा जल", "भूमिगत जल", "नदियाँ", "नहरे"],
          "answer": "Rainwater",
          "answer_hi": "वर्षा जल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "The term 'Green Revolution' is related to which field?",
          "question_hi": "'हरी क्रांति' शब्द किस क्षेत्र से संबंधित है?",
          "options_en": ["Agriculture", "Technology", "Industry", "Transport"],
          "options_hi": ["कृषि", "प्रौद्योगिकी", "उद्योग", "परिवहन"],
          "answer": "Agriculture",
          "answer_hi": "कृषि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which is the main mineral found in the Deccan Plateau?",
          "question_hi": "दक्कन पठार में पाया जाने वाला मुख्य खनिज कौन सा है?",
          "options_en": ["Coal", "Iron Ore", "Bauxite", "Copper"],
          "options_hi": ["कोयला", "लौह अयस्क", "बॉक्साइट", "तांबा"],
          "answer": "Coal",
          "answer_hi": "कोयला",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which state is the largest producer of tea in India?",
          "question_hi": "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन सा है?",
          "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
          "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
          "answer": "Assam",
          "answer_hi": "असम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which of the following is the longest mountain range in India?",
          "question_hi": "निम्नलिखित में से भारत की सबसे लंबी पर्वत श्रंखला कौन सी है?",
          "options_en": ["Himalayas", "Vindhyas", "Satpuras", "Aravalis"],
          "options_hi": ["हिमालय", "विंध्य", "सतपुड़ा", "अरावली"],
          "answer": "Himalayas",
          "answer_hi": "हिमालय",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "What is the average density of population in India?",
          "question_hi": "भारत में जनसंख्या का औसत घनत्व क्या है?",
          "options_en": ["382 per square km", "312 per square km", "450 per square km", "550 per square km"],
          "options_hi": ["382 प्रति वर्ग किमी", "312 प्रति वर्ग किमी", "450 प्रति वर्ग किमी", "550 प्रति वर्ग किमी"],
          "answer": "382 per square km",
          "answer_hi": "382 प्रति वर्ग किमी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "The 'Sundarbans' are located in which part of India?",
          "question_hi": "'सुंदरबन' भारत के किस हिस्से में स्थित हैं?",
          "options_en": ["West Bengal", "Andhra Pradesh", "Tamil Nadu", "Uttarakhand"],
          "options_hi": ["पश्चिम बंगाल", "आंध्र प्रदेश", "तमिलनाडु", "उत्तराखंड"],
          "answer": "West Bengal",
          "answer_hi": "पश्चिम बंगाल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "What is the main occupation of the people living in the Himalayan region?",
          "question_hi": "हिमालय क्षेत्र में रहने वाले लोगों का मुख्य पेशा क्या है?",
          "options_en": ["Agriculture", "Fishing", "Tourism", "Craftsmanship"],
          "options_hi": ["कृषि", "मछली पकड़ना", "पर्यटन", "कला"],
          "answer": "Agriculture",
          "answer_hi": "कृषि",
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


