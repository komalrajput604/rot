const questions = [   
      {
        "num": 1,
        "question_en": "What is the central problem of an economy?",
        "question_hi": "अर्थव्यवस्था की मुख्य समस्या क्या होती है?",
        "options_en": ["Inflation", "Unemployment", "Allocation of resources", "Poverty"],
        "options_hi": ["मुद्रास्फीति", "बेरोजगारी", "संसाधनों का आवंटन", "गरीबी"],
        "answer": "Allocation of resources",
        "answer_hi": "संसाधनों का आवंटन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which of the following is a feature of a capitalist economy?",
        "question_hi": "निम्नलिखित में से कौन पूँजीवादी अर्थव्यवस्था की विशेषता है?",
        "options_en": ["Government ownership", "Price control", "Profit motive", "Central planning"],
        "options_hi": ["सरकारी स्वामित्व", "मूल्य नियंत्रण", "लाभ उद्देश्य", "केन्द्रीय योजना"],
        "answer": "Profit motive",
        "answer_hi": "लाभ उद्देश्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "What does GDP stand for?",
        "question_hi": "GDP का पूर्ण रूप क्या है?",
        "options_en": ["Gross Domestic Product", "General Development Plan", "Gross Development Product", "Global Domestic Product"],
        "options_hi": ["सकल घरेलू उत्पाद", "सामान्य विकास योजना", "सकल विकास उत्पाद", "वैश्विक घरेलू उत्पाद"],
        "answer": "Gross Domestic Product",
        "answer_hi": "सकल घरेलू उत्पाद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which sector is known as the primary sector?",
        "question_hi": "कौन-सा क्षेत्र प्राथमिक क्षेत्र के रूप में जाना जाता है?",
        "options_en": ["Industry", "Trade", "Agriculture", "Banking"],
        "options_hi": ["उद्योग", "व्यापार", "कृषि", "बैंकिंग"],
        "answer": "Agriculture",
        "answer_hi": "कृषि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "What is meant by inflation?",
        "question_hi": "मुद्रास्फीति से आप क्या समझते हैं?",
        "options_en": ["Decrease in prices", "Increase in prices", "Stability in prices", "None of these"],
        "options_hi": ["कीमतों में गिरावट", "कीमतों में वृद्धि", "कीमतों में स्थिरता", "इनमें से कोई नहीं"],
        "answer": "Increase in prices",
        "answer_hi": "कीमतों में वृद्धि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Who prepares the budget in India?",
        "question_hi": "भारत में बजट कौन तैयार करता है?",
        "options_en": ["President", "Prime Minister", "Finance Minister", "Reserve Bank of India"],
        "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "वित्त मंत्री", "भारतीय रिज़र्व बैंक"],
        "answer": "Finance Minister",
        "answer_hi": "वित्त मंत्री",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Which is not a component of national income?",
        "question_hi": "निम्नलिखित में से कौन राष्ट्रीय आय का घटक नहीं है?",
        "options_en": ["Wages", "Interest", "Transfer payments", "Rent"],
        "options_hi": ["वेतन", "ब्याज", "हस्तांतरण भुगतान", "किराया"],
        "answer": "Transfer payments",
        "answer_hi": "हस्तांतरण भुगतान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "In which year was the NITI Aayog established?",
        "question_hi": "नीति आयोग की स्थापना किस वर्ष हुई?",
        "options_en": ["2012", "2015", "2014", "2010"],
        "options_hi": ["2012", "2015", "2014", "2010"],
        "answer": "2015",
        "answer_hi": "2015",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Which of the following is a tax on income?",
        "question_hi": "निम्नलिखित में से कौन आय पर लगाया जाने वाला कर है?",
        "options_en": ["Sales tax", "Excise duty", "Income tax", "Custom duty"],
        "options_hi": ["बिक्री कर", "उत्पादन शुल्क", "आयकर", "सीमा शुल्क"],
        "answer": "Income tax",
        "answer_hi": "आयकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Which organisation is responsible for issuing currency in India?",
        "question_hi": "भारत में मुद्रा जारी करने की जिम्मेदारी किस संस्था की है?",
        "options_en": ["Finance Ministry", "State Bank of India", "Reserve Bank of India", "NITI Aayog"],
        "options_hi": ["वित्त मंत्रालय", "भारतीय स्टेट बैंक", "भारतीय रिज़र्व बैंक", "नीति आयोग"],
        "answer": "Reserve Bank of India",
        "answer_hi": "भारतीय रिज़र्व बैंक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "What is the main objective of economic planning?",
        "question_hi": "आर्थिक नियोजन का मुख्य उद्देश्य क्या होता है?",
        "options_en": ["Increase in imports", "Balanced development", "Foreign aid", "Private ownership"],
        "options_hi": ["आयात में वृद्धि", "संतुलित विकास", "विदेशी सहायता", "निजी स्वामित्व"],
        "answer": "Balanced development",
        "answer_hi": "संतुलित विकास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "What is the meaning of poverty line?",
        "question_hi": "गरीबी रेखा का क्या अर्थ है?",
        "options_en": ["Minimum income to meet basic needs", "Average income", "High income", "Taxable income"],
        "options_hi": ["मूलभूत आवश्यकताओं को पूरा करने के लिए न्यूनतम आय", "औसत आय", "उच्च आय", "कर योग्य आय"],
        "answer": "Minimum income to meet basic needs",
        "answer_hi": "मूलभूत आवश्यकताओं को पूरा करने के लिए न्यूनतम आय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which is a development indicator?",
        "question_hi": "निम्नलिखित में से कौन विकास का सूचक है?",
        "options_en": ["Literacy rate", "Birth rate", "Death rate", "Infant mortality rate"],
        "options_hi": ["साक्षरता दर", "जन्म दर", "मृत्यु दर", "शिशु मृत्यु दर"],
        "answer": "Literacy rate",
        "answer_hi": "साक्षरता दर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "What is meant by economic development?",
        "question_hi": "आर्थिक विकास से आप क्या समझते हैं?",
        "options_en": ["Increase in population", "Increase in national income", "Increase in exports", "None of these"],
        "options_hi": ["जनसंख्या में वृद्धि", "राष्ट्रीय आय में वृद्धि", "निर्यात में वृद्धि", "इनमें से कोई नहीं"],
        "answer": "Increase in national income",
        "answer_hi": "राष्ट्रीय आय में वृद्धि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which tax is included in GST?",
        "question_hi": "GST में कौन-सा कर सम्मिलित है?",
        "options_en": ["Income tax", "Property tax", "Sales tax", "Capital gains tax"],
        "options_hi": ["आयकर", "संपत्ति कर", "बिक्री कर", "पूंजी लाभ कर"],
        "answer": "Sales tax",
        "answer_hi": "बिक्री कर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Which is the largest sector in terms of employment in India?",
        "question_hi": "भारत में रोजगार के मामले में सबसे बड़ा क्षेत्र कौन-सा है?",
        "options_en": ["Industrial", "Service", "Agriculture", "Transport"],
        "options_hi": ["औद्योगिक", "सेवा", "कृषि", "परिवहन"],
        "answer": "Agriculture",
        "answer_hi": "कृषि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "When was the first five-year plan launched in India?",
        "question_hi": "भारत में पहली पंचवर्षीय योजना कब प्रारंभ की गई?",
        "options_en": ["1951", "1956", "1961", "1947"],
        "options_hi": ["1951", "1956", "1961", "1947"],
        "answer": "1951",
        "answer_hi": "1951",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which is the main source of government income?",
        "question_hi": "सरकार की आय का मुख्य स्रोत क्या है?",
        "options_en": ["Foreign aid", "Taxes", "Donations", "Loans"],
        "options_hi": ["विदेशी सहायता", "कर", "दान", "ऋण"],
        "answer": "Taxes",
        "answer_hi": "कर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "What is meant by privatization?",
        "question_hi": "निजीकरण से आप क्या समझते हैं?",
        "options_en": ["Increase in public sector", "Transfer to private ownership", "Increase in government control", "Nationalization"],
        "options_hi": ["सार्वजनिक क्षेत्र में वृद्धि", "निजी स्वामित्व को सौंपना", "सरकारी नियंत्रण में वृद्धि", "राष्ट्रीयकरण"],
        "answer": "Transfer to private ownership",
        "answer_hi": "निजी स्वामित्व को सौंपना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which institution calculates national income in India?",
        "question_hi": "भारत में राष्ट्रीय आय की गणना कौन करता है?",
        "options_en": ["RBI", "NITI Aayog", "CSO", "Finance Ministry"],
        "options_hi": ["भारतीय रिज़र्व बैंक", "नीति आयोग", "सीएसओ", "वित्त मंत्रालय"],
        "answer": "CSO",
        "answer_hi": "सीएसओ",
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


