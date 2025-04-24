const questions = [ 
        {
          "num": 1,
          "question_en": "What is the capital of India?",
          "question_hi": "भारत की राजधानी क्या है?",
          "options_en": ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
          "options_hi": ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
          "answer": "New Delhi",
          "answer_hi": "नई दिल्ली",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which is the largest state in India by area?",
          "question_hi": "भारत का सबसे बड़ा राज्य कौन सा है?",
          "options_en": ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
          "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
          "answer": "Rajasthan",
          "answer_hi": "राजस्थान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which river is known as the 'Sorrow of Bengal'?",
          "question_hi": "कौन सा नदी 'बंगाल का दुःख' के नाम से जाना जाता है?",
          "options_en": ["Yamuna", "Ganges", "Brahmaputra", "Hooghly"],
          "options_hi": ["यमुन", "गंगा", "ब्रह्मपुत्र", "हुगली"],
          "answer": "Hooghly",
          "answer_hi": "हुगली",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "The Himalayas were formed due to which type of plate movement?",
          "question_hi": "हिमालय किस प्रकार की प्लेट मूवमेंट के कारण बने?",
          "options_en": ["Convergent", "Divergent", "Transform", "Lateral"],
          "options_hi": ["सन्निकटन", "विसर्जन", "रूपांतरण", "पार्श्व"],
          "answer": "Convergent",
          "answer_hi": "सन्निकटन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which of these is not a type of rainfall?",
          "question_hi": "इनमें से कौन सा वर्षा का प्रकार नहीं है?",
          "options_en": ["Convectional", "Orographic", "Frontal", "Cyclonic"],
          "options_hi": ["संवहनीय", "पर्वतीय", "सामना", "चक्रवातीय"],
          "answer": "Cyclonic",
          "answer_hi": "चक्रवातीय",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "What is the primary cause of global warming?",
          "question_hi": "वैश्विक तापन का मुख्य कारण क्या है?",
          "options_en": ["Deforestation", "Water Pollution", "Air Pollution", "Greenhouse Gases"],
          "options_hi": ["वृक्षारोपण", "जल प्रदूषण", "वायु प्रदूषण", "ग्रीनहाउस गैसें"],
          "answer": "Greenhouse Gases",
          "answer_hi": "ग्रीनहाउस गैसें",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "What is the longest river in the world?",
          "question_hi": "दुनिया की सबसे लंबी नदी कौन सी है?",
          "options_en": ["Amazon", "Nile", "Yangtze", "Mississippi"],
          "options_hi": ["अमेज़न", "नाइल", "यांग्त्ज़", "मिसीसिपी"],
          "answer": "Nile",
          "answer_hi": "नाइल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which of the following is a type of agriculture?",
          "question_hi": "निम्नलिखित में से कौन सा कृषि का प्रकार है?",
          "options_en": ["Subsistence Agriculture", "Industrial Agriculture", "Commercial Agriculture", "All of the above"],
          "options_hi": ["आधारित कृषि", "औद्योगिक कृषि", "वाणिज्यिक कृषि", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which is the smallest state in India by area?",
          "question_hi": "भारत का सबसे छोटा राज्य कौन सा है?",
          "options_en": ["Goa", "Sikkim", "Kerala", "Nagaland"],
          "options_hi": ["गोवा", "सिक्किम", "केरल", "नागालैंड"],
          "answer": "Goa",
          "answer_hi": "गोवा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which state is known as the 'Land of Rising Sun'?",
          "question_hi": "कौन सा राज्य 'उगते सूरज की भूमि' के नाम से जाना जाता है?",
          "options_en": ["Assam", "Arunachal Pradesh", "Nagaland", "Meghalaya"],
          "options_hi": ["असम", "अरुणाचल प्रदेश", "नागालैंड", "मेघालय"],
          "answer": "Arunachal Pradesh",
          "answer_hi": "अरुणाचल प्रदेश",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "The Tropic of Cancer passes through which state?",
          "question_hi": "कर्क रेखा किस राज्य से गुजरती है?",
          "options_en": ["Gujarat", "Madhya Pradesh", "Rajasthan", "Chhattisgarh"],
          "options_hi": ["गुजरात", "मध्य प्रदेश", "राजस्थान", "छत्तीसगढ़"],
          "answer": "Rajasthan",
          "answer_hi": "राजस्थान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which of these is a mineral resource?",
          "question_hi": "इनमें से कौन सा खनिज संसाधन है?",
          "options_en": ["Coal", "Water", "Solar Energy", "Wind Energy"],
          "options_hi": ["कोयला", "पानी", "सौर ऊर्जा", "पवन ऊर्जा"],
          "answer": "Coal",
          "answer_hi": "कोयला",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which continent has the largest area?",
          "question_hi": "कौन सा महाद्वीप सबसे बड़ा है?",
          "options_en": ["Asia", "Africa", "North America", "Europe"],
          "options_hi": ["एशिया", "अफ्रीका", "उत्तर अमेरिका", "यूरोप"],
          "answer": "Asia",
          "answer_hi": "एशिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which is the largest desert in the world?",
          "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
          "options_en": ["Sahara", "Thar", "Gobi", "Atacama"],
          "options_hi": ["सहारा", "थार", "गोबी", "अटाकामा"],
          "answer": "Sahara",
          "answer_hi": "सहारा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which country has the highest population in the world?",
          "question_hi": "दुनिया में सबसे अधिक जनसंख्या वाला देश कौन सा है?",
          "options_en": ["India", "China", "USA", "Russia"],
          "options_hi": ["भारत", "चीन", "संयुक्त राज्य अमेरिका", "रूस"],
          "answer": "China",
          "answer_hi": "चीन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which is the longest mountain range in the world?",
          "question_hi": "दुनिया की सबसे लंबी पर्वत श्रृंखला कौन सी है?",
          "options_en": ["Andes", "Himalayas", "Rockies", "Alps"],
          "options_hi": ["एंडीज", "हिमालय", "रॉकी", "आल्प्स"],
          "answer": "Andes",
          "answer_hi": "एंडीज",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which river is known as the 'Ganga of the South'?",
          "question_hi": "कौन सी नदी को 'दक्षिण की गंगा' कहा जाता है?",
          "options_en": ["Godavari", "Krishna", "Kaveri", "Narmada"],
          "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
          "answer": "Godavari",
          "answer_hi": "गोदावरी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "What is the currency of Japan?",
          "question_hi": "जापान की मुद्रा क्या है?",
          "options_en": ["Yuan", "Yen", "Won", "Ringgit"],
          "options_hi": ["युआन", "येन", "वोन", "रिंगगिट"],
          "answer": "Yen",
          "answer_hi": "येन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What is the main source of energy in India?",
          "question_hi": "भारत में ऊर्जा का मुख्य स्रोत क्या है?",
          "options_en": ["Coal", "Solar Power", "Wind Power", "Hydropower"],
          "options_hi": ["कोयला", "सौर ऊर्जा", "पवन ऊर्जा", "जल विद्युत"],
          "answer": "Coal",
          "answer_hi": "कोयला",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "What is the capital of Madhya Pradesh?",
          "question_hi": "मध्य प्रदेश की राजधानी क्या है?",
          "options_en": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
          "options_hi": ["भोपाल", "इंदौर", "ग्वालियर", "जबलपुर"],
          "answer": "Bhopal",
          "answer_hi": "भोपाल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Which is the highest peak in India?",
          "question_hi": "भारत की सबसे ऊँची चोटी कौन सी है?",
          "options_en": ["Kangchenjunga", "Everest", "Nanda Devi", "Makalu"],
          "options_hi": ["कंचनजंघा", "एवरेस्ट", "नंदा देवी", "मकालू"],
          "answer": "Kangchenjunga",
          "answer_hi": "कंचनजंघा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "Which of these is the largest forest type in India?",
          "question_hi": "भारत में इनमें से सबसे बड़ा वन प्रकार कौन सा है?",
          "options_en": ["Tropical Rainforest", "Tropical Deciduous", "Temperate Forest", "Montane Forest"],
          "options_hi": ["उष्णकटिबंधीय वर्षावन", "उष्णकटिबंधीय पर्णपाती", "मध्यमकटिबंधीय वन", "पर्वतीय वन"],
          "answer": "Tropical Deciduous",
          "answer_hi": "उष्णकटिबंधीय पर्णपाती",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Which is the major crop of India?",
          "question_hi": "भारत की प्रमुख फसल कौन सी है?",
          "options_en": ["Rice", "Wheat", "Sugarcane", "Cotton"],
          "options_hi": ["चावल", "गेहूं", "गन्ना", "कपास"],
          "answer": "Rice",
          "answer_hi": "चावल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "Which is the largest island in the world?",
          "question_hi": "दुनिया का सबसे बड़ा द्वीप कौन सा है?",
          "options_en": ["Greenland", "Australia", "New Guinea", "Borneo"],
          "options_hi": ["ग्रीनलैंड", "ऑस्ट्रेलिया", "न्यू गिनी", "बोर्नियो"],
          "answer": "Greenland",
          "answer_hi": "ग्रीनलैंड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "Which ocean is the largest?",
          "question_hi": "कौन सा महासागर सबसे बड़ा है?",
          "options_en": ["Atlantic", "Indian", "Pacific", "Arctic"],
          "options_hi": ["अटलांटिक", "भारतीय", "प्रशांत", "आर्कटिक"],
          "answer": "Pacific",
          "answer_hi": "प्रशांत",
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


