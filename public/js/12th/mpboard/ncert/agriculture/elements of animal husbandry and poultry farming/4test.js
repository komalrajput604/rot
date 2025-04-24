const questions = [  
    {
      "num": 1,
      "question_en": "What is the primary source of protein for livestock?",
      "question_hi": "पशुधन के लिए प्रोटीन का मुख्य स्रोत क्या है?",
      "options_en": ["Grains", "Fruits", "Legumes", "Vegetables"],
      "options_hi": ["अनाज", "फल", "पद्यपुष्प", "सब्जियाँ"],
      "answer": "Legumes",
      "answer_hi": "पद्यपुष्प",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Which breed of cow is known for high milk production?",
      "question_hi": "किस गाय की नस्ल को उच्च दूध उत्पादन के लिए जाना जाता है?",
      "options_en": ["Jersey", "Gir", "Sahiwal", "Tharparkar"],
      "options_hi": ["जर्सी", "गिर", "साहीवाल", "थारपारकर"],
      "answer": "Jersey",
      "answer_hi": "जर्सी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "What is the ideal temperature range for poultry farming?",
      "question_hi": "पोल्ट्री फार्मिंग के लिए आदर्श तापमान सीमा क्या है?",
      "options_en": ["20°C to 25°C", "15°C to 20°C", "25°C to 30°C", "30°C to 35°C"],
      "options_hi": ["20°C से 25°C", "15°C से 20°C", "25°C से 30°C", "30°C से 35°C"],
      "answer": "20°C to 25°C",
      "answer_hi": "20°C से 25°C",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Which poultry breed is most commonly used for egg production?",
      "question_hi": "किस पोल्ट्री नस्ल का सबसे अधिक उपयोग अंडे उत्पादन के लिए किया जाता है?",
      "options_en": ["Broiler", "Leghorn", "Rhode Island Red", "Aseel"],
      "options_hi": ["ब्रोइलर", "लेघॉर्न", "रोड आइलैंड रेड", "असील"],
      "answer": "Leghorn",
      "answer_hi": "लेघॉर्न",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "What is the average lifespan of a dairy cow?",
      "question_hi": "दूध देने वाली गाय का औसत जीवनकाल क्या होता है?",
      "options_en": ["5-8 years", "8-12 years", "12-15 years", "15-20 years"],
      "options_hi": ["5-8 साल", "8-12 साल", "12-15 साल", "15-20 साल"],
      "answer": "8-12 years",
      "answer_hi": "8-12 साल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "What is the process of breeding animals to improve traits called?",
      "question_hi": "पशुओं के लक्षणों को सुधारने के लिए प्रजनन की प्रक्रिया को क्या कहा जाता है?",
      "options_en": ["Artificial Insemination", "Selective Breeding", "Cross-breeding", "Hybridization"],
      "options_hi": ["कृत्रिम गर्भाधान", "चयनात्मक प्रजनन", "क्रॉस-प्रजनन", "हाइब्रिडाइजेशन"],
      "answer": "Selective Breeding",
      "answer_hi": "चयनात्मक प्रजनन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Which of the following is a common disease in poultry farming?",
      "question_hi": "पोल्ट्री फार्मिंग में निम्नलिखित में से कौन सा एक सामान्य रोग है?",
      "options_en": ["Avian Influenza", "Mad Cow Disease", "Foot and Mouth Disease", "Rabies"],
      "options_hi": ["एवियन इन्फ्लूएंजा", "मैड काऊ रोग", "पैर और मुँह की बीमारी", "रेबीज"],
      "answer": "Avian Influenza",
      "answer_hi": "एवियन इन्फ्लूएंजा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "What is the term for a male pig used for breeding?",
      "question_hi": "प्रजनन के लिए उपयोग किए जाने वाले नर सूअर को क्या कहा जाता है?",
      "options_en": ["Sow", "Boar", "Barrow", "Gilt"],
      "options_hi": ["सूअर", "बोर", "बैरो", "गिल्ट"],
      "answer": "Boar",
      "answer_hi": "बोर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "What is the recommended space for each chicken in a poultry farm?",
      "question_hi": "पोल्ट्री फार्म में प्रत्येक मुर्गे के लिए अनुशंसित स्थान क्या है?",
      "options_en": ["0.5 sq meter", "1 sq meter", "2 sq meters", "3 sq meters"],
      "options_hi": ["0.5 वर्ग मीटर", "1 वर्ग मीटर", "2 वर्ग मीटर", "3 वर्ग मीटर"],
      "answer": "1 sq meter",
      "answer_hi": "1 वर्ग मीटर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Which of these is a type of feed used in poultry farming?",
      "question_hi": "इनमें से कौन सा पोल्ट्री फार्मिंग में उपयोग किए जाने वाला एक प्रकार का आहार है?",
      "options_en": ["Concentrates", "Roughages", "Grains", "All of the above"],
      "options_hi": ["संगठित आहार", "कठोर आहार", "अनाज", "उपरोक्त सभी"],
      "answer": "All of the above",
      "answer_hi": "उपरोक्त सभी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "What is the main function of a rooster in poultry farming?",
      "question_hi": "पोल्ट्री फार्मिंग में मुर्गे का मुख्य कार्य क्या है?",
      "options_en": ["Egg laying", "Incubating eggs", "Mating with hens", "Feeding chicks"],
      "options_hi": ["अंडे देना", "अंडों का इंकेबेशन", "मुर्गियों के साथ मिलन", "चूजों को खाना देना"],
      "answer": "Mating with hens",
      "answer_hi": "मुर्गियों के साथ मिलन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "What is the average egg production per hen per year in a commercial poultry farm?",
      "question_hi": "एक व्यावसायिक पोल्ट्री फार्म में प्रति मुर्गी प्रति वर्ष औसत अंडे उत्पादन क्या होता है?",
      "options_en": ["100-150", "200-250", "300-350", "400-450"],
      "options_hi": ["100-150", "200-250", "300-350", "400-450"],
      "answer": "200-250",
      "answer_hi": "200-250",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "Which animal is commonly used for draught purposes in farming?",
      "question_hi": "किस जानवर का खेती में खींचने के उद्देश्य के लिए सामान्य रूप से उपयोग किया जाता है?",
      "options_en": ["Cow", "Horse", "Donkey", "Buffalo"],
      "options_hi": ["गाय", "घोड़ा", "खच्चर", "भैंस"],
      "answer": "Horse",
      "answer_hi": "घोड़ा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "What is the typical gestation period for a cow?",
      "question_hi": "गाय का सामान्य गर्भकाल क्या होता है?",
      "options_en": ["6 months", "9 months", "12 months", "15 months"],
      "options_hi": ["6 महीने", "9 महीने", "12 महीने", "15 महीने"],
      "answer": "9 months",
      "answer_hi": "9 महीने",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "What is the common name for the domesticated species of turkey?",
      "question_hi": "पालित तुर्की की किस प्रजाति को सामान्य नाम दिया जाता है?",
      "options_en": ["White Turkey", "Bronze Turkey", "Black Turkey", "Domestic Turkey"],
      "options_hi": ["सफेद तुर्की", "ब्रॉन्ज तुर्की", "काले तुर्की", "घरेलू तुर्की"],
      "answer": "Domestic Turkey",
      "answer_hi": "घरेलू तुर्की",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "Which breed of sheep is known for wool production?",
      "question_hi": "किस भेड़ की नस्ल को ऊन उत्पादन के लिए जाना जाता है?",
      "options_en": ["Merino", "Dorper", "Suffolk", "Hampshire"],
      "options_hi": ["मेरिनो", "डोर्पर", "सफोक", "हैम्पशायर"],
      "answer": "Merino",
      "answer_hi": "मेरिनो",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "What is the term for the young of a pig?",
      "question_hi": "सूअर के बच्चे को क्या कहा जाता है?",
      "options_en": ["Piglet", "Calf", "Lamb", "Kid"],
      "options_hi": ["सूअर का बच्चा", "बच्चा", "भेड़ का बच्चा", "बकरी का बच्चा"],
      "answer": "Piglet",
      "answer_hi": "सूअर का बच्चा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "What is the average weight of a full-grown broiler chicken?",
      "question_hi": "एक पूर्ण विकसित ब्रोइलर मुर्गे का औसत वजन क्या होता है?",
      "options_en": ["1-2 kg", "2-3 kg", "3-4 kg", "4-5 kg"],
      "options_hi": ["1-2 किलोग्राम", "2-3 किलोग्राम", "3-4 किलोग्राम", "4-5 किलोग्राम"],
      "answer": "2-3 kg",
      "answer_hi": "2-3 किलोग्राम",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Which nutrient is crucial for the growth of poultry?",
      "question_hi": "पोल्ट्री के विकास के लिए कौन सा पोषक तत्व महत्वपूर्ण होता है?",
      "options_en": ["Protein", "Fat", "Carbohydrates", "Vitamins"],
      "options_hi": ["प्रोटीन", "वसा", "कार्बोहाइड्रेट", "विटामिन"],
      "answer": "Protein",
      "answer_hi": "प्रोटीन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "Which type of poultry is raised for meat production?",
      "question_hi": "किस प्रकार के पोल्ट्री का पालन मांस उत्पादन के लिए किया जाता है?",
      "options_en": ["Layer", "Broiler", "Dual-purpose", "Egg-layer"],
      "options_hi": ["लेयर", "ब्रोइलर", "ड्यूल-पर्पस", "अंडे देने वाली"],
      "answer": "Broiler",
      "answer_hi": "ब्रोइलर",
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


