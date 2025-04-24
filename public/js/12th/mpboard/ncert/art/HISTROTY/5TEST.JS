const questions = [ 

        {
          "num": 1,
          "question_en": "Who was the founder of the Maurya Empire?",
          "question_hi": "मौर्य साम्राज्य का संस्थापक कौन था?",
          "options_en": ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"],
          "options_hi": ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "बिंबिसार"],
          "answer": "Chandragupta Maurya",
          "answer_hi": "चंद्रगुप्त मौर्य",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Who wrote the book 'Indica'?",
          "question_hi": "'इंडिका' पुस्तक किसने लिखी थी?",
          "options_en": ["Megasthenes", "Pliny", "Fa-Hien", "Hiuen Tsang"],
          "options_hi": ["मेगस्थनीज", "प्लिनी", "फाह्यान", "ह्वेनसांग"],
          "answer": "Megasthenes",
          "answer_hi": "मेगस्थनीज",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What was the capital of the Gupta Empire?",
          "question_hi": "गुप्त साम्राज्य की राजधानी क्या थी?",
          "options_en": ["Ujjain", "Patliputra", "Varanasi", "Mathura"],
          "options_hi": ["उज्जैन", "पाटलिपुत्र", "वाराणसी", "मथुरा"],
          "answer": "Patliputra",
          "answer_hi": "पाटलिपुत्र",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which inscription tells us about Ashoka’s Kalinga War?",
          "question_hi": "कौन सा अभिलेख अशोक के कलिंग युद्ध के बारे में बताता है?",
          "options_en": ["Bhabru Edict", "Rock Edict XIII", "Sarnath Edict", "Pillar Edict"],
          "options_hi": ["भाब्रू शिलालेख", "शिला लेख XIII", "सारनाथ शिलालेख", "स्तंभ लेख"],
          "answer": "Rock Edict XIII",
          "answer_hi": "शिला लेख XIII",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which dynasty is associated with Ajanta caves?",
          "question_hi": "अजंता गुफाएं किस वंश से संबंधित हैं?",
          "options_en": ["Maurya", "Satavahana", "Gupta", "Chola"],
          "options_hi": ["मौर्य", "सातवाहन", "गुप्त", "चोल"],
          "answer": "Satavahana",
          "answer_hi": "सातवाहन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Who was the first ruler to issue gold coins in India?",
          "question_hi": "भारत में सबसे पहले स्वर्ण मुद्रा किसने जारी की थी?",
          "options_en": ["Gupta rulers", "Maurya rulers", "Kushan rulers", "Mughal rulers"],
          "options_hi": ["गुप्त शासक", "मौर्य शासक", "कुषाण शासक", "मुगल शासक"],
          "answer": "Kushan rulers",
          "answer_hi": "कुषाण शासक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "What is the language of Ashokan inscriptions?",
          "question_hi": "अशोक के अभिलेखों की भाषा क्या है?",
          "options_en": ["Sanskrit", "Pali", "Prakrit", "Hindi"],
          "options_hi": ["संस्कृत", "पाली", "प्राकृत", "हिंदी"],
          "answer": "Prakrit",
          "answer_hi": "प्राकृत",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "The revolt of 1857 began in which city?",
          "question_hi": "1857 की क्रांति किस शहर में शुरू हुई थी?",
          "options_en": ["Delhi", "Lucknow", "Meerut", "Kanpur"],
          "options_hi": ["दिल्ली", "लखनऊ", "मेरठ", "कानपुर"],
          "answer": "Meerut",
          "answer_hi": "मेरठ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Who was the leader of the 1857 revolt in Kanpur?",
          "question_hi": "1857 की क्रांति में कानपुर का नेतृत्व किसने किया था?",
          "options_en": ["Tantia Tope", "Nana Sahib", "Rani Lakshmi Bai", "Bahadur Shah Zafar"],
          "options_hi": ["तात्या टोपे", "नाना साहिब", "रानी लक्ष्मीबाई", "बहादुर शाह ज़फ़र"],
          "answer": "Nana Sahib",
          "answer_hi": "नाना साहिब",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Who was the last Governor-General of independent India?",
          "question_hi": "स्वतंत्र भारत का अंतिम गवर्नर-जनरल कौन था?",
          "options_en": ["C. Rajagopalachari", "Lord Mountbatten", "Jawaharlal Nehru", "Sardar Patel"],
          "options_hi": ["सी. राजगोपालाचारी", "लॉर्ड माउंटबेटन", "जवाहरलाल नेहरू", "सरदार पटेल"],
          "answer": "C. Rajagopalachari",
          "answer_hi": "सी. राजगोपालाचारी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Who wrote 'Discovery of India'?",
          "question_hi": "'डिस्कवरी ऑफ इंडिया' किसने लिखी?",
          "options_en": ["Sardar Patel", "Subhash Chandra Bose", "Jawaharlal Nehru", "Mahatma Gandhi"],
          "options_hi": ["सरदार पटेल", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "महात्मा गांधी"],
          "answer": "Jawaharlal Nehru",
          "answer_hi": "जवाहरलाल नेहरू",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Who was the founder of the Mughal Empire?",
          "question_hi": "मुगल साम्राज्य का संस्थापक कौन था?",
          "options_en": ["Babur", "Akbar", "Humayun", "Aurangzeb"],
          "options_hi": ["बाबर", "अकबर", "हुमायूं", "औरंगजेब"],
          "answer": "Babur",
          "answer_hi": "बाबर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which Mughal ruler built the Taj Mahal?",
          "question_hi": "ताजमहल का निर्माण किस मुगल शासक ने करवाया था?",
          "options_en": ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"],
          "options_hi": ["अकबर", "शाहजहाँ", "औरंगजेब", "बाबर"],
          "answer": "Shah Jahan",
          "answer_hi": "शाहजहाँ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Who started the Khilafat Movement?",
          "question_hi": "खिलाफत आंदोलन किसने शुरू किया?",
          "options_en": ["Mahatma Gandhi", "Ali Brothers", "Subhash Chandra Bose", "Nehru"],
          "options_hi": ["महात्मा गांधी", "अली ब्रदर्स", "सुभाष चंद्र बोस", "नेहरू"],
          "answer": "Ali Brothers",
          "answer_hi": "अली ब्रदर्स",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What was the capital of Harappan Civilization?",
          "question_hi": "हड़प्पा सभ्यता की राजधानी क्या थी?",
          "options_en": ["Mohenjo-daro", "Lothal", "Kalibangan", "Harappa"],
          "options_hi": ["मोहनजोदड़ो", "लोथल", "कालीबंगा", "हड़प्पा"],
          "answer": "Harappa",
          "answer_hi": "हड़प्पा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Who was the founder of the Indian National Congress?",
          "question_hi": "भारतीय राष्ट्रीय कांग्रेस का संस्थापक कौन था?",
          "options_en": ["Mahatma Gandhi", "A.O. Hume", "Dadabhai Naoroji", "Bal Gangadhar Tilak"],
          "options_hi": ["महात्मा गांधी", "ए.ओ. ह्यूम", "दादाभाई नैरोजी", "बाल गंगाधर तिलक"],
          "answer": "A.O. Hume",
          "answer_hi": "ए.ओ. ह्यूम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which act introduced Diarchy in India?",
          "question_hi": "भारत में द्वैध शासन प्रणाली किस अधिनियम के तहत लागू की गई?",
          "options_en": ["Act of 1909", "Act of 1919", "Act of 1935", "Act of 1947"],
          "options_hi": ["1909 का अधिनियम", "1919 का अधिनियम", "1935 का अधिनियम", "1947 का अधिनियम"],
          "answer": "Act of 1919",
          "answer_hi": "1919 का अधिनियम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Who gave the slogan 'Do or Die'?",
          "question_hi": "'करो या मरो' का नारा किसने दिया?",
          "options_en": ["Subhash Chandra Bose", "Bhagat Singh", "Mahatma Gandhi", "Jawaharlal Nehru"],
          "options_hi": ["सुभाष चंद्र बोस", "भगत सिंह", "महात्मा गांधी", "जवाहरलाल नेहरू"],
          "answer": "Mahatma Gandhi",
          "answer_hi": "महात्मा गांधी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "In which year did India become a Republic?",
          "question_hi": "भारत किस वर्ष गणराज्य बना?",
          "options_en": ["1947", "1950", "1952", "1949"],
          "options_hi": ["1947", "1950", "1952", "1949"],
          "answer": "1950",
          "answer_hi": "1950",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Who was the first President of India?",
          "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
          "options_en": ["Dr. Rajendra Prasad", "Dr. Radhakrishnan", "Jawaharlal Nehru", "Sardar Patel"],
          "options_hi": ["डॉ. राजेन्द्र प्रसाद", "डॉ. राधाकृष्णन", "जवाहरलाल नेहरू", "सरदार पटेल"],
          "answer": "Dr. Rajendra Prasad",
          "answer_hi": "डॉ. राजेन्द्र प्रसाद",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Where did Mahatma Gandhi start his first Satyagraha in India?",
          "question_hi": "भारत में महात्मा गांधी ने पहला सत्याग्रह कहां शुरू किया था?",
          "options_en": ["Champaran", "Dandi", "Ahmedabad", "Kheda"],
          "options_hi": ["चंपारण", "डांडी", "अहमदाबाद", "खेड़ा"],
          "answer": "Champaran",
          "answer_hi": "चंपारण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "Which social reformer founded Arya Samaj?",
          "question_hi": "आर्य समाज की स्थापना किस समाज सुधारक ने की थी?",
          "options_en": ["Swami Vivekananda", "Swami Dayanand Saraswati", "Raja Ram Mohan Roy", "Ishwar Chandra Vidyasagar"],
          "options_hi": ["स्वामी विवेकानंद", "स्वामी दयानंद सरस्वती", "राजा राम मोहन राय", "ईश्वर चंद्र विद्यासागर"],
          "answer": "Swami Dayanand Saraswati",
          "answer_hi": "स्वामी दयानंद सरस्वती",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Where was the Jallianwala Bagh massacre held?",
          "question_hi": "जलियांवाला बाग हत्याकांड कहां हुआ था?",
          "options_en": ["Delhi", "Amritsar", "Lucknow", "Lahore"],
          "options_hi": ["दिल्ली", "अमृतसर", "लखनऊ", "लाहौर"],
          "answer": "Amritsar",
          "answer_hi": "अमृतसर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "Who was the first woman President of Indian National Congress?",
          "question_hi": "भारतीय राष्ट्रीय कांग्रेस की पहली महिला अध्यक्ष कौन थीं?",
          "options_en": ["Indira Gandhi", "Annie Besant", "Sarojini Naidu", "Vijaya Lakshmi Pandit"],
          "options_hi": ["इंदिरा गांधी", "एनी बेसेंट", "सरोजिनी नायडू", "विजयलक्ष्मी पंडित"],
          "answer": "Annie Besant",
          "answer_hi": "एनी बेसेंट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "Which battle laid the foundation of British rule in India?",
          "question_hi": "कौन सी लड़ाई भारत में ब्रिटिश शासन की नींव बनी?",
          "options_en": ["Battle of Plassey", "Battle of Buxar", "Battle of Panipat", "Battle of Mysore"],
          "options_hi": ["प्लासी की लड़ाई", "बक्सर की लड़ाई", "पानीपत की लड़ाई", "मैसूर की लड़ाई"],
          "answer": "Battle of Plassey",
          "answer_hi": "प्लासी की लड़ाई",
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


