const questions = [ 

          
    {
      "num": 1,
      "question_en": "Who is the author of 'Bharat Mata'?",
      "question_hi": "'भारत माता' के लेखक कौन हैं?",
      "options_en": ["Subhadra Kumari Chauhan", "Maithili Sharan Gupt", "Bankim Chandra Chattopadhyay", "Premchand"],
      "options_hi": ["सुभद्राकुमारी चौहान", "मैथिलीशरण गुप्त", "बंकिम चंद्र चट्टोपाध्याय", "प्रेमचंद"],
      "answer": "Maithili Sharan Gupt",
      "answer_hi": "मैथिलीशरण गुप्त",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "What is the theme of 'Atmabodh'?",
      "question_hi": "'आत्मबोध' का मुख्य विषय क्या है?",
      "options_en": ["Nationalism", "Spiritual awakening", "Love", "Nature"],
      "options_hi": ["राष्ट्रीयता", "आध्यात्मिक जागृति", "प्रेम", "प्रकृति"],
      "answer": "Spiritual awakening",
      "answer_hi": "आध्यात्मिक जागृति",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Who wrote the poem 'Usne Kaha Tha'?",
      "question_hi": "'उसने कहा था' कहानी किसने लिखी?",
      "options_en": ["Jaishankar Prasad", "Premchand", "Chandradhar Sharma Guleri", "Mahadevi Verma"],
      "options_hi": ["जयशंकर प्रसाद", "प्रेमचंद", "चंद्रधर शर्मा गुलेरी", "महादेवी वर्मा"],
      "answer": "Chandradhar Sharma Guleri",
      "answer_hi": "चंद्रधर शर्मा गुलेरी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Who is the protagonist of the poem 'Jeevan Ka Karuna Path'?",
      "question_hi": "'जीवन का करुणा पथ' कविता का प्रमुख पात्र कौन है?",
      "options_en": ["The poet himself", "A mother", "A traveler", "A soldier"],
      "options_hi": ["कवि स्वयं", "एक माँ", "एक यात्री", "एक सैनिक"],
      "answer": "The poet himself",
      "answer_hi": "कवि स्वयं",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "What is the genre of 'Panchlight'?",
      "question_hi": "'पंचलाइट' किस प्रकार की रचना है?",
      "options_en": ["Poem", "Short story", "Essay", "Drama"],
      "options_hi": ["कविता", "लघुकथा", "निबंध", "नाटक"],
      "answer": "Short story",
      "answer_hi": "लघुकथा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Who is the author of 'Saudagar Ram'?",
      "question_hi": "'सौदागर राम' के लेखक कौन हैं?",
      "options_en": ["Mannu Bhandari", "Hari Shankar Parsai", "Premchand", "Bhishm Sahni"],
      "options_hi": ["मन्नू भंडारी", "हरिशंकर परसाई", "प्रेमचंद", "भीष्म साहनी"],
      "answer": "Hari Shankar Parsai",
      "answer_hi": "हरिशंकर परसाई",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Which movement is reflected in 'Tum Kaun Ho'?",
      "question_hi": "'तुम कौन हो' में किस आंदोलन की झलक है?",
      "options_en": ["Freedom movement", "Chipko movement", "Naxalite movement", "Swadeshi movement"],
      "options_hi": ["स्वतंत्रता आंदोलन", "चिपको आंदोलन", "नक्सलवादी आंदोलन", "स्वदेशी आंदोलन"],
      "answer": "Freedom movement",
      "answer_hi": "स्वतंत्रता आंदोलन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "What is the central idea of the poem 'Bhor ka Tara'?",
      "question_hi": "'भोर का तारा' कविता का केंद्रीय भाव क्या है?",
      "options_en": ["Hope", "Pain", "Sacrifice", "Patriotism"],
      "options_hi": ["आशा", "वेदना", "त्याग", "देशभक्ति"],
      "answer": "Hope",
      "answer_hi": "आशा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Who is the writer of 'Premchand ke Fate Joote'?",
      "question_hi": "'प्रेमचंद के फटे जूते' के लेखक कौन हैं?",
      "options_en": ["Ravindra Kalekar", "Raghuvir Sahay", "Harishankar Parsai", "Sudarshan"],
      "options_hi": ["रवींद्र कालेकर", "रघुवीर सहाय", "हरिशंकर परसाई", "सुदर्शन"],
      "answer": "Harishankar Parsai",
      "answer_hi": "हरिशंकर परसाई",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "What is the literary form of 'Manushyata'?",
      "question_hi": "'मनुष्यता' किस साहित्यिक विधा की रचना है?",
      "options_en": ["Essay", "Poem", "Story", "Drama"],
      "options_hi": ["निबंध", "कविता", "कहानी", "नाटक"],
      "answer": "Essay",
      "answer_hi": "निबंध",
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


