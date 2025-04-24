const questions = [ 
        {
          "num": 1,
          "question_en": "What is the main source of energy for the Earth?",
          "question_hi": "पृथ्वी के लिए ऊर्जा का मुख्य स्रोत क्या है?",
          "options_en": ["Sun", "Wind", "Water", "Geothermal"],
          "options_hi": ["सूर्य", "हवा", "पानी", "भू-तापीय"],
          "answer": "Sun",
          "answer_hi": "सूर्य",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
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
          "num": 3,
          "question_en": "Which continent is known as the 'Dark Continent'?",
          "question_hi": "कौन सा महाद्वीप 'अंधेरे महाद्वीप' के नाम से जाना जाता है?",
          "options_en": ["Africa", "Asia", "Europe", "Australia"],
          "options_hi": ["अफ्रीका", "एशिया", "यूरोप", "ऑस्ट्रेलिया"],
          "answer": "Africa",
          "answer_hi": "अफ्रीका",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which is the longest river in India?",
          "question_hi": "भारत में सबसे लंबी नदी कौन सी है?",
          "options_en": ["Ganges", "Yamuna", "Godavari", "Narmada"],
          "options_hi": ["गंगा", "यमुना", "गोदावरी", "नर्मदा"],
          "answer": "Ganges",
          "answer_hi": "गंगा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which state is known as the 'Land of the Rising Sun'?",
          "question_hi": "कौन सा राज्य 'उगते सूर्य की भूमि' के नाम से जाना जाता है?",
          "options_en": ["Assam", "Nagaland", "Arunachal Pradesh", "Sikkim"],
          "options_hi": ["असम", "नगालैंड", "अरुणाचल प्रदेश", "सिक्किम"],
          "answer": "Arunachal Pradesh",
          "answer_hi": "अरुणाचल प्रदेश",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which river flows through the city of Varanasi?",
          "question_hi": "वाराणसी शहर से कौन सी नदी बहती है?",
          "options_en": ["Ganges", "Yamuna", "Sarasvati", "Narmada"],
          "options_hi": ["गंगा", "यमुना", "सर्वासती", "नर्मदा"],
          "answer": "Ganges",
          "answer_hi": "गंगा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which of the following is the main cause of earthquakes?",
          "question_hi": "निम्नलिखित में से भूकंप का मुख्य कारण क्या है?",
          "options_en": ["Tectonic movements", "Volcanic eruptions", "Tidal waves", "Human activities"],
          "options_hi": ["टेक्टोनिक गतिविधियाँ", "ज्वालामुखी विस्फोट", "ज्वारीय तरंगें", "मानव गतिविधियाँ"],
          "answer": "Tectonic movements",
          "answer_hi": "टेक्टोनिक गतिविधियाँ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which is the largest desert in the world?",
          "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
          "options_en": ["Sahara Desert", "Arabian Desert", "Kalahari Desert", "Gobi Desert"],
          "options_hi": ["सहारा रेगिस्तान", "अरबीयन रेगिस्तान", "कलाहारी रेगिस्तान", "गोबी रेगिस्तान"],
          "answer": "Sahara Desert",
          "answer_hi": "सहारा रेगिस्तान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which is the smallest continent by area?",
          "question_hi": "क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
          "options_en": ["Australia", "Antarctica", "Europe", "South America"],
          "options_hi": ["ऑस्ट्रेलिया", "अंटार्कटिका", "यूरोप", "दक्षिण अमेरिका"],
          "answer": "Australia",
          "answer_hi": "ऑस्ट्रेलिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is the primary factor affecting the climate of a place?",
          "question_hi": "किसी स्थान के मौसम को प्रभावित करने वाला मुख्य कारक क्या है?",
          "options_en": ["Latitude", "Altitude", "Wind", "Ocean currents"],
          "options_hi": ["अक्षांश", "ऊँचाई", "हवा", "सागरीय धारा"],
          "answer": "Latitude",
          "answer_hi": "अक्षांश",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which ocean surrounds the island of Sri Lanka?",
          "question_hi": "श्रीलंका द्वीप के चारों ओर कौन सा महासागर है?",
          "options_en": ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
          "options_hi": ["भारतीय महासागर", "अटलांटिक महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
          "answer": "Indian Ocean",
          "answer_hi": "भारतीय महासागर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which is the longest mountain range in the world?",
          "question_hi": "दुनिया का सबसे लंबा पर्वत श्रृंखला कौन सा है?",
          "options_en": ["Himalayas", "Andes", "Rockies", "Alps"],
          "options_hi": ["हिमालय", "आँडेस", "रॉकी", "आल्प्स"],
          "answer": "Andes",
          "answer_hi": "आँडेस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which is the highest mountain peak in the world?",
          "question_hi": "दुनिया का सबसे ऊँचा पर्वत शिखर कौन सा है?",
          "options_en": ["Mount Everest", "K2", "Kanchenjunga", "Makalu"],
          "options_hi": ["माउंट एवरेस्ट", "के2", "कंचनजंगा", "मकालू"],
          "answer": "Mount Everest",
          "answer_hi": "माउंट एवरेस्ट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which of the following is an example of a renewable resource?",
          "question_hi": "निम्नलिखित में से कौन सा एक नवीकरणीय संसाधन का उदाहरण है?",
          "options_en": ["Coal", "Wind", "Natural gas", "Petroleum"],
          "options_hi": ["कोयला", "हवा", "प्राकृतिक गैस", "पेट्रोलियम"],
          "answer": "Wind",
          "answer_hi": "हवा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What is the main function of the ozone layer?",
          "question_hi": "ओजोन परत का मुख्य कार्य क्या है?",
          "options_en": ["To absorb UV rays", "To reflect sunlight", "To create rainfall", "To block meteors"],
          "options_hi": ["यूवी किरणों को अवशोषित करना", "सूर्य की रोशनी को परावर्तित करना", "वर्षा उत्पन्न करना", "उल्काओं को रोकना"],
          "answer": "To absorb UV rays",
          "answer_hi": "यूवी किरणों को अवशोषित करना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which is the world's largest ocean?",
          "question_hi": "दुनिया का सबसे बड़ा महासागर कौन सा है?",
          "options_en": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
          "options_hi": ["अटलांटिक महासागर", "भारतीय महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
          "answer": "Pacific Ocean",
          "answer_hi": "प्रशांत महासागर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "What is the capital of Australia?",
          "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
          "options_en": ["Sydney", "Melbourne", "Canberra", "Perth"],
          "options_hi": ["सिडनी", "मेलबर्न", "कैनबरा", "पर्थ"],
          "answer": "Canberra",
          "answer_hi": "कैनबरा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which of the following is a non-renewable resource?",
          "question_hi": "निम्नलिखित में से कौन सा एक अपरिवर्तनीय संसाधन है?",
          "options_en": ["Solar energy", "Wind energy", "Coal", "Hydropower"],
          "options_hi": ["सौर ऊर्जा", "हवा ऊर्जा", "कोयला", "जल विद्युत"],
          "answer": "Coal",
          "answer_hi": "कोयला",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which city is known as the 'City of Lakes'?",
          "question_hi": "कौन सा शहर 'झीलों का शहर' के नाम से जाना जाता है?",
          "options_en": ["Udaipur", "Bhopal", "Chandigarh", "Srinagar"],
          "options_hi": ["उदयपुर", "भोपाल", "चंडीगढ़", "श्रीनगर"],
          "answer": "Udaipur",
          "answer_hi": "उदयपुर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "What is the largest continent by population?",
          "question_hi": "जनसंख्या के हिसाब से सबसे बड़ा महाद्वीप कौन सा है?",
          "options_en": ["Asia", "Africa", "Europe", "North America"],
          "options_hi": ["एशिया", "अफ्रीका", "यूरोप", "उत्तर अमेरिका"],
          "answer": "Asia",
          "answer_hi": "एशिया",
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


