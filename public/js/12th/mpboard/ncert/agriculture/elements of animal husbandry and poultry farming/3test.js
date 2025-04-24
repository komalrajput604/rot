const questions = [  
  {
    "num": 1,
    "question_en": "What is the primary source of protein in poultry farming?",
    "question_hi": "पोल्ट्री फार्मिंग में प्रोटीन का प्रमुख स्रोत क्या है?",
    "options_en": ["Milk", "Fish", "Grains", "Insects"],
    "options_hi": ["दूध", "मछली", "अनाज", "कीट"],
    "answer": "Fish",
    "answer_hi": "मछली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which breed of poultry is known for high egg production?",
    "question_hi": "कौन सी पोल्ट्री नस्ल उच्च अंडा उत्पादन के लिए जानी जाती है?",
    "options_en": ["Broiler", "Leghorn", "Rhode Island Red", "Aseel"],
    "options_hi": ["ब्रॉयलर", "लेघोर्न", "रोड आइलैंड रेड", "आसील"],
    "answer": "Leghorn",
    "answer_hi": "लेघोर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the incubation period of chicken eggs?",
    "question_hi": "मुर्गी के अंडों का इन्क्यूबेशन अवधि कितनी होती है?",
    "options_en": ["21 days", "28 days", "15 days", "35 days"],
    "options_hi": ["21 दिन", "28 दिन", "15 दिन", "35 दिन"],
    "answer": "21 days",
    "answer_hi": "21 दिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which vitamin is essential for the growth of poultry?",
    "question_hi": "पोल्ट्री के विकास के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन B12"],
    "answer": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the term for the practice of keeping poultry in a controlled environment?",
    "question_hi": "कृत्रिम वातावरण में पोल्ट्री रखने की प्रक्रिया को क्या कहा जाता है?",
    "options_en": ["Poultry farming", "Free-range farming", "Intensive farming", "Organic farming"],
    "options_hi": ["पोल्ट्री फार्मिंग", "फ्री-रेंज फार्मिंग", "इंटेंसिव फार्मिंग", "ऑर्गेनिक फार्मिंग"],
    "answer": "Intensive farming",
    "answer_hi": "इंटेंसिव फार्मिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the ideal temperature for broiler chicks during the first week?",
    "question_hi": "पहले सप्ताह में ब्रोइलर चूजों के लिए आदर्श तापमान क्या होता है?",
    "options_en": ["30°C", "25°C", "40°C", "15°C"],
    "options_hi": ["30°C", "25°C", "40°C", "15°C"],
    "answer": "30°C",
    "answer_hi": "30°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the main purpose of 'moulting' in poultry?",
    "question_hi": "पोल्ट्री में 'मोल्टिंग' का मुख्य उद्देश्य क्या होता है?",
    "options_en": ["Egg production", "Feather shedding", "Meat production", "Weight gain"],
    "options_hi": ["अंडा उत्पादन", "पंखों का झड़ना", "मांस उत्पादन", "वजन बढ़ाना"],
    "answer": "Feather shedding",
    "answer_hi": "पंखों का झड़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which breed of poultry is commonly used for meat production?",
    "question_hi": "कौन सी पोल्ट्री नस्ल मांस उत्पादन के लिए सामान्यतः उपयोग की जाती है?",
    "options_en": ["Broiler", "Leghorn", "Aseel", "Plymouth Rock"],
    "options_hi": ["ब्रॉयलर", "लेघोर्न", "आसील", "प्लाईमाउथ रॉक"],
    "answer": "Broiler",
    "answer_hi": "ब्रॉयलर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the primary feed for poultry in commercial farming?",
    "question_hi": "वाणिज्यिक पोल्ट्री फार्मिंग में पोल्ट्री का मुख्य आहार क्या होता है?",
    "options_en": ["Grain", "Protein supplement", "Vegetables", "Fruits"],
    "options_hi": ["अनाज", "प्रोटीन अनुपूरक", "सब्जियाँ", "फल"],
    "answer": "Grain",
    "answer_hi": "अनाज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which disease affects poultry due to a deficiency of Vitamin E?",
    "question_hi": "कौन सी बीमारी पोल्ट्री को विटामिन E की कमी के कारण प्रभावित करती है?",
    "options_en": ["Rickets", "Beriberi", "Encephalomalacia", "Scurvy"],
    "options_hi": ["रिकेट्स", "बेरिबेरी", "एन्सेफालोमालेसिया", "स्कर्वी"],
    "answer": "Encephalomalacia",
    "answer_hi": "एन्सेफालोमालेसिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the ideal stocking density for broilers?",
    "question_hi": "ब्रोइलर्स के लिए आदर्श स्टॉकिंग घनत्व क्या होता है?",
    "options_en": ["1-2 birds per sq. ft.", "3-4 birds per sq. ft.", "5-6 birds per sq. ft.", "7-8 birds per sq. ft."],
    "options_hi": ["1-2 पक्षी प्रति वर्ग फीट", "3-4 पक्षी प्रति वर्ग फीट", "5-6 पक्षी प्रति वर्ग फीट", "7-8 पक्षी प्रति वर्ग फीट"],
    "answer": "1-2 birds per sq. ft.",
    "answer_hi": "1-2 पक्षी प्रति वर्ग फीट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the main function of the poultry 'vent'?",
    "question_hi": "पोल्ट्री के 'वेंट' का मुख्य कार्य क्या होता है?",
    "options_en": ["Egg laying", "Breathing", "Waste excretion", "Feeding"],
    "options_hi": ["अंडा देना", "सांस लेना", "अपशिष्ट उत्सर्जन", "खाना खाना"],
    "answer": "Waste excretion",
    "answer_hi": "अपशिष्ट उत्सर्जन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the name of the process used for artificial fertilization in poultry?",
    "question_hi": "पोल्ट्री में कृत्रिम निषेचन की प्रक्रिया को क्या कहते हैं?",
    "options_en": ["Artificial insemination", "Natural mating", "Cloning", "Embryo transfer"],
    "options_hi": ["कृत्रिम गर्भाधान", "प्राकृतिक मिलन", "क्लोनिंग", "अंडाणु स्थानांतरण"],
    "answer": "Artificial insemination",
    "answer_hi": "कृत्रिम गर्भाधान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the term for a female chicken?",
    "question_hi": "मादा मुर्गी को क्या कहा जाता है?",
    "options_en": ["Hen", "Rooster", "Pullet", "Cockerel"],
    "options_hi": ["मुर्गी", "मुर्गा", "चूजा", "टेंगा"],
    "answer": "Hen",
    "answer_hi": "मुर्गी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the main cause of feather pecking in poultry?",
    "question_hi": "पोल्ट्री में पंखों की चोंच मारने का मुख्य कारण क्या है?",
    "options_en": ["Lack of space", "Vitamin deficiency", "Boredom", "All of the above"],
    "options_hi": ["स्थान की कमी", "विटामिन की कमी", "उबाऊ", "उपरोक्त सभी"],
    "answer": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the main food ingredient in broiler chicken feed?",
    "question_hi": "ब्रोइलर चिकन के आहार में मुख्य खाद्य घटक क्या होता है?",
    "options_en": ["Soybean", "Corn", "Wheat", "Rice"],
    "options_hi": ["सोया बीन", "मक्का", "गेंहू", "चावल"],
    "answer": "Corn",
    "answer_hi": "मक्का",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which poultry disease is caused by a deficiency of Vitamin K?",
    "question_hi": "विटामिन K की कमी के कारण कौन सी पोल्ट्री बीमारी होती है?",
    "options_en": ["Anemia", "Hemorrhagic disease", "Rickets", "Scabies"],
    "options_hi": ["एनीमिया", "रक्तस्राव रोग", "रिकेट्स", "खाज"],
    "answer": "Hemorrhagic disease",
    "answer_hi": "रक्तस्राव रोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the term for a male chicken?",
    "question_hi": "पुरुष मुर्गी को क्या कहा जाता है?",
    "options_en": ["Rooster", "Hen", "Pullet", "Cockerel"],
    "options_hi": ["मुर्गा", "मुर्गी", "चूजा", "टेंगा"],
    "answer": "Rooster",
    "answer_hi": "मुर्गा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which poultry breed is known for its high meat quality?",
    "question_hi": "कौन सी पोल्ट्री नस्ल अपने उच्च मांस गुणवत्ता के लिए जानी जाती है?",
    "options_en": ["Brahma", "Leghorn", "Rhode Island Red", "Cornish"],
    "options_hi": ["ब्रह्मा", "लेघोर्न", "रोड आइलैंड रेड", "कॉर्निश"],
    "answer": "Cornish",
    "answer_hi": "कॉर्निश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the ideal temperature for broiler chickens during the first 3 days?",
    "question_hi": "पहले 3 दिनों के दौरान ब्रोइलर मुर्गों के लिए आदर्श तापमान क्या होता है?",
    "options_en": ["30°C", "40°C", "35°C", "25°C"],
    "options_hi": ["30°C", "40°C", "35°C", "25°C"],
    "answer": "35°C",
    "answer_hi": "35°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which disease in poultry is caused by the Newcastle virus?",
    "question_hi": "कौन सी पोल्ट्री बीमारी न्यूकैसल वायरस के कारण होती है?",
    "options_en": ["Avian Influenza", "Newcastle disease", "Fowlpox", "Marek's disease"],
    "options_hi": ["एवियन इन्फ्लूएंजा", "न्यूकैसल रोग", "फाउलपॉक्स", "मार्क्स रोग"],
    "answer": "Newcastle disease",
    "answer_hi": "न्यूकैसल रोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the name of the process of separating eggs from poultry waste?",
    "question_hi": "पोल्ट्री अपशिष्ट से अंडे अलग करने की प्रक्रिया का नाम क्या है?",
    "options_en": ["Culling", "Grading", "Sorting", "Packaging"],
    "options_hi": ["कुलिंग", "ग्रेडिंग", "सॉर्टिंग", "पैकेजिंग"],
    "answer": "Grading",
    "answer_hi": "ग्रेडिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which is the most common cause of mortality in poultry?",
    "question_hi": "पोल्ट्री में मृत्यु का सबसे सामान्य कारण क्या होता है?",
    "options_en": ["Infections", "Predators", "Overcrowding", "Malnutrition"],
    "options_hi": ["संक्रमण", "शिकारी", "अत्यधिक भीड़", "पोषण की कमी"],
    "answer": "Infections",
    "answer_hi": "संक्रमण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the major concern in poultry waste management?",
    "question_hi": "पोल्ट्री अपशिष्ट प्रबंधन में प्रमुख चिंता क्या होती है?",
    "options_en": ["Odor control", "Waste disposal", "Nutrient recycling", "All of the above"],
    "options_hi": ["गंध नियंत्रण", "अपशिष्ट निस्तारण", "पोषक तत्व पुनर्चक्रण", "उपरोक्त सभी"],
    "answer": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the primary method of controlling diseases in poultry farming?",
    "question_hi": "पोल्ट्री फार्मिंग में बीमारियों को नियंत्रित करने की प्राथमिक विधि क्या होती है?",
    "options_en": ["Vaccination", "Antibiotics", "Quarantine", "Isolation"],
    "options_hi": ["टीकाकरण", "एंटीबायोटिक्स", "क्वारंटीन", "आइसोलेशन"],
    "answer": "Vaccination",
    "answer_hi": "टीकाकरण",
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


