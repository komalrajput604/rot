const questions = [   
    {
      "num": 1,
      "question_en": "What is the main objective of economic planning in India?",
      "question_hi": "भारत में आर्थिक योजना का मुख्य उद्देश्य क्या है?",
      "options_en": ["Population control", "Economic growth", "Defense development", "Import promotion"],
      "options_hi": ["जनसंख्या नियंत्रण", "आर्थिक विकास", "रक्षा विकास", "आयात को बढ़ावा"],
      "answer": "Economic growth",
      "answer_hi": "आर्थिक विकास",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Which sector is known as the primary sector of an economy?",
      "question_hi": "अर्थव्यवस्था का प्राथमिक क्षेत्र किसे कहा जाता है?",
      "options_en": ["Industrial", "Service", "Agriculture", "Banking"],
      "options_hi": ["औद्योगिक", "सेवा", "कृषि", "बैंकिंग"],
      "answer": "Agriculture",
      "answer_hi": "कृषि",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "GDP is the abbreviation for:",
      "question_hi": "GDP का पूर्ण रूप क्या है?",
      "options_en": ["Gross Domestic Product", "General Development Plan", "Global Domestic Production", "Gross Development Process"],
      "options_hi": ["सकल घरेलू उत्पाद", "सामान्य विकास योजना", "वैश्विक घरेलू उत्पादन", "सकल विकास प्रक्रिया"],
      "answer": "Gross Domestic Product",
      "answer_hi": "सकल घरेलू उत्पाद",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Which is a non-renewable resource?",
      "question_hi": "निम्न में से कौन सा संसाधन नवीकरणीय नहीं है?",
      "options_en": ["Solar Energy", "Wind Energy", "Coal", "Biogas"],
      "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "बायोगैस"],
      "answer": "Coal",
      "answer_hi": "कोयला",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "What does human capital refer to?",
      "question_hi": "मानव पूंजी से आप क्या समझते हैं?",
      "options_en": ["Physical assets", "Financial investments", "Skilled and educated people", "Natural resources"],
      "options_hi": ["भौतिक संपत्ति", "वित्तीय निवेश", "कुशल और शिक्षित लोग", "प्राकृतिक संसाधन"],
      "answer": "Skilled and educated people",
      "answer_hi": "कुशल और शिक्षित लोग",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Which organization publishes the Human Development Report?",
      "question_hi": "मानव विकास रिपोर्ट कौन प्रकाशित करता है?",
      "options_en": ["IMF", "World Bank", "UNDP", "WTO"],
      "options_hi": ["आईएमएफ", "विश्व बैंक", "यूएनडीपी", "डब्ल्यूटीओ"],
      "answer": "UNDP",
      "answer_hi": "यूएनडीपी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Which of the following is not a feature of a developed economy?",
      "question_hi": "निम्न में से कौन सी एक विकसित अर्थव्यवस्था की विशेषता नहीं है?",
      "options_en": ["High per capita income", "Advanced technology", "High birth rate", "High standard of living"],
      "options_hi": ["उच्च प्रति व्यक्ति आय", "उन्नत तकनीक", "उच्च जन्म दर", "उच्च जीवन स्तर"],
      "answer": "High birth rate",
      "answer_hi": "उच्च जन्म दर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "What is meant by inflation?",
      "question_hi": "मुद्रास्फीति से आप क्या समझते हैं?",
      "options_en": ["Decrease in prices", "Stability of prices", "Rise in prices", "Fluctuation in demand"],
      "options_hi": ["मूल्यों में गिरावट", "मूल्य स्थिरता", "मूल्यों में वृद्धि", "मांग में उतार-चढ़ाव"],
      "answer": "Rise in prices",
      "answer_hi": "मूल्यों में वृद्धि",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "What is the main reason for unemployment in India?",
      "question_hi": "भारत में बेरोजगारी का मुख्य कारण क्या है?",
      "options_en": ["Lack of capital", "Lack of education", "Population growth", "Excess industry"],
      "options_hi": ["पूंजी की कमी", "शिक्षा की कमी", "जनसंख्या वृद्धि", "अत्यधिक उद्योग"],
      "answer": "Population growth",
      "answer_hi": "जनसंख्या वृद्धि",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Which type of unemployment is common in agriculture in India?",
      "question_hi": "भारत में कृषि क्षेत्र में कौन सी बेरोजगारी सामान्य है?",
      "options_en": ["Structural", "Frictional", "Seasonal", "Disguised"],
      "options_hi": ["संरचनात्मक", "घर्षणात्मक", "मौसमी", "प्रच्छन्न"],
      "answer": "Disguised",
      "answer_hi": "प्रच्छन्न",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "Which one of the following is not an economic activity?",
      "question_hi": "निम्न में से कौन सी आर्थिक गतिविधि नहीं है?",
      "options_en": ["Doctor treating patients", "Teacher teaching in school", "Housewife cooking food", "Farmer growing crops"],
      "options_hi": ["डॉक्टर का इलाज करना", "स्कूल में पढ़ाने वाला शिक्षक", "गृहिणी का खाना बनाना", "किसान का फसल उगाना"],
      "answer": "Housewife cooking food",
      "answer_hi": "गृहिणी का खाना बनाना",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "Which sector contributes the most to India’s GDP currently?",
      "question_hi": "वर्तमान में भारत के GDP में सबसे अधिक योगदान किस क्षेत्र का है?",
      "options_en": ["Primary", "Secondary", "Tertiary", "All equal"],
      "options_hi": ["प्राथमिक", "द्वितीयक", "तृतीयक", "सभी बराबर"],
      "answer": "Tertiary",
      "answer_hi": "तृतीयक",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "Which plan focused on removal of poverty?",
      "question_hi": "कौन सी योजना गरीबी हटाने पर केंद्रित थी?",
      "options_en": ["First", "Fourth", "Fifth", "Second"],
      "options_hi": ["प्रथम", "चतुर्थ", "पंचम", "द्वितीय"],
      "answer": "Fifth",
      "answer_hi": "पंचम",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Which system was adopted in India for planned development?",
      "question_hi": "भारत में नियोजित विकास के लिए कौन-सी प्रणाली अपनाई गई?",
      "options_en": ["Capitalism", "Communism", "Mixed Economy", "Laissez-Faire"],
      "options_hi": ["पूंजीवाद", "साम्यवाद", "मिश्रित अर्थव्यवस्था", "लैसेज फेयर"],
      "answer": "Mixed Economy",
      "answer_hi": "मिश्रित अर्थव्यवस्था",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "The Green Revolution was associated with which sector?",
      "question_hi": "हरित क्रांति किस क्षेत्र से संबंधित थी?",
      "options_en": ["Industry", "Agriculture", "Transport", "Trade"],
      "options_hi": ["उद्योग", "कृषि", "परिवहन", "व्यापार"],
      "answer": "Agriculture",
      "answer_hi": "कृषि",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "What is meant by poverty line?",
      "question_hi": "गरीबी रेखा से आप क्या समझते हैं?",
      "options_en": ["Minimum income for survival", "Maximum income of poor", "Average income", "None of these"],
      "options_hi": ["जीवित रहने के लिए न्यूनतम आय", "गरीबों की अधिकतम आय", "औसत आय", "इनमें से कोई नहीं"],
      "answer": "Minimum income for survival",
      "answer_hi": "जीवित रहने के लिए न्यूनतम आय",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "When was the Planning Commission of India established?",
      "question_hi": "भारत में योजना आयोग की स्थापना कब हुई थी?",
      "options_en": ["1947", "1950", "1955", "1960"],
      "options_hi": ["1947", "1950", "1955", "1960"],
      "answer": "1950",
      "answer_hi": "1950",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "Which of these is an indicator of economic development?",
      "question_hi": "निम्न में से कौन आर्थिक विकास का संकेतक है?",
      "options_en": ["Literacy rate", "Unemployment", "Pollution", "Imports"],
      "options_hi": ["साक्षरता दर", "बेरोजगारी", "प्रदूषण", "आयात"],
      "answer": "Literacy rate",
      "answer_hi": "साक्षरता दर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Which among the following is a merit of small scale industries?",
      "question_hi": "निम्न में से लघु उद्योगों की एक विशेषता क्या है?",
      "options_en": ["High investment", "Less employment", "Quick decision making", "Large area required"],
      "options_hi": ["उच्च निवेश", "कम रोजगार", "तेजी से निर्णय लेना", "बड़ा क्षेत्र आवश्यक"],
      "answer": "Quick decision making",
      "answer_hi": "तेजी से निर्णय लेना",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "Which of these is included in national income?",
      "question_hi": "निम्न में से कौन राष्ट्रीय आय में शामिल होता है?",
      "options_en": ["Transfer payments", "Unpaid work", "Wages and salaries", "Illegal income"],
      "options_hi": ["हस्तांतरण भुगतान", "अवैतनिक कार्य", "वेतन और तनख्वाह", "अवैध आय"],
      "answer": "Wages and salaries",
      "answer_hi": "वेतन और तनख्वाह",
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


