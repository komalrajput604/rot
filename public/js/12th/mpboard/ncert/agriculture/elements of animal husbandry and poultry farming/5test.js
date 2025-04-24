const questions = [  
  {
    "num": 1,
    "question_en": "Which vitamin is abundant in eggs?",
    "question_hi": "अंडों में किस विटामिन की प्रचुर मात्रा होती है?",
    "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B12", "विटामिन C", "विटामिन D"],
    "answer": "Vitamin B12",
    "answer_hi": "विटामिन B12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which breed of buffalo is known for high milk yield?",
    "question_hi": "दूध उत्पादन के लिए कौनसी भैंस की नस्ल प्रसिद्ध है?",
    "options_en": ["Murrah", "Jersey", "Holstein", "Sahiwal"],
    "options_hi": ["मुर्हा", "जर्सी", "होलस्टीन", "साहीवाल"],
    "answer": "Murrah",
    "answer_hi": "मुर्हा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which part of chicken is affected by Ranikhet disease?",
    "question_hi": "रानीखेत रोग मुर्गी के किस अंग को प्रभावित करता है?",
    "options_en": ["Liver", "Lungs", "Nervous system", "Heart"],
    "options_hi": ["यकृत", "फेफड़े", "तंत्रिका तंत्र", "हृदय"],
    "answer": "Nervous system",
    "answer_hi": "तंत्रिका तंत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which animal is reared for wool production?",
    "question_hi": "ऊन उत्पादन के लिए किस पशु को पाला जाता है?",
    "options_en": ["Sheep", "Goat", "Cow", "Pig"],
    "options_hi": ["भेड़", "बकरी", "गाय", "सूअर"],
    "answer": "Sheep",
    "answer_hi": "भेड़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which nutrient is essential for egg shell formation?",
    "question_hi": "अंडे के खोल के निर्माण में कौन सा पोषक तत्व आवश्यक है?",
    "options_en": ["Iron", "Calcium", "Magnesium", "Zinc"],
    "options_hi": ["लोहा", "कैल्शियम", "मैग्नीशियम", "जिंक"],
    "answer": "Calcium",
    "answer_hi": "कैल्शियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which breed of goat is famous for meat production?",
    "question_hi": "मांस उत्पादन के लिए कौन सी बकरी की नस्ल प्रसिद्ध है?",
    "options_en": ["Jamunapari", "Barbari", "Beetal", "Black Bengal"],
    "options_hi": ["जमुनापारी", "बारबरी", "बीटल", "ब्लैक बंगाल"],
    "answer": "Black Bengal",
    "answer_hi": "ब्लैक बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which hormone stimulates milk production in animals?",
    "question_hi": "कौन सा हार्मोन पशुओं में दूध उत्पादन को उत्तेजित करता है?",
    "options_en": ["Estrogen", "Oxytocin", "Adrenaline", "Thyroxine"],
    "options_hi": ["एस्ट्रोजन", "ऑक्सीटोसिन", "एड्रेनालिन", "थाइरॉक्सिन"],
    "answer": "Oxytocin",
    "answer_hi": "ऑक्सीटोसिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which is a bacterial disease in cattle?",
    "question_hi": "गायों में कौन सा रोग जीवाणु जनित है?",
    "options_en": ["Foot and Mouth", "Anthrax", "Rinderpest", "Black Quarter"],
    "options_hi": ["खुर और मुंह", "एनथ्रेक्स", "रिंडरपेस्ट", "ब्लैक क्वार्टर"],
    "answer": "Anthrax",
    "answer_hi": "एनथ्रेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Artificial insemination is used for?",
    "question_hi": "कृत्रिम गर्भाधान का उपयोग किस लिए किया जाता है?",
    "options_en": ["Milking", "Feeding", "Breeding", "Vaccination"],
    "options_hi": ["दुग्ध दोहन", "चारा खिलाना", "प्रजनन", "टीकाकरण"],
    "answer": "Breeding",
    "answer_hi": "प्रजनन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which poultry breed is best for egg production?",
    "question_hi": "अंडा उत्पादन के लिए कौन सी मुर्गी की नस्ल उत्तम है?",
    "options_en": ["Rhode Island Red", "Kadaknath", "Aseel", "White Leghorn"],
    "options_hi": ["रोड आइलैंड रेड", "कड़कनाथ", "असील", "व्हाइट लेगहॉर्न"],
    "answer": "White Leghorn",
    "answer_hi": "व्हाइट लेगहॉर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which mineral prevents anemia in animals?",
    "question_hi": "कौन सा खनिज पशुओं में एनीमिया को रोकता है?",
    "options_en": ["Iron", "Calcium", "Phosphorus", "Zinc"],
    "options_hi": ["लोहा", "कैल्शियम", "फॉस्फोरस", "जिंक"],
    "answer": "Iron",
    "answer_hi": "लोहा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Indian cow breed is heat tolerant?",
    "question_hi": "भारत की कौन सी गाय की नस्ल गर्मी सहन कर सकती है?",
    "options_en": ["Gir", "Jersey", "Holstein", "Brown Swiss"],
    "options_hi": ["गिर", "जर्सी", "होलस्टीन", "ब्राउन स्विस"],
    "answer": "Gir",
    "answer_hi": "गिर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which vitamin deficiency causes rickets in animals?",
    "question_hi": "कौन से विटामिन की कमी से पशुओं में रिकेट्स होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Deworming is done to control?",
    "question_hi": "पेट के कीड़ों को नियंत्रित करने के लिए क्या किया जाता है?",
    "options_en": ["Vaccination", "Feeding", "Deworming", "Milking"],
    "options_hi": ["टीकाकरण", "चारा देना", "डीवॉर्मिंग", "दूध निकालना"],
    "answer": "Deworming",
    "answer_hi": "डीवॉर्मिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which is a viral disease of poultry?",
    "question_hi": "कौन सा पोल्ट्री रोग विषाणुजनित है?",
    "options_en": ["Coccidiosis", "Ranikhet", "Salmonellosis", "Aspergillosis"],
    "options_hi": ["कॉक्सीडिओसिस", "रानीखेत", "साल्मोनेलोसिस", "एस्परगिलोसिस"],
    "answer": "Ranikhet",
    "answer_hi": "रानीखेत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the ideal temperature for chick brooding?",
    "question_hi": "चूजों के पालन के लिए आदर्श तापमान क्या है?",
    "options_en": ["20°C", "25°C", "30°C", "35°C"],
    "options_hi": ["20°C", "25°C", "30°C", "35°C"],
    "answer": "35°C",
    "answer_hi": "35°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Fodder crops are mainly used for?",
    "question_hi": "चारा फसलें मुख्यतः किसके लिए उपयोग होती हैं?",
    "options_en": ["Grain", "Oil", "Fuel", "Animal feed"],
    "options_hi": ["अनाज", "तेल", "ईंधन", "पशु आहार"],
    "answer": "Animal feed",
    "answer_hi": "पशु आहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which is a dual-purpose cattle breed?",
    "question_hi": "कौन सी दोहरे उपयोग की गाय की नस्ल है?",
    "options_en": ["Red Sindhi", "Tharparkar", "Sahiwal", "Hariana"],
    "options_hi": ["रेड सिंधी", "थारपारकर", "साहीवाल", "हरियाणा"],
    "answer": "Tharparkar",
    "answer_hi": "थारपारकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which element improves eggshell quality?",
    "question_hi": "कौन सा तत्व अंडे के खोल की गुणवत्ता बढ़ाता है?",
    "options_en": ["Zinc", "Manganese", "Copper", "Iron"],
    "options_hi": ["जिंक", "मैंगनीज", "तांबा", "लोहा"],
    "answer": "Manganese",
    "answer_hi": "मैंगनीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Pig farming is also known as?",
    "question_hi": "सूअर पालन को और किस नाम से जाना जाता है?",
    "options_en": ["Aviculture", "Pisciculture", "Sericulture", "Piggery"],
    "options_hi": ["पक्षी पालन", "मछली पालन", "रेशम पालन", "पिग्गरी"],
    "answer": "Piggery",
    "answer_hi": "पिग्गरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Incubation period of hen eggs is about?",
    "question_hi": "मुर्गी के अंडों का ऊष्मायन काल कितना होता है?",
    "options_en": ["15 days", "21 days", "28 days", "30 days"],
    "options_hi": ["15 दिन", "21 दिन", "28 दिन", "30 दिन"],
    "answer": "21 days",
    "answer_hi": "21 दिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which vaccine prevents Foot and Mouth Disease?",
    "question_hi": "खुरपका-मुंहपका रोग को रोकने वाला टीका कौन सा है?",
    "options_en": ["FMD vaccine", "BCG", "Polio", "Rabies"],
    "options_hi": ["एफएमडी वैक्सीन", "बीसीजी", "पोलियो", "रेबीज"],
    "answer": "FMD vaccine",
    "answer_hi": "एफएमडी वैक्सीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Milking should be done?",
    "question_hi": "दूध दुहाई कब करनी चाहिए?",
    "options_en": ["Once a day", "Twice a day", "Once in two days", "Once a week"],
    "options_hi": ["दिन में एक बार", "दिन में दो बार", "दो दिन में एक बार", "सप्ताह में एक बार"],
    "answer": "Twice a day",
    "answer_hi": "दिन में दो बार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "How is silage prepared?",
    "question_hi": "साइलेज किस प्रकार तैयार किया जाता है?",
    "options_en": ["Dry fodder", "By fermenting green fodder", "By heating fodder", "Boiling grains"],
    "options_hi": ["सूखा चारा", "हरे चारे का किण्वन", "चारे को गर्म करके", "अनाज उबालकर"],
    "answer": "By fermenting green fodder",
    "answer_hi": "हरे चारे का किण्वन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Kadaknath chicken is native to which Indian state?",
    "question_hi": "कड़कनाथ मुर्गी किस भारतीय राज्य की मूल प्रजाति है?",
    "options_en": ["Madhya Pradesh", "Kerala", "Punjab", "Assam"],
    "options_hi": ["मध्य प्रदेश", "केरल", "पंजाब", "असम"],
    "answer": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
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


