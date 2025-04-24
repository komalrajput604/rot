const questions = [ 
  
        {
          "num": 1,
          "question_en": "Which of the following is the largest continent by area?",
          "question_hi": "निम्नलिखित में से कौन सा महाद्वीप क्षेत्रफल के हिसाब से सबसे बड़ा है?",
          "options_en": ["Asia", "Africa", "North America", "Europe"],
          "options_hi": ["एशिया", "अफ्रीका", "उत्तर अमेरिका", "यूरोप"],
          "answer": "Asia",
          "answer_hi": "एशिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which river is known as the lifeline of India?",
          "question_hi": "किस नदी को भारत की जीवन रेखा कहा जाता है?",
          "options_en": ["Ganga", "Yamuna", "Narmada", "Godavari"],
          "options_hi": ["गंगा", "यमुना", "नर्मदा", "गोदावरी"],
          "answer": "Ganga",
          "answer_hi": "गंगा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which is the smallest state in India by area?",
          "question_hi": "भारत का सबसे छोटा राज्य क्षेत्रफल के हिसाब से कौन सा है?",
          "options_en": ["Goa", "Sikkim", "Manipur", "Nagaland"],
          "options_hi": ["गोवा", "सिक्किम", "मणिपुर", "नागालैंड"],
          "answer": "Goa",
          "answer_hi": "गोवा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which mountain range separates Europe and Asia?",
          "question_hi": "कौन सा पर्वत श्रेणी यूरोप और एशिया को अलग करती है?",
          "options_en": ["Ural Mountains", "Himalayas", "Andes", "Rocky Mountains"],
          "options_hi": ["उरल पर्वत", "हिमालय", "आँडी पर्वत", "रॉकी पर्वत"],
          "answer": "Ural Mountains",
          "answer_hi": "उरल पर्वत",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "The equator divides the Earth into two equal parts. What are these parts called?",
          "question_hi": "परमाणु रेखा पृथ्वी को दो समान भागों में विभाजित करती है। इन भागों को क्या कहा जाता है?",
          "options_en": ["Hemisphere", "Quadrant", "Latitude", "Longitude"],
          "options_hi": ["अर्धगोल", "चतुर्थांश", "अक्षांश", "देशांतर"],
          "answer": "Hemisphere",
          "answer_hi": "अर्धगोल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
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
          "num": 7,
          "question_en": "Which is the longest river in the world?",
          "question_hi": "दुनिया की सबसे लंबी नदी कौन सी है?",
          "options_en": ["Nile", "Amazon", "Yangtze", "Ganges"],
          "options_hi": ["नाइल", "अमेज़न", "यांग्त्ज़े", "गंगा"],
          "answer": "Nile",
          "answer_hi": "नाइल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which of the following is a major landform of the Earth?",
          "question_hi": "निम्नलिखित में से कौन पृथ्वी का एक प्रमुख स्थल रूप है?",
          "options_en": ["Mountains", "Plains", "Plateaus", "All of the above"],
          "options_hi": ["पर्वत", "मैदान", "माथा", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "The Great Barrier Reef is located in which country?",
          "question_hi": "ग्रेट बैरियर रीफ किस देश में स्थित है?",
          "options_en": ["Australia", "USA", "India", "Mexico"],
          "options_hi": ["ऑस्ट्रेलिया", "अमेरिका", "भारत", "मेक्सिको"],
          "answer": "Australia",
          "answer_hi": "ऑस्ट्रेलिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "The Tropic of Cancer passes through which Indian state?",
          "question_hi": "कर्क रेखा भारत के किस राज्य से होकर गुजरती है?",
          "options_en": ["Rajasthan", "Gujarat", "Madhya Pradesh", "West Bengal"],
          "options_hi": ["राजस्थान", "गुजरात", "मध्य प्रदेश", "पश्चिम बंगाल"],
          "answer": "Rajasthan",
          "answer_hi": "राजस्थान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which is the largest ocean in the world?",
          "question_hi": "दुनिया का सबसे बड़ा महासागर कौन सा है?",
          "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          "options_hi": ["अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
          "answer": "Pacific Ocean",
          "answer_hi": "प्रशांत महासागर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which country has the largest population in the world?",
          "question_hi": "दुनिया में सबसे बड़ी जनसंख्या किस देश की है?",
          "options_en": ["India", "China", "USA", "Indonesia"],
          "options_hi": ["भारत", "चीन", "अमेरिका", "इंडोनेशिया"],
          "answer": "China",
          "answer_hi": "चीन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "The Nile River flows into which sea?",
          "question_hi": "नाइल नदी किस समुद्र में बहती है?",
          "options_en": ["Mediterranean Sea", "Red Sea", "Arabian Sea", "Bay of Bengal"],
          "options_hi": ["भूमध्य सागर", "लाल सागर", "अरब सागर", "बंगाल की खाड़ी"],
          "answer": "Mediterranean Sea",
          "answer_hi": "भूमध्य सागर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which is the largest desert in the world?",
          "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
          "options_en": ["Sahara Desert", "Gobi Desert", "Karakum Desert", "Atacama Desert"],
          "options_hi": ["सहारा रेगिस्तान", "गोबी रेगिस्तान", "कराकुम रेगिस्तान", "अटाकामा रेगिस्तान"],
          "answer": "Sahara Desert",
          "answer_hi": "सहारा रेगिस्तान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which ocean lies to the south of India?",
          "question_hi": "भारत के दक्षिण में कौन सा महासागर स्थित है?",
          "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          "options_hi": ["अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
          "answer": "Indian Ocean",
          "answer_hi": "भारतीय महासागर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which state is known as the 'Land of the Rising Sun' in India?",
          "question_hi": "भारत में 'उगते सूरज की भूमि' के नाम से कौन सा राज्य जाना जाता है?",
          "options_en": ["Assam", "Arunachal Pradesh", "Nagaland", "Sikkim"],
          "options_hi": ["असम", "अरुणाचल प्रदेश", "नागालैंड", "सिक्किम"],
          "answer": "Arunachal Pradesh",
          "answer_hi": "अरुणाचल प्रदेश",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which is the largest island in the world?",
          "question_hi": "दुनिया का सबसे बड़ा द्वीप कौन सा है?",
          "options_en": ["Greenland", "Australia", "Borneo", "Madagascar"],
          "options_hi": ["ग्रीनलैंड", "ऑस्ट्रेलिया", "बॉर्नियो", "मडागास्कर"],
          "answer": "Greenland",
          "answer_hi": "ग्रीनलैंड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "The Mediterranean Sea is located between which two continents?",
          "question_hi": "भूमध्य सागर किस दो महाद्वीपों के बीच स्थित है?",
          "options_en": ["Asia and Africa", "Europe and Asia", "Europe and Africa", "Asia and North America"],
          "options_hi": ["एशिया और अफ्रीका", "यूरोप और एशिया", "यूरोप और अफ्रीका", "एशिया और उत्तर अमेरिका"],
          "answer": "Europe and Africa",
          "answer_hi": "यूरोप और अफ्रीका",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which country is known as the 'Land of the Midnight Sun'?",
          "question_hi": "किस देश को 'मध्य रात्रि के सूरज की भूमि' के रूप में जाना जाता है?",
          "options_en": ["Norway", "Finland", "Iceland", "Sweden"],
          "options_hi": ["नॉर्वे", "फिनलैंड", "आइसलैंड", "स्वीडन"],
          "answer": "Norway",
          "answer_hi": "नॉर्वे",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "The Suez Canal connects the Mediterranean Sea to which sea?",
          "question_hi": "स्वेज नहर भूमध्य सागर को किस समुद्र से जोड़ती है?",
          "options_en": ["Red Sea", "Arabian Sea", "Andaman Sea", "Bay of Bengal"],
          "options_hi": ["लाल सागर", "अरब सागर", "अंडमान सागर", "बंगाल की खाड़ी"],
          "answer": "Red Sea",
          "answer_hi": "लाल सागर",
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


