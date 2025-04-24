const questions = [ 
        {
          "num": 1,
          "question_en": "Which of the following is a type of financial statement?",
          "question_hi": "निम्नलिखित में से कौन सा वित्तीय विवरण है?",
          "options_en": ["Balance Sheet", "Income Statement", "Cash Flow Statement", "All of the Above"],
          "options_hi": ["बैलेंस शीट", "आय विवरण", "नकद प्रवाह विवरण", "उपरोक्त सभी"],
          "answer": "All of the Above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which account is classified as a nominal account?",
          "question_hi": "किस खाते को नाममात्र खाता कहा जाता है?",
          "options_en": ["Personal Account", "Real Account", "Nominal Account", "None of the Above"],
          "options_hi": ["व्यक्तिगत खाता", "वास्तविक खाता", "नाममात्र खाता", "उपरोक्त में से कोई नहीं"],
          "answer": "Nominal Account",
          "answer_hi": "नाममात्र खाता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the term used for the amount of goods sold during a particular period?",
          "question_hi": "किसी विशेष अवधि के दौरान बेची गई वस्तुओं की राशि को क्या कहा जाता है?",
          "options_en": ["Sales", "Revenue", "Profit", "Capital"],
          "options_hi": ["बिक्री", "आय", "लाभ", "पूंजी"],
          "answer": "Sales",
          "answer_hi": "बिक्री",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which of the following is an example of a current liability?",
          "question_hi": "निम्नलिखित में से कौन सा एक वर्तमान देनदारी का उदाहरण है?",
          "options_en": ["Bank Loan", "Creditors", "Capital", "Fixed Deposit"],
          "options_hi": ["बैंक ऋण", "लेनदार", "पूंजी", "नियत जमा"],
          "answer": "Creditors",
          "answer_hi": "लेनदार",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "The amount of cash withdrawn by the owner for personal use is called?",
          "question_hi": "स्वामी द्वारा व्यक्तिगत उपयोग के लिए निकाली गई नकद राशि को क्या कहा जाता है?",
          "options_en": ["Drawings", "Capital", "Expenses", "Income"],
          "options_hi": ["निकासी", "पूंजी", "व्यय", "आय"],
          "answer": "Drawings",
          "answer_hi": "निकासी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which of the following is an example of a non-current asset?",
          "question_hi": "निम्नलिखित में से कौन सा एक गैर-वर्तमान संपत्ति का उदाहरण है?",
          "options_en": ["Building", "Stock", "Debtors", "Cash"],
          "options_hi": ["भवन", "स्टॉक", "लेनदार", "नकद"],
          "answer": "Building",
          "answer_hi": "भवन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "What does the term 'Goodwill' refer to?",
          "question_hi": "'गुडविल' शब्द का क्या अर्थ है?",
          "options_en": ["Reputation of the Business", "Tangible Assets", "Intangible Assets", "None of the Above"],
          "options_hi": ["व्यवसाय की प्रतिष्ठा", "भौतिक संपत्तियाँ", "अभौतिक संपत्तियाँ", "उपरोक्त में से कोई नहीं"],
          "answer": "Reputation of the Business",
          "answer_hi": "व्यवसाय की प्रतिष्ठा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which of the following is not an example of a capital expenditure?",
          "question_hi": "निम्नलिखित में से कौन सा पूंजी व्यय का उदाहरण नहीं है?",
          "options_en": ["Purchase of Machinery", "Purchase of Land", "Payment of Wages", "Construction of Building"],
          "options_hi": ["मशीनरी की खरीद", "भूमि की खरीद", "मजदूरी का भुगतान", "भवन का निर्माण"],
          "answer": "Payment of Wages",
          "answer_hi": "मजदूरी का भुगतान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What is the effect of depreciation on financial statements?",
          "question_hi": "वित्तीय विवरणों पर अवमूल्यन का प्रभाव क्या होता है?",
          "options_en": ["Reduces Profit", "Increases Assets", "Increases Liabilities", "None of the Above"],
          "options_hi": ["लाभ को घटाता है", "संपत्ति को बढ़ाता है", "देनदारी को बढ़ाता है", "उपरोक्त में से कोई नहीं"],
          "answer": "Reduces Profit",
          "answer_hi": "लाभ को घटाता है",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is the accounting equation?",
          "question_hi": "लेखांकन समीकरण क्या है?",
          "options_en": ["Assets = Liabilities + Capital", "Assets = Capital + Revenue", "Revenue = Profit + Expenses", "None of the Above"],
          "options_hi": ["संपत्ति = देनदारी + पूंजी", "संपत्ति = पूंजी + आय", "आय = लाभ + व्यय", "उपरोक्त में से कोई नहीं"],
          "answer": "Assets = Liabilities + Capital",
          "answer_hi": "संपत्ति = देनदारी + पूंजी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which of the following is not a function of accounting?",
          "question_hi": "निम्नलिखित में से कौन सी लेखांकन का कार्य नहीं है?",
          "options_en": ["Recording Transactions", "Classifying Transactions", "Decision Making", "Summarizing Transactions"],
          "options_hi": ["लेन-देन को रिकॉर्ड करना", "लेन-देन का वर्गीकरण करना", "निर्णय लेना", "लेन-देन का सारांश तैयार करना"],
          "answer": "Decision Making",
          "answer_hi": "निर्णय लेना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which of the following accounts are classified under the personal account?",
          "question_hi": "निम्नलिखित में से कौन से खाते व्यक्तिगत खाते के तहत वर्गीकृत होते हैं?",
          "options_en": ["Sundry Creditors", "Capital Account", "Bank Account", "All of the Above"],
          "options_hi": ["संड्री क्रेडिटर्स", "पूंजी खाता", "बैंक खाता", "उपरोक्त सभी"],
          "answer": "All of the Above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which of the following is a non-operating income?",
          "question_hi": "निम्नलिखित में से कौन सी गैर-कार्यात्मक आय है?",
          "options_en": ["Interest Income", "Sales Income", "Dividend Income", "Both Interest and Dividend Income"],
          "options_hi": ["ब्याज आय", "बिक्री आय", "लाभांश आय", "ब्याज और लाभांश आय दोनों"],
          "answer": "Both Interest and Dividend Income",
          "answer_hi": "ब्याज और लाभांश आय दोनों",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "What is the purpose of preparing a trial balance?",
          "question_hi": "प्रारंभिक संतुलन तैयार करने का उद्देश्य क्या है?",
          "options_en": ["To check the accuracy of transactions", "To prepare financial statements", "To calculate net profit", "None of the Above"],
          "options_hi": ["लेन-देन की सहीता की जांच करना", "वित्तीय विवरण तैयार करना", "कुल लाभ की गणना करना", "उपरोक्त में से कोई नहीं"],
          "answer": "To check the accuracy of transactions",
          "answer_hi": "लेन-देन की सहीता की जांच करना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which of the following is an example of a contingent liability?",
          "question_hi": "निम्नलिखित में से कौन सा संभावित देनदारी का उदाहरण है?",
          "options_en": ["Bank Loan", "Bills Payable", "Guarantees", "Creditors"],
          "options_hi": ["बैंक ऋण", "बिल्स पेएबल", "गारंटी", "लेनदार"],
          "answer": "Guarantees",
          "answer_hi": "गारंटी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "What is the term used for the profit earned by a company from its main business operations?",
          "question_hi": "किस शब्द का प्रयोग एक कंपनी द्वारा उसके मुख्य व्यापार संचालन से अर्जित लाभ के लिए किया जाता है?",
          "options_en": ["Operating Profit", "Net Profit", "Gross Profit", "None of the Above"],
          "options_hi": ["संचालन लाभ", "नेट लाभ", "सकल लाभ", "उपरोक्त में से कोई नहीं"],
          "answer": "Operating Profit",
          "answer_hi": "संचालन लाभ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which of the following is a non-current liability?",
          "question_hi": "निम्नलिखित में से कौन सी गैर-वर्तमान देनदारी है?",
          "options_en": ["Debentures", "Creditors", "Bills Payable", "Outstanding Expenses"],
          "options_hi": ["डेबेंचर", "लेनदार", "बिल्स पेएबल", "बकाया खर्च"],
          "answer": "Debentures",
          "answer_hi": "डेबेंचर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which of the following is considered as a real account?",
          "question_hi": "निम्नलिखित में से कौन सा वास्तविक खाता माना जाता है?",
          "options_en": ["Bank Account", "Salaries Account", "Capital Account", "None of the Above"],
          "options_hi": ["बैंक खाता", "वेतन खाता", "पूंजी खाता", "उपरोक्त में से कोई नहीं"],
          "answer": "Bank Account",
          "answer_hi": "बैंक खाता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What is the treatment of prepaid expenses in the financial statements?",
          "question_hi": "वित्तीय विवरणों में पूर्व भुगतान किए गए खर्चों का उपचार क्या है?",
          "options_en": ["Considered as Asset", "Considered as Liability", "Considered as Revenue", "None of the Above"],
          "options_hi": ["संपत्ति के रूप में माना जाता है", "देनदारी के रूप में माना जाता है", "आय के रूप में माना जाता है", "उपरोक्त में से कोई नहीं"],
          "answer": "Considered as Asset",
          "answer_hi": "संपत्ति के रूप में माना जाता है",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which of the following is an example of an intangible asset?",
          "question_hi": "निम्नलिखित में से कौन सा एक अमूर्त संपत्ति का उदाहरण है?",
          "options_en": ["Goodwill", "Land", "Building", "Machinery"],
          "options_hi": ["गुडविल", "भूमि", "भवन", "मशीनरी"],
          "answer": "Goodwill",
          "answer_hi": "गुडविल",
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


