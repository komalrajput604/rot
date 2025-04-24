const questions = [ 

  {
    "num": 1,
    "question_en": "Which of the following is a leguminous crop?",
    "question_hi": "निम्नलिखित में से कौन सा एक फलियाँ वाला फसल है?",
    "options_en": ["Wheat", "Rice", "Groundnut", "Soybean"],
    "options_hi": ["गेहूं", "चावल", "मूंगफली", "सोयाबीन"],
    "answer": "Soybean",
    "answer_hi": "सोयाबीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the ideal temperature for the growth of wheat?",
    "question_hi": "गेहूं की वृद्धि के लिए आदर्श तापमान कितना होता है?",
    "options_en": ["15°C - 20°C", "10°C - 15°C", "20°C - 25°C", "25°C - 30°C"],
    "options_hi": ["15°C - 20°C", "10°C - 15°C", "20°C - 25°C", "25°C - 30°C"],
    "answer": "15°C - 20°C",
    "answer_hi": "15°C - 20°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which is a major pest of rice crops?",
    "question_hi": "चावल की फसलों का प्रमुख कीट कौन सा है?",
    "options_en": ["Aphid", "Brown Plant Hopper", "Whitefly", "Termite"],
    "options_hi": ["चींटा", "भूरा पौध फुदका", "सफेद मक्खी", "दीमक"],
    "answer": "Brown Plant Hopper",
    "answer_hi": "भूरा पौध फुदका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which crop is mainly grown in Kharif season?",
    "question_hi": "कौन सी फसल मुख्य रूप से खरीफ सीजन में उगाई जाती है?",
    "options_en": ["Wheat", "Rice", "Mustard", "Barley"],
    "options_hi": ["गेहूं", "चावल", "सरसों", "जौ"],
    "answer": "Rice",
    "answer_hi": "चावल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the main nutrient deficiency in soil for wheat?",
    "question_hi": "गेहूं के लिए मिट्टी में कौन सा मुख्य पोषक तत्व की कमी होती है?",
    "options_en": ["Nitrogen", "Phosphorus", "Potassium", "Iron"],
    "options_hi": ["नाइट्रोजन", "फास्फोरस", "पोटेशियम", "लोहा"],
    "answer": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which is the primary irrigation method for rice?",
    "question_hi": "चावल के लिए प्राथमिक सिंचाई विधि कौन सी है?",
    "options_en": ["Drip irrigation", "Flood irrigation", "Sprinkler irrigation", "Canal irrigation"],
    "options_hi": ["ड्रिप सिंचाई", "बाढ़ सिंचाई", "स्प्रिंकलर सिंचाई", "नहर सिंचाई"],
    "answer": "Flood irrigation",
    "answer_hi": "बाढ़ सिंचाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which nutrient is primarily responsible for leaf growth in plants?",
    "question_hi": "पौधों में पत्तियों की वृद्धि के लिए कौन सा पोषक तत्व मुख्य रूप से जिम्मेदार होता है?",
    "options_en": ["Nitrogen", "Phosphorus", "Potassium", "Magnesium"],
    "options_hi": ["नाइट्रोजन", "फास्फोरस", "पोटेशियम", "मैग्नीशियम"],
    "answer": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which is a commonly used organic fertilizer?",
    "question_hi": "कौन सा सामान्यत: उपयोग किया जाने वाला जैविक उर्वरक है?",
    "options_en": ["Urea", "Cow dung", "Superphosphate", "Potash"],
    "options_hi": ["यूरिया", "गोबर की खाद", "सुपरफॉस्फेट", "पोटाश"],
    "answer": "Cow dung",
    "answer_hi": "गोबर की खाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of the following is a hybrid variety of rice?",
    "question_hi": "निम्नलिखित में से कौन सा चावल की संकर किस्म है?",
    "options_en": ["IR 36", "Basmati", "Swarna", "PR 106"],
    "options_hi": ["IR 36", "बासमती", "स्वर्णा", "PR 106"],
    "answer": "IR 36",
    "answer_hi": "IR 36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the ideal pH range for soil in crop production?",
    "question_hi": "फसल उत्पादन के लिए मिट्टी का आदर्श pH सीमा क्या होती है?",
    "options_en": ["6.0 to 6.5", "5.5 to 6.0", "7.0 to 8.0", "8.0 to 9.0"],
    "options_hi": ["6.0 से 6.5", "5.5 से 6.0", "7.0 से 8.0", "8.0 से 9.0"],
    "answer": "6.0 to 6.5",
    "answer_hi": "6.0 से 6.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of these is a water-efficient crop?",
    "question_hi": "इनमें से कौन सी फसल जल-कुशल है?",
    "options_en": ["Rice", "Sugarcane", "Cotton", "Millets"],
    "options_hi": ["चावल", "गन्ना", "कपास", "बाजरा"],
    "answer": "Millets",
    "answer_hi": "बाजरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the major factor for the development of pests in crops?",
    "question_hi": "फसलों में कीटों के विकास का प्रमुख कारण क्या है?",
    "options_en": ["Soil moisture", "Temperature", "Soil fertility", "Poor irrigation"],
    "options_hi": ["मिट्टी में नमी", "तापमान", "मिट्टी की उर्वरता", "खराब सिंचाई"],
    "answer": "Temperature",
    "answer_hi": "तापमान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which of these is a common pest of potato crops?",
    "question_hi": "आलू की फसल का सामान्य कीट कौन सा है?",
    "options_en": ["Termite", "Aphid", "Potato tuber moth", "Whitefly"],
    "options_hi": ["दीमक", "चींटा", "आलू कंद पतंगा", "सफेद मक्खी"],
    "answer": "Potato tuber moth",
    "answer_hi": "आलू कंद पतंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which of the following is a water-soluble vitamin for plants?",
    "question_hi": "निम्नलिखित में से कौन सा पौधों के लिए जल-घुलनशील विटामिन है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन B12"],
    "answer": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which crop is associated with the process of 'vernalization'?",
    "question_hi": "'वर्नलाइजेशन' प्रक्रिया से कौन सी फसल जुड़ी होती है?",
    "options_en": ["Wheat", "Rice", "Barley", "Mustard"],
    "options_hi": ["गेहूं", "चावल", "जौ", "सरसों"],
    "answer": "Wheat",
    "answer_hi": "गेहूं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which of these is a cereal crop?",
    "question_hi": "इनमें से कौन सी अनाज फसल है?",
    "options_en": ["Wheat", "Rice", "Maize", "All of the above"],
    "options_hi": ["गेहूं", "चावल", "मक्का", "उपरोक्त सभी"],
    "answer": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the main purpose of crop rotation?",
    "question_hi": "फसल चक्रीकरण का मुख्य उद्देश्य क्या है?",
    "options_en": ["Improve soil fertility", "Increase crop yield", "Control pests", "All of the above"],
    "options_hi": ["मिट्टी की उर्वरता बढ़ाना", "फसल की उपज बढ़ाना", "कीटों को नियंत्रित करना", "उपरोक्त सभी"],
    "answer": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the name of the technique used for the production of hybrid seeds?",
    "question_hi": "संकर बीज उत्पादन के लिए उपयोग की जाने वाली तकनीक का नाम क्या है?",
    "options_en": ["Tissue culture", "Cross-pollination", "Self-pollination", "Genetic modification"],
    "options_hi": ["टिशू कल्चर", "परागण", "स्व-परागण", "जैविक संशोधन"],
    "answer": "Cross-pollination",
    "answer_hi": "परागण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which of these is a high-yielding variety of rice?",
    "question_hi": "इनमें से कौन सी उच्च उत्पादन वाली चावल की किस्म है?",
    "options_en": ["IR 64", "Basmati", "Swarna", "Pusa 1121"],
    "options_hi": ["IR 64", "बासमती", "स्वर्णा", "Pusa 1121"],
    "answer": "IR 64",
    "answer_hi": "IR 64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of these is a method of seed treatment?",
    "question_hi": "इनमें से कौन सी बीज उपचार विधि है?",
    "options_en": ["Hot water treatment", "Drying", "Fertilization", "Germination"],
    "options_hi": ["गर्म पानी का उपचार", "सुखाना", "उर्वरक", "विकसित होना"],
    "answer": "Hot water treatment",
    "answer_hi": "गर्म पानी का उपचार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which crop requires the most water for irrigation?",
    "question_hi": "कौन सी फसल सिंचाई के लिए सबसे अधिक पानी की आवश्यकता होती है?",
    "options_en": ["Rice", "Wheat", "Sugarcane", "Cotton"],
    "options_hi": ["चावल", "गेहूं", "गन्ना", "कपास"],
    "answer": "Sugarcane",
    "answer_hi": "गन्ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which nutrient is responsible for root development in plants?",
    "question_hi": "पौधों में जड़ों के विकास के लिए कौन सा पोषक तत्व जिम्मेदार होता है?",
    "options_en": ["Nitrogen", "Phosphorus", "Potassium", "Magnesium"],
    "options_hi": ["नाइट्रोजन", "फास्फोरस", "पोटेशियम", "मैग्नीशियम"],
    "answer": "Phosphorus",
    "answer_hi": "फास्फोरस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which variety of cotton is widely grown in India?",
    "question_hi": "भारत में कौन सी कपास की किस्म व्यापक रूप से उगाई जाती है?",
    "options_en": ["Desi cotton", "American cotton", "Long staple cotton", "Hybrid cotton"],
    "options_hi": ["देशी कपास", "अमेरिकी कपास", "लंबी रेशा कपास", "संकर कपास"],
    "answer": "Desi cotton",
    "answer_hi": "देशी कपास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the main objective of green revolution?",
    "question_hi": "हरित क्रांति का मुख्य उद्देश्य क्या है?",
    "options_en": ["Increase crop production", "Improve soil quality", "Reduce water usage", "Control pests"],
    "options_hi": ["फसल उत्पादन बढ़ाना", "मिट्टी की गुणवत्ता सुधारना", "पानी का उपयोग कम करना", "कीटों को नियंत्रित करना"],
    "answer": "Increase crop production",
    "answer_hi": "फसल उत्पादन बढ़ाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of the following is an organic farming method?",
    "question_hi": "निम्नलिखित में से कौन सी जैविक कृषि विधि है?",
    "options_en": ["Use of chemical fertilizers", "Crop rotation", "Monocropping", "Irrigation with synthetic chemicals"],
    "options_hi": ["रासायनिक उर्वरकों का उपयोग", "फसल चक्रीकरण", "मोनोक्रॉपिंग", "संश्लेषित रसायनों से सिंचाई"],
    "answer": "Crop rotation",
    "answer_hi": "फसल चक्रीकरण",
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


