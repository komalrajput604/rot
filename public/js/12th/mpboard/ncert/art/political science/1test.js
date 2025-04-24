const questions = [ 
        {
          "num": 1,
          "question_en": "What is the full form of UPA?",
          "question_hi": "UPA का पूरा नाम क्या है?",
          "options_en": ["United Progressive Alliance", "United Political Alliance", "Universal Progressive Alliance", "Union Public Association"],
          "options_hi": ["यूनाइटेड प्रोग्रेसिव अलायंस", "यूनाइटेड पॉलिटिकल अलायंस", "यूनिवर्सल प्रोग्रेसिव अलायंस", "यूनियन पब्लिक एसोसिएशन"],
          "answer": "United Progressive Alliance",
          "answer_hi": "यूनाइटेड प्रोग्रेसिव अलायंस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Who was the first woman Prime Minister of India?",
          "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
          "options_en": ["Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu", "Meira Kumar"],
          "options_hi": ["इंदिरा गांधी", "सोनिया गांधी", "सरोजिनी नायडू", "मीरा कुमार"],
          "answer": "Indira Gandhi",
          "answer_hi": "इंदिरा गांधी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "When was the Constitution of India adopted?",
          "question_hi": "भारत का संविधान कब अपनाया गया था?",
          "options_en": ["26 January 1950", "15 August 1947", "26 November 1949", "2 October 1950"],
          "options_hi": ["26 जनवरी 1950", "15 अगस्त 1947", "26 नवम्बर 1949", "2 अक्टूबर 1950"],
          "answer": "26 November 1949",
          "answer_hi": "26 नवम्बर 1949",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which institution resolves disputes between central and state governments?",
          "question_hi": "केंद्र और राज्य सरकारों के बीच विवादों को कौन सुलझाता है?",
          "options_en": ["Supreme Court", "President", "Parliament", "Prime Minister"],
          "options_hi": ["सुप्रीम कोर्ट", "राष्ट्रपति", "संसद", "प्रधानमंत्री"],
          "answer": "Supreme Court",
          "answer_hi": "सुप्रीम कोर्ट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What is the term of the Lok Sabha?",
          "question_hi": "लोकसभा का कार्यकाल कितने वर्षों का होता है?",
          "options_en": ["5 years", "4 years", "6 years", "7 years"],
          "options_hi": ["5 वर्ष", "4 वर्ष", "6 वर्ष", "7 वर्ष"],
          "answer": "5 years",
          "answer_hi": "5 वर्ष",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Who appoints the Prime Minister of India?",
          "question_hi": "भारत के प्रधानमंत्री की नियुक्ति कौन करता है?",
          "options_en": ["President", "Parliament", "Supreme Court", "Vice President"],
          "options_hi": ["राष्ट्रपति", "संसद", "सुप्रीम कोर्ट", "उपराष्ट्रपति"],
          "answer": "President",
          "answer_hi": "राष्ट्रपति",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which body conducts elections in India?",
          "question_hi": "भारत में चुनाव कौन कराता है?",
          "options_en": ["Election Commission", "Supreme Court", "Prime Minister", "Parliament"],
          "options_hi": ["चुनाव आयोग", "सुप्रीम कोर्ट", "प्रधानमंत्री", "संसद"],
          "answer": "Election Commission",
          "answer_hi": "चुनाव आयोग",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "In which year did India become a republic?",
          "question_hi": "भारत किस वर्ष गणराज्य बना?",
          "options_en": ["1950", "1947", "1949", "1952"],
          "options_hi": ["1950", "1947", "1949", "1952"],
          "answer": "1950",
          "answer_hi": "1950",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which political party was founded by Jawaharlal Nehru?",
          "question_hi": "पंडित नेहरू ने किस राजनीतिक पार्टी की स्थापना की थी?",
          "options_en": ["Congress", "BJP", "CPI", "DMK"],
          "options_hi": ["कांग्रेस", "भाजपा", "सीपीआई", "डीएमके"],
          "answer": "Congress",
          "answer_hi": "कांग्रेस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which body makes laws in India?",
          "question_hi": "भारत में कानून कौन बनाता है?",
          "options_en": ["Parliament", "President", "Supreme Court", "Prime Minister"],
          "options_hi": ["संसद", "राष्ट्रपति", "सुप्रीम कोर्ट", "प्रधानमंत्री"],
          "answer": "Parliament",
          "answer_hi": "संसद",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What is the minimum age for becoming a Member of Parliament?",
          "question_hi": "सांसद बनने की न्यूनतम आयु क्या है?",
          "options_en": ["25 years", "30 years", "21 years", "35 years"],
          "options_hi": ["25 वर्ष", "30 वर्ष", "21 वर्ष", "35 वर्ष"],
          "answer": "25 years",
          "answer_hi": "25 वर्ष",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which part of the Constitution deals with Fundamental Rights?",
          "question_hi": "संविधान का कौन सा भाग मौलिक अधिकारों से संबंधित है?",
          "options_en": ["Part III", "Part IV", "Part I", "Part II"],
          "options_hi": ["भाग III", "भाग IV", "भाग I", "भाग II"],
          "answer": "Part III",
          "answer_hi": "भाग III",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Who is the head of the state government?",
          "question_hi": "राज्य सरकार का मुखिया कौन होता है?",
          "options_en": ["Chief Minister", "Governor", "President", "Speaker"],
          "options_hi": ["मुख्यमंत्री", "राज्यपाल", "राष्ट्रपति", "विधानसभा अध्यक्ष"],
          "answer": "Chief Minister",
          "answer_hi": "मुख्यमंत्री",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which amendment is known as the Mini Constitution?",
          "question_hi": "कौन सा संशोधन लघु संविधान (Mini Constitution) कहलाता है?",
          "options_en": ["42nd Amendment", "44th Amendment", "73rd Amendment", "86th Amendment"],
          "options_hi": ["42वां संशोधन", "44वां संशोधन", "73वां संशोधन", "86वां संशोधन"],
          "answer": "42nd Amendment",
          "answer_hi": "42वां संशोधन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Who was the first President of independent India?",
          "question_hi": "स्वतंत्र भारत के पहले राष्ट्रपति कौन थे?",
          "options_en": ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "B.R. Ambedkar", "V.V. Giri"],
          "options_hi": ["डॉ. राजेन्द्र प्रसाद", "जवाहरलाल नेहरू", "भीमराव अंबेडकर", "वी.वी. गिरि"],
          "answer": "Dr. Rajendra Prasad",
          "answer_hi": "डॉ. राजेन्द्र प्रसाद",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which institution is called the 'Guardian of the Constitution'?",
          "question_hi": "संविधान का संरक्षक किसे कहा जाता है?",
          "options_en": ["Supreme Court", "President", "Parliament", "Prime Minister"],
          "options_hi": ["सुप्रीम कोर्ट", "राष्ट्रपति", "संसद", "प्रधानमंत्री"],
          "answer": "Supreme Court",
          "answer_hi": "सुप्रीम कोर्ट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which article deals with the Right to Education?",
          "question_hi": "शिक्षा का अधिकार किस अनुच्छेद में दिया गया है?",
          "options_en": ["Article 21A", "Article 19", "Article 14", "Article 32"],
          "options_hi": ["अनुच्छेद 21A", "अनुच्छेद 19", "अनुच्छेद 14", "अनुच्छेद 32"],
          "answer": "Article 21A",
          "answer_hi": "अनुच्छेद 21A",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which was the first state to be formed on linguistic basis?",
          "question_hi": "भाषायी आधार पर गठित पहला राज्य कौन सा था?",
          "options_en": ["Andhra Pradesh", "Tamil Nadu", "Maharashtra", "Kerala"],
          "options_hi": ["आंध्र प्रदेश", "तमिलनाडु", "महाराष्ट्र", "केरल"],
          "answer": "Andhra Pradesh",
          "answer_hi": "आंध्र प्रदेश",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "When was the Election Commission of India established?",
          "question_hi": "भारत का चुनाव आयोग कब स्थापित किया गया?",
          "options_en": ["1950", "1947", "1952", "1949"],
          "options_hi": ["1950", "1947", "1952", "1949"],
          "answer": "1950",
          "answer_hi": "1950",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Who is the ex-officio chairman of the Rajya Sabha?",
          "question_hi": "राज्यसभा के पदेन सभापति कौन होते हैं?",
          "options_en": ["Vice President", "President", "Prime Minister", "Chief Justice"],
          "options_hi": ["उपराष्ट्रपति", "राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश"],
          "answer": "Vice President",
          "answer_hi": "उपराष्ट्रपति",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "How many Fundamental Duties are in the Constitution?",
          "question_hi": "संविधान में कुल कितने मौलिक कर्तव्य हैं?",
          "options_en": ["11", "10", "9", "12"],
          "options_hi": ["11", "10", "9", "12"],
          "answer": "11",
          "answer_hi": "11",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "What is the maximum strength of Lok Sabha?",
          "question_hi": "लोकसभा की अधिकतम सदस्य संख्या कितनी है?",
          "options_en": ["552", "545", "500", "560"],
          "options_hi": ["552", "545", "500", "560"],
          "answer": "552",
          "answer_hi": "552",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Which party led the NDA coalition?",
          "question_hi": "NDA गठबंधन का नेतृत्व किस पार्टी ने किया?",
          "options_en": ["BJP", "Congress", "SP", "DMK"],
          "options_hi": ["भाजपा", "कांग्रेस", "सपा", "डीएमके"],
          "answer": "BJP",
          "answer_hi": "भाजपा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "What type of party system exists in India?",
          "question_hi": "भारत में किस प्रकार की पार्टी प्रणाली है?",
          "options_en": ["Multi-party system", "Single-party system", "Two-party system", "No-party system"],
          "options_hi": ["बहुदलीय प्रणाली", "एकदलीय प्रणाली", "द्विदलीय प्रणाली", "निर्दलीय प्रणाली"],
          "answer": "Multi-party system",
          "answer_hi": "बहुदलीय प्रणाली",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "Who wrote the book ‘India’s Struggle for Independence’?",
          "question_hi": "‘India’s Struggle for Independence’ पुस्तक किसने लिखी?",
          "options_en": ["Bipan Chandra", "Romila Thapar", "Ramachandra Guha", "Rajiv Malhotra"],
          "options_hi": ["बिपिन चंद्र", "रोमीला थापर", "रामचंद्र गुहा", "राजीव मल्होत्रा"],
          "answer": "Bipan Chandra",
          "answer_hi": "बिपिन चंद्र",
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


