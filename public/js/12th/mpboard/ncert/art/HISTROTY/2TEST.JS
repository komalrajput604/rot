const questions = [ 

        {
          "num": 1,
          "question_en": "Which language was used for the composition of the Mahabharata?",
          "question_hi": "महाभारत की रचना किस भाषा में की गई थी?",
          "options_en": ["Sanskrit", "Pali", "Prakrit", "Tamil"],
          "options_hi": ["संस्कृत", "पाली", "प्राकृत", "तमिल"],
          "answer": "Sanskrit",
          "answer_hi": "संस्कृत",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What was the main occupation of the Harappan people?",
          "question_hi": "हड़प्पा सभ्यता के लोगों का मुख्य व्यवसाय क्या था?",
          "options_en": ["Agriculture", "Hunting", "Iron smelting", "Sculpture"],
          "options_hi": ["कृषि", "शिकार", "लोहा गलाना", "मूर्तिकला"],
          "answer": "Agriculture",
          "answer_hi": "कृषि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Who was the founder of the Maurya Empire?",
          "question_hi": "मौर्य साम्राज्य का संस्थापक कौन था?",
          "options_en": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Harsha"],
          "options_hi": ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "हर्षवर्धन"],
          "answer": "Chandragupta Maurya",
          "answer_hi": "चंद्रगुप्त मौर्य",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Who wrote 'Arthashastra'?",
          "question_hi": "'अर्थशास्त्र' किसने लिखा था?",
          "options_en": ["Kautilya", "Banabhatta", "Kalidasa", "Tulsidas"],
          "options_hi": ["कौटिल्य", "बाणभट्ट", "कालिदास", "तुलसीदास"],
          "answer": "Kautilya",
          "answer_hi": "कौटिल्य",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which Chinese traveler visited the court of Harsha?",
          "question_hi": "हर्षवर्धन के दरबार में किस चीनी यात्री ने यात्रा की थी?",
          "options_en": ["Xuanzang", "Fa-Hien", "Marco Polo", "Ibn Battuta"],
          "options_hi": ["ह्वेनसांग", "फाह्यान", "मार्को पोलो", "इब्न बतूता"],
          "answer": "Xuanzang",
          "answer_hi": "ह्वेनसांग",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "The city of Vijayanagara is located on the bank of which river?",
          "question_hi": "विजयनगर नगर किस नदी के किनारे स्थित था?",
          "options_en": ["Tungabhadra", "Godavari", "Krishna", "Kaveri"],
          "options_hi": ["तुंगभद्रा", "गोदावरी", "कृष्णा", "कावेरी"],
          "answer": "Tungabhadra",
          "answer_hi": "तुंगभद्रा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "What was the language of administration under the Delhi Sultanate?",
          "question_hi": "दिल्ली सल्तनत के अधीन प्रशासन की भाषा क्या थी?",
          "options_en": ["Persian", "Urdu", "Hindi", "Arabic"],
          "options_hi": ["फारसी", "उर्दू", "हिंदी", "अरबी"],
          "answer": "Persian",
          "answer_hi": "फारसी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Who built the Red Fort in Delhi?",
          "question_hi": "दिल्ली का लाल किला किसने बनवाया था?",
          "options_en": ["Shah Jahan", "Akbar", "Aurangzeb", "Babur"],
          "options_hi": ["शाहजहाँ", "अकबर", "औरंगज़ेब", "बाबर"],
          "answer": "Shah Jahan",
          "answer_hi": "शाहजहाँ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Who introduced the Mansabdari system?",
          "question_hi": "मंसबदारी प्रथा किसने शुरू की थी?",
          "options_en": ["Akbar", "Babur", "Humayun", "Jahangir"],
          "options_hi": ["अकबर", "बाबर", "हुमायूँ", "जहाँगीर"],
          "answer": "Akbar",
          "answer_hi": "अकबर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which Mughal emperor was known as 'Zinda Pir'?",
          "question_hi": "किस मुगल सम्राट को 'जिंदा पीर' कहा जाता था?",
          "options_en": ["Aurangzeb", "Shah Jahan", "Akbar", "Babur"],
          "options_hi": ["औरंगज़ेब", "शाहजहाँ", "अकबर", "बाबर"],
          "answer": "Aurangzeb",
          "answer_hi": "औरंगज़ेब",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What was the capital of the Mughals?",
          "question_hi": "मुगल साम्राज्य की राजधानी क्या थी?",
          "options_en": ["Agra", "Delhi", "Fatehpur Sikri", "Lahore"],
          "options_hi": ["आगरा", "दिल्ली", "फतेहपुर सीकरी", "लाहौर"],
          "answer": "Delhi",
          "answer_hi": "दिल्ली",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Who was the last powerful Mughal ruler?",
          "question_hi": "मुगल साम्राज्य का अंतिम शक्तिशाली शासक कौन था?",
          "options_en": ["Aurangzeb", "Bahadur Shah Zafar", "Shah Alam", "Akbar Shah"],
          "options_hi": ["औरंगज़ेब", "बहादुर शाह जफर", "शाह आलम", "अकबर शाह"],
          "answer": "Aurangzeb",
          "answer_hi": "औरंगज़ेब",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "When did the Revolt of 1857 take place?",
          "question_hi": "1857 की क्रांति कब हुई थी?",
          "options_en": ["1857", "1858", "1860", "1865"],
          "options_hi": ["1857", "1858", "1860", "1865"],
          "answer": "1857",
          "answer_hi": "1857",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Who was the Governor-General during the 1857 revolt?",
          "question_hi": "1857 की क्रांति के समय गवर्नर जनरल कौन था?",
          "options_en": ["Lord Canning", "Lord Dalhousie", "Lord Wellesley", "Lord Curzon"],
          "options_hi": ["लॉर्ड कैनिंग", "लॉर्ड डलहौजी", "लॉर्ड वेलेजली", "लॉर्ड कर्जन"],
          "answer": "Lord Canning",
          "answer_hi": "लॉर्ड कैनिंग",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Who led the revolt in Kanpur during 1857?",
          "question_hi": "1857 की क्रांति में कानपुर का नेतृत्व किसने किया?",
          "options_en": ["Nana Sahib", "Bahadur Shah Zafar", "Rani Laxmibai", "Tatya Tope"],
          "options_hi": ["नाना साहिब", "बहादुर शाह ज़फर", "रानी लक्ष्मीबाई", "तात्या टोपे"],
          "answer": "Nana Sahib",
          "answer_hi": "नाना साहिब",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Who founded the Arya Samaj?",
          "question_hi": "आर्य समाज की स्थापना किसने की थी?",
          "options_en": ["Swami Dayananda Saraswati", "Raja Ram Mohan Roy", "Swami Vivekananda", "Ishwar Chandra Vidyasagar"],
          "options_hi": ["स्वामी दयानंद सरस्वती", "राजा राम मोहन राय", "स्वामी विवेकानंद", "ईश्वर चंद्र विद्यासागर"],
          "answer": "Swami Dayananda Saraswati",
          "answer_hi": "स्वामी दयानंद सरस्वती",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "When was the Indian National Congress founded?",
          "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
          "options_en": ["1885", "1905", "1920", "1942"],
          "options_hi": ["1885", "1905", "1920", "1942"],
          "answer": "1885",
          "answer_hi": "1885",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Who was the first President of Indian National Congress?",
          "question_hi": "भारतीय राष्ट्रीय कांग्रेस के पहले अध्यक्ष कौन थे?",
          "options_en": ["W.C. Bonnerjee", "Dadabhai Naoroji", "Gopal Krishna Gokhale", "Mahatma Gandhi"],
          "options_hi": ["डब्ल्यू. सी. बनर्जी", "दादाभाई नौरोजी", "गोपाल कृष्ण गोखले", "महात्मा गांधी"],
          "answer": "W.C. Bonnerjee",
          "answer_hi": "डब्ल्यू. सी. बनर्जी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which movement was started in 1942?",
          "question_hi": "1942 में कौन सा आंदोलन शुरू हुआ था?",
          "options_en": ["Quit India Movement", "Civil Disobedience", "Non-Cooperation", "Salt Satyagraha"],
          "options_hi": ["भारत छोड़ो आंदोलन", "सविनय अवज्ञा आंदोलन", "असहयोग आंदोलन", "नमक सत्याग्रह"],
          "answer": "Quit India Movement",
          "answer_hi": "भारत छोड़ो आंदोलन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "In which year did India become independent?",
          "question_hi": "भारत किस वर्ष स्वतंत्र हुआ?",
          "options_en": ["1947", "1950", "1935", "1942"],
          "options_hi": ["1947", "1950", "1935", "1942"],
          "answer": "1947",
          "answer_hi": "1947",
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


