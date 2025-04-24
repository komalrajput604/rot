const questions = [ 

        {
          "num": 1,
          "question_en": "Who was the founder of the Maurya Empire?",
          "question_hi": "मौर्य साम्राज्य के संस्थापक कौन थे?",
          "options_en": ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"],
          "options_hi": ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "बिंबिसार"],
          "answer": "Chandragupta Maurya",
          "answer_hi": "चंद्रगुप्त मौर्य",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Who wrote 'Arthashastra'?",
          "question_hi": "'अर्थशास्त्र' किसने लिखा?",
          "options_en": ["Chanakya", "Kalidasa", "Patanjali", "Tulsidas"],
          "options_hi": ["चाणक्य", "कालिदास", "पतंजलि", "तुलसीदास"],
          "answer": "Chanakya",
          "answer_hi": "चाणक्य",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Who was the first Sultan of Delhi?",
          "question_hi": "दिल्ली का पहला सुल्तान कौन था?",
          "options_en": ["Alauddin Khilji", "Qutb-ud-din Aibak", "Iltutmish", "Balban"],
          "options_hi": ["अलाउद्दीन खिलजी", "कुतुब-उद-दीन ऐबक", "इल्तुतमिश", "बलबन"],
          "answer": "Qutb-ud-din Aibak",
          "answer_hi": "कुतुब-उद-दीन ऐबक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Who built the Qutub Minar?",
          "question_hi": "कुतुब मीनार किसने बनवाई थी?",
          "options_en": ["Qutb-ud-din Aibak", "Iltutmish", "Alauddin Khilji", "Firoz Shah Tughlaq"],
          "options_hi": ["कुतुब-उद-दीन ऐबक", "इल्तुतमिश", "अलाउद्दीन खिलजी", "फिरोज शाह तुगलक"],
          "answer": "Qutb-ud-din Aibak",
          "answer_hi": "कुतुब-उद-दीन ऐबक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which Mughal emperor built the Taj Mahal?",
          "question_hi": "ताज महल किस मुगल सम्राट ने बनवाया?",
          "options_en": ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
          "options_hi": ["बाबर", "अकबर", "शाहजहाँ", "औरंगजेब"],
          "answer": "Shah Jahan",
          "answer_hi": "शाहजहाँ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Who was the last Governor-General of independent India?",
          "question_hi": "स्वतंत्र भारत के अंतिम गवर्नर जनरल कौन थे?",
          "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Rajendra Prasad"],
          "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "राजेन्द्र प्रसाद"],
          "answer": "C. Rajagopalachari",
          "answer_hi": "सी. राजगोपालाचारी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "In which year did the Revolt of 1857 take place?",
          "question_hi": "1857 की क्रांति किस वर्ष हुई थी?",
          "options_en": ["1847", "1857", "1867", "1877"],
          "options_hi": ["1847", "1857", "1867", "1877"],
          "answer": "1857",
          "answer_hi": "1857",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Who was the leader of the 1857 revolt in Kanpur?",
          "question_hi": "1857 की क्रांति में कानपुर का नेतृत्व किसने किया?",
          "options_en": ["Bahadur Shah Zafar", "Nana Sahib", "Tantia Tope", "Rani Laxmi Bai"],
          "options_hi": ["बहादुर शाह ज़फर", "नाना साहब", "तात्या टोपे", "रानी लक्ष्मीबाई"],
          "answer": "Nana Sahib",
          "answer_hi": "नाना साहब",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Who founded the Arya Samaj?",
          "question_hi": "आर्य समाज की स्थापना किसने की?",
          "options_en": ["Raja Ram Mohan Roy", "Swami Dayanand Saraswati", "Swami Vivekananda", "Ishwar Chandra Vidyasagar"],
          "options_hi": ["राजा राम मोहन राय", "स्वामी दयानंद सरस्वती", "स्वामी विवेकानंद", "ईश्वर चंद्र विद्यासागर"],
          "answer": "Swami Dayanand Saraswati",
          "answer_hi": "स्वामी दयानंद सरस्वती",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "When was the Indian National Congress formed?",
          "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
          "options_en": ["1885", "1890", "1905", "1920"],
          "options_hi": ["1885", "1890", "1905", "1920"],
          "answer": "1885",
          "answer_hi": "1885",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Who was the first President of Indian National Congress?",
          "question_hi": "भारतीय राष्ट्रीय कांग्रेस के पहले अध्यक्ष कौन थे?",
          "options_en": ["Dadabhai Naoroji", "W.C. Bonnerjee", "Mahatma Gandhi", "S.N. Banerjee"],
          "options_hi": ["दादाभाई नौरोजी", "डब्ल्यू.सी. बनर्जी", "महात्मा गांधी", "एस.एन. बनर्जी"],
          "answer": "W.C. Bonnerjee",
          "answer_hi": "डब्ल्यू.सी. बनर्जी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Who introduced the Doctrine of Lapse?",
          "question_hi": "डॉक्ट्रिन ऑफ लैप्स किसने लागू किया?",
          "options_en": ["Lord Dalhousie", "Lord Canning", "Lord Curzon", "Lord Wellesley"],
          "options_hi": ["लॉर्ड डलहौजी", "लॉर्ड कैनिंग", "लॉर्ड कर्जन", "लॉर्ड वेलेजली"],
          "answer": "Lord Dalhousie",
          "answer_hi": "लॉर्ड डलहौजी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Where was the first session of Indian National Congress held?",
          "question_hi": "भारतीय राष्ट्रीय कांग्रेस का पहला अधिवेशन कहाँ हुआ था?",
          "options_en": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
          "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
          "answer": "Mumbai",
          "answer_hi": "मुंबई",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which movement was launched in 1942?",
          "question_hi": "1942 में कौन सा आंदोलन शुरू हुआ?",
          "options_en": ["Non-Cooperation", "Khilafat", "Civil Disobedience", "Quit India"],
          "options_hi": ["असहयोग", "खिलाफत", "सविनय अवज्ञा", "भारत छोड़ो"],
          "answer": "Quit India",
          "answer_hi": "भारत छोड़ो",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Who gave the slogan 'Do or Die'?",
          "question_hi": "'करो या मरो' का नारा किसने दिया?",
          "options_en": ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
          "options_hi": ["जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "महात्मा गांधी", "भगत सिंह"],
          "answer": "Mahatma Gandhi",
          "answer_hi": "महात्मा गांधी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Who was the founder of the Mughal Empire?",
          "question_hi": "मुगल साम्राज्य के संस्थापक कौन थे?",
          "options_en": ["Akbar", "Babur", "Humayun", "Jahangir"],
          "options_hi": ["अकबर", "बाबर", "हुमायूँ", "जहाँगीर"],
          "answer": "Babur",
          "answer_hi": "बाबर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Where did Buddha attain enlightenment?",
          "question_hi": "बुद्ध को ज्ञान की प्राप्ति कहाँ हुई थी?",
          "options_en": ["Sarnath", "Kushinagar", "Lumbini", "Bodh Gaya"],
          "options_hi": ["सारनाथ", "कुशीनगर", "लुंबिनी", "बोधगया"],
          "answer": "Bodh Gaya",
          "answer_hi": "बोधगया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Who was the leader of Azad Hind Fauj?",
          "question_hi": "आज़ाद हिंद फौज के नेता कौन थे?",
          "options_en": ["Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh", "Sardar Patel"],
          "options_hi": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "सरदार पटेल"],
          "answer": "Subhas Chandra Bose",
          "answer_hi": "सुभाष चंद्र बोस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Who wrote the book 'Discovery of India'?",
          "question_hi": "'डिस्कवरी ऑफ इंडिया' पुस्तक किसने लिखी?",
          "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Dr. B.R. Ambedkar", "S. Radhakrishnan"],
          "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "डॉ. बी.आर. अंबेडकर", "एस. राधाकृष्णन"],
          "answer": "Jawaharlal Nehru",
          "answer_hi": "जवाहरलाल नेहरू",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Who was the first Prime Minister of India?",
          "question_hi": "भारत के पहले प्रधानमंत्री कौन थे?",
          "options_en": ["Sardar Patel", "Mahatma Gandhi", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
          "options_hi": ["सरदार पटेल", "महात्मा गांधी", "जवाहरलाल नेहरू", "डॉ. राजेन्द्र प्रसाद"],
          "answer": "Jawaharlal Nehru",
          "answer_hi": "जवाहरलाल नेहरू",
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


