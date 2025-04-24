const questions = [  
  {
    "num": 1,
    "question_en": "Which of the following is a major source of protein in poultry farming?",
    "question_hi": "निम्नलिखित में से कौन सा मुर्गी पालन में प्रोटीन का प्रमुख स्रोत है?",
    "options_en": ["Wheat", "Maize", "Soybean", "Rice"],
    "options_hi": ["गेंहू", "मक्का", "सोयाबीन", "चावल"],
    "answer": "Soybean",
    "answer_hi": "सोयाबीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the ideal temperature for brooding chicks?",
    "question_hi": "चूजों के लिए आदर्श तापमान क्या है?",
    "options_en": ["25-30°C", "35-40°C", "30-35°C", "20-25°C"],
    "options_hi": ["25-30°C", "35-40°C", "30-35°C", "20-25°C"],
    "answer": "35-40°C",
    "answer_hi": "35-40°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which breed of poultry is known for egg production?",
    "question_hi": "कौन सी मुर्गी नस्ल अंडे उत्पादन के लिए जानी जाती है?",
    "options_en": ["Brahma", "Rhode Island Red", "Aseel", "Cochin"],
    "options_hi": ["ब्रह्मा", "रोड आइलैंड रेड", "आसील", "कोचिन"],
    "answer": "Rhode Island Red",
    "answer_hi": "रोड आइलैंड रेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of the following is an important characteristic of a good breeding bull?",
    "question_hi": "एक अच्छे प्रजनन बैल की महत्वपूर्ण विशेषता क्या है?",
    "options_en": ["Large size", "Good temperament", "Fast growth", "Heavy weight"],
    "options_hi": ["बड़ा आकार", "अच्छा स्वभाव", "तेजी से वृद्धि", "भारी वजन"],
    "answer": "Good temperament",
    "answer_hi": "अच्छा स्वभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the purpose of deworming in poultry farming?",
    "question_hi": "मुर्गी पालन में कृमिनाशक उपचार का उद्देश्य क्या है?",
    "options_en": ["Improve digestion", "Prevent diseases", "Increase weight", "Improve egg production"],
    "options_hi": ["पाचन सुधारना", "रोगों को रोकना", "वजन बढ़ाना", "अंडा उत्पादन बढ़ाना"],
    "answer": "Prevent diseases",
    "answer_hi": "रोगों को रोकना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of the following is the best time to vaccinate poultry chicks?",
    "question_hi": "मुर्गी चूजों को टीका लगाने का सबसे अच्छा समय कौन सा है?",
    "options_en": ["At birth", "After 7 days", "After 21 days", "After 28 days"],
    "options_hi": ["जन्म के समय", "7 दिन बाद", "21 दिन बाद", "28 दिन बाद"],
    "answer": "After 7 days",
    "answer_hi": "7 दिन बाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the main food for cows in a dairy farm?",
    "question_hi": "डेयरी फार्म में गायों का मुख्य आहार क्या है?",
    "options_en": ["Grass", "Wheat", "Maize", "Rice husk"],
    "options_hi": ["घास", "गेंहू", "मक्का", "चावल की भूसी"],
    "answer": "Grass",
    "answer_hi": "घास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the main purpose of using artificial insemination in dairy farming?",
    "question_hi": "डेयरी farming में कृत्रिम गर्भाधान का मुख्य उद्देश्य क्या है?",
    "options_en": ["Increase milk production", "Improve breed quality", "Increase weight", "Increase reproduction rate"],
    "options_hi": ["दूध उत्पादन बढ़ाना", "नस्ल की गुणवत्ता सुधारना", "वजन बढ़ाना", "प्रजनन दर बढ़ाना"],
    "answer": "Improve breed quality",
    "answer_hi": "नस्ल की गुणवत्ता सुधारना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of the following is an example of a dual-purpose breed in poultry farming?",
    "question_hi": "मुर्गी पालन में कौन सी नस्ल को द्वैध उद्देश्य की नस्ल कहा जाता है?",
    "options_en": ["Aseel", "Brahma", "Leghorn", "Rhode Island Red"],
    "options_hi": ["आसील", "ब्रह्मा", "लेगहॉर्न", "रोड आइलैंड रेड"],
    "answer": "Rhode Island Red",
    "answer_hi": "रोड आइलैंड रेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the importance of ventilation in poultry sheds?",
    "question_hi": "मुर्गी शेड में वेंटिलेशन का क्या महत्व है?",
    "options_en": ["Control temperature", "Prevent diseases", "Increase egg production", "Improve digestion"],
    "options_hi": ["तापमान नियंत्रित करना", "रोगों को रोकना", "अंडा उत्पादन बढ़ाना", "पाचन सुधारना"],
    "answer": "Control temperature",
    "answer_hi": "तापमान नियंत्रित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is a common disease in poultry farming?",
    "question_hi": "मुर्गी पालन में कौन सी सामान्य बीमारी है?",
    "options_en": ["Marek's disease", "Bovine tuberculosis", "Brucellosis", "Foot and mouth disease"],
    "options_hi": ["मारेक की बीमारी", "बायवाइन तपेदिक", "ब्रूसेलोसिस", "पैरों और मुंह की बीमारी"],
    "answer": "Marek's disease",
    "answer_hi": "मारेक की बीमारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which part of the cow is responsible for milk production?",
    "question_hi": "गाय के किस भाग के लिए दूध उत्पादन जिम्मेदार है?",
    "options_en": ["Udder", "Stomach", "Liver", "Intestines"],
    "options_hi": ["उदर", "पेट", "यकृत", "आंत"],
    "answer": "Udder",
    "answer_hi": "उदर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the primary source of feed for pigs in pig farming?",
    "question_hi": "सूअर पालन में सूअरों के लिए मुख्य आहार स्रोत क्या है?",
    "options_en": ["Grains", "Vegetables", "Fruits", "Meat"],
    "options_hi": ["अनाज", "सब्जियाँ", "फल", "मांस"],
    "answer": "Grains",
    "answer_hi": "अनाज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which is the most common poultry bird in India?",
    "question_hi": "भारत में सबसे सामान्य मुर्गी पक्षी कौन सा है?",
    "options_en": ["Duck", "Turkey", "Hen", "Goose"],
    "options_hi": ["बतख", "टर्की", "मुर्गी", "हंस"],
    "answer": "Hen",
    "answer_hi": "मुर्गी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which type of feed is most suitable for poultry chicks?",
    "question_hi": "मुर्गी चूजों के लिए किस प्रकार का आहार सबसे उपयुक्त है?",
    "options_en": ["Crushed grain", "Pelleted feed", "Green fodder", "Powdered feed"],
    "options_hi": ["क्रश किए हुए अनाज", "पेलटेड आहार", "हरी चारा", "पाउडर किया हुआ आहार"],
    "answer": "Pelleted feed",
    "answer_hi": "पेलटेड आहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the main purpose of using calcium in poultry feed?",
    "question_hi": "मुर्गी आहार में कैल्शियम का मुख्य उद्देश्य क्या है?",
    "options_en": ["To improve feather quality", "To enhance egg shell strength", "To increase weight", "To improve digestion"],
    "options_hi": ["पंख की गुणवत्ता सुधारना", "अंडे के छिलके की ताकत बढ़ाना", "वजन बढ़ाना", "पाचन सुधारना"],
    "answer": "To enhance egg shell strength",
    "answer_hi": "अंडे के छिलके की ताकत बढ़ाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "At what age are cows usually ready for breeding?",
    "question_hi": "गायें प्रजनन के लिए सामान्यत: किस आयु में तैयार होती हैं?",
    "options_en": ["1-2 years", "3-4 years", "5-6 years", "7-8 years"],
    "options_hi": ["1-2 वर्ष", "3-4 वर्ष", "5-6 वर्ष", "7-8 वर्ष"],
    "answer": "3-4 years",
    "answer_hi": "3-4 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which of the following is a common poultry breed used for meat production?",
    "question_hi": "निम्नलिखित में से कौन सी मुर्गी नस्ल मांस उत्पादन के लिए सामान्य रूप से उपयोग की जाती है?",
    "options_en": ["Leghorn", "Broiler", "Rhode Island Red", "Aseel"],
    "options_hi": ["लेगहॉर्न", "ब्रॉयलर", "रोड आइलैंड रेड", "आसील"],
    "answer": "Broiler",
    "answer_hi": "ब्रॉयलर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the main advantage of using cross-breeding in animal husbandry?",
    "question_hi": "पशुपालन में क्रॉस-ब्रीडिंग के उपयोग का मुख्य लाभ क्या है?",
    "options_en": ["Increased disease resistance", "Better quality products", "Faster growth", "Improved reproduction"],
    "options_hi": ["रोग प्रतिरोध क्षमता बढ़ाना", "बेहतर गुणवत्ता वाले उत्पाद", "तेजी से वृद्धि", "बेहतर प्रजनन"],
    "answer": "Better quality products",
    "answer_hi": "बेहतर गुणवत्ता वाले उत्पाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which breed of cattle is known for high milk yield?",
    "question_hi": "कौन सी गाय की नस्ल उच्च दूध उत्पादन के लिए जानी जाती है?",
    "options_en": ["Jersey", "Gir", "Sahiwal", "Red Sindhi"],
    "options_hi": ["जर्सी", "गिर", "साहीवाल", "रेड सिंधी"],
    "answer": "Jersey",
    "answer_hi": "जर्सी",
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


