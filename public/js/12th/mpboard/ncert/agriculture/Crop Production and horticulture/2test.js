const questions = [  
  {
    "num": 1,
    "question_en": "Which crop is known as the king of cereals?",
    "question_hi": "कौन सी फसल अनाजों का राजा कहलाती है?",
    "options_en": ["Wheat", "Rice", "Maize", "Barley"],
    "options_hi": ["गेहूं", "चावल", "मक्का", "जौ"],
    "answer": "Wheat",
    "answer_hi": "गेहूं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which nutrient is most essential for root development?",
    "question_hi": "मूल विकास के लिए कौन सा पोषक तत्व सबसे आवश्यक है?",
    "options_en": ["Nitrogen", "Phosphorus", "Potassium", "Calcium"],
    "options_hi": ["नाइट्रोजन", "फॉस्फोरस", "पोटैशियम", "कैल्शियम"],
    "answer": "Phosphorus",
    "answer_hi": "फॉस्फोरस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which is a Rabi crop?",
    "question_hi": "निम्न में से कौन सी रबी फसल है?",
    "options_en": ["Paddy", "Maize", "Wheat", "Cotton"],
    "options_hi": ["धान", "मक्का", "गेहूं", "कपास"],
    "answer": "Wheat",
    "answer_hi": "गेहूं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which element is used in large amount in chlorophyll formation?",
    "question_hi": "क्लोरोफिल निर्माण में किस तत्व का उपयोग अधिक मात्रा में होता है?",
    "options_en": ["Potassium", "Magnesium", "Sulphur", "Iron"],
    "options_hi": ["पोटैशियम", "मैग्नीशियम", "सल्फर", "लोहा"],
    "answer": "Magnesium",
    "answer_hi": "मैग्नीशियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which fruit crop is propagated through grafting?",
    "question_hi": "कौन सी फल फसल कलम विधि से प्रवर्धित की जाती है?",
    "options_en": ["Banana", "Papaya", "Mango", "Pineapple"],
    "options_hi": ["केला", "पपीता", "आम", "अनानास"],
    "answer": "Mango",
    "answer_hi": "आम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which is the main cause of citrus canker?",
    "question_hi": "साइट्रस केंकर का मुख्य कारण क्या है?",
    "options_en": ["Fungus", "Bacteria", "Virus", "Insects"],
    "options_hi": ["फफूंदी", "जीवाणु", "विषाणु", "कीट"],
    "answer": "Bacteria",
    "answer_hi": "जीवाणु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the botanical name of rice?",
    "question_hi": "चावल का वानस्पतिक नाम क्या है?",
    "options_en": ["Triticum aestivum", "Hordeum vulgare", "Oryza sativa", "Zea mays"],
    "options_hi": ["ट्रिटिकम ऐस्टिवम", "हॉरडियम वल्गेयर", "ओराइज़ा सटाइवा", "ज़िया मेज़"],
    "answer": "Oryza sativa",
    "answer_hi": "ओराइज़ा सटाइवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method is used for propagation in potato?",
    "question_hi": "आलू में किस विधि से प्रवर्धन किया जाता है?",
    "options_en": ["Seed", "Grafting", "Tuber", "Cutting"],
    "options_hi": ["बीज", "कलम", "कंद", "कटिंग"],
    "answer": "Tuber",
    "answer_hi": "कंद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which is a micronutrient for plants?",
    "question_hi": "पौधों के लिए कौन सा सूक्ष्म पोषक तत्व है?",
    "options_en": ["Nitrogen", "Zinc", "Potassium", "Phosphorus"],
    "options_hi": ["नाइट्रोजन", "जिंक", "पोटैशियम", "फॉस्फोरस"],
    "answer": "Zinc",
    "answer_hi": "जिंक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is vermicompost?",
    "question_hi": "वर्मी कम्पोस्ट क्या है?",
    "options_en": ["Compost made from bacteria", "Compost made using worms", "Compost from green leaves", "Artificial fertilizer"],
    "options_hi": ["जीवाणुओं से बनी खाद", "कीड़ों से बनी खाद", "हरी पत्तियों से बनी खाद", "कृत्रिम उर्वरक"],
    "answer": "Compost made using worms",
    "answer_hi": "कीड़ों से बनी खाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which crop requires standing water?",
    "question_hi": "कौन सी फसल खड़ी जल अवस्था में उगाई जाती है?",
    "options_en": ["Wheat", "Paddy", "Gram", "Mustard"],
    "options_hi": ["गेहूं", "धान", "चना", "सरसों"],
    "answer": "Paddy",
    "answer_hi": "धान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which fruit is known as the king of fruits?",
    "question_hi": "कौन सा फल फलों का राजा कहलाता है?",
    "options_en": ["Apple", "Banana", "Mango", "Guava"],
    "options_hi": ["सेब", "केला", "आम", "अमरूद"],
    "answer": "Mango",
    "answer_hi": "आम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which weed is harmful for wheat crop?",
    "question_hi": "गेहूं की फसल के लिए कौन सी खरपतवार हानिकारक है?",
    "options_en": ["Parthenium", "Phalaris minor", "Amaranthus", "Cynodon dactylon"],
    "options_hi": ["पार्थेनियम", "फेलारिस माइनर", "अमरंथस", "साइनोडॉन डक्टाइलॉन"],
    "answer": "Phalaris minor",
    "answer_hi": "फेलारिस माइनर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which is used to control fungal diseases in crops?",
    "question_hi": "फसलों में फफूंदी जनित रोगों को नियंत्रित करने के लिए क्या उपयोग किया जाता है?",
    "options_en": ["Herbicide", "Insecticide", "Fungicide", "Weedicides"],
    "options_hi": ["शाकनाशी", "कीटनाशी", "फफूंदनाशी", "खरपतवारनाशी"],
    "answer": "Fungicide",
    "answer_hi": "फफूंदनाशी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which is a commercial flower crop?",
    "question_hi": "निम्न में से कौन सी एक व्यावसायिक पुष्प फसल है?",
    "options_en": ["Rose", "Brinjal", "Potato", "Wheat"],
    "options_hi": ["गुलाब", "बैंगन", "आलू", "गेहूं"],
    "answer": "Rose",
    "answer_hi": "गुलाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which plant part is used in vegetative propagation of sugarcane?",
    "question_hi": "गन्ने की किस भाग से वनस्पतिक प्रवर्धन किया जाता है?",
    "options_en": ["Leaf", "Root", "Stem", "Flower"],
    "options_hi": ["पत्ती", "जड़", "तना", "फूल"],
    "answer": "Stem",
    "answer_hi": "तना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which is a horticultural crop?",
    "question_hi": "निम्न में से कौन सी बागवानी फसल है?",
    "options_en": ["Potato", "Carrot", "Tomato", "All of these"],
    "options_hi": ["आलू", "गाजर", "टमाटर", "इनमें से सभी"],
    "answer": "All of these",
    "answer_hi": "इनमें से सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which is the suitable month for sowing wheat in MP?",
    "question_hi": "मध्यप्रदेश में गेहूं बोने का उपयुक्त महीना कौन सा है?",
    "options_en": ["July", "October", "January", "May"],
    "options_hi": ["जुलाई", "अक्टूबर", "जनवरी", "मई"],
    "answer": "October",
    "answer_hi": "अक्टूबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which is the major pest of cotton crop?",
    "question_hi": "कपास की फसल का प्रमुख कीट कौन सा है?",
    "options_en": ["Bollworm", "Stem borer", "Leaf roller", "Aphid"],
    "options_hi": ["बोलवर्म", "तना भेदक", "पत्ती मोड़क", "एफिड"],
    "answer": "Bollworm",
    "answer_hi": "बोलवर्म",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which irrigation method is best for orchards?",
    "question_hi": "बागवानी फसलों के लिए कौन सी सिंचाई विधि सबसे उपयुक्त है?",
    "options_en": ["Flood", "Sprinkler", "Drip", "Canal"],
    "options_hi": ["बाढ़", "स्प्रिंकलर", "ड्रिप", "नहर"],
    "answer": "Drip",
    "answer_hi": "ड्रिप",
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


