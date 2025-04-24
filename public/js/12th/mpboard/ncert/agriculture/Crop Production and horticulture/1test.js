const questions = [  
  {
    "num": 1,
    "question_en": "Which of the following is a Rabi crop?",
    "question_hi": "निम्न में से कौन सी एक रबी फसल है?",
    "options_en": ["Rice", "Wheat", "Maize", "Cotton"],
    "options_hi": ["धान", "गेहूं", "मक्का", "कपास"],
    "answer": "Wheat",
    "answer_hi": "गेहूं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which nutrient is essential for root development?",
    "question_hi": "जड़ों के विकास के लिए कौन सा पोषक तत्व आवश्यक है?",
    "options_en": ["Nitrogen", "Phosphorus", "Potassium", "Calcium"],
    "options_hi": ["नाइट्रोजन", "फॉस्फोरस", "पोटेशियम", "कैल्शियम"],
    "answer": "Phosphorus",
    "answer_hi": "फॉस्फोरस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which method is commonly used for irrigation in horticultural crops?",
    "question_hi": "उद्यान फसलों की सिंचाई के लिए सामान्यतः कौन सी विधि अपनाई जाती है?",
    "options_en": ["Sprinkler", "Drip", "Flood", "Canal"],
    "options_hi": ["स्प्रिंकलर", "ड्रिप", "बाढ़", "नहर"],
    "answer": "Drip",
    "answer_hi": "ड्रिप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which crop is propagated by tubers?",
    "question_hi": "कौन सी फसल कंदों द्वारा प्रजनित होती है?",
    "options_en": ["Potato", "Wheat", "Rice", "Maize"],
    "options_hi": ["आलू", "गेहूं", "धान", "मक्का"],
    "answer": "Potato",
    "answer_hi": "आलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which is a micronutrient required by plants?",
    "question_hi": "पौधों के लिए आवश्यक एक सूक्ष्म पोषक तत्व कौन सा है?",
    "options_en": ["Iron", "Nitrogen", "Phosphorus", "Potassium"],
    "options_hi": ["लौह", "नाइट्रोजन", "फॉस्फोरस", "पोटेशियम"],
    "answer": "Iron",
    "answer_hi": "लौह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of the following is a horticultural crop?",
    "question_hi": "निम्न में से कौन सी एक बागवानी फसल है?",
    "options_en": ["Tomato", "Wheat", "Rice", "Barley"],
    "options_hi": ["टमाटर", "गेहूं", "धान", "जौ"],
    "answer": "Tomato",
    "answer_hi": "टमाटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the main function of greenhouses?",
    "question_hi": "ग्रीनहाउस का मुख्य कार्य क्या होता है?",
    "options_en": ["To reduce sunlight", "To provide shade", "To control temperature", "To protect from wind"],
    "options_hi": ["धूप को कम करना", "छाया प्रदान करना", "तापमान नियंत्रित करना", "हवा से सुरक्षा"],
    "answer": "To control temperature",
    "answer_hi": "तापमान नियंत्रित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which is the most suitable method for sowing seeds in lines?",
    "question_hi": "बीजों को कतार में बोने की सबसे उपयुक्त विधि कौन सी है?",
    "options_en": ["Broadcasting", "Dibbling", "Transplanting", "Drilling"],
    "options_hi": ["छिड़काव", "गाड़ना", "रोपाई", "ड्रिलिंग"],
    "answer": "Drilling",
    "answer_hi": "ड्रिलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which fruit is climacteric in nature?",
    "question_hi": "निम्न में से कौन सा फल परिपक्वता के बाद भी पकता है?",
    "options_en": ["Mango", "Grapes", "Pineapple", "Orange"],
    "options_hi": ["आम", "अंगूर", "अनानास", "संतरा"],
    "answer": "Mango",
    "answer_hi": "आम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which is a method of vegetative propagation?",
    "question_hi": "वनस्पति जनन की एक विधि कौन सी है?",
    "options_en": ["Cutting", "Seed", "Fertilization", "Pollination"],
    "options_hi": ["कटिंग", "बीज", "निषेचन", "परागण"],
    "answer": "Cutting",
    "answer_hi": "कटिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which is the best month to plant rose in India?",
    "question_hi": "भारत में गुलाब लगाने का सर्वोत्तम महीना कौन सा है?",
    "options_en": ["January", "July", "October", "April"],
    "options_hi": ["जनवरी", "जुलाई", "अक्टूबर", "अप्रैल"],
    "answer": "October",
    "answer_hi": "अक्टूबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which element is responsible for chlorosis in leaves?",
    "question_hi": "पत्तियों में हरितहीनता के लिए कौन सा तत्व जिम्मेदार है?",
    "options_en": ["Iron", "Zinc", "Boron", "Copper"],
    "options_hi": ["लौह", "जिंक", "बोरॉन", "तांबा"],
    "answer": "Iron",
    "answer_hi": "लौह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which part of the plant is used in grafting?",
    "question_hi": "पौधे के किस भाग का उपयोग कलम में किया जाता है?",
    "options_en": ["Leaf", "Flower", "Stem", "Root"],
    "options_hi": ["पत्ता", "फूल", "तना", "जड़"],
    "answer": "Stem",
    "answer_hi": "तना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which type of soil is best for horticultural crops?",
    "question_hi": "उद्यान फसलों के लिए कौन सी मिट्टी सबसे उपयुक्त है?",
    "options_en": ["Clayey", "Sandy", "Loamy", "Rocky"],
    "options_hi": ["चिकनी", "रेतीली", "बलुई-दोमट", "पथरीली"],
    "answer": "Loamy",
    "answer_hi": "बलुई-दोमट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which is a commercial flower crop?",
    "question_hi": "निम्न में से कौन सी एक व्यावसायिक फूल फसल है?",
    "options_en": ["Rose", "Wheat", "Tomato", "Onion"],
    "options_hi": ["गुलाब", "गेहूं", "टमाटर", "प्याज"],
    "answer": "Rose",
    "answer_hi": "गुलाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which is a disease of wheat crop?",
    "question_hi": "गेहूं की फसल का एक रोग कौन सा है?",
    "options_en": ["Rust", "Blight", "Wilt", "Mildew"],
    "options_hi": ["रस्ट", "ब्लाइट", "विल्ट", "मिल्ड्यू"],
    "answer": "Rust",
    "answer_hi": "रस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which fruit is propagated by budding?",
    "question_hi": "कौन सा फल कली कलम द्वारा उगाया जाता है?",
    "options_en": ["Mango", "Banana", "Papaya", "Pineapple"],
    "options_hi": ["आम", "केला", "पपीता", "अनानास"],
    "answer": "Mango",
    "answer_hi": "आम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which is the ideal temperature for germination of most vegetable seeds?",
    "question_hi": "अधिकांश सब्जी बीजों के अंकुरण के लिए आदर्श तापमान क्या है?",
    "options_en": ["10°C", "15–25°C", "30–35°C", "40°C"],
    "options_hi": ["10°C", "15–25°C", "30–35°C", "40°C"],
    "answer": "15–25°C",
    "answer_hi": "15–25°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which vitamin is rich in carrot?",
    "question_hi": "गाजर में कौन सा विटामिन प्रचुर मात्रा में होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which is used for controlling fungal diseases in plants?",
    "question_hi": "पौधों में फफूंदी रोग नियंत्रण के लिए क्या उपयोग किया जाता है?",
    "options_en": ["Fungicides", "Insecticides", "Weedicides", "Fertilizers"],
    "options_hi": ["फफूंदी नाशक", "कीटनाशक", "नाशी घास", "उर्वरक"],
    "answer": "Fungicides",
    "answer_hi": "फफूंदी नाशक",
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


