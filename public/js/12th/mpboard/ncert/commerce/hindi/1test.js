const questions = [ 

          
    {
      "num": 11,
      "question_en": "Who is the writer of 'Reedh Ki Haddi'?",
      "question_hi": "'रीढ़ की हड्डी' के लेखक कौन हैं?",
      "options_en": ["Harishankar Parsai", "Yashpal", "Mannu Bhandari", "Bhagwati Charan Verma"],
      "options_hi": ["हरिशंकर परसाई", "यशपाल", "मन्नू भंडारी", "भगवती चरण वर्मा"],
      "answer": "Harishankar Parsai",
      "answer_hi": "हरिशंकर परसाई",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "Which genre does 'Madhushala' belong to?",
      "question_hi": "'मधुशाला' किस विधा की रचना है?",
      "options_en": ["Novel", "Poetry", "Drama", "Essay"],
      "options_hi": ["उपन्यास", "कविता", "नाटक", "निबंध"],
      "answer": "Poetry",
      "answer_hi": "कविता",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "'Ek Geet' poem was written by?",
      "question_hi": "'एक गीत' कविता किसने लिखी है?",
      "options_en": ["Bachchan", "Dinkar", "Nirala", "Maithili Sharan Gupt"],
      "options_hi": ["बच्चन", "दिनकर", "निराला", "मैथिलीशरण गुप्त"],
      "answer": "Nirala",
      "answer_hi": "निराला",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "What is described in 'Paryavaran aur Hum'?",
      "question_hi": "'पर्यावरण और हम' में किस विषय का वर्णन है?",
      "options_en": ["Economy", "Environment", "Society", "Science"],
      "options_hi": ["अर्थव्यवस्था", "पर्यावरण", "समाज", "विज्ञान"],
      "answer": "Environment",
      "answer_hi": "पर्यावरण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "Which poet is known as 'Rashtrakavi'?",
      "question_hi": "‘राष्ट्रीय कवि’ किसे कहा जाता है?",
      "options_en": ["Dinkar", "Maithili Sharan Gupt", "Nirala", "Bachchan"],
      "options_hi": ["दिनकर", "मैथिलीशरण गुप्त", "निराला", "बच्चन"],
      "answer": "Maithili Sharan Gupt",
      "answer_hi": "मैथिलीशरण गुप्त",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "What is the tone of 'Sanskriti Ke Char Adhyay'?",
      "question_hi": "'संस्कृति के चार अध्याय' की भाषा-शैली कैसी है?",
      "options_en": ["Sarcastic", "Humorous", "Analytical", "Emotional"],
      "options_hi": ["व्यंग्यात्मक", "हास्यात्मक", "विश्लेषणात्मक", "भावनात्मक"],
      "answer": "Analytical",
      "answer_hi": "विश्लेषणात्मक",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "Who is the author of 'Jab Mein Naraaz Hota Hoon'?",
      "question_hi": "'जब मैं नाराज़ होता हूँ' के लेखक कौन हैं?",
      "options_en": ["Mannu Bhandari", "Shivani", "Krishna Sobti", "Amritlal Nagar"],
      "options_hi": ["मन्नू भंडारी", "शिवानी", "कृष्णा सोबती", "अमृतलाल नागर"],
      "answer": "Mannu Bhandari",
      "answer_hi": "मन्नू भंडारी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "What is the subject of 'Rajbhasha ka Sawal'?",
      "question_hi": "'राजभाषा का सवाल' का विषय क्या है?",
      "options_en": ["Hindi as national language", "Corruption", "Democracy", "Women empowerment"],
      "options_hi": ["राष्ट्रभाषा के रूप में हिंदी", "भ्रष्टाचार", "लोकतंत्र", "महिला सशक्तिकरण"],
      "answer": "Hindi as national language",
      "answer_hi": "राष्ट्रभाषा के रूप में हिंदी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Who is known for 'Viyog Shringar' poems?",
      "question_hi": "'वियोग श्रृंगार' काव्य के लिए कौन प्रसिद्ध हैं?",
      "options_en": ["Tulsidas", "Surdas", "Meera", "Bihari"],
      "options_hi": ["तुलसीदास", "सूरदास", "मीरा", "बिहारी"],
      "answer": "Meera",
      "answer_hi": "मीरा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "'Ram Ka Antardwand' explores what theme?",
      "question_hi": "'राम का अंतर्द्वंद्व' किस विषय को दर्शाता है?",
      "options_en": ["War", "Love", "Duty and dilemma", "Revenge"],
      "options_hi": ["युद्ध", "प्रेम", "कर्तव्य और द्वंद्व", "प्रतिशोध"],
      "answer": "Duty and dilemma",
      "answer_hi": "कर्तव्य और द्वंद्व",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_en": "Who is the protagonist in 'Saudagar Ram'?",
      "question_hi": "'सौदागर राम' का मुख्य पात्र कौन है?",
      "options_en": ["Ram", "The writer", "Villager", "Doctor"],
      "options_hi": ["राम", "लेखक", "गाँववाले", "डॉक्टर"],
      "answer": "Ram",
      "answer_hi": "राम",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_en": "Who is the poet of 'Geet Gaata Chal'?",
      "question_hi": "'गीत गाता चल' कविता के कवि कौन हैं?",
      "options_en": ["Harivansh Rai Bachchan", "Nirala", "Dinkar", "Mahadevi Verma"],
      "options_hi": ["हरिवंश राय बच्चन", "निराला", "दिनकर", "महादेवी वर्मा"],
      "answer": "Harivansh Rai Bachchan",
      "answer_hi": "हरिवंश राय बच्चन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_en": "Which story describes the misuse of technology?",
      "question_hi": "कौन सी कहानी तकनीक के दुरुपयोग को दर्शाती है?",
      "options_en": ["Panchlight", "Saudagar Ram", "Jab Mein Naraz Hota Hoon", "Computer Baba"],
      "options_hi": ["पंचलाइट", "सौदागर राम", "जब मैं नाराज़ होता हूँ", "कंप्यूटर बाबा"],
      "answer": "Computer Baba",
      "answer_hi": "कंप्यूटर बाबा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_en": "What message does the poem 'Nadi Ka Dukh' convey?",
      "question_hi": "'नदी का दुख' कविता क्या संदेश देती है?",
      "options_en": ["Environmental concern", "Religious importance", "Historical significance", "Cultural beauty"],
      "options_hi": ["पर्यावरणीय चिंता", "धार्मिक महत्व", "ऐतिहासिक महत्व", "सांस्कृतिक सौंदर्य"],
      "answer": "Environmental concern",
      "answer_hi": "पर्यावरणीय चिंता",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_en": "Who wrote 'Main Aur Mera Desh'?",
      "question_hi": "'मैं और मेरा देश' किसने लिखा?",
      "options_en": ["Premchand", "Mahadevi Verma", "Suryakant Tripathi Nirala", "Harivansh Rai Bachchan"],
      "options_hi": ["प्रेमचंद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी निराला", "हरिवंश राय बच्चन"],
      "answer": "Mahadevi Verma",
      "answer_hi": "महादेवी वर्मा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_en": "'Parishram hi Safalta ki Kunji Hai' means?",
      "question_hi": "'परिश्रम ही सफलता की कुंजी है' का क्या अर्थ है?",
      "options_en": ["Luck matters more", "Effort leads to success", "No use of hard work", "Success is random"],
      "options_hi": ["किस्मत ही सबकुछ है", "परिश्रम से सफलता मिलती है", "मेहनत व्यर्थ है", "सफलता संयोग है"],
      "answer": "Effort leads to success",
      "answer_hi": "परिश्रम से सफलता मिलती है",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_en": "What does 'Swabhimaan' mean?",
      "question_hi": "'स्वाभिमान' का अर्थ क्या है?",
      "options_en": ["Pride", "Ego", "Self-respect", "Arrogance"],
      "options_hi": ["गर्व", "अहंकार", "आत्म-सम्मान", "घमंड"],
      "answer": "Self-respect",
      "answer_hi": "आत्म-सम्मान",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_en": "In which form is 'Kabir ke Dohe' written?",
      "question_hi": "'कबीर के दोहे' किस रूप में लिखे गए हैं?",
      "options_en": ["Couplets", "Verses", "Paragraphs", "Essay"],
      "options_hi": ["दोहे", "पद", "अनुच्छेद", "निबंध"],
      "answer": "Couplets",
      "answer_hi": "दोहे",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_en": "Who composed the poem 'Veer Tum Badhe Chalo'?",
      "question_hi": "'वीर तुम बढ़े चलो' कविता के रचयिता कौन हैं?",
      "options_en": ["Kavi Pradeep", "Dinkar", "Gupt", "Bachchan"],
      "options_hi": ["कवि प्रदीप", "दिनकर", "गुप्त", "बच्चन"],
      "answer": "Kavi Pradeep",
      "answer_hi": "कवि प्रदीप",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_en": "Which poet is known as 'Yug Charan'?",
      "question_hi": "'युग चारण' के नाम से किस कवि को जाना जाता है?",
      "options_en": ["Ramdhari Singh Dinkar", "Bachchan", "Gupt", "Mahadevi Verma"],
      "options_hi": ["रामधारी सिंह दिनकर", "बच्चन", "गुप्त", "महादेवी वर्मा"],
      "answer": "Ramdhari Singh Dinkar",
      "answer_hi": "रामधारी सिंह दिनकर",
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



  