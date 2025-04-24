const questions = [   
  
    {
        "num": 1,
        "question_en": "What is the primary objective of business?",
        "question_hi": "व्यवसाय का प्राथमिक उद्देश्य क्या है?",
        "options_en": ["Profit maximization", "Customer satisfaction", "Expansion", "Innovation"],
        "options_hi": ["लाभ अधिकतम करना", "ग्राहक संतुष्टि", "विस्तार", "नवाचार"],
        "answer": "Profit maximization",
        "answer_hi": "लाभ अधिकतम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which of the following is a characteristic of a sole proprietorship?",
        "question_hi": "निम्नलिखित में से कौन सा एकल स्वामित्व का लक्षण है?",
        "options_en": ["Limited liability", "Unlimited liability", "Multiple owners", "Legal entity"],
        "options_hi": ["सीमित देनदारी", "असीमित देनदारी", "कई मालिक", "कानूनी व्यक्तित्व"],
        "answer": "Unlimited liability",
        "answer_hi": "असीमित देनदारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The process of starting and operating a new business is called?",
        "question_hi": "एक नया व्यवसाय शुरू करने और संचालित करने की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Entrepreneurship", "Franchising", "Merger", "Diversification"],
        "options_hi": ["उद्यमिता", "फ्रेंचाइज़िंग", "विलय", "विविधीकरण"],
        "answer": "Entrepreneurship",
        "answer_hi": "उद्यमिता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which of the following is not a feature of partnership?",
        "question_hi": "निम्नलिखित में से कौन सा साझेदारी की विशेषता नहीं है?",
        "options_en": ["Shared profits", "Mutual agency", "Unlimited liability", "Centralized control"],
        "options_hi": ["साझा लाभ", "आपसी एजेंसी", "असीमित देनदारी", "केन्द्रीकृत नियंत्रण"],
        "answer": "Centralized control",
        "answer_hi": "केन्द्रीकृत नियंत्रण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What does 'working capital' refer to in business?",
        "question_hi": "व्यवसाय में 'कार्यशील पूंजी' से क्या अभिप्रेत है?",
        "options_en": ["Fixed assets", "Current assets", "Long-term investments", "Shareholder equity"],
        "options_hi": ["स्थिर संपत्ति", "वर्तमान संपत्ति", "दीर्घकालिक निवेश", "शेयरधारक पूंजी"],
        "answer": "Current assets",
        "answer_hi": "वर्तमान संपत्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which of the following is a type of business organization?",
        "question_hi": "निम्नलिखित में से कौन सा एक प्रकार का व्यापार संगठन है?",
        "options_en": ["Corporation", "Team", "Department", "Unit"],
        "options_hi": ["कॉर्पोरेशन", "टीम", "विभाग", "इकाई"],
        "answer": "Corporation",
        "answer_hi": "कॉर्पोरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The ownership of a company is divided into shares. This type of business is known as?",
        "question_hi": "किसी कंपनी का स्वामित्व शेयरों में विभाजित होता है। इस प्रकार के व्यापार को क्या कहा जाता है?",
        "options_en": ["Partnership", "Sole Proprietorship", "Corporation", "Cooperative"],
        "options_hi": ["साझेदारी", "एकल स्वामित्व", "कॉर्पोरेशन", "सहकारी"],
        "answer": "Corporation",
        "answer_hi": "कॉर्पोरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which of the following is not a function of management?",
        "question_hi": "निम्नलिखित में से कौन सा प्रबंधन का कार्य नहीं है?",
        "options_en": ["Planning", "Organizing", "Directing", "Selling"],
        "options_hi": ["योजना बनाना", "संगठन करना", "निर्देशन करना", "बेचना"],
        "answer": "Selling",
        "answer_hi": "बेचना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which of the following is a method of business expansion?",
        "question_hi": "व्यवसाय के विस्तार का कौन सा तरीका है?",
        "options_en": ["Franchising", "Recruiting", "Delegating", "Firing"],
        "options_hi": ["फ्रेंचाइज़िंग", "भर्ती करना", "कार्य सौंपना", "नोकरी से निकालना"],
        "answer": "Franchising",
        "answer_hi": "फ्रेंचाइज़िंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the role of a manager in an organization?",
        "question_hi": "एक संगठन में प्रबंधक की भूमिका क्या होती है?",
        "options_en": ["Directing", "Investing", "Planning", "Financing"],
        "options_hi": ["निर्देशन", "निवेश", "योजना बनाना", "वित्त पोषण"],
        "answer": "Directing",
        "answer_hi": "निर्देशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "A business where profits are shared among members is called?",
        "question_hi": "एक व्यवसाय जहां लाभ सदस्यों में बांटे जाते हैं, उसे क्या कहा जाता है?",
        "options_en": ["Corporation", "Partnership", "Cooperative", "Franchise"],
        "options_hi": ["कॉर्पोरेशन", "साझेदारी", "सहकारी", "फ्रेंचाइज़ी"],
        "answer": "Cooperative",
        "answer_hi": "सहकारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the legal status of a partnership?",
        "question_hi": "साझेदारी की कानूनी स्थिति क्या है?",
        "options_en": ["Separate legal entity", "No legal entity", "Partnership deed", "Firm registration"],
        "options_hi": ["अलग कानूनी व्यक्तित्व", "कोई कानूनी व्यक्तित्व नहीं", "साझेदारी विलेख", "फर्म पंजीकरण"],
        "answer": "No legal entity",
        "answer_hi": "कोई कानूनी व्यक्तित्व नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which of the following is an example of a fixed cost in business?",
        "question_hi": "व्यवसाय में निम्नलिखित में से कौन सा एक स्थिर लागत का उदाहरण है?",
        "options_en": ["Rent", "Raw materials", "Commissions", "Sales tax"],
        "options_hi": ["किराया", "कच्चा माल", "कमीशन", "विक्रय कर"],
        "answer": "Rent",
        "answer_hi": "किराया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the meaning of 'working capital'?",
        "question_hi": "'कार्यशील पूंजी' का क्या अर्थ है?",
        "options_en": ["Capital for investment", "Short-term capital", "Long-term investment", "Retained earnings"],
        "options_hi": ["निवेश के लिए पूंजी", "लघु अवधि की पूंजी", "दीर्घकालिक निवेश", "संवर्धित आय"],
        "answer": "Short-term capital",
        "answer_hi": "लघु अवधि की पूंजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Who is the founder of Microsoft?",
        "question_hi": "माइक्रोसॉफ़्ट के संस्थापक कौन हैं?",
        "options_en": ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Larry Page"],
        "options_hi": ["बिल गेट्स", "स्टीव जॉब्स", "मार्क जुकरबर्ग", "लैरी पेज"],
        "answer": "Bill Gates",
        "answer_hi": "बिल गेट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The concept of division of labor was introduced by?",
        "question_hi": "श्रम विभाजन की अवधारणा किसने प्रस्तुत की थी?",
        "options_en": ["Adam Smith", "Karl Marx", "Henry Ford", "Max Weber"],
        "options_hi": ["आदम स्मिथ", "कॉल मार्क्स", "हेनरी फोर्ड", "मैक्स वेबर"],
        "answer": "Adam Smith",
        "answer_hi": "आदम स्मिथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which of the following is a source of external finance?",
        "question_hi": "निम्नलिखित में से कौन सा बाहरी वित्त का स्रोत है?",
        "options_en": ["Share capital", "Retained earnings", "Depreciation", "Cash reserves"],
        "options_hi": ["शेयर पूंजी", "संवर्धित आय", "मूल्यह्रास", "नकद आरक्षित"],
        "answer": "Share capital",
        "answer_hi": "शेयर पूंजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which of the following is an example of a partnership business?",
        "question_hi": "निम्नलिखित में से कौन सा साझेदारी व्यापार का उदाहरण है?",
        "options_en": ["Law firm", "Restaurant", "Supermarket", "Manufacturing plant"],
        "options_hi": ["कानूनी फर्म", "रेस्तरां", "सुपरमार्केट", "निर्माण संयंत्र"],
        "answer": "Law firm",
        "answer_hi": "कानूनी फर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which of the following is not an element of business environment?",
        "question_hi": "निम्नलिखित में से कौन सा व्यापार पर्यावरण का तत्व नहीं है?",
        "options_en": ["Political environment", "Economic environment", "Technological environment", "Legal environment"],
        "options_hi": ["राजनीतिक पर्यावरण", "आर्थिक पर्यावरण", "प्रौद्योगिकीय पर्यावरण", "कानूनी पर्यावरण"],
        "answer": "Legal environment",
        "answer_hi": "कानूनी पर्यावरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The primary goal of marketing is?",
        "question_hi": "विपणन का मुख्य उद्देश्य क्या है?",
        "options_en": ["Increase sales", "Increase brand awareness", "Customer satisfaction", "Product diversification"],
        "options_hi": ["बिक्री बढ़ाना", "ब्रांड जागरूकता बढ़ाना", "ग्राहक संतुष्टि", "उत्पाद विविधीकरण"],
        "answer": "Customer satisfaction",
        "answer_hi": "ग्राहक संतुष्टि",
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


