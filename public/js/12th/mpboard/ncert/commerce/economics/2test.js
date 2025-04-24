const questions = [   
      {
        "num": 1,
        "question_en": "What is the basic problem of an economy?",
        "question_hi": "किसी अर्थव्यवस्था की मूल समस्या क्या है?",
        "options_en": ["Inflation", "Unemployment", "Poverty", "Scarcity"],
        "options_hi": ["मुद्रास्फीति", "बेरोजगारी", "गरीबी", "कमी"],
        "answer": "Scarcity",
        "answer_hi": "कमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which of the following is a central problem of an economy?",
        "question_hi": "निम्नलिखित में से कौन-सी एक अर्थव्यवस्था की केंद्रीय समस्या है?",
        "options_en": ["What to produce", "How to consume", "Who to employ", "How to vote"],
        "options_hi": ["क्या उत्पादन करें", "कैसे उपभोग करें", "किसे रोजगार दें", "कैसे मतदान करें"],
        "answer": "What to produce",
        "answer_hi": "क्या उत्पादन करें",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Which curve shows the production possibilities?",
        "question_hi": "उत्पादन संभाव्यता को कौन-सा वक्र दर्शाता है?",
        "options_en": ["Demand Curve", "Supply Curve", "PPF", "Cost Curve"],
        "options_hi": ["मांग वक्र", "आपूर्ति वक्र", "उत्पादन संभाव्यता वक्र", "लागत वक्र"],
        "answer": "PPF",
        "answer_hi": "उत्पादन संभाव्यता वक्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "What does 'Microeconomics' deal with?",
        "question_hi": "'सूक्ष्म अर्थशास्त्र' किससे संबंधित है?",
        "options_en": ["Whole economy", "Government budget", "Individual units", "Global trade"],
        "options_hi": ["पूरी अर्थव्यवस्था", "सरकारी बजट", "व्यक्तिगत इकाइयाँ", "वैश्विक व्यापार"],
        "answer": "Individual units",
        "answer_hi": "व्यक्तिगत इकाइयाँ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "What is the meaning of 'opportunity cost'?",
        "question_hi": "'अवसर लागत' का क्या अर्थ है?",
        "options_en": ["Cost of all goods", "Cost of best alternative foregone", "Monetary cost", "Production cost"],
        "options_hi": ["सभी वस्तुओं की लागत", "त्यागी गई सर्वश्रेष्ठ वैकल्पिक लागत", "मौद्रिक लागत", "उत्पादन लागत"],
        "answer": "Cost of best alternative foregone",
        "answer_hi": "त्यागी गई सर्वश्रेष्ठ वैकल्पिक लागत",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "In which economy are the means of production owned by the government?",
        "question_hi": "किस प्रकार की अर्थव्यवस्था में उत्पादन के साधन सरकार के स्वामित्व में होते हैं?",
        "options_en": ["Capitalist", "Mixed", "Socialist", "Open"],
        "options_hi": ["पूंजीवादी", "मिश्रित", "समाजवादी", "उदारीकृत"],
        "answer": "Socialist",
        "answer_hi": "समाजवादी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Who is known as the father of economics?",
        "question_hi": "अर्थशास्त्र के जनक किसे कहा जाता है?",
        "options_en": ["Karl Marx", "Adam Smith", "Amartya Sen", "John Keynes"],
        "options_hi": ["कार्ल मार्क्स", "एडम स्मिथ", "अमर्त्य सेन", "जॉन कीन्स"],
        "answer": "Adam Smith",
        "answer_hi": "एडम स्मिथ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "What is 'National Income'?",
        "question_hi": "'राष्ट्रीय आय' क्या है?",
        "options_en": ["Total government revenue", "Total value of goods produced", "Total income earned by a nation's people", "Total bank deposits"],
        "options_hi": ["कुल सरकारी राजस्व", "उत्पादित वस्तुओं का कुल मूल्य", "देश की जनता की कुल आय", "कुल बैंक जमा"],
        "answer": "Total income earned by a nation's people",
        "answer_hi": "देश की जनता की कुल आय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "What is included in macroeconomics?",
        "question_hi": "मैक्रोइकोनॉमिक्स में क्या शामिल होता है?",
        "options_en": ["Individual choices", "Firm behavior", "Aggregate demand", "Local prices"],
        "options_hi": ["व्यक्तिगत विकल्प", "फर्म का व्यवहार", "समष्टि मांग", "स्थानीय मूल्य"],
        "answer": "Aggregate demand",
        "answer_hi": "समष्टि मांग",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Which of the following is not a factor of production?",
        "question_hi": "निम्नलिखित में से कौन उत्पादन का कारक नहीं है?",
        "options_en": ["Land", "Labour", "Capital", "Banking"],
        "options_hi": ["भूमि", "श्रम", "पूंजी", "बैंकिंग"],
        "answer": "Banking",
        "answer_hi": "बैंकिंग",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Which indicator shows the economic growth of a country?",
        "question_hi": "किस संकेतक से किसी देश की आर्थिक वृद्धि का पता चलता है?",
        "options_en": ["GNP", "GDP", "NDP", "NNP"],
        "options_hi": ["सकल राष्ट्रीय उत्पाद", "सकल घरेलू उत्पाद", "शुद्ध घरेलू उत्पाद", "शुद्ध राष्ट्रीय उत्पाद"],
        "answer": "GDP",
        "answer_hi": "सकल घरेलू उत्पाद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "What is 'inflation'?",
        "question_hi": "'मुद्रास्फीति' क्या है?",
        "options_en": ["Decrease in prices", "Increase in employment", "Increase in prices", "Decrease in production"],
        "options_hi": ["मूल्यों में गिरावट", "रोजगार में वृद्धि", "मूल्यों में वृद्धि", "उत्पादन में कमी"],
        "answer": "Increase in prices",
        "answer_hi": "मूल्यों में वृद्धि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "What does GDP stand for?",
        "question_hi": "GDP का पूर्ण रूप क्या है?",
        "options_en": ["Gross Domestic Product", "Great Domestic Plan", "Government Development Policy", "Gross Demand Price"],
        "options_hi": ["सकल घरेलू उत्पाद", "महान घरेलू योजना", "सरकारी विकास नीति", "सकल मांग मूल्य"],
        "answer": "Gross Domestic Product",
        "answer_hi": "सकल घरेलू उत्पाद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "What is the main source of income for the government?",
        "question_hi": "सरकार की आय का मुख्य स्रोत क्या है?",
        "options_en": ["Loans", "Donations", "Taxes", "Exports"],
        "options_hi": ["ऋण", "दान", "कर", "निर्यात"],
        "answer": "Taxes",
        "answer_hi": "कर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which one of the following is a direct tax?",
        "question_hi": "निम्नलिखित में से कौन-सा प्रत्यक्ष कर है?",
        "options_en": ["GST", "Income Tax", "Sales Tax", "Excise Duty"],
        "options_hi": ["जीएसटी", "आयकर", "बिक्री कर", "उत्पाद शुल्क"],
        "answer": "Income Tax",
        "answer_hi": "आयकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "What is a budget?",
        "question_hi": "बजट क्या होता है?",
        "options_en": ["Record of production", "Record of population", "Statement of income and expenditure", "List of imports"],
        "options_hi": ["उत्पादन का रिकॉर्ड", "जनसंख्या का रिकॉर्ड", "आय और व्यय का विवरण", "आयातों की सूची"],
        "answer": "Statement of income and expenditure",
        "answer_hi": "आय और व्यय का विवरण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "What is meant by balance of trade?",
        "question_hi": "व्यापार संतुलन से क्या अभिप्राय है?",
        "options_en": ["Difference between imports and exports", "Trade agreement", "Taxation policy", "Government budget"],
        "options_hi": ["आयात और निर्यात के बीच का अंतर", "व्यापार समझौता", "कर नीति", "सरकारी बजट"],
        "answer": "Difference between imports and exports",
        "answer_hi": "आयात और निर्यात के बीच का अंतर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which type of unemployment is common in agriculture in India?",
        "question_hi": "भारत में कृषि क्षेत्र में कौन-सी बेरोजगारी सामान्य है?",
        "options_en": ["Structural", "Seasonal", "Frictional", "Voluntary"],
        "options_hi": ["संरचनात्मक", "मौसमी", "घर्षणात्मक", "स्वैच्छिक"],
        "answer": "Seasonal",
        "answer_hi": "मौसमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "What is the main objective of economic planning in India?",
        "question_hi": "भारत में आर्थिक योजना का मुख्य उद्देश्य क्या है?",
        "options_en": ["Political stability", "Cultural unity", "Economic development", "Military strength"],
        "options_hi": ["राजनीतिक स्थिरता", "सांस्कृतिक एकता", "आर्थिक विकास", "सैन्य शक्ति"],
        "answer": "Economic development",
        "answer_hi": "आर्थिक विकास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which sector contributes most to GDP in India?",
        "question_hi": "भारत में किस क्षेत्र का GDP में सबसे अधिक योगदान है?",
        "options_en": ["Agriculture", "Industry", "Service", "Public Sector"],
        "options_hi": ["कृषि", "उद्योग", "सेवा", "सार्वजनिक क्षेत्र"],
        "answer": "Service",
        "answer_hi": "सेवा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which body prepares the Union Budget in India?",
        "question_hi": "भारत में केंद्रीय बजट कौन तैयार करता है?",
        "options_en": ["President", "NITI Aayog", "Finance Ministry", "Reserve Bank"],
        "options_hi": ["राष्ट्रपति", "नीति आयोग", "वित्त मंत्रालय", "भारतीय रिज़र्व बैंक"],
        "answer": "Finance Ministry",
        "answer_hi": "वित्त मंत्रालय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which organization publishes the Human Development Index?",
        "question_hi": "मानव विकास सूचकांक कौन प्रकाशित करता है?",
        "options_en": ["IMF", "World Bank", "UNDP", "WTO"],
        "options_hi": ["आईएमएफ", "विश्व बैंक", "यूएनडीपी", "डब्ल्यूटीओ"],
        "answer": "UNDP",
        "answer_hi": "यूएनडीपी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Which of the following is an economic activity?",
        "question_hi": "निम्नलिखित में से कौन-सी आर्थिक गतिविधि है?",
        "options_en": ["Playing cricket", "Teaching", "Singing at home", "Sleeping"],
        "options_hi": ["क्रिकेट खेलना", "पढ़ाना", "घर में गाना गाना", "सोना"],
        "answer": "Teaching",
        "answer_hi": "पढ़ाना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which term is used for uncontrolled inflation?",
        "question_hi": "बेकाबू मुद्रास्फीति के लिए कौन-सा शब्द प्रयोग किया जाता है?",
        "options_en": ["Hyperinflation", "Stagflation", "Disinflation", "Reflation"],
        "options_hi": ["अत्यधिक मुद्रास्फीति", "मंदी में मुद्रास्फीति", "मुद्रास्फीति में कमी", "मुद्रास्फीतिक वृद्धि"],
        "answer": "Hyperinflation",
        "answer_hi": "अत्यधिक मुद्रास्फीति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Who issues currency notes in India?",
        "question_hi": "भारत में मुद्रा नोट कौन जारी करता है?",
        "options_en": ["Government of India", "Finance Ministry", "Reserve Bank of India", "Planning Commission"],
        "options_hi": ["भारत सरकार", "वित्त मंत्रालय", "भारतीय रिज़र्व बैंक", "योजना आयोग"],
        "answer": "Reserve Bank of India",
        "answer_hi": "भारतीय रिज़र्व बैंक",
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


