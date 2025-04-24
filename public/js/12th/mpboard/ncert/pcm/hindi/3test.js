const questions = [ 
  {
          "num": 1,
          "question_en": "Who is the author of the poem 'Madhushala'?",
          "question_hi": "'मधुशाला' कविता के रचयिता कौन हैं?",
          "options_en": ["Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Mahadevi Verma", "Sumitranandan Pant"],
          "options_hi": ["रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "महादेवी वर्मा", "सुमित्रानंदन पंत"],
          "answer": "Harivansh Rai Bachchan",
          "answer_hi": "हरिवंश राय बच्चन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which era does 'Bharatendu Harishchandra' belong to?",
          "question_hi": "'भारतेंदु हरिश्चंद्र' किस युग के कवि हैं?",
          "options_en": ["Chhayavad", "Bhaktikaal", "Ritikaal", "Bharatendu Yug"],
          "options_hi": ["छायावाद", "भक्तिकाल", "रीतिकाल", "भारतेंदु युग"],
          "answer": "Bharatendu Yug",
          "answer_hi": "भारतेंदु युग",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the genre of the prose 'Sansmaran'?",
          "question_hi": "'संस्मरण' गद्य का कौन सा रूप है?",
          "options_en": ["Essay", "Memoir", "Report", "Travelogue"],
          "options_hi": ["निबंध", "संस्मरण", "रिपोर्ट", "यात्रावृत्तांत"],
          "answer": "Memoir",
          "answer_hi": "संस्मरण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Who is the writer of the story 'Apna Malak'? ",
          "question_hi": "'अपना मालिक' कहानी के लेखक कौन हैं?",
          "options_en": ["Premchand", "Yashpal", "Phanishwar Nath Renu", "Mahadevi Verma"],
          "options_hi": ["प्रेमचंद", "यशपाल", "फणीश्वर नाथ 'रेणु'", "महादेवी वर्मा"],
          "answer": "Premchand",
          "answer_hi": "प्रेमचंद",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which of the following is a feature of Chhayavad?",
          "question_hi": "निम्न में से कौन छायावाद की विशेषता है?",
          "options_en": ["Practicality", "Spiritualism", "Nature description", "All of these"],
          "options_hi": ["व्यावहारिकता", "आध्यात्मिकता", "प्रकृति वर्णन", "इनमें सभी"],
          "answer": "All of these",
          "answer_hi": "इनमें सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which story portrays the plight of a poor farmer?",
          "question_hi": "किस कहानी में एक गरीब किसान की दुर्दशा का चित्रण है?",
          "options_en": ["Poos Ki Raat", "Panchlight", "Idgah", "Bade Bhai Sahab"],
          "options_hi": ["पूस की रात", "पंचलाइट", "ईदगाह", "बड़े भाई साहब"],
          "answer": "Poos Ki Raat",
          "answer_hi": "पूस की रात",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Who is the writer of 'Bharat Mata' essay?",
          "question_hi": "'भारत माता' निबंध के लेखक कौन हैं?",
          "options_en": ["Mahatma Gandhi", "Subhadra Kumari Chauhan", "Maithili Sharan Gupt", "Makhanlal Chaturvedi"],
          "options_hi": ["महात्मा गांधी", "सुभद्राकुमारी चौहान", "मैथिली शरण गुप्त", "माखनलाल चतुर्वेदी"],
          "answer": "Makhanlal Chaturvedi",
          "answer_hi": "माखनलाल चतुर्वेदी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Who wrote the play 'Andher Nagari Chaupat Raja'?",
          "question_hi": "'अंधेर नगरी चौपट राजा' नाटक किसने लिखा?",
          "options_en": ["Bharatendu Harishchandra", "Jaishankar Prasad", "Bhavani Prasad Mishra", "Premchand"],
          "options_hi": ["भारतेंदु हरिश्चंद्र", "जयशंकर प्रसाद", "भवानी प्रसाद मिश्र", "प्रेमचंद"],
          "answer": "Bharatendu Harishchandra",
          "answer_hi": "भारतेंदु हरिश्चंद्र",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which poet is associated with 'Nirala' pen name?",
          "question_hi": "'निराला' उपनाम किस कवि से संबंधित है?",
          "options_en": ["Suryakant Tripathi", "Ramdhari Singh Dinkar", "Jaishankar Prasad", "Sumitranandan Pant"],
          "options_hi": ["सूर्यकांत त्रिपाठी", "रामधारी सिंह दिनकर", "जयशंकर प्रसाद", "सुमित्रानंदन पंत"],
          "answer": "Suryakant Tripathi",
          "answer_hi": "सूर्यकांत त्रिपाठी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is the main theme of 'Idgah' story?",
          "question_hi": "'ईदगाह' कहानी का मुख्य विषय क्या है?",
          "options_en": ["Religious rituals", "Social inequality", "Selfless love", "Economic crisis"],
          "options_hi": ["धार्मिक अनुष्ठान", "सामाजिक असमानता", "निःस्वार्थ प्रेम", "आर्थिक संकट"],
          "answer": "Selfless love",
          "answer_hi": "निःस्वार्थ प्रेम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which era does 'Sumitranandan Pant' belong to?",
          "question_hi": "'सुमित्रानंदन पंत' किस युग के कवि हैं?",
          "options_en": ["Bhaktikaal", "Ritikal", "Chhayavad", "Pragativad"],
          "options_hi": ["भक्तिकाल", "रीतिकाल", "छायावाद", "प्रगतिवाद"],
          "answer": "Chhayavad",
          "answer_hi": "छायावाद",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Who is the poet of 'Veeron Ka Kaisa Ho Basant'?",
          "question_hi": "'वीरों का कैसा हो बसंत' कविता के कवि कौन हैं?",
          "options_en": ["Ramdhari Singh Dinkar", "Makhanlal Chaturvedi", "Sumitranandan Pant", "Harivansh Rai Bachchan"],
          "options_hi": ["रामधारी सिंह दिनकर", "माखनलाल चतुर्वेदी", "सुमित्रानंदन पंत", "हरिवंश राय बच्चन"],
          "answer": "Makhanlal Chaturvedi",
          "answer_hi": "माखनलाल चतुर्वेदी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which is the first Hindi short story?",
          "question_hi": "पहली हिंदी लघु कथा कौन सी है?",
          "options_en": ["Usne Kaha Tha", "Idgah", "Poos Ki Raat", "Kafan"],
          "options_hi": ["उसने कहा था", "ईदगाह", "पूस की रात", "कफ़न"],
          "answer": "Usne Kaha Tha",
          "answer_hi": "उसने कहा था",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Who is considered the father of modern Hindi literature?",
          "question_hi": "आधुनिक हिंदी साहित्य का जनक किसे माना जाता है?",
          "options_en": ["Bharatendu Harishchandra", "Premchand", "Jaishankar Prasad", "Mahadevi Verma"],
          "options_hi": ["भारतेंदु हरिश्चंद्र", "प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा"],
          "answer": "Bharatendu Harishchandra",
          "answer_hi": "भारतेंदु हरिश्चंद्र",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which work is written by Mahadevi Verma?",
          "question_hi": "निम्न में से कौन सा रचना महादेवी वर्मा की है?",
          "options_en": ["Agnipath", "Atit Ke Chhaye", "Gaban", "Ram Ki Shakti Puja"],
          "options_hi": ["अग्निपथ", "अतीत के छाये", "गबन", "राम की शक्ति पूजा"],
          "answer": "Atit Ke Chhaye",
          "answer_hi": "अतीत के छाये",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "What is the main theme of 'Panchlight'?",
          "question_hi": "'पंचलाइट' कहानी का मुख्य विषय क्या है?",
          "options_en": ["Community pride", "Illiteracy", "Religious faith", "Village conflict"],
          "options_hi": ["समुदाय का गर्व", "अशिक्षा", "धार्मिक विश्वास", "गांव का संघर्ष"],
          "answer": "Community pride",
          "answer_hi": "समुदाय का गर्व",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which writer is famous for social realism?",
          "question_hi": "सामाजिक यथार्थ के लिए कौन लेखक प्रसिद्ध हैं?",
          "options_en": ["Jaishankar Prasad", "Mahadevi Verma", "Premchand", "Bhavani Prasad Mishra"],
          "options_hi": ["जयशंकर प्रसाद", "महादेवी वर्मा", "प्रेमचंद", "भवानी प्रसाद मिश्र"],
          "answer": "Premchand",
          "answer_hi": "प्रेमचंद",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which prose form is used in 'Sansmaran'?",
          "question_hi": "'संस्मरण' किस गद्य रूप में आता है?",
          "options_en": ["Biography", "Autobiography", "Reminiscence", "Report"],
          "options_hi": ["जीवनी", "आत्मकथा", "संस्मरण", "रिपोर्ट"],
          "answer": "Reminiscence",
          "answer_hi": "संस्मरण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which writer is known for Chhayavadi poetry?",
          "question_hi": "छायावादी कविता के लिए कौन लेखक प्रसिद्ध हैं?",
          "options_en": ["Sumitranandan Pant", "Premchand", "Bharatendu", "Bhavani Prasad Mishra"],
          "options_hi": ["सुमित्रानंदन पंत", "प्रेमचंद", "भारतेंदु", "भवानी प्रसाद मिश्र"],
          "answer": "Sumitranandan Pant",
          "answer_hi": "सुमित्रानंदन पंत",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Who wrote the poem 'Madhur Madhur Mere Deepak Jal'?",
          "question_hi": "'मधुर मधुर मेरे दीपक जल' कविता किसने लिखी?",
          "options_en": ["Mahadevi Verma", "Makhanlal Chaturvedi", "Jaishankar Prasad", "Nirala"],
          "options_hi": ["महादेवी वर्मा", "माखनलाल चतुर्वेदी", "जयशंकर प्रसाद", "निराला"],
          "answer": "Mahadevi Verma",
          "answer_hi": "महादेवी वर्मा",
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


