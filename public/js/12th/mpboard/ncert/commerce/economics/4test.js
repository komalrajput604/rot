const questions = [   
      {
        "num": 1,
        "question_en": "What does GDP stand for?",
        "question_hi": "GDP का पूरा रूप क्या है?",
        "options_en": ["Gross Domestic Product", "Gross Development Plan", "Global Domestic Product", "General Domestic Productivity"],
        "options_hi": ["सकल घरेलू उत्पाद", "सकल विकास योजना", "वैश्विक घरेलू उत्पाद", "सामान्य घरेलू उत्पादकता"],
        "answer": "Gross Domestic Product",
        "answer_hi": "सकल घरेलू उत्पाद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which of the following is a component of Aggregate Demand?",
        "question_hi": "निम्न में से कौन समग्र मांग का घटक है?",
        "options_en": ["Private Consumption", "Inflation", "Imports", "Money Supply"],
        "options_hi": ["निजी उपभोग", "मुद्रास्फीति", "आयात", "मुद्रा आपूर्ति"],
        "answer": "Private Consumption",
        "answer_hi": "निजी उपभोग",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "What is the main objective of the monetary policy?",
        "question_hi": "मौद्रिक नीति का मुख्य उद्देश्य क्या होता है?",
        "options_en": ["Control Inflation", "Increase Exports", "Reduce Imports", "Population Control"],
        "options_hi": ["मुद्रास्फीति नियंत्रित करना", "निर्यात बढ़ाना", "आयात कम करना", "जनसंख्या नियंत्रण"],
        "answer": "Control Inflation",
        "answer_hi": "मुद्रास्फीति नियंत्रित करना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which of the following is included in the capital receipts of the government?",
        "question_hi": "निम्नलिखित में से कौन सरकार की पूंजी प्राप्तियों में शामिल है?",
        "options_en": ["Loans from the public", "Interest received", "Revenue from taxes", "Grants"],
        "options_hi": ["जनता से ऋण", "ब्याज प्राप्तियां", "करों से राजस्व", "अनुदान"],
        "answer": "Loans from the public",
        "answer_hi": "जनता से ऋण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "What does inflation refer to?",
        "question_hi": "मुद्रास्फीति किसे कहते हैं?",
        "options_en": ["Rise in general price level", "Fall in employment", "Increase in exports", "Reduction in poverty"],
        "options_hi": ["सामान्य मूल्य स्तर में वृद्धि", "रोज़गार में गिरावट", "निर्यात में वृद्धि", "गरीबी में कमी"],
        "answer": "Rise in general price level",
        "answer_hi": "सामान्य मूल्य स्तर में वृद्धि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Which sector is known as the primary sector?",
        "question_hi": "कौन सा क्षेत्र प्राथमिक क्षेत्र के नाम से जाना जाता है?",
        "options_en": ["Agriculture", "Banking", "Manufacturing", "Transport"],
        "options_hi": ["कृषि", "बैंकिंग", "उत्पादन", "परिवहन"],
        "answer": "Agriculture",
        "answer_hi": "कृषि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "What is the term for income after direct taxes?",
        "question_hi": "प्रत्यक्ष करों के बाद आय को क्या कहा जाता है?",
        "options_en": ["Disposable Income", "Net Income", "Gross Income", "Capital Income"],
        "options_hi": ["व्यय योग्य आय", "शुद्ध आय", "सकल आय", "पूंजी आय"],
        "answer": "Disposable Income",
        "answer_hi": "व्यय योग्य आय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which organisation publishes the Human Development Index (HDI)?",
        "question_hi": "मानव विकास सूचकांक (HDI) कौन प्रकाशित करता है?",
        "options_en": ["UNDP", "IMF", "World Bank", "WTO"],
        "options_hi": ["यूएनडीपी", "आईएमएफ", "विश्व बैंक", "डब्ल्यूटीओ"],
        "answer": "UNDP",
        "answer_hi": "यूएनडीपी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Which one is a renewable natural resource?",
        "question_hi": "इनमें से कौन एक नवीकरणीय प्राकृतिक संसाधन है?",
        "options_en": ["Solar energy", "Coal", "Petroleum", "Natural gas"],
        "options_hi": ["सौर ऊर्जा", "कोयला", "पेट्रोलियम", "प्राकृतिक गैस"],
        "answer": "Solar energy",
        "answer_hi": "सौर ऊर्जा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "What is the main aim of economic planning in India?",
        "question_hi": "भारत में आर्थिक योजना का मुख्य उद्देश्य क्या है?",
        "options_en": ["Economic growth", "Political stability", "Cultural development", "Military power"],
        "options_hi": ["आर्थिक विकास", "राजनीतिक स्थिरता", "सांस्कृतिक विकास", "सैन्य शक्ति"],
        "answer": "Economic growth",
        "answer_hi": "आर्थिक विकास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Which index is used to measure inflation in India?",
        "question_hi": "भारत में मुद्रास्फीति मापने के लिए कौन सा सूचकांक उपयोग किया जाता है?",
        "options_en": ["Consumer Price Index", "Index of Industrial Production", "Stock Index", "Balance of Payment"],
        "options_hi": ["उपभोक्ता मूल्य सूचकांक", "औद्योगिक उत्पादन सूचकांक", "शेयर सूचकांक", "भुगतान संतुलन"],
        "answer": "Consumer Price Index",
        "answer_hi": "उपभोक्ता मूल्य सूचकांक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "What is the main source of revenue for the government?",
        "question_hi": "सरकार के राजस्व का मुख्य स्रोत क्या है?",
        "options_en": ["Taxes", "Donations", "Borrowings", "Grants"],
        "options_hi": ["कर", "दान", "उधार", "अनुदान"],
        "answer": "Taxes",
        "answer_hi": "कर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which one of the following is a fiscal tool?",
        "question_hi": "निम्नलिखित में से कौन एक राजकोषीय उपकरण है?",
        "options_en": ["Government Spending", "Open Market Operation", "Bank Rate", "Cash Reserve Ratio"],
        "options_hi": ["सरकारी व्यय", "मुक्त बाजार क्रियाएं", "बैंक दर", "नकद आरक्षित अनुपात"],
        "answer": "Government Spending",
        "answer_hi": "सरकारी व्यय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which sector is included in the service sector?",
        "question_hi": "सेवा क्षेत्र में कौन सा क्षेत्र शामिल है?",
        "options_en": ["Banking", "Agriculture", "Mining", "Fishing"],
        "options_hi": ["बैंकिंग", "कृषि", "खनन", "मछली पकड़ना"],
        "answer": "Banking",
        "answer_hi": "बैंकिंग",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Who prepares the Union Budget in India?",
        "question_hi": "भारत में केंद्रीय बजट कौन तैयार करता है?",
        "options_en": ["Ministry of Finance", "RBI", "Planning Commission", "Prime Minister Office"],
        "options_hi": ["वित्त मंत्रालय", "भारतीय रिजर्व बैंक", "योजना आयोग", "प्रधानमंत्री कार्यालय"],
        "answer": "Ministry of Finance",
        "answer_hi": "वित्त मंत्रालय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Which is not a feature of a developing economy?",
        "question_hi": "इनमें से कौन एक विकासशील अर्थव्यवस्था की विशेषता नहीं है?",
        "options_en": ["High per capita income", "High population growth", "Unemployment", "Low productivity"],
        "options_hi": ["उच्च प्रति व्यक्ति आय", "उच्च जनसंख्या वृद्धि", "बेरोजगारी", "कम उत्पादकता"],
        "answer": "High per capita income",
        "answer_hi": "उच्च प्रति व्यक्ति आय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "What is the full form of NITI Aayog?",
        "question_hi": "नीति आयोग का पूरा नाम क्या है?",
        "options_en": ["National Institution for Transforming India", "National Institute of Trade and Industry", "New Indian Technological Institute", "National Institution for Training India"],
        "options_hi": ["राष्ट्रीय भारत परिवर्तन संस्थान", "राष्ट्रीय व्यापार और उद्योग संस्थान", "नया भारतीय तकनीकी संस्थान", "राष्ट्रीय प्रशिक्षण संस्थान"],
        "answer": "National Institution for Transforming India",
        "answer_hi": "राष्ट्रीय भारत परिवर्तन संस्थान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which is an example of direct tax?",
        "question_hi": "निम्न में से कौन प्रत्यक्ष कर का उदाहरण है?",
        "options_en": ["Income Tax", "GST", "Excise Duty", "Custom Duty"],
        "options_hi": ["आय कर", "जीएसटी", "उत्पाद शुल्क", "सीमा शुल्क"],
        "answer": "Income Tax",
        "answer_hi": "आय कर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which committee suggested reforms in the tax structure of India?",
        "question_hi": "भारत की कर संरचना में सुधार हेतु किस समिति ने सुझाव दिए?",
        "options_en": ["Kelkar Committee", "Verma Committee", "Shah Committee", "Mandal Commission"],
        "options_hi": ["केलकर समिति", "वर्मा समिति", "शाह समिति", "मंडल आयोग"],
        "answer": "Kelkar Committee",
        "answer_hi": "केलकर समिति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which of the following is not a factor of production?",
        "question_hi": "निम्न में से कौन उत्पादन का कारक नहीं है?",
        "options_en": ["Money", "Land", "Labour", "Capital"],
        "options_hi": ["पैसा", "भूमि", "श्रम", "पूंजी"],
        "answer": "Money",
        "answer_hi": "पैसा",
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


