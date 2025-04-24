const questions = [ 

        {
          "num": 1,
          "question_en": "Who is the author of the poem 'My Mother at Sixty-Six'?",
          "question_hi": "'My Mother at Sixty-Six' कविता के लेखक कौन हैं?",
          "options_en": ["Kamala Das", "John Keats", "Robert Frost", "Shakespeare"],
          "options_hi": ["कमला दास", "जॉन कीट्स", "रॉबर्ट फ्रॉस्ट", "शेक्सपियर"],
          "answer": "Kamala Das",
          "answer_hi": "कमला दास",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What is the central theme of the poem 'Keeping Quiet'?",
          "question_hi": "'Keeping Quiet' कविता का मुख्य विषय क्या है?",
          "options_en": ["Celebration", "Violence", "Peace and silence", "War"],
          "options_hi": ["उत्सव", "हिंसा", "शांति और मौन", "युद्ध"],
          "answer": "Peace and silence",
          "answer_hi": "शांति और मौन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What does the phrase 'a thing of beauty is a joy forever' suggest?",
          "question_hi": "'A thing of beauty is a joy forever' वाक्यांश क्या दर्शाता है?",
          "options_en": ["Beauty fades", "Beauty is temporary", "Beauty brings everlasting happiness", "None"],
          "options_hi": ["सौंदर्य क्षणिक होता है", "सौंदर्य अस्थायी है", "सौंदर्य चिरस्थायी आनंद लाता है", "कोई नहीं"],
          "answer": "Beauty brings everlasting happiness",
          "answer_hi": "सौंदर्य चिरस्थायी आनंद लाता है",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Who is the protagonist in 'The Last Lesson'?",
          "question_hi": "'The Last Lesson' का मुख्य पात्र कौन है?",
          "options_en": ["Franz", "M. Hamel", "Albert", "Einstein"],
          "options_hi": ["फ्रांज", "एम. हैमेल", "आल्बर्ट", "आइंस्टीन"],
          "answer": "Franz",
          "answer_hi": "फ्रांज",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Where is the setting of the story 'The Last Lesson'?",
          "question_hi": "'The Last Lesson' कहानी की पृष्ठभूमि कहाँ है?",
          "options_en": ["Berlin", "Alsace", "Paris", "London"],
          "options_hi": ["बर्लिन", "अल्सेस", "पेरिस", "लंदन"],
          "answer": "Alsace",
          "answer_hi": "अल्सेस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "What is the main issue in 'Lost Spring'?",
          "question_hi": "'Lost Spring' में मुख्य मुद्दा क्या है?",
          "options_en": ["Pollution", "Child labor and poverty", "Climate change", "Corruption"],
          "options_hi": ["प्रदूषण", "बाल श्रम और गरीबी", "जलवायु परिवर्तन", "भ्रष्टाचार"],
          "answer": "Child labor and poverty",
          "answer_hi": "बाल श्रम और गरीबी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Who wrote 'The Tiger King'?",
          "question_hi": "'The Tiger King' किसने लिखा?",
          "options_en": ["R. K. Narayan", "Kalki", "Khushwant Singh", "Ruskin Bond"],
          "options_hi": ["आर. के. नारायण", "कल्कि", "खुशवंत सिंह", "रस्किन बॉन्ड"],
          "answer": "Kalki",
          "answer_hi": "कल्कि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What does the poem 'Aunt Jennifer’s Tigers' symbolize?",
          "question_hi": "'Aunt Jennifer’s Tigers' कविता क्या प्रतीकित करती है?",
          "options_en": ["Freedom from oppression", "Anger", "Fear", "Nature"],
          "options_hi": ["दमन से मुक्ति", "क्रोध", "भय", "प्रकृति"],
          "answer": "Freedom from oppression",
          "answer_hi": "दमन से मुक्ति",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What is the profession of the narrator in 'The Interview'?",
          "question_hi": "'The Interview' में कथावाचक का पेशा क्या है?",
          "options_en": ["Doctor", "Journalist", "Teacher", "Lawyer"],
          "options_hi": ["डॉक्टर", "पत्रकार", "शिक्षक", "वकील"],
          "answer": "Journalist",
          "answer_hi": "पत्रकार",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Who is Saheb in 'Lost Spring'?",
          "question_hi": "'Lost Spring' में साहेब कौन है?",
          "options_en": ["A servant", "A rich man", "A rag-picker", "A teacher"],
          "options_hi": ["एक नौकर", "एक अमीर आदमी", "एक कबाड़ी", "एक शिक्षक"],
          "answer": "A rag-picker",
          "answer_hi": "एक कबाड़ी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What does the poem 'Keeping Quiet' emphasize?",
          "question_hi": "'Keeping Quiet' कविता किस पर बल देती है?",
          "options_en": ["Violence", "Silence and introspection", "Celebration", "Joy"],
          "options_hi": ["हिंसा", "मौन और आत्मनिरीक्षण", "उत्सव", "आनंद"],
          "answer": "Silence and introspection",
          "answer_hi": "मौन और आत्मनिरीक्षण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What language was banned in the schools of Alsace and Lorraine?",
          "question_hi": "अल्सेस और लोरेन के स्कूलों में किस भाषा पर प्रतिबंध लगाया गया था?",
          "options_en": ["English", "Latin", "French", "German"],
          "options_hi": ["अंग्रेज़ी", "लैटिन", "फ्रेंच", "जर्मन"],
          "answer": "French",
          "answer_hi": "फ्रेंच",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What was the age of the poet’s mother in 'My Mother at Sixty-Six'?",
          "question_hi": "'My Mother at Sixty-Six' में कवि की माँ की उम्र क्या थी?",
          "options_en": ["50", "55", "60", "66"],
          "options_hi": ["50", "55", "60", "66"],
          "answer": "66",
          "answer_hi": "66",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "What does Aunt Jennifer’s embroidery represent?",
          "question_hi": "आंटी जेनिफर की कढ़ाई क्या दर्शाती है?",
          "options_en": ["Her dreams and desires", "Her wealth", "Her children", "Her fear"],
          "options_hi": ["उसके सपने और इच्छाएं", "उसकी संपत्ति", "उसके बच्चे", "उसका डर"],
          "answer": "Her dreams and desires",
          "answer_hi": "उसके सपने और इच्छाएं",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What was the Tiger King's real name?",
          "question_hi": "टाइगर किंग का असली नाम क्या था?",
          "options_en": ["Jilani Jung Jung Bahadur", "Raja Ram", "Maharaja Ranjit", "Ravi Varma"],
          "options_hi": ["जिलानी जंग जंग बहादुर", "राजा राम", "महाराजा रणजीत", "रवि वर्मा"],
          "answer": "Jilani Jung Jung Bahadur",
          "answer_hi": "जिलानी जंग जंग बहादुर",
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


