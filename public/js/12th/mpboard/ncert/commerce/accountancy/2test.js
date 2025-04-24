const questions = [ 
        {
            "num": 1,
            "question_en": "Which of the following is not a branch of accounting?",
            "question_hi": "निम्नलिखित में से कौन सा लेखांकन की शाखा नहीं है?",
            "options_en": ["Financial Accounting", "Cost Accounting", "Management Accounting", "Marketing Accounting"],
            "options_hi": ["वित्तीय लेखांकन", "लागत लेखांकन", "प्रबंधन लेखांकन", "विपणन लेखांकन"],
            "answer": "Marketing Accounting",
            "answer_hi": "विपणन लेखांकन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "Which of the following is a characteristic of a partnership firm?",
            "question_hi": "निम्नलिखित में से कौन सा साझेदारी फर्म की विशेषता है?",
            "options_en": ["Limited liability", "Unlimited liability", "Both A and B", "None of the above"],
            "options_hi": ["सीमित जिम्मेदारी", "असीमित जिम्मेदारी", "दोनों A और B", "उपरोक्त में से कोई नहीं"],
            "answer": "Unlimited liability",
            "answer_hi": "असीमित जिम्मेदारी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "What does the term 'Balance Sheet' represent?",
            "question_hi": "'बैलेंस शीट' शब्द का क्या अर्थ है?",
            "options_en": ["Financial position of a business", "Profit and loss statement", "Cash flow statement", "Stock valuation"],
            "options_hi": ["व्यवसाय की वित्तीय स्थिति", "लाभ और हानि विवरण", "नकदी प्रवाह विवरण", "स्टॉक मूल्यांकन"],
            "answer": "Financial position of a business",
            "answer_hi": "व्यवसाय की वित्तीय स्थिति",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "Which of the following is an example of a non-cash item in the profit and loss account?",
            "question_hi": "निम्नलिखित में से कौन सा लाभ और हानि खाते में एक गैर-नकद आइटम का उदाहरण है?",
            "options_en": ["Depreciation", "Wages", "Rent", "Interest on loan"],
            "options_hi": ["मूल्यह्रास", "मजदूरी", "किराया", "ऋण पर ब्याज"],
            "answer": "Depreciation",
            "answer_hi": "मूल्यह्रास",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "The capital of a sole proprietorship is contributed by?",
            "question_hi": "एकल स्वामित्व की पूंजी में योगदान किसका होता है?",
            "options_en": ["The government", "The owner", "Shareholders", "Partners"],
            "options_hi": ["सरकार", "मालिक", "शेयरधारक", "साझेदार"],
            "answer": "The owner",
            "answer_hi": "मालिक",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 6,
            "question_en": "What is the formula for calculating working capital?",
            "question_hi": "कार्यशील पूंजी की गणना का सूत्र क्या है?",
            "options_en": ["Current Assets - Current Liabilities", "Current Liabilities - Current Assets", "Fixed Assets - Current Liabilities", "Fixed Assets - Current Assets"],
            "options_hi": ["वर्तमान संपत्तियाँ - वर्तमान देनदारियाँ", "वर्तमान देनदारियाँ - वर्तमान संपत्तियाँ", "स्थिर संपत्तियाँ - वर्तमान देनदारियाँ", "स्थिर संपत्तियाँ - वर्तमान संपत्तियाँ"],
            "answer": "Current Assets - Current Liabilities",
            "answer_hi": "वर्तमान संपत्तियाँ - वर्तमान देनदारियाँ",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 7,
            "question_en": "What is the primary objective of financial accounting?",
            "question_hi": "वित्तीय लेखांकन का प्राथमिक उद्देश्य क्या है?",
            "options_en": ["To calculate profit", "To maintain cash flow", "To prepare financial statements", "To manage resources"],
            "options_hi": ["लाभ की गणना करना", "नकदी प्रवाह बनाए रखना", "वित्तीय विवरण तैयार करना", "संसाधनों का प्रबंधन करना"],
            "answer": "To prepare financial statements",
            "answer_hi": "वित्तीय विवरण तैयार करना",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 8,
            "question_en": "The process of determining the value of an asset is called?",
            "question_hi": "संपत्ति के मूल्य निर्धारण की प्रक्रिया को क्या कहा जाता है?",
            "options_en": ["Valuation", "Depreciation", "Amortization", "Capitalization"],
            "options_hi": ["मूल्यांकन", "मूल्यह्रास", "संपत्ति मूल्य ह्रास", "पूंजीकरण"],
            "answer": "Valuation",
            "answer_hi": "मूल्यांकन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 9,
            "question_en": "Which of the following is an example of fixed assets?",
            "question_hi": "निम्नलिखित में से कौन सा स्थिर संपत्तियों का उदाहरण है?",
            "options_en": ["Cash", "Machinery", "Accounts Receivable", "Inventories"],
            "options_hi": ["नकद", "मशीनरी", "लेखा प्राप्तियां", "भंडार"],
            "answer": "Machinery",
            "answer_hi": "मशीनरी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 10,
            "question_en": "Which of the following statements is true about a company?",
            "question_hi": "कंपनी के बारे में निम्नलिखित में से कौन सा कथन सही है?",
            "options_en": ["It has unlimited liability", "It has limited liability", "It is governed by government", "It has no legal status"],
            "options_hi": ["इसकी असीमित जिम्मेदारी होती है", "इसकी सीमित जिम्मेदारी होती है", "इसे सरकार द्वारा शासित किया जाता है", "इसका कोई कानूनी दर्जा नहीं होता है"],
            "answer": "It has limited liability",
            "answer_hi": "इसकी सीमित जिम्मेदारी होती है",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 11,
            "question_en": "What is the name of the account used to record non-cash transactions?",
            "question_hi": "गैर-नकद लेन-देन को रिकॉर्ड करने के लिए उपयोग किए जाने वाले खाते का नाम क्या है?",
            "options_en": ["Nominal Account", "Personal Account", "Real Account", "None of the above"],
            "options_hi": ["नाममात्र खाता", "व्यक्तिगत खाता", "वास्तविक खाता", "उपरोक्त में से कोई नहीं"],
            "answer": "Nominal Account",
            "answer_hi": "नाममात्र खाता",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 12,
            "question_en": "Which of the following is not considered as a financial statement?",
            "question_hi": "निम्नलिखित में से किसे वित्तीय विवरण के रूप में नहीं माना जाता है?",
            "options_en": ["Balance Sheet", "Profit and Loss Account", "Cash Flow Statement", "Trial Balance"],
            "options_hi": ["बैलेंस शीट", "लाभ और हानि खाता", "नकदी प्रवाह विवरण", "परीक्षण संतुलन"],
            "answer": "Trial Balance",
            "answer_hi": "परीक्षण संतुलन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 13,
            "question_en": "What is the purpose of preparing a trial balance?",
            "question_hi": "परीक्षण संतुलन तैयार करने का उद्देश्य क्या है?",
            "options_en": ["To calculate net profit", "To check the arithmetical accuracy of accounts", "To record transactions", "To prepare financial statements"],
            "options_hi": ["निवल लाभ की गणना करना", "लेखों की अंकगणितीय सहीता जांचना", "लेन-देन को रिकॉर्ड करना", "वित्तीय विवरण तैयार करना"],
            "answer": "To check the arithmetical accuracy of accounts",
            "answer_hi": "लेखों की अंकगणितीय सहीता जांचना",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 14,
            "question_en": "The accounting principle that states 'Revenue is recognized when earned' is known as?",
            "question_hi": "लेखांकन सिद्धांत जो कहता है 'आय को तब मान्यता प्राप्त होती है जब यह अर्जित हो' को क्या कहा जाता है?",
            "options_en": ["Matching Principle", "Accrual Principle", "Revenue Recognition Principle", "Consistency Principle"],
            "options_hi": ["मेल सिद्धांत", "अधिकार सिद्धांत", "आय मान्यता सिद्धांत", "संगतता सिद्धांत"],
            "answer": "Revenue Recognition Principle",
            "answer_hi": "आय मान्यता सिद्धांत",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 15,
            "question_en": "Which of the following is a temporary account?",
            "question_hi": "निम्नलिखित में से कौन सा अस्थायी खाता है?",
            "options_en": ["Cash Account", "Capital Account", "Sales Account", "Accounts Payable"],
            "options_hi": ["नकद खाता", "पूंजी खाता", "बिक्री खाता", "खातों में देय"],
            "answer": "Sales Account",
            "answer_hi": "बिक्री खाता",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 16,
            "question_en": "What is the main purpose of a cash flow statement?",
            "question_hi": "नकदी प्रवाह विवरण का मुख्य उद्देश्य क्या है?",
            "options_en": ["To show the net profit", "To show the financial position", "To show the liquidity of a company", "To show the expenses of a company"],
            "options_hi": ["निवल लाभ दिखाने के लिए", "वित्तीय स्थिति दिखाने के लिए", "कंपनी की तरलता दिखाने के लिए", "कंपनी के खर्चे दिखाने के लिए"],
            "answer": "To show the liquidity of a company",
            "answer_hi": "कंपनी की तरलता दिखाने के लिए",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "Which of the following is an example of an intangible asset?",
            "question_hi": "निम्नलिखित में से कौन सा अमूर्त संपत्ति का उदाहरण है?",
            "options_en": ["Buildings", "Patents", "Machinery", "Furniture"],
            "options_hi": ["भवन", "पेटेंट", "मशीनरी", "फर्नीचर"],
            "answer": "Patents",
            "answer_hi": "पेटेंट",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "Which of the following is an example of a current liability?",
            "question_hi": "निम्नलिखित में से कौन सा वर्तमान देनदारी का उदाहरण है?",
            "options_en": ["Short-term loan", "Long-term debt", "Share capital", "Fixed assets"],
            "options_hi": ["कम समय अवधि का ऋण", "दीर्घकालिक ऋण", "शेयर पूंजी", "स्थिर संपत्तियाँ"],
            "answer": "Short-term loan",
            "answer_hi": "कम समय अवधि का ऋण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "What does the term 'Goodwill' refer to?",
            "question_hi": "'गुडविल' शब्द किसे संदर्भित करता है?",
            "options_en": ["Intangible asset", "Tangible asset", "Liability", "Revenue"],
            "options_hi": ["अमूर्त संपत्ति", "भौतिक संपत्ति", "दायित्व", "आय"],
            "answer": "Intangible asset",
            "answer_hi": "अमूर्त संपत्ति",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "What is the rule for debiting and crediting in a personal account?",
            "question_hi": "व्यक्तिगत खाते में डेबिट और क्रेडिट करने का नियम क्या है?",
            "options_en": ["Debit the receiver, credit the giver", "Debit the giver, credit the receiver", "Debit all expenses, credit all incomes", "Debit all assets, credit all liabilities"],
            "options_hi": ["प्राप्तकर्ता को डेबिट करें, देने वाले को क्रेडिट करें", "देने वाले को डेबिट करें, प्राप्तकर्ता को क्रेडिट करें", "सभी खर्चों को डेबिट करें, सभी आयों को क्रेडिट करें", "सभी संपत्तियों को डेबिट करें, सभी देनदारियों को क्रेडिट करें"],
            "answer": "Debit the receiver, credit the giver",
            "answer_hi": "प्राप्तकर्ता को डेबिट करें, देने वाले को क्रेडिट करें",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 21,
            "question_en": "What is the process of preparing an income statement?",
            "question_hi": "आय विवरण तैयार करने की प्रक्रिया क्या है?",
            "options_en": ["Revenue - Expenses", "Assets - Liabilities", "Receipts - Payments", "Capital + Profit"],
            "options_hi": ["आय - खर्च", "संपत्ति - देनदारियाँ", "प्राप्तियाँ - भुगतान", "पूंजी + लाभ"],
            "answer": "Revenue - Expenses",
            "answer_hi": "आय - खर्च",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 22,
            "question_en": "Which account shows the results of a business's operations?",
            "question_hi": "कौन सा खाता एक व्यवसाय के संचालन के परिणाम को दिखाता है?",
            "options_en": ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Shareholders' Equity"],
            "options_hi": ["बैलेंस शीट", "आय विवरण", "नकदी प्रवाह विवरण", "शेयरधारकों की पूंजी"],
            "answer": "Income Statement",
            "answer_hi": "आय विवरण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 23,
            "question_en": "Which of the following is the basis for recognizing revenue?",
            "question_hi": "आय को मान्यता देने के लिए निम्नलिखित में से क्या आधार है?",
            "options_en": ["Accrual Principle", "Matching Principle", "Revenue Recognition Principle", "Going Concern Principle"],
            "options_hi": ["अधिकार सिद्धांत", "मेल सिद्धांत", "आय मान्यता सिद्धांत", "जारी चिंता सिद्धांत"],
            "answer": "Revenue Recognition Principle",
            "answer_hi": "आय मान्यता सिद्धांत",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 24,
            "question_en": "Which of the following accounts is not part of a company's equity?",
            "question_hi": "निम्नलिखित में से कौन सा खाता कंपनी की पूंजी का हिस्सा नहीं है?",
            "options_en": ["Retained Earnings", "Share Capital", "Long-term Debts", "Reserves"],
            "options_hi": ["रिटेन्ड अर्निंग्स", "शेयर पूंजी", "दीर्घकालिक ऋण", "रिजर्व"],
            "answer": "Long-term Debts",
            "answer_hi": "दीर्घकालिक ऋण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 25,
            "question_en": "What is the purpose of preparing a bank reconciliation statement?",
            "question_hi": "बैंक सुलह विवरण तैयार करने का उद्देश्य क्या है?",
            "options_en": ["To calculate net profit", "To match cash records", "To calculate taxes", "To calculate interest on loans"],
            "options_hi": ["निवल लाभ की गणना करना", "नकदी रिकॉर्ड मिलाना", "करों की गणना करना", "ऋण पर ब्याज की गणना करना"],
            "answer": "To match cash records",
            "answer_hi": "नकदी रिकॉर्ड मिलाना",
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


