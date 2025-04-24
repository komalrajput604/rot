const questions = [ 
        {
            "num": 1,
            "question_en": "What is the capital of India?",
            "question_hi": "भारत की राजधानी क्या है?",
            "options_en": ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
            "options_hi": ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"],
            "answer": "New Delhi",
            "answer_hi": "नई दिल्ली",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "Which river is known as the lifeline of India?",
            "question_hi": "कौन सी नदी को भारत की जीवनरेखा कहा जाता है?",
            "options_en": ["Ganges", "Yamuna", "Godavari", "Narmada"],
            "options_hi": ["गंगा", "यमुना", "गोदावरी", "नर्मदा"],
            "answer": "Ganges",
            "answer_hi": "गंगा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "Which state is the largest producer of tea in India?",
            "question_hi": "भारत में चाय का सबसे बड़ा उत्पादक कौन सा राज्य है?",
            "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
            "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
            "answer": "Assam",
            "answer_hi": "असम",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "What is the main occupation in rural areas of India?",
            "question_hi": "भारत के ग्रामीण क्षेत्रों में मुख्य व्यवसाय क्या है?",
            "options_en": ["Agriculture", "Industry", "Tourism", "Mining"],
            "options_hi": ["कृषि", "उद्योग", "पर्यटन", "खुदाई"],
            "answer": "Agriculture",
            "answer_hi": "कृषि",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "Which one is the largest state in India by area?",
            "question_hi": "भारत में क्षेत्रफल द्वारा सबसे बड़ा राज्य कौन सा है?",
            "options_en": ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
            "options_hi": ["उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान", "महाराष्ट्र"],
            "answer": "Rajasthan",
            "answer_hi": "राजस्थान",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 6,
            "question_en": "What is the primary factor for the monsoon in India?",
            "question_hi": "भारत में मानसून का मुख्य कारण क्या है?",
            "options_en": ["Temperature difference", "Ocean currents", "Wind patterns", "Rainfall patterns"],
            "options_hi": ["तापमान का अंतर", "समुद्र धारा", "हवा के प्रवाह", "वर्षा के पैटर्न"],
            "answer": "Wind patterns",
            "answer_hi": "हवा के प्रवाह",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 7,
            "question_en": "Which of these is not a mineral resource?",
            "question_hi": "इनमें से कौन सा खनिज संसाधन नहीं है?",
            "options_en": ["Coal", "Iron", "Silica", "Cotton"],
            "options_hi": ["कोयला", "लोहा", "सिलिका", "कपास"],
            "answer": "Cotton",
            "answer_hi": "कपास",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 8,
            "question_en": "What is the main reason for soil erosion in India?",
            "question_hi": "भारत में मृदा अपरदन का मुख्य कारण क्या है?",
            "options_en": ["Heavy rainfall", "Deforestation", "Urbanization", "Overgrazing"],
            "options_hi": ["भारी वर्षा", "वनों की कटाई", "शहरीकरण", "अत्यधिक चराई"],
            "answer": "Deforestation",
            "answer_hi": "वनों की कटाई",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 9,
            "question_en": "Which state is known for its black soil?",
            "question_hi": "कौन सा राज्य अपनी काली मृदा के लिए जाना जाता है?",
            "options_en": ["Maharashtra", "Punjab", "Bihar", "Uttarakhand"],
            "options_hi": ["महाराष्ट्र", "पंजाब", "बिहार", "उत्तराखंड"],
            "answer": "Maharashtra",
            "answer_hi": "महाराष्ट्र",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 10,
            "question_en": "Which of the following is a major port of India?",
            "question_hi": "निम्नलिखित में से कौन सा भारत का प्रमुख बंदरगाह है?",
            "options_en": ["Chennai", "Vishakhapatnam", "Mumbai", "All of the above"],
            "options_hi": ["चेन्नई", "विशाखपट्टनम", "मुंबई", "सभी उपरोक्त"],
            "answer": "All of the above",
            "answer_hi": "सभी उपरोक्त",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 11,
            "question_en": "What is the total area of India?",
            "question_hi": "भारत का कुल क्षेत्रफल कितना है?",
            "options_en": ["2.8 million km²", "3.2 million km²", "3.5 million km²", "2.3 million km²"],
            "options_hi": ["2.8 मिलियन किमी²", "3.2 मिलियन किमी²", "3.5 मिलियन किमी²", "2.3 मिलियन किमी²"],
            "answer": "3.2 million km²",
            "answer_hi": "3.2 मिलियन किमी²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 12,
            "question_en": "Which state has the highest population in India?",
            "question_hi": "भारत में सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
            "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
            "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
            "answer": "Uttar Pradesh",
            "answer_hi": "उत्तर प्रदेश",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 13,
            "question_en": "What is the main characteristic of the Western Ghats?",
            "question_hi": "पश्चिमी घाट की मुख्य विशेषता क्या है?",
            "options_en": ["They are rich in biodiversity", "They are desert areas", "They are plain lands", "They have dry climate"],
            "options_hi": ["यह जैव विविधता में समृद्ध हैं", "यह रेगिस्तानी क्षेत्र हैं", "यह समतल भूमि हैं", "यहां शुष्क जलवायु है"],
            "answer": "They are rich in biodiversity",
            "answer_hi": "यह जैव विविधता में समृद्ध हैं",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 14,
            "question_en": "Which of the following is the largest river basin in India?",
            "question_hi": "निम्नलिखित में से कौन सा भारत का सबसे बड़ा नदी बेसिन है?",
            "options_en": ["Ganges Basin", "Godavari Basin", "Indus Basin", "Brahmaputra Basin"],
            "options_hi": ["गंगा बेसिन", "गोदावरी बेसिन", "सिंधु बेसिन", "ब्रह्मपुत्र बेसिन"],
            "answer": "Ganges Basin",
            "answer_hi": "गंगा बेसिन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 15,
            "question_en": "What is the longest river in India?",
            "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
            "options_en": ["Ganges", "Yamuna", "Brahmaputra", "Indus"],
            "options_hi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "सिंधु"],
            "answer": "Ganges",
            "answer_hi": "गंगा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 16,
            "question_en": "Which of the following is the largest desert in India?",
            "question_hi": "निम्नलिखित में से कौन सा भारत का सबसे बड़ा रेगिस्तान है?",
            "options_en": ["Thar Desert", "Kutch Desert", "Ladakh Desert", "Deccan Plateau"],
            "options_hi": ["थार रेगिस्तान", "कच्छ रेगिस्तान", "लद्दाख रेगिस्तान", "दक्कन पठार"],
            "answer": "Thar Desert",
            "answer_hi": "थार रेगिस्तान",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "What is the primary crop grown in the Indo-Gangetic Plain?",
            "question_hi": "इंडो-गंगेटिक मैदान में मुख्य रूप से कौन सी फसल उगाई जाती है?",
            "options_en": ["Rice", "Wheat", "Cotton", "Sugarcane"],
            "options_hi": ["चावल", "गेंहू", "कपास", "गन्ना"],
            "answer": "Rice",
            "answer_hi": "चावल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "Which mountain range separates India from China?",
            "question_hi": "भारत को चीन से अलग करने वाली पर्वत श्रृंखला कौन सी है?",
            "options_en": ["Himalayas", "Aravalli Range", "Vindhya Range", "Western Ghats"],
            "options_hi": ["हिमालय", "अरावली श्रृंखला", "विंध्य पर्वत", "पश्चिमी घाट"],
            "answer": "Himalayas",
            "answer_hi": "हिमालय",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "Which of the following is the largest state by population in India?",
            "question_hi": "निम्नलिखित में से कौन सा राज्य भारत में जनसंख्या के हिसाब से सबसे बड़ा है?",
            "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "West Bengal"],
            "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "पश्चिम बंगाल"],
            "answer": "Uttar Pradesh",
            "answer_hi": "उत्तर प्रदेश",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "Which state is famous for the cultivation of cotton?",
            "question_hi": "कौन सा राज्य कपास की खेती के लिए प्रसिद्ध है?",
            "options_en": ["Maharashtra", "Punjab", "Andhra Pradesh", "Gujarat"],
            "options_hi": ["महाराष्ट्र", "पंजाब", "आंध्र प्रदेश", "गुजरात"],
            "answer": "Gujarat",
            "answer_hi": "गुजरात",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 21,
            "question_en": "Which one of these rivers is a tributary of the Ganges?",
            "question_hi": "इनमें से कौन सी नदी गंगा की सहायक नदी है?",
            "options_en": ["Yamuna", "Godavari", "Sarasvati", "Narmada"],
            "options_hi": ["यमुना", "गोदावरी", "सर्वास्वती", "नर्मदा"],
            "answer": "Yamuna",
            "answer_hi": "यमुना",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 22,
            "question_en": "Which state is known for the cultivation of tea and silk?",
            "question_hi": "कौन सा राज्य चाय और रेशम की खेती के लिए प्रसिद्ध है?",
            "options_en": ["Assam", "West Bengal", "Sikkim", "Kerala"],
            "options_hi": ["असम", "पश्चिम बंगाल", "सिक्किम", "केरल"],
            "answer": "Assam",
            "answer_hi": "असम",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 23,
            "question_en": "Which river is the longest in the Indian subcontinent?",
            "question_hi": "भारतीय उपमहाद्वीप में सबसे लंबी नदी कौन सी है?",
            "options_en": ["Indus", "Ganges", "Brahmaputra", "Yamuna"],
            "options_hi": ["सिंधु", "गंगा", "ब्रह्मपुत्र", "यमुना"],
            "answer": "Indus",
            "answer_hi": "सिंधु",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 24,
            "question_en": "Which state is famous for the cultivation of sugarcane?",
            "question_hi": "कौन सा राज्य गन्ने की खेती के लिए प्रसिद्ध है?",
            "options_en": ["Uttar Pradesh", "Maharashtra", "Punjab", "Bihar"],
            "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "पंजाब", "बिहार"],
            "answer": "Uttar Pradesh",
            "answer_hi": "उत्तर प्रदेश",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 25,
            "question_en": "Which one of these is an important industrial state in India?",
            "question_hi": "भारत में इनमें से कौन सा राज्य एक महत्वपूर्ण औद्योगिक राज्य है?",
            "options_en": ["Gujarat", "Uttarakhand", "Rajasthan", "Bihar"],
            "options_hi": ["गुजरात", "उत्तराखंड", "राजस्थान", "बिहार"],
            "answer": "Gujarat",
            "answer_hi": "गुजरात",
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


