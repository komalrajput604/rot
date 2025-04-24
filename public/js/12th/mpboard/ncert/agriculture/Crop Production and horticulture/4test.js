const questions = [
  {
    "num": 1,
    "question_en": "Which nutrient is essential for flowering in plants?",
    "question_hi": "पौधों में फूल आने के लिए कौन सा पोषक तत्व आवश्यक है?",
    "options_en": ["Nitrogen", "Phosphorus", "Potassium", "Calcium"],
    "options_hi": ["नाइट्रोजन", "फास्फोरस", "पोटैशियम", "कैल्शियम"],
    "answer": "Phosphorus",
    "answer_hi": "फास्फोरस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used for propagation in sugarcane?",
    "question_hi": "गन्ने में प्रसारण की कौन सी विधि अपनाई जाती है?",
    "options_en": ["Seed", "Stem cutting", "Root cutting", "Budding"],
    "options_hi": ["बीज", "तना कटिंग", "जड़ कटिंग", "कलिकायन"],
    "answer": "Stem cutting",
    "answer_hi": "तना कटिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which crop is most suitable for dry farming?",
    "question_hi": "सूखा कृषि के लिए कौन सी फसल सबसे उपयुक्त है?",
    "options_en": ["Rice", "Wheat", "Bajra", "Sugarcane"],
    "options_hi": ["धान", "गेहूं", "बाजरा", "गन्ना"],
    "answer": "Bajra",
    "answer_hi": "बाजरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which part of the plant is used for grafting?",
    "question_hi": "प्लांट के किस भाग का उपयोग ग्राफ्टिंग में किया जाता है?",
    "options_en": ["Leaf", "Root", "Stem", "Flower"],
    "options_hi": ["पत्ता", "जड़", "तना", "फूल"],
    "answer": "Stem",
    "answer_hi": "तना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of the following is a rabi crop?",
    "question_hi": "निम्न में से कौन सी रबी फसल है?",
    "options_en": ["Maize", "Wheat", "Paddy", "Bajra"],
    "options_hi": ["मक्का", "गेहूं", "धान", "बाजरा"],
    "answer": "Wheat",
    "answer_hi": "गेहूं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which fruit plant is propagated by budding?",
    "question_hi": "कौन सा फलदार पौधा कलिकायन से उत्पन्न होता है?",
    "options_en": ["Banana", "Mango", "Papaya", "Pineapple"],
    "options_hi": ["केला", "आम", "पपीता", "अनानास"],
    "answer": "Mango",
    "answer_hi": "आम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which chemical is used to ripen fruits artificially?",
    "question_hi": "फलों को कृत्रिम रूप से पकाने के लिए कौन सा रसायन उपयोग में लिया जाता है?",
    "options_en": ["Urea", "Calcium carbide", "Sulphur", "Sodium chloride"],
    "options_hi": ["यूरिया", "कैल्शियम कार्बाइड", "सल्फर", "सोडियम क्लोराइड"],
    "answer": "Calcium carbide",
    "answer_hi": "कैल्शियम कार्बाइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Drip irrigation is most suitable for which crop?",
    "question_hi": "ड्रिप सिंचाई किस फसल के लिए सबसे उपयुक्त है?",
    "options_en": ["Wheat", "Rice", "Sugarcane", "Grapes"],
    "options_hi": ["गेहूं", "धान", "गन्ना", "अंगूर"],
    "answer": "Grapes",
    "answer_hi": "अंगूर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which is the main nutrient found in urea?",
    "question_hi": "यूरिया में मुख्य रूप से कौन सा पोषक तत्व पाया जाता है?",
    "options_en": ["Phosphorus", "Potassium", "Nitrogen", "Calcium"],
    "options_hi": ["फास्फोरस", "पोटैशियम", "नाइट्रोजन", "कैल्शियम"],
    "answer": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which one is a horticultural crop?",
    "question_hi": "निम्न में से कौन सी एक बागवानी फसल है?",
    "options_en": ["Wheat", "Rice", "Tomato", "Barley"],
    "options_hi": ["गेहूं", "धान", "टमाटर", "जौ"],
    "answer": "Tomato",
    "answer_hi": "टमाटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is a micronutrient?",
    "question_hi": "निम्न में से कौन सूक्ष्म पोषक तत्व है?",
    "options_en": ["Nitrogen", "Zinc", "Potassium", "Phosphorus"],
    "options_hi": ["नाइट्रोजन", "जिंक", "पोटैशियम", "फास्फोरस"],
    "answer": "Zinc",
    "answer_hi": "जिंक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which disease in crops is caused by fungus?",
    "question_hi": "फसलों में कौन सा रोग कवक से होता है?",
    "options_en": ["Rust", "Wilt", "Blight", "All of these"],
    "options_hi": ["रस्ट", "विल्ट", "ब्लाइट", "इनमें सभी"],
    "answer": "All of these",
    "answer_hi": "इनमें सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which is an organic manure?",
    "question_hi": "कौन सा एक जैविक खाद है?",
    "options_en": ["Urea", "DAP", "Compost", "MOP"],
    "options_hi": ["यूरिया", "डीएपी", "कम्पोस्ट", "एमओपी"],
    "answer": "Compost",
    "answer_hi": "कम्पोस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which is a fruit vegetable?",
    "question_hi": "कौन सी फल वाली सब्जी है?",
    "options_en": ["Cabbage", "Spinach", "Brinjal", "Fenugreek"],
    "options_hi": ["पत्ता गोभी", "पालक", "बैंगन", "मेथी"],
    "answer": "Brinjal",
    "answer_hi": "बैंगन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which of the following crops is grown in nursery before transplanting?",
    "question_hi": "निम्न में से किस फसल को रोपाई से पहले नर्सरी में उगाया जाता है?",
    "options_en": ["Maize", "Wheat", "Rice", "Bajra"],
    "options_hi": ["मक्का", "गेहूं", "धान", "बाजरा"],
    "answer": "Rice",
    "answer_hi": "धान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which vitamin is rich in carrot?",
    "question_hi": "गाजर में किस विटामिन की प्रचुरता होती है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which is used to control weeds in crops?",
    "question_hi": "फसलों में खरपतवार नियंत्रण के लिए क्या प्रयोग किया जाता है?",
    "options_en": ["Insecticide", "Herbicide", "Fungicide", "Fertilizer"],
    "options_hi": ["कीटनाशक", "शाकनाशी", "कवकनाशी", "उर्वरक"],
    "answer": "Herbicide",
    "answer_hi": "शाकनाशी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which is the best season for sowing wheat?",
    "question_hi": "गेहूं बोने का सर्वोत्तम समय कौन सा है?",
    "options_en": ["Kharif", "Zaid", "Rabi", "All of these"],
    "options_hi": ["खरीफ", "जायद", "रबी", "इनमें सभी"],
    "answer": "Rabi",
    "answer_hi": "रबी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which one is a leguminous crop?",
    "question_hi": "निम्न में से कौन सी दलहनी फसल है?",
    "options_en": ["Rice", "Wheat", "Gram", "Maize"],
    "options_hi": ["धान", "गेहूं", "चना", "मक्का"],
    "answer": "Gram",
    "answer_hi": "चना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which one is not a horticultural crop?",
    "question_hi": "निम्न में से कौन सी बागवानी फसल नहीं है?",
    "options_en": ["Banana", "Onion", "Tomato", "Wheat"],
    "options_hi": ["केला", "प्याज", "टमाटर", "गेहूं"],
    "answer": "Wheat",
    "answer_hi": "गेहूं",
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


