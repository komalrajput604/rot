const questions = [ 

        {
          "num": 1,
          "question_en": "Which of the following countries was the first to liberalize its economy in 1991?",
          "question_hi": "निम्नलिखित में से किस देश ने 1991 में अपनी अर्थव्यवस्था को उदार बनाया था?",
          "options_en": ["India", "China", "Pakistan", "Sri Lanka"],
          "options_hi": ["भारत", "चीन", "पाकिस्तान", "श्रीलंका"],
          "answer": "India",
          "answer_hi": "भारत",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which movement led to the declaration of Emergency in India in 1975?",
          "question_hi": "भारत में 1975 में आपातकाल की घोषणा किस आंदोलन के कारण हुई?",
          "options_en": ["Chipko Movement", "JP Movement", "Narmada Bachao Andolan", "Anti-Hindi Movement"],
          "options_hi": ["चिपको आंदोलन", "जेपी आंदोलन", "नर्मदा बचाओ आंदोलन", "अहिंदी आंदोलन"],
          "answer": "JP Movement",
          "answer_hi": "जेपी आंदोलन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Who was the first Chairperson of the Planning Commission of India?",
          "question_hi": "भारत के योजना आयोग के पहले अध्यक्ष कौन थे?",
          "options_en": ["Jawaharlal Nehru", "Sardar Patel", "B. R. Ambedkar", "Rajendra Prasad"],
          "options_hi": ["जवाहरलाल नेहरू", "सरदार पटेल", "बी. आर. अम्बेडकर", "राजेन्द्र प्रसाद"],
          "answer": "Jawaharlal Nehru",
          "answer_hi": "जवाहरलाल नेहरू",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which party emerged as the single largest party in 1989 general elections?",
          "question_hi": "1989 के आम चुनावों में सबसे बड़ी पार्टी कौन सी उभरी?",
          "options_en": ["Congress", "BJP", "Janata Dal", "CPI(M)"],
          "options_hi": ["कांग्रेस", "भाजपा", "जनता दल", "भाकपा(म)"],
          "answer": "Janata Dal",
          "answer_hi": "जनता दल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Who signed the Tashkent Agreement with India in 1966?",
          "question_hi": "1966 में भारत के साथ ताशकंद समझौते पर किसने हस्ताक्षर किए?",
          "options_en": ["Zulfikar Ali Bhutto", "Ayub Khan", "Yahya Khan", "Benazir Bhutto"],
          "options_hi": ["जुल्फिकार अली भुट्टो", "अयूब खान", "याह्या खान", "बेनजीर भुट्टो"],
          "answer": "Ayub Khan",
          "answer_hi": "अयूब खान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "When was the Bharatiya Janata Party (BJP) formed?",
          "question_hi": "भारतीय जनता पार्टी (भाजपा) की स्थापना कब हुई थी?",
          "options_en": ["1975", "1980", "1984", "1991"],
          "options_hi": ["1975", "1980", "1984", "1991"],
          "answer": "1980",
          "answer_hi": "1980",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which Indian Prime Minister gave the slogan ‘Garibi Hatao’?",
          "question_hi": "‘गरीबी हटाओ’ का नारा किस भारतीय प्रधानमंत्री ने दिया?",
          "options_en": ["Jawaharlal Nehru", "Indira Gandhi", "Rajiv Gandhi", "Lal Bahadur Shastri"],
          "options_hi": ["जवाहरलाल नेहरू", "इंदिरा गांधी", "राजीव गांधी", "लाल बहादुर शास्त्री"],
          "answer": "Indira Gandhi",
          "answer_hi": "इंदिरा गांधी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which of the following countries is not a permanent member of the UN Security Council?",
          "question_hi": "निम्नलिखित में से कौन सा देश संयुक्त राष्ट्र सुरक्षा परिषद का स्थायी सदस्य नहीं है?",
          "options_en": ["USA", "India", "Russia", "China"],
          "options_hi": ["अमेरिका", "भारत", "रूस", "चीन"],
          "answer": "India",
          "answer_hi": "भारत",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which agreement brought peace between Israel and Palestine?",
          "question_hi": "कौन सा समझौता इज़राइल और फिलिस्तीन के बीच शांति लाया?",
          "options_en": ["Camp David Accords", "Oslo Accords", "Tashkent Agreement", "Shimla Agreement"],
          "options_hi": ["कैम्प डेविड समझौता", "ओस्लो समझौता", "ताशकंद समझौता", "शिमला समझौता"],
          "answer": "Oslo Accords",
          "answer_hi": "ओस्लो समझौता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is the main aim of the Non-Aligned Movement (NAM)?",
          "question_hi": "गुटनिरपेक्ष आंदोलन (NAM) का मुख्य उद्देश्य क्या है?",
          "options_en": ["Support any superpower", "Maintain neutrality in Cold War", "Join NATO", "Promote capitalism"],
          "options_hi": ["किसी महाशक्ति का समर्थन", "शीत युद्ध में तटस्थता बनाए रखना", "नाटो में शामिल होना", "पूंजीवाद को बढ़ावा देना"],
          "answer": "Maintain neutrality in Cold War",
          "answer_hi": "शीत युद्ध में तटस्थता बनाए रखना",
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


