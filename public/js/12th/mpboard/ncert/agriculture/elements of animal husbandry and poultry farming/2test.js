const questions = [  
  {
    "num": 1,
    "question_en": "What is the primary source of protein for poultry?",
    "question_hi": "पोल्ट्री के लिए प्रोटीन का मुख्य स्रोत क्या है?",
    "options_en": ["Vegetables", "Fruits", "Insects", "Grains"],
    "options_hi": ["सब्जियाँ", "फल", "कीड़े", "अनाज"],
    "answer": "Grains",
    "answer_hi": "अनाज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which of the following is a common poultry breed?",
    "question_hi": "निम्नलिखित में से कौन सा एक सामान्य पोल्ट्री प्रजाति है?",
    "options_en": ["Jersey", "Broiler", "Hereford", "Holstein"],
    "options_hi": ["जर्सी", "ब्रोइलर", "हेरेफोर्ड", "होल्स्टीन"],
    "answer": "Broiler",
    "answer_hi": "ब्रोइलर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the main purpose of raising goats in animal husbandry?",
    "question_hi": "पशुपालन में बकरियों को पालने का मुख्य उद्देश्य क्या है?",
    "options_en": ["Milk Production", "Meat Production", "Fibre Production", "All of the above"],
    "options_hi": ["दूध उत्पादन", "मांस उत्पादन", "रेशम उत्पादन", "उपरोक्त सभी"],
    "answer": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the most common poultry disease?",
    "question_hi": "सबसे सामान्य पोल्ट्री रोग कौन सा है?",
    "options_en": ["Avian Influenza", "Foot and Mouth Disease", "Rinderpest", "Tuberculosis"],
    "options_hi": ["एवियन इन्फ्लूएंजा", "फुट एंड माउथ डिजीज", "रिंडरपेस्ट", "टीबर्सकुलोसिस"],
    "answer": "Avian Influenza",
    "answer_hi": "एवियन इन्फ्लूएंजा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of these is a significant factor in poultry farming?",
    "question_hi": "इनमें से कौन सा पोल्ट्री खेती में एक महत्वपूर्ण कारक है?",
    "options_en": ["Temperature", "Rainfall", "Soil", "Altitude"],
    "options_hi": ["तापमान", "वृष्टि", "मिट्टी", "ऊँचाई"],
    "answer": "Temperature",
    "answer_hi": "तापमान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the primary feed for poultry?",
    "question_hi": "पोल्ट्री का मुख्य आहार क्या है?",
    "options_en": ["Grains", "Fruits", "Milk", "Meat"],
    "options_hi": ["अनाज", "फल", "दूध", "मांस"],
    "answer": "Grains",
    "answer_hi": "अनाज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "At what age do chickens typically start laying eggs?",
    "question_hi": "मुर्गियाँ सामान्यत: कितनी उम्र में अंडे देना शुरू करती हैं?",
    "options_en": ["1 month", "3 months", "6 months", "9 months"],
    "options_hi": ["1 महीना", "3 महीने", "6 महीने", "9 महीने"],
    "answer": "6 months",
    "answer_hi": "6 महीने",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the typical life span of a chicken?",
    "question_hi": "मुर्गी का सामान्य जीवनकाल क्या होता है?",
    "options_en": ["1 year", "3 years", "5 years", "10 years"],
    "options_hi": ["1 साल", "3 साल", "5 साल", "10 साल"],
    "answer": "5 years",
    "answer_hi": "5 साल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of the following is not a type of poultry?",
    "question_hi": "निम्नलिखित में से कौन सा पोल्ट्री का प्रकार नहीं है?",
    "options_en": ["Duck", "Goose", "Turkey", "Cow"],
    "options_hi": ["हंस", "बतख", "मोर", "गाय"],
    "answer": "Cow",
    "answer_hi": "गाय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the purpose of beekeeping?",
    "question_hi": "मधुमक्खी पालन का उद्देश्य क्या है?",
    "options_en": ["Honey Production", "Wool Production", "Milk Production", "None of the above"],
    "options_hi": ["शहद उत्पादन", "ऊन उत्पादन", "दूध उत्पादन", "उपरोक्त में से कोई नहीं"],
    "answer": "Honey Production",
    "answer_hi": "शहद उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which breed of cattle is known for high milk yield?",
    "question_hi": "कौन सी गाय की नस्ल उच्च दूध उत्पादन के लिए जानी जाती है?",
    "options_en": ["Jersey", "Holstein", "Hereford", "Angus"],
    "options_hi": ["जर्सी", "होल्स्टीन", "हेरेफोर्ड", "एंगस"],
    "answer": "Holstein",
    "answer_hi": "होल्स्टीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the optimal temperature range for poultry farming?",
    "question_hi": "पोल्ट्री खेती के लिए उपयुक्त तापमान सीमा क्या है?",
    "options_en": ["20-25°C", "30-35°C", "15-20°C", "5-10°C"],
    "options_hi": ["20-25°C", "30-35°C", "15-20°C", "5-10°C"],
    "answer": "20-25°C",
    "answer_hi": "20-25°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is a common health problem in poultry farming?",
    "question_hi": "पोल्ट्री खेती में सामान्य स्वास्थ्य समस्या क्या है?",
    "options_en": ["Bacterial Infection", "Parasitic Infection", "Vitamin Deficiency", "All of the above"],
    "options_hi": ["बैक्टीरियल संक्रमण", "परजीवी संक्रमण", "विटामिन की कमी", "उपरोक्त सभी"],
    "answer": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the best way to prevent disease in poultry?",
    "question_hi": "पोल्ट्री में रोगों को रोकने का सबसे अच्छा तरीका क्या है?",
    "options_en": ["Vaccination", "Proper Sanitation", "Good Nutrition", "All of the above"],
    "options_hi": ["टीकाकरण", "साफ-सफाई", "अच्छा आहार", "उपरोक्त सभी"],
    "answer": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which animal is primarily raised for wool production?",
    "question_hi": "कौन सा जानवर मुख्य रूप से ऊन उत्पादन के लिए पाला जाता है?",
    "options_en": ["Goat", "Sheep", "Cow", "Pig"],
    "options_hi": ["बकरी", "भेड़", "गाय", "सूअर"],
    "answer": "Sheep",
    "answer_hi": "भेड़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the main product obtained from dairy cattle?",
    "question_hi": "डेरी गायों से प्राप्त होने वाला मुख्य उत्पाद क्या है?",
    "options_en": ["Meat", "Milk", "Leather", "Fibre"],
    "options_hi": ["मांस", "दूध", "चमड़ा", "रेशम"],
    "answer": "Milk",
    "answer_hi": "दूध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is a common poultry breed known for egg production?",
    "question_hi": "अंडा उत्पादन के लिए जानी जाने वाली एक सामान्य पोल्ट्री नस्ल कौन सी है?",
    "options_en": ["Rhode Island Red", "Leghorn", "Plymouth Rock", "Brahma"],
    "options_hi": ["रोड आइलैंड रेड", "लेगहॉर्न", "प्लायमाउथ रॉक", "ब्रह्मा"],
    "answer": "Leghorn",
    "answer_hi": "लेगहॉर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the purpose of feeding poultry with vitamins?",
    "question_hi": "पोल्ट्री को विटामिन्स देने का उद्देश्य क्या है?",
    "options_en": ["To improve egg production", "To enhance growth", "To boost immunity", "All of the above"],
    "options_hi": ["अंडा उत्पादन में सुधार के लिए", "वृद्धि में सुधार के लिए", "रोग प्रतिरोधक क्षमता बढ़ाने के लिए", "उपरोक्त सभी"],
    "answer": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the average weight of a fully grown turkey?",
    "question_hi": "एक पूरी तरह से बढ़े हुए टर्की का औसत वजन क्या होता है?",
    "options_en": ["1-2 kg", "3-5 kg", "5-8 kg", "10-12 kg"],
    "options_hi": ["1-2 किग्रा", "3-5 किग्रा", "5-8 किग्रा", "10-12 किग्रा"],
    "answer": "5-8 kg",
    "answer_hi": "5-8 किग्रा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of the following is a common method for breeding poultry?",
    "question_hi": "निम्नलिखित में से कौन सा पोल्ट्री प्रजनन का सामान्य तरीका है?",
    "options_en": ["Artificial Insemination", "Natural Mating", "Egg Hatching", "All of the above"],
    "options_hi": ["कृत्रिम गर्भाधान", "प्राकृतिक मिलन", "अंडे से हैचिंग", "उपरोक्त सभी"],
    "answer": "All of the above",
    "answer_hi": "उपरोक्त सभी",
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


