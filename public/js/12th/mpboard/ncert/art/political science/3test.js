const questions = [ 

        {
          "num": 1,
          "question_en": "Who was the first Chief Election Commissioner of India?",
          "question_hi": "भारत के पहले मुख्य चुनाव आयुक्त कौन थे?",
          "options_en": ["Sukumar Sen", "T.N. Seshan", "Rajiv Kumar", "M.S. Gill"],
          "options_hi": ["सुकुमार सेन", "टी. एन. शेषन", "राजीव कुमार", "एम. एस. गिल"],
          "answer": "Sukumar Sen",
          "answer_hi": "सुकुमार सेन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which Article of the Indian Constitution provides for the Election Commission?",
          "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद निर्वाचन आयोग का प्रावधान करता है?",
          "options_en": ["Article 324", "Article 356", "Article 370", "Article 352"],
          "options_hi": ["अनुच्छेद 324", "अनुच्छेद 356", "अनुच्छेद 370", "अनुच्छेद 352"],
          "answer": "Article 324",
          "answer_hi": "अनुच्छेद 324",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "In which year did India have its first general elections?",
          "question_hi": "भारत में पहले आम चुनाव किस वर्ष हुए थे?",
          "options_en": ["1951-52", "1947", "1950", "1955"],
          "options_hi": ["1951-52", "1947", "1950", "1955"],
          "answer": "1951-52",
          "answer_hi": "1951-52",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which political party gave the slogan 'Garibi Hatao'?",
          "question_hi": "'गरीबी हटाओ' का नारा किस राजनीतिक दल ने दिया था?",
          "options_en": ["Congress", "BJP", "CPI", "SP"],
          "options_hi": ["कांग्रेस", "भाजपा", "भा.क.पा.", "सपा"],
          "answer": "Congress",
          "answer_hi": "कांग्रेस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which institution resolves disputes between states in India?",
          "question_hi": "भारत में राज्यों के बीच विवाद कौन सा संस्थान सुलझाता है?",
          "options_en": ["Supreme Court", "Parliament", "President", "Election Commission"],
          "options_hi": ["सुप्रीम कोर्ट", "संसद", "राष्ट्रपति", "निर्वाचन आयोग"],
          "answer": "Supreme Court",
          "answer_hi": "सुप्रीम कोर्ट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Who appoints the Chief Election Commissioner of India?",
          "question_hi": "भारत के मुख्य चुनाव आयुक्त की नियुक्ति कौन करता है?",
          "options_en": ["President", "Prime Minister", "Lok Sabha", "Supreme Court"],
          "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "लोकसभा", "सुप्रीम कोर्ट"],
          "answer": "President",
          "answer_hi": "राष्ट्रपति",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "When was the Emergency declared in India?",
          "question_hi": "भारत में आपातकाल कब लगाया गया था?",
          "options_en": ["1975", "1962", "1984", "1991"],
          "options_hi": ["1975", "1962", "1984", "1991"],
          "answer": "1975",
          "answer_hi": "1975",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which state was the first to be reorganized on a linguistic basis?",
          "question_hi": "कौन सा राज्य भाषाई आधार पर सबसे पहले पुनर्गठित किया गया था?",
          "options_en": ["Andhra Pradesh", "Tamil Nadu", "Kerala", "Punjab"],
          "options_hi": ["आंध्र प्रदेश", "तमिलनाडु", "केरल", "पंजाब"],
          "answer": "Andhra Pradesh",
          "answer_hi": "आंध्र प्रदेश",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What does the term 'coalition government' mean?",
          "question_hi": "'गठबंधन सरकार' शब्द का क्या अर्थ है?",
          "options_en": ["Government by multiple parties", "Rule by the army", "Monarchy rule", "Single party rule"],
          "options_hi": ["अनेक दलों द्वारा सरकार", "सेना द्वारा शासन", "राजतंत्र का शासन", "एकल दल का शासन"],
          "answer": "Government by multiple parties",
          "answer_hi": "अनेक दलों द्वारा सरकार",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Who was the Prime Minister of India during the Emergency in 1975?",
          "question_hi": "1975 के आपातकाल के समय भारत के प्रधानमंत्री कौन थे?",
          "options_en": ["Indira Gandhi", "Rajiv Gandhi", "Morarji Desai", "Lal Bahadur Shastri"],
          "options_hi": ["इंदिरा गांधी", "राजीव गांधी", "मोरारजी देसाई", "लाल बहादुर शास्त्री"],
          "answer": "Indira Gandhi",
          "answer_hi": "इंदिरा गांधी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which party emerged as a major opposition in 1977 elections?",
          "question_hi": "1977 के चुनाव में कौन सी पार्टी एक प्रमुख विपक्ष के रूप में उभरी?",
          "options_en": ["Janata Party", "Congress", "CPI", "BJP"],
          "options_hi": ["जनता पार्टी", "कांग्रेस", "भा.क.पा.", "भाजपा"],
          "answer": "Janata Party",
          "answer_hi": "जनता पार्टी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which Indian state was formed in the year 2000?",
          "question_hi": "वर्ष 2000 में कौन सा भारतीय राज्य बना था?",
          "options_en": ["Chhattisgarh", "Maharashtra", "Kerala", "Assam"],
          "options_hi": ["छत्तीसगढ़", "महाराष्ट्र", "केरल", "असम"],
          "answer": "Chhattisgarh",
          "answer_hi": "छत्तीसगढ़",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which movement was started by Jayaprakash Narayan?",
          "question_hi": "जयप्रकाश नारायण द्वारा कौन सा आंदोलन शुरू किया गया था?",
          "options_en": ["Total Revolution", "Non-cooperation", "Quit India", "Swadeshi"],
          "options_hi": ["सम्पूर्ण क्रांति", "असहयोग आंदोलन", "भारत छोड़ो आंदोलन", "स्वदेशी आंदोलन"],
          "answer": "Total Revolution",
          "answer_hi": "सम्पूर्ण क्रांति",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which party was in power during liberalization of India’s economy in 1991?",
          "question_hi": "1991 में भारत की अर्थव्यवस्था के उदारीकरण के समय कौन सी पार्टी सत्ता में थी?",
          "options_en": ["Congress", "BJP", "CPI(M)", "SP"],
          "options_hi": ["कांग्रेस", "भाजपा", "भा.क.पा.(मा)", "सपा"],
          "answer": "Congress",
          "answer_hi": "कांग्रेस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What is the minimum age for voting in India?",
          "question_hi": "भारत में मतदान के लिए न्यूनतम आयु कितनी है?",
          "options_en": ["18 years", "21 years", "25 years", "16 years"],
          "options_hi": ["18 वर्ष", "21 वर्ष", "25 वर्ष", "16 वर्ष"],
          "answer": "18 years",
          "answer_hi": "18 वर्ष",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which body is responsible for conducting elections in India?",
          "question_hi": "भारत में चुनाव कराने के लिए कौन सी संस्था जिम्मेदार है?",
          "options_en": ["Election Commission", "Supreme Court", "Lok Sabha", "President"],
          "options_hi": ["निर्वाचन आयोग", "सुप्रीम कोर्ट", "लोकसभा", "राष्ट्रपति"],
          "answer": "Election Commission",
          "answer_hi": "निर्वाचन आयोग",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which of the following is NOT a national party in India?",
          "question_hi": "निम्नलिखित में से कौन भारत की राष्ट्रीय पार्टी नहीं है?",
          "options_en": ["Shiv Sena", "BJP", "Congress", "CPI"],
          "options_hi": ["शिवसेना", "भाजपा", "कांग्रेस", "भा.क.पा."],
          "answer": "Shiv Sena",
          "answer_hi": "शिवसेना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "What does the term 'Secularism' mean in Indian context?",
          "question_hi": "भारतीय संदर्भ में 'धर्मनिरपेक्षता' शब्द का क्या अर्थ है?",
          "options_en": ["Equal respect for all religions", "Rule by majority religion", "No religion", "Promotion of one religion"],
          "options_hi": ["सभी धर्मों के प्रति समान सम्मान", "बहुसंख्यक धर्म का शासन", "कोई धर्म नहीं", "एक धर्म का प्रचार"],
          "answer": "Equal respect for all religions",
          "answer_hi": "सभी धर्मों के प्रति समान सम्मान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which body recommends the names for Rajya Sabha nomination?",
          "question_hi": "राज्यसभा में नामांकन के लिए नामों की सिफारिश कौन करता है?",
          "options_en": ["Cabinet", "President", "Prime Minister", "Election Commission"],
          "options_hi": ["मंत्रिमंडल", "राष्ट्रपति", "प्रधानमंत्री", "निर्वाचन आयोग"],
          "answer": "Cabinet",
          "answer_hi": "मंत्रिमंडल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which amendment lowered the voting age from 21 to 18 years?",
          "question_hi": "किस संशोधन द्वारा मतदान की आयु 21 वर्ष से घटाकर 18 वर्ष की गई थी?",
          "options_en": ["61st Amendment", "42nd Amendment", "44th Amendment", "52nd Amendment"],
          "options_hi": ["61वां संशोधन", "42वां संशोधन", "44वां संशोधन", "52वां संशोधन"],
          "answer": "61st Amendment",
          "answer_hi": "61वां संशोधन",
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


