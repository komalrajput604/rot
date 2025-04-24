const questions = [ 
  
        {
          "num": 1,
          "question_en": "Which of the following is a vestigial organ in humans?",
          "question_hi": "निम्न में से कौन-सा मानव में एक अपVestigial अंग है?",
          "options_en": ["Liver", "Appendix", "Heart", "Lungs"],
          "options_hi": ["यकृत", "अपेंडिक्स", "हृदय", "फेफड़े"],
          "answer": "Appendix",
          "answer_hi": "अपेंडिक्स",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "The functional unit of kidney is called?",
          "question_hi": "गुर्दे की कार्यात्मक इकाई को क्या कहते हैं?",
          "options_en": ["Neuron", "Nephron", "Axon", "Alveoli"],
          "options_hi": ["न्यूरॉन", "नेफ्रॉन", "एक्सॉन", "एल्वियोली"],
          "answer": "Nephron",
          "answer_hi": "नेफ्रॉन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which hormone is responsible for the 'fight or flight' response?",
          "question_hi": "'लड़ो या भागो' प्रतिक्रिया के लिए कौन-सा हार्मोन उत्तरदायी होता है?",
          "options_en": ["Adrenaline", "Insulin", "Thyroxine", "Estrogen"],
          "options_hi": ["एड्रेनालिन", "इंसुलिन", "थायरॉक्सिन", "एस्ट्रोजन"],
          "answer": "Adrenaline",
          "answer_hi": "एड्रेनालिन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which part of the brain controls voluntary movements?",
          "question_hi": "मस्तिष्क का कौन-सा भाग स्वैच्छिक गतिविधियों को नियंत्रित करता है?",
          "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
          "options_hi": ["सेरेब्रलम", "सेरेबेलम", "मेडुला", "पॉन्स"],
          "answer": "Cerebrum",
          "answer_hi": "सेरेब्रलम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which blood group is called the universal donor?",
          "question_hi": "कौन-सा रक्त समूह सार्वत्रिक दाता कहलाता है?",
          "options_en": ["AB+", "O-", "A+", "B-"],
          "options_hi": ["AB+", "O-", "A+", "B-"],
          "answer": "O-",
          "answer_hi": "O-",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which enzyme is present in saliva?",
          "question_hi": "लार में कौन-सा एंजाइम उपस्थित होता है?",
          "options_en": ["Pepsin", "Trypsin", "Amylase", "Lipase"],
          "options_hi": ["पेप्सिन", "ट्रिप्सिन", "एमाइलेज", "लाइपेस"],
          "answer": "Amylase",
          "answer_hi": "एमाइलेज",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which vitamin is produced in the skin on exposure to sunlight?",
          "question_hi": "सूर्य के प्रकाश में त्वचा में कौन-सा विटामिन बनता है?",
          "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
          "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
          "answer": "Vitamin D",
          "answer_hi": "विटामिन D",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which disease is caused by the deficiency of insulin?",
          "question_hi": "इंसुलिन की कमी से कौन-सा रोग होता है?",
          "options_en": ["Goitre", "Anaemia", "Diabetes", "Rickets"],
          "options_hi": ["घेंघा", "खून की कमी", "मधुमेह", "रिकेट्स"],
          "answer": "Diabetes",
          "answer_hi": "मधुमेह",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which is the largest gland in the human body?",
          "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन-सी है?",
          "options_en": ["Pancreas", "Liver", "Thyroid", "Pituitary"],
          "options_hi": ["अग्न्याशय", "यकृत", "थायरॉइड", "पिट्यूटरी"],
          "answer": "Liver",
          "answer_hi": "यकृत",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which part of the flower becomes the fruit?",
          "question_hi": "फूल का कौन-सा भाग फल बनता है?",
          "options_en": ["Petal", "Ovule", "Ovary", "Stamen"],
          "options_hi": ["पंखुड़ी", "बीजांड", "अंडाशय", "केसर"],
          "answer": "Ovary",
          "answer_hi": "अंडाशय",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which gas is released during photosynthesis?",
          "question_hi": "प्रकाश संश्लेषण के दौरान कौन-सी गैस निकलती है?",
          "options_en": ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
          "options_hi": ["कार्बन डाइऑक्साइड", "नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन"],
          "answer": "Oxygen",
          "answer_hi": "ऑक्सीजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What is the powerhouse of the cell?",
          "question_hi": "कोशिका का शक्ति गृह क्या कहलाता है?",
          "options_en": ["Nucleus", "Ribosome", "Chloroplast", "Mitochondria"],
          "options_hi": ["नाभिक", "राइबोसोम", "क्लोरोप्लास्ट", "माइटोकॉन्ड्रिया"],
          "answer": "Mitochondria",
          "answer_hi": "माइटोकॉन्ड्रिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which disease is caused by Plasmodium?",
          "question_hi": "प्लास्मोडियम से कौन-सा रोग होता है?",
          "options_en": ["Typhoid", "Dengue", "Malaria", "Cholera"],
          "options_hi": ["टाइफॉइड", "डेंगू", "मलेरिया", "हैजा"],
          "answer": "Malaria",
          "answer_hi": "मलेरिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which is the structural and functional unit of life?",
          "question_hi": "जीवन की संरचनात्मक और क्रियात्मक इकाई क्या है?",
          "options_en": ["Tissue", "Organ", "Cell", "Organism"],
          "options_hi": ["ऊतक", "अंग", "कोशिका", "जीव"],
          "answer": "Cell",
          "answer_hi": "कोशिका",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Where does fertilization occur in humans?",
          "question_hi": "मानवों में निषेचन कहाँ होता है?",
          "options_en": ["Uterus", "Ovary", "Fallopian tube", "Vagina"],
          "options_hi": ["गर्भाशय", "अंडाशय", "फैलोपियन ट्यूब", "योनि"],
          "answer": "Fallopian tube",
          "answer_hi": "फैलोपियन ट्यूब",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "What is the chromosome number in human sperm?",
          "question_hi": "मानव शुक्राणु में कितने गुणसूत्र होते हैं?",
          "options_en": ["23", "46", "44", "22"],
          "options_hi": ["23", "46", "44", "22"],
          "answer": "23",
          "answer_hi": "23",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Who is known as the father of genetics?",
          "question_hi": "अनुवांशिकी का जनक किसे कहा जाता है?",
          "options_en": ["Darwin", "Mendel", "Lamarck", "Pasteur"],
          "options_hi": ["डार्विन", "मेंडल", "लामार्क", "पाश्चर"],
          "answer": "Mendel",
          "answer_hi": "मेंडल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which blood component helps in clotting?",
          "question_hi": "रक्त का कौन-सा घटक थक्के बनाने में मदद करता है?",
          "options_en": ["RBC", "WBC", "Plasma", "Platelets"],
          "options_hi": ["लाल रक्त कण", "श्वेत रक्त कण", "प्लाज्मा", "प्लेटलेट्स"],
          "answer": "Platelets",
          "answer_hi": "प्लेटलेट्स",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which plant hormone promotes cell elongation?",
          "question_hi": "कौन-सा पादप हार्मोन कोशिका लम्बाई में वृद्धि करता है?",
          "options_en": ["Auxin", "Cytokinin", "Ethylene", "Abscisic Acid"],
          "options_hi": ["ऑक्सिन", "साइटोकाइनिन", "एथिलीन", "एब्सिसिक अम्ल"],
          "answer": "Auxin",
          "answer_hi": "ऑक्सिन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which of the following is a sexually transmitted disease?",
          "question_hi": "निम्न में से कौन-सा एक यौन संचारित रोग है?",
          "options_en": ["Tuberculosis", "AIDS", "Asthma", "Typhoid"],
          "options_hi": ["क्षय रोग", "एड्स", "दमा", "टाइफॉइड"],
          "answer": "AIDS",
          "answer_hi": "एड्स",
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


