const questions = [  
    {
      "num": 1,
      "question_en": "Who is known as the father of scientific management?",
      "question_hi": "वैज्ञानिक प्रबंधन के जनक के रूप में किसे जाना जाता है?",
      "options_en": ["Henry Fayol", "F.W. Taylor", "Peter Drucker", "Elton Mayo"],
      "options_hi": ["हेनरी फेयोल", "एफ. डब्ल्यू. टेलर", "पीटर ड्रकर", "एल्टन मेयो"],
      "answer": "F.W. Taylor",
      "answer_hi": "एफ. डब्ल्यू. टेलर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Which principle of management promotes specialization?",
      "question_hi": "प्रबंधन का कौन सा सिद्धांत विशेषज्ञता को बढ़ावा देता है?",
      "options_en": ["Discipline", "Unity of command", "Division of work", "Scalar chain"],
      "options_hi": ["अनुशासन", "आदेश की एकता", "कार्य का विभाजन", "स्केलर श्रृंखला"],
      "answer": "Division of work",
      "answer_hi": "कार्य का विभाजन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Which test is not used in selection process?",
      "question_hi": "चयन प्रक्रिया में निम्न में से कौन सा परीक्षण प्रयोग में नहीं लिया जाता है?",
      "options_en": ["Trade test", "Personality test", "Medical test", "Unit test"],
      "options_hi": ["व्यवसायिक परीक्षण", "व्यक्तित्व परीक्षण", "चिकित्सा परीक्षण", "यूनिट परीक्षण"],
      "answer": "Unit test",
      "answer_hi": "यूनिट परीक्षण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Which of the following is an element of directing?",
      "question_hi": "निम्न में से कौन निर्देशन का एक तत्व है?",
      "options_en": ["Motivation", "Planning", "Organising", "Controlling"],
      "options_hi": ["प्रेरणा", "योजनाबद्धता", "संगठन", "नियंत्रण"],
      "answer": "Motivation",
      "answer_hi": "प्रेरणा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Which financial decision relates to raising funds?",
      "question_hi": "कौन सा वित्तीय निर्णय निधियों को जुटाने से संबंधित है?",
      "options_en": ["Investment decision", "Financing decision", "Dividend decision", "Budgeting decision"],
      "options_hi": ["निवेश निर्णय", "वित्तपोषण निर्णय", "लाभांश निर्णय", "बजट निर्णय"],
      "answer": "Financing decision",
      "answer_hi": "वित्तपोषण निर्णय",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Which concept of marketing focuses on the needs of the consumer?",
      "question_hi": "विपणन की कौन सी अवधारणा उपभोक्ता की आवश्यकताओं पर ध्यान केंद्रित करती है?",
      "options_en": ["Production concept", "Product concept", "Selling concept", "Marketing concept"],
      "options_hi": ["उत्पादन अवधारणा", "उत्पाद अवधारणा", "विक्रय अवधारणा", "विपणन अवधारणा"],
      "answer": "Marketing concept",
      "answer_hi": "विपणन अवधारणा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "‘Right person for the right job’ is ensured through:",
      "question_hi": "‘सही व्यक्ति को सही काम’ किसके माध्यम से सुनिश्चित किया जाता है?",
      "options_en": ["Planning", "Staffing", "Directing", "Controlling"],
      "options_hi": ["योजना", "स्टाफिंग", "निर्देशन", "नियंत्रण"],
      "answer": "Staffing",
      "answer_hi": "स्टाफिंग",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Which document is used to invite public to buy shares?",
      "question_hi": "शेयर खरीदने के लिए जनता को आमंत्रित करने हेतु किस दस्तावेज़ का उपयोग किया जाता है?",
      "options_en": ["Memorandum of Association", "Articles of Association", "Prospectus", "Share certificate"],
      "options_hi": ["स्मृति पत्र", "नियमावली", "प्रॉस्पेक्टस", "शेयर प्रमाणपत्र"],
      "answer": "Prospectus",
      "answer_hi": "प्रॉस्पेक्टस",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Which one is not a consumer right under the Consumer Protection Act?",
      "question_hi": "उपभोक्ता संरक्षण अधिनियम के तहत निम्न में से कौन उपभोक्ता का अधिकार नहीं है?",
      "options_en": ["Right to safety", "Right to be informed", "Right to vote", "Right to seek redressal"],
      "options_hi": ["सुरक्षा का अधिकार", "सूचित किए जाने का अधिकार", "मतदान का अधिकार", "निवारण का अधिकार"],
      "answer": "Right to vote",
      "answer_hi": "मतदान का अधिकार",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Which one is not a method of on-the-job training?",
      "question_hi": "निम्न में से कौन-सा ऑन-द-जॉब प्रशिक्षण का तरीका नहीं है?",
      "options_en": ["Apprenticeship", "Coaching", "Vestibule training", "Internship"],
      "options_hi": ["शिक्षुता", "प्रशिक्षण", "वेस्टिब्यूल प्रशिक्षण", "इंटर्नशिप"],
      "answer": "Vestibule training",
      "answer_hi": "वेस्टिब्यूल प्रशिक्षण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "Which is not a function of financial management?",
      "question_hi": "निम्नलिखित में से कौन वित्तीय प्रबंधन का कार्य नहीं है?",
      "options_en": ["Investment decision", "Financing decision", "Auditing", "Dividend decision"],
      "options_hi": ["निवेश निर्णय", "वित्तपोषण निर्णय", "ऑडिटिंग", "लाभांश निर्णय"],
      "answer": "Auditing",
      "answer_hi": "ऑडिटिंग",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "Which one is not a component of product mix?",
      "question_hi": "निम्न में से कौन उत्पाद मिश्रण का घटक नहीं है?",
      "options_en": ["Product", "Price", "Promotion", "Planning"],
      "options_hi": ["उत्पाद", "मूल्य", "प्रमोशन", "योजना"],
      "answer": "Planning",
      "answer_hi": "योजना",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "Which step in staffing involves placing the selected candidate on the job?",
      "question_hi": "स्टाफिंग की किस प्रक्रिया में चयनित उम्मीदवार को कार्य पर नियुक्त किया जाता है?",
      "options_en": ["Training", "Recruitment", "Selection", "Placement"],
      "options_hi": ["प्रशिक्षण", "भर्ती", "चयन", "नियोजन"],
      "answer": "Placement",
      "answer_hi": "नियोजन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Which function of management includes ‘supervision’?",
      "question_hi": "प्रबंधन का कौन सा कार्य 'पर्यवेक्षण' को शामिल करता है?",
      "options_en": ["Planning", "Directing", "Organising", "Staffing"],
      "options_hi": ["योजना", "निर्देशन", "संगठन", "स्टाफिंग"],
      "answer": "Directing",
      "answer_hi": "निर्देशन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "Which one is not a quality of a good leader?",
      "question_hi": "अच्छे नेता की निम्न में से कौन-सी विशेषता नहीं है?",
      "options_en": ["Integrity", "Confidence", "Biasness", "Communication"],
      "options_hi": ["ईमानदारी", "आत्मविश्वास", "पक्षपात", "संचार"],
      "answer": "Biasness",
      "answer_hi": "पक्षपात",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "Which is not included in 4Ps of marketing?",
      "question_hi": "विपणन के 4Ps में से कौन शामिल नहीं है?",
      "options_en": ["Product", "Price", "Policy", "Promotion"],
      "options_hi": ["उत्पाद", "मूल्य", "नीति", "प्रमोशन"],
      "answer": "Policy",
      "answer_hi": "नीति",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "Which consumer right allows you to get compensation for loss or injury?",
      "question_hi": "उपभोक्ता का कौन सा अधिकार हानि या चोट के लिए मुआवजा प्राप्त करने की अनुमति देता है?",
      "options_en": ["Right to choose", "Right to safety", "Right to seek redressal", "Right to information"],
      "options_hi": ["चयन का अधिकार", "सुरक्षा का अधिकार", "निवारण पाने का अधिकार", "सूचना पाने का अधिकार"],
      "answer": "Right to seek redressal",
      "answer_hi": "निवारण पाने का अधिकार",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "Which technique of scientific management deals with specialization?",
      "question_hi": "वैज्ञानिक प्रबंधन की कौन सी तकनीक विशेषज्ञता से संबंधित है?",
      "options_en": ["Motion Study", "Time Study", "Functional Foremanship", "Standardization"],
      "options_hi": ["गति अध्ययन", "समय अध्ययन", "कार्यात्मक फोरमैनशिप", "मानकीकरण"],
      "answer": "Functional Foremanship",
      "answer_hi": "कार्यात्मक फोरमैनशिप",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Which component of marketing mix involves decisions related to labeling?",
      "question_hi": "विपणन मिश्रण का कौन सा घटक लेबलिंग से संबंधित निर्णयों को शामिल करता है?",
      "options_en": ["Product", "Price", "Place", "Promotion"],
      "options_hi": ["उत्पाद", "मूल्य", "स्थान", "प्रमोशन"],
      "answer": "Product",
      "answer_hi": "उत्पाद",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "Which principle of Fayol states ‘One boss for one employee’?",
      "question_hi": "फेयोल का कौन सा सिद्धांत कहता है 'एक कर्मचारी के लिए एक बॉस'?",
      "options_en": ["Unity of Direction", "Unity of Command", "Equity", "Initiative"],
      "options_hi": ["दिशा की एकता", "आदेश की एकता", "समानता", "पहल"],
      "answer": "Unity of Command",
      "answer_hi": "आदेश की एकता",
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


