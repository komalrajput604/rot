const questions = [ 
        {
          "num": 1,
          "question_en": "What is the primary purpose of accounting?",
          "question_hi": "लेखांकन का मुख्य उद्देश्य क्या है?",
          "options_en": ["To record financial transactions", "To calculate taxes", "To manage inventory", "To prepare budgets"],
          "options_hi": ["वित्तीय लेन-देन को रिकॉर्ड करना", "करों की गणना करना", "सामग्री प्रबंधन करना", "बजट तैयार करना"],
          "answer": "To record financial transactions",
          "answer_hi": "वित्तीय लेन-देन को रिकॉर्ड करना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which of the following is not a part of the accounting equation?",
          "question_hi": "निम्नलिखित में से कौन सा लेखांकन समीकरण का हिस्सा नहीं है?",
          "options_en": ["Assets", "Liabilities", "Revenue", "Owner's Equity"],
          "options_hi": ["संपत्ति", "दायित्व", "राजस्व", "मालिक की संपत्ति"],
          "answer": "Revenue",
          "answer_hi": "राजस्व",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the main purpose of a trial balance?",
          "question_hi": "ट्रायल बैलेंस का मुख्य उद्देश्य क्या है?",
          "options_en": ["To check the accuracy of accounts", "To prepare financial statements", "To calculate net profit", "To record financial transactions"],
          "options_hi": ["खातों की शुद्धता की जांच करना", "वित्तीय विवरण तैयार करना", "निवल लाभ की गणना करना", "वित्तीय लेन-देन को रिकॉर्ड करना"],
          "answer": "To check the accuracy of accounts",
          "answer_hi": "खातों की शुद्धता की जांच करना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which of the following is classified as a current liability?",
          "question_hi": "निम्नलिखित में से कौन सा चालू दायित्व के रूप में वर्गीकृत किया जाता है?",
          "options_en": ["Accounts Payable", "Long-term Loans", "Share Capital", "Fixed Assets"],
          "options_hi": ["खातों का भुगतान", "दीर्घकालिक ऋण", "शेयर पूंजी", "स्थिर संपत्ति"],
          "answer": "Accounts Payable",
          "answer_hi": "खातों का भुगतान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which financial statement shows the financial position of a business?",
          "question_hi": "कौन सा वित्तीय विवरण एक व्यवसाय की वित्तीय स्थिति को दिखाता है?",
          "options_en": ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Statement of Retained Earnings"],
          "options_hi": ["बैलेंस शीट", "आय विवरण", "नकद प्रवाह विवरण", "बचत आय विवरण"],
          "answer": "Balance Sheet",
          "answer_hi": "बैलेंस शीट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "What is the primary objective of a partnership?",
          "question_hi": "एक साझेदारी का मुख्य उद्देश्य क्या है?",
          "options_en": ["To earn profit", "To distribute loss", "To provide employment", "To increase capital"],
          "options_hi": ["लाभ कमाना", "नुकसान वितरित करना", "रोजगार प्रदान करना", "पूंजी बढ़ाना"],
          "answer": "To earn profit",
          "answer_hi": "लाभ कमाना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which of the following accounts is classified as an asset?",
          "question_hi": "निम्नलिखित में से कौन सा खाता संपत्ति के रूप में वर्गीकृत किया जाता है?",
          "options_en": ["Accounts Payable", "Bank Loan", "Cash", "Owner's Equity"],
          "options_hi": ["खातों का भुगतान", "बैंक ऋण", "नकद", "मालिक की संपत्ति"],
          "answer": "Cash",
          "answer_hi": "नकद",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What does 'Depreciation' refer to?",
          "question_hi": "'मूल्यह्रास' किसे संदर्भित करता है?",
          "options_en": ["Decrease in asset value", "Increase in liabilities", "Increase in revenue", "Decrease in equity"],
          "options_hi": ["संपत्ति के मूल्य में कमी", "दायित्वों में वृद्धि", "राजस्व में वृद्धि", "इक्विटी में कमी"],
          "answer": "Decrease in asset value",
          "answer_hi": "संपत्ति के मूल्य में कमी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What is goodwill in accounting?",
          "question_hi": "लेखांकन में गुडविल क्या है?",
          "options_en": ["Reputation of a company", "Cash in hand", "Property", "Capital investment"],
          "options_hi": ["कंपनी की प्रतिष्ठा", "हाथ में नकद", "संपत्ति", "पूंजी निवेश"],
          "answer": "Reputation of a company",
          "answer_hi": "कंपनी की प्रतिष्ठा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is an example of an operating expense?",
          "question_hi": "ऑपरेटिंग खर्च का एक उदाहरण क्या है?",
          "options_en": ["Rent", "Investment", "Loan Repayment", "Capital Expenditure"],
          "options_hi": ["किराया", "निवेश", "ऋण चुकौती", "पूंजी व्यय"],
          "answer": "Rent",
          "answer_hi": "किराया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What is the accounting treatment for bad debts?",
          "question_hi": "खराब कर्ज के लिए लेखांकन उपचार क्या है?",
          "options_en": ["Write off as an expense", "Add to revenue", "Transfer to liability", "Record as an asset"],
          "options_hi": ["व्यय के रूप में लिखना", "राजस्व में जोड़ना", "दायित्व में स्थानांतरण", "संपत्ति के रूप में रिकॉर्ड करना"],
          "answer": "Write off as an expense",
          "answer_hi": "व्यय के रूप में लिखना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which of the following is a non-current asset?",
          "question_hi": "निम्नलिखित में से कौन सी गैर-चालू संपत्ति है?",
          "options_en": ["Land", "Cash", "Accounts Receivable", "Inventory"],
          "options_hi": ["भूमि", "नकद", "खातों से प्राप्ति", "सामग्री"],
          "answer": "Land",
          "answer_hi": "भूमि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What is the purpose of the profit and loss account?",
          "question_hi": "लाभ और हानि खाता का उद्देश्य क्या है?",
          "options_en": ["To determine net profit or loss", "To determine assets", "To record capital", "To prepare a balance sheet"],
          "options_hi": ["निवल लाभ या हानि निर्धारित करना", "संपत्तियों का निर्धारण करना", "पूंजी रिकॉर्ड करना", "बैलेंस शीट तैयार करना"],
          "answer": "To determine net profit or loss",
          "answer_hi": "निवल लाभ या हानि निर्धारित करना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which of the following is an example of a liability?",
          "question_hi": "निम्नलिखित में से कौन सा दायित्व का उदाहरण है?",
          "options_en": ["Bank Loan", "Share Capital", "Revenue", "Cash"],
          "options_hi": ["बैंक ऋण", "शेयर पूंजी", "राजस्व", "नकद"],
          "answer": "Bank Loan",
          "answer_hi": "बैंक ऋण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What is a journal entry?",
          "question_hi": "जर्नल प्रविष्टि क्या है?",
          "options_en": ["Record of financial transactions", "Summary of all accounts", "Cash flow statement", "Income statement"],
          "options_hi": ["वित्तीय लेन-देन का रिकॉर्ड", "सभी खातों का सारांश", "नकद प्रवाह विवरण", "आय विवरण"],
          "answer": "Record of financial transactions",
          "answer_hi": "वित्तीय लेन-देन का रिकॉर्ड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "What is the capital expenditure?",
          "question_hi": "पूंजी व्यय क्या है?",
          "options_en": ["Expenditure for purchasing assets", "Day-to-day expenses", "Loans and repayments", "Revenue expenditures"],
          "options_hi": ["संपत्तियों की खरीद के लिए व्यय", "दैनिक खर्चे", "ऋण और चुकौती", "राजस्व खर्चे"],
          "answer": "Expenditure for purchasing assets",
          "answer_hi": "संपत्तियों की खरीद के लिए व्यय",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "What is the meaning of 'Depreciation'?",
          "question_hi": "'मूल्यह्रास' का क्या मतलब है?",
          "options_en": ["Decrease in asset value", "Increase in liabilities", "Increase in revenue", "Decrease in equity"],
          "options_hi": ["संपत्ति के मूल्य में कमी", "दायित्वों में वृद्धि", "राजस्व में वृद्धि", "इक्विटी में कमी"],
          "answer": "Decrease in asset value",
          "answer_hi": "संपत्ति के मूल्य में कमी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "What is the purpose of creating a provision for doubtful debts?",
          "question_hi": "संदेहास्पद कर्ज के लिए प्रावधान बनाने का उद्देश्य क्या है?",
          "options_en": ["To cover the potential loss from bad debts", "To earn more profit", "To increase liabilities", "To pay tax"],
          "options_hi": ["खराब कर्ज से संभावित हानि को कवर करने के लिए", "अधिक लाभ कमाने के लिए", "दायित्व बढ़ाने के लिए", "कर चुकाने के लिए"],
          "answer": "To cover the potential loss from bad debts",
          "answer_hi": "खराब कर्ज से संभावित हानि को कवर करने के लिए",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What is the difference between capital and revenue expenditure?",
          "question_hi": "पूंजी और राजस्व व्यय में क्या अंतर है?",
          "options_en": ["Capital expenditure is for long-term assets, revenue expenditure is for day-to-day operations", "Both are used for assets", "Revenue expenditure is for fixed assets", "There is no difference"],
          "options_hi": ["पूंजी व्यय दीर्घकालिक संपत्तियों के लिए है, राजस्व व्यय दैनिक संचालन के लिए है", "दोनों संपत्तियों के लिए उपयोग किए जाते हैं", "राजस्व व्यय स्थिर संपत्तियों के लिए है", "कोई अंतर नहीं है"],
          "answer": "Capital expenditure is for long-term assets, revenue expenditure is for day-to-day operations",
          "answer_hi": "पूंजी व्यय दीर्घकालिक संपत्तियों के लिए है, राजस्व व्यय दैनिक संचालन के लिए है",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "What is an accrual?",
          "question_hi": "एक स्थगन क्या है?",
          "options_en": ["Revenue or expense recorded when incurred, not when paid", "Payment made in advance", "Revenue earned but not yet received", "Expense paid in advance"],
          "options_hi": ["राजस्व या व्यय जब हुआ तो दर्ज किया जाता है, भुगतान होने पर नहीं", "अग्रिम भुगतान किया गया", "राजस्व कमाया गया लेकिन अभी प्राप्त नहीं हुआ", "व्यय अग्रिम में भुगतान किया गया"],
          "answer": "Revenue or expense recorded when incurred, not when paid",
          "answer_hi": "राजस्व या व्यय जब हुआ तो दर्ज किया जाता है, भुगतान होने पर नहीं",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "What is an example of current liabilities?",
          "question_hi": "चालू दायित्व का एक उदाहरण क्या है?",
          "options_en": ["Accounts Payable", "Long-term Loans", "Owner's Equity", "Fixed Assets"],
          "options_hi": ["खातों का भुगतान", "दीर्घकालिक ऋण", "मालिक की संपत्ति", "स्थिर संपत्ति"],
          "answer": "Accounts Payable",
          "answer_hi": "खातों का भुगतान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "What is the meaning of an 'Operating Profit'?",
          "question_hi": "'ऑपरेटिंग लाभ' का क्या मतलब है?",
          "options_en": ["Profit from main business activities", "Profit from investments", "Profit from sale of assets", "Profit from non-core activities"],
          "options_hi": ["मुख्य व्यवसाय गतिविधियों से लाभ", "निवेश से लाभ", "संपत्तियों की बिक्री से लाभ", "गैर-मूल गतिविधियों से लाभ"],
          "answer": "Profit from main business activities",
          "answer_hi": "मुख्य व्यवसाय गतिविधियों से लाभ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "What is an example of a non-operating expense?",
          "question_hi": "गैर-ऑपरेटिंग खर्च का एक उदाहरण क्या है?",
          "options_en": ["Loss on sale of asset", "Salary expense", "Rent", "Insurance"],
          "options_hi": ["संपत्ति की बिक्री पर हानि", "वेतन खर्च", "किराया", "बीमा"],
          "answer": "Loss on sale of asset",
          "answer_hi": "संपत्ति की बिक्री पर हानि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "Which of the following is an example of revenue expenditure?",
          "question_hi": "निम्नलिखित में से कौन सा राजस्व व्यय का उदाहरण है?",
          "options_en": ["Repairs and maintenance", "Purchase of land", "Purchase of machinery", "Payment of loan"],
          "options_hi": ["मरम्मत और रखरखाव", "भूमि की खरीद", "यंत्र की खरीद", "ऋण की भुगतान"],
          "answer": "Repairs and maintenance",
          "answer_hi": "मरम्मत और रखरखाव",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "What is an example of a fixed asset?",
          "question_hi": "स्थिर संपत्ति का एक उदाहरण क्या है?",
          "options_en": ["Building", "Inventory", "Cash", "Accounts Receivable"],
          "options_hi": ["भवन", "सामग्री", "नकद", "खातों से प्राप्ति"],
          "answer": "Building",
          "answer_hi": "भवन",
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


