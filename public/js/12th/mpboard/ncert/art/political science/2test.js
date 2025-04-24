const questions = [ 

        {
          "num": 1,
          "question_en": "Who was the first Prime Minister of independent India?",
          "question_hi": "स्वतंत्र भारत के पहले प्रधानमंत्री कौन थे?",
          "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Dr. Rajendra Prasad"],
          "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार पटेल", "डॉ. राजेन्द्र प्रसाद"],
          "answer": "Jawaharlal Nehru",
          "answer_hi": "जवाहरलाल नेहरू",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What is the full form of UPA?",
          "question_hi": "UPA का पूरा नाम क्या है?",
          "options_en": ["United Political Alliance", "United Progressive Alliance", "Universal Party of Asia", "Union Power Association"],
          "options_hi": ["यूनाइटेड पोलिटिकल अलायंस", "यूनाइटेड प्रोग्रेसिव अलायंस", "यूनिवर्सल पार्टी ऑफ एशिया", "यूनियन पावर एसोसिएशन"],
          "answer": "United Progressive Alliance",
          "answer_hi": "यूनाइटेड प्रोग्रेसिव अलायंस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which article of the Indian Constitution deals with emergency provisions?",
          "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद आपातकालीन प्रावधानों से संबंधित है?",
          "options_en": ["Article 356", "Article 370", "Article 352", "Article 368"],
          "options_hi": ["अनुच्छेद 356", "अनुच्छेद 370", "अनुच्छेद 352", "अनुच्छेद 368"],
          "answer": "Article 352",
          "answer_hi": "अनुच्छेद 352",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which institution resolves disputes between states in India?",
          "question_hi": "भारत में राज्यों के बीच विवादों को कौन हल करता है?",
          "options_en": ["President", "Prime Minister", "Supreme Court", "Rajya Sabha"],
          "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "सुप्रीम कोर्ट", "राज्य सभा"],
          "answer": "Supreme Court",
          "answer_hi": "सुप्रीम कोर्ट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "When was the Constitution of India adopted?",
          "question_hi": "भारत का संविधान कब अंगीकृत किया गया था?",
          "options_en": ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1947"],
          "options_hi": ["15 अगस्त 1947", "26 जनवरी 1950", "26 नवम्बर 1949", "2 अक्टूबर 1947"],
          "answer": "26 November 1949",
          "answer_hi": "26 नवम्बर 1949",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which party led the government at the center during the Emergency (1975–77)?",
          "question_hi": "आपातकाल (1975–77) के दौरान केंद्र में किस पार्टी की सरकार थी?",
          "options_en": ["BJP", "Congress", "CPI", "Janata Party"],
          "options_hi": ["भाजपा", "कांग्रेस", "सीपीआई", "जनता पार्टी"],
          "answer": "Congress",
          "answer_hi": "कांग्रेस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which Indian Prime Minister gave the slogan 'Garibi Hatao'?",
          "question_hi": "‘गरीबी हटाओ’ का नारा किस भारतीय प्रधानमंत्री ने दिया था?",
          "options_en": ["Indira Gandhi", "Rajiv Gandhi", "Jawaharlal Nehru", "Atal Bihari Vajpayee"],
          "options_hi": ["इंदिरा गांधी", "राजीव गांधी", "जवाहरलाल नेहरू", "अटल बिहारी वाजपेयी"],
          "answer": "Indira Gandhi",
          "answer_hi": "इंदिरा गांधी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which year did India face a major war with Pakistan resulting in the creation of Bangladesh?",
          "question_hi": "भारत को किस वर्ष पाकिस्तान के साथ युद्ध करना पड़ा जिससे बांग्लादेश का निर्माण हुआ?",
          "options_en": ["1962", "1965", "1971", "1999"],
          "options_hi": ["1962", "1965", "1971", "1999"],
          "answer": "1971",
          "answer_hi": "1971",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which Indian state was created in 2000?",
          "question_hi": "भारत का कौन सा राज्य वर्ष 2000 में बना था?",
          "options_en": ["Jharkhand", "Chhattisgarh", "Uttarakhand", "All of the above"],
          "options_hi": ["झारखंड", "छत्तीसगढ़", "उत्तराखंड", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which body is considered the guardian of the Indian Constitution?",
          "question_hi": "भारतीय संविधान का संरक्षक किसे माना जाता है?",
          "options_en": ["Parliament", "President", "Supreme Court", "Prime Minister"],
          "options_hi": ["संसद", "राष्ट्रपति", "सुप्रीम कोर्ट", "प्रधानमंत्री"],
          "answer": "Supreme Court",
          "answer_hi": "सुप्रीम कोर्ट",
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


