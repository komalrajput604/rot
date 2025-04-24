const questions = [ 
    

    {
      "num": 1,
      "question_en": "Which element forms the highest number of compounds?",
      "question_hi": "कौन सा तत्व सबसे अधिक यौगिक बनाता है?",
      "options_en": ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
      "options_hi": ["ऑक्सीजन", "कार्बन", "हाइड्रोजन", "नाइट्रोजन"],
      "answer": "Carbon",
      "answer_hi": "कार्बन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "What is the IUPAC name of CH3CHO?",
      "question_hi": "CH3CHO का IUPAC नाम क्या है?",
      "options_en": ["Ethanal", "Ethanoic acid", "Methanal", "Ethanol"],
      "options_hi": ["एथनल", "एथनोइक अम्ल", "मेथनल", "एथनॉल"],
      "answer": "Ethanal",
      "answer_hi": "एथनल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Which of the following is an example of thermosetting polymer?",
      "question_hi": "निम्नलिखित में से कौन थर्मोसेटिंग पॉलिमर का उदाहरण है?",
      "options_en": ["Polythene", "Bakelite", "PVC", "Teflon"],
      "options_hi": ["पॉलीथीन", "बेकलाइट", "पीवीसी", "टेफ्लॉन"],
      "answer": "Bakelite",
      "answer_hi": "बेकलाइट",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "What is the pH of pure water at 25°C?",
      "question_hi": "25°C पर शुद्ध जल का pH क्या होता है?",
      "options_en": ["0", "7", "14", "1"],
      "options_hi": ["0", "7", "14", "1"],
      "answer": "7",
      "answer_hi": "7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Which compound is used in photography?",
      "question_hi": "फोटोग्राफी में किस यौगिक का उपयोग किया जाता है?",
      "options_en": ["Silver chloride", "Sodium chloride", "Potassium iodide", "Calcium carbonate"],
      "options_hi": ["सिल्वर क्लोराइड", "सोडियम क्लोराइड", "पोटेशियम आयोडाइड", "कैल्शियम कार्बोनेट"],
      "answer": "Silver chloride",
      "answer_hi": "सिल्वर क्लोराइड",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Which acid is present in ant sting?",
      "question_hi": "चींटी के डंक में कौन सा अम्ल होता है?",
      "options_en": ["Formic acid", "Acetic acid", "Citric acid", "Oxalic acid"],
      "options_hi": ["फॉर्मिक अम्ल", "एसेटिक अम्ल", "साइट्रिक अम्ल", "ऑक्सैलिक अम्ल"],
      "answer": "Formic acid",
      "answer_hi": "फॉर्मिक अम्ल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Which gas is evolved during the reaction of acids with metals?",
      "question_hi": "धातुओं के साथ अम्ल की प्रतिक्रिया में कौन सी गैस निकलती है?",
      "options_en": ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
      "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
      "answer": "Hydrogen",
      "answer_hi": "हाइड्रोजन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Which vitamin is synthesized from cholesterol?",
      "question_hi": "कौन सा विटामिन कोलेस्ट्रॉल से संश्लेषित होता है?",
      "options_en": ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin K"],
      "options_hi": ["विटामिन A", "विटामिन D", "विटामिन C", "विटामिन K"],
      "answer": "Vitamin D",
      "answer_hi": "विटामिन D",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Which indicator is used in acid-base titration?",
      "question_hi": "अम्ल-क्षार टाइट्रेशन में कौन सा सूचक उपयोग होता है?",
      "options_en": ["Phenolphthalein", "Litmus", "Methyl orange", "All of these"],
      "options_hi": ["फिनॉलफ्थेलिन", "लिटमस", "मेथिल ऑरेंज", "इनमें से सभी"],
      "answer": "All of these",
      "answer_hi": "इनमें से सभी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Which is the main ore of Aluminium?",
      "question_hi": "एलुमिनियम का मुख्य अयस्क कौन सा है?",
      "options_en": ["Bauxite", "Hematite", "Magnetite", "Calcite"],
      "options_hi": ["बॉक्साइट", "हीमैटाइट", "मैग्नेटाइट", "कैल्साइट"],
      "answer": "Bauxite",
      "answer_hi": "बॉक्साइट",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "Which alcohol is present in alcoholic drinks?",
      "question_hi": "मादक पेयों में कौन सा एल्कोहल होता है?",
      "options_en": ["Methanol", "Ethanol", "Propanol", "Butanol"],
      "options_hi": ["मेथनॉल", "एथनॉल", "प्रोपेनॉल", "ब्यूटेनॉल"],
      "answer": "Ethanol",
      "answer_hi": "एथनॉल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "What is the chemical formula of quick lime?",
      "question_hi": "क्विक लाइम का रासायनिक सूत्र क्या है?",
      "options_en": ["CaCO₃", "Ca(OH)₂", "CaO", "CaCl₂"],
      "options_hi": ["CaCO₃", "Ca(OH)₂", "CaO", "CaCl₂"],
      "answer": "CaO",
      "answer_hi": "CaO",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "Which gas turns lime water milky?",
      "question_hi": "कौन सी गैस चूने के पानी को दूधिया कर देती है?",
      "options_en": ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
      "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
      "answer": "Carbon dioxide",
      "answer_hi": "कार्बन डाइऑक्साइड",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Which one is an aromatic compound?",
      "question_hi": "इनमें से कौन सा एरोमैटिक यौगिक है?",
      "options_en": ["Benzene", "Methane", "Ethene", "Propane"],
      "options_hi": ["बेंजीन", "मीथेन", "एथीन", "प्रोपेन"],
      "answer": "Benzene",
      "answer_hi": "बेंजीन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "Which gas is used in Haber process?",
      "question_hi": "हेबर प्रक्रिया में किस गैस का उपयोग होता है?",
      "options_en": ["Hydrogen", "Oxygen", "Carbon monoxide", "Chlorine"],
      "options_hi": ["हाइड्रोजन", "ऑक्सीजन", "कार्बन मोनोऑक्साइड", "क्लोरीन"],
      "answer": "Hydrogen",
      "answer_hi": "हाइड्रोजन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "Which gas is known as laughing gas?",
      "question_hi": "हंसाने वाली गैस किसे कहते हैं?",
      "options_en": ["Nitric oxide", "Nitrogen dioxide", "Nitrous oxide", "Ammonia"],
      "options_hi": ["नाइट्रिक ऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "नाइट्रस ऑक्साइड", "अमोनिया"],
      "answer": "Nitrous oxide",
      "answer_hi": "नाइट्रस ऑक्साइड",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "The formula of bleaching powder is:",
      "question_hi": "ब्लीचिंग पाउडर का सूत्र क्या है?",
      "options_en": ["Ca(ClO)₂", "CaOCl₂", "CaCl₂", "Ca(OH)₂"],
      "options_hi": ["Ca(ClO)₂", "CaOCl₂", "CaCl₂", "Ca(OH)₂"],
      "answer": "CaOCl₂",
      "answer_hi": "CaOCl₂",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "Which among the following is used in antiseptic creams?",
      "question_hi": "निम्नलिखित में से किसका उपयोग एंटीसेप्टिक क्रीम में होता है?",
      "options_en": ["Iodine", "Phenol", "Boric acid", "Chloroform"],
      "options_hi": ["आयोडीन", "फिनोल", "बोरिक अम्ल", "क्लोरोफॉर्म"],
      "answer": "Boric acid",
      "answer_hi": "बोरिक अम्ल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Which is an example of double salt?",
      "question_hi": "डबल लवण का एक उदाहरण कौन सा है?",
      "options_en": ["Mohr's salt", "NaCl", "KNO₃", "MgCl₂"],
      "options_hi": ["मोहर का लवण", "NaCl", "KNO₃", "MgCl₂"],
      "answer": "Mohr's salt",
      "answer_hi": "मोहर का लवण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "Which compound is known as blue vitriol?",
      "question_hi": "कौन सा यौगिक 'ब्लू विट्रिऑल' के नाम से जाना जाता है?",
      "options_en": ["CuSO₄·5H₂O", "FeSO₄", "ZnSO₄", "MgSO₄"],
      "options_hi": ["CuSO₄·5H₂O", "FeSO₄", "ZnSO₄", "MgSO₄"],
      "answer": "CuSO₄·5H₂O",
      "answer_hi": "CuSO₄·5H₂O",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_en": "Which is the strongest acid among the following?",
      "question_hi": "निम्नलिखित में से सबसे प्रबल अम्ल कौन सा है?",
      "options_en": ["HCl", "H₂SO₄", "HNO₃", "HI"],
      "options_hi": ["HCl", "H₂SO₄", "HNO₃", "HI"],
      "answer": "HI",
      "answer_hi": "HI",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_en": "Which of these is a non-metal?",
      "question_hi": "इनमें से कौन अधातु है?",
      "options_en": ["Aluminium", "Sulphur", "Magnesium", "Calcium"],
      "options_hi": ["एल्युमिनियम", "सल्फर", "मैग्नीशियम", "कैल्शियम"],
      "answer": "Sulphur",
      "answer_hi": "सल्फर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_en": "Which gas is used in soda water?",
      "question_hi": "सोडा पानी में कौन सी गैस होती है?",
      "options_en": ["CO₂", "O₂", "H₂", "Cl₂"],
      "options_hi": ["CO₂", "O₂", "H₂", "Cl₂"],
      "answer": "CO₂",
      "answer_hi": "CO₂",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_en": "Which is a reducing sugar?",
      "question_hi": "कौन सी एक अवकरणशील चीनी है?",
      "options_en": ["Glucose", "Sucrose", "Starch", "Cellulose"],
      "options_hi": ["ग्लूकोज़", "सुक्रोज़", "स्टार्च", "सेलुलोज़"],
      "answer": "Glucose",
      "answer_hi": "ग्लूकोज़",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_en": "Which is a synthetic detergent?",
      "question_hi": "कौन सा एक कृत्रिम डिटर्जेंट है?",
      "options_en": ["Soap", "SDS", "Washing soda", "Bleaching powder"],
      "options_hi": ["साबुन", "एसडीएस", "वॉशिंग सोडा", "ब्लीचिंग पाउडर"],
      "answer": "SDS",
      "answer_hi": "एसडीएस",
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


