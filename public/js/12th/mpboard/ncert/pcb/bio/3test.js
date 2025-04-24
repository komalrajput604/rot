const questions = [ 
        {
          "num": 1,
          "question_en": "What is the powerhouse of the cell?",
          "question_hi": "कोशिका का पावरहाउस क्या है?",
          "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
          "options_hi": ["न्यूक्लियस", "माइटोकॉन्ड्रिया", "राइबोसोम", "गोल्जी एपरेटस"],
          "answer": "Mitochondria",
          "answer_hi": "माइटोकॉन्ड्रिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which part of the brain controls balance and coordination?",
          "question_hi": "मस्तिष्क का कौन सा भाग संतुलन और समन्वय को नियंत्रित करता है?",
          "options_en": ["Cerebellum", "Cerebrum", "Medulla", "Hypothalamus"],
          "options_hi": ["सेरेबेलम", "सेरेब्रम", "मेडुला", "हाइपोथैलेमस"],
          "answer": "Cerebellum",
          "answer_hi": "सेरेबेलम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the main function of white blood cells?",
          "question_hi": "सफेद रक्त कणिकाओं का मुख्य कार्य क्या है?",
          "options_en": ["Oxygen transport", "Blood clotting", "Defending against infections", "Carrying nutrients"],
          "options_hi": ["ऑक्सीजन परिवहन", "रक्त के थक्के बनाना", "संक्रमणों से रक्षा करना", "पोषक तत्वों का परिवहन करना"],
          "answer": "Defending against infections",
          "answer_hi": "संक्रमणों से रक्षा करना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which organ is responsible for filtering blood in humans?",
          "question_hi": "मनुष्यों में रक्त छानने का कार्य कौन सा अंग करता है?",
          "options_en": ["Liver", "Kidney", "Heart", "Lungs"],
          "options_hi": ["यकृत", "गुर्दा", "हृदय", "फेफड़े"],
          "answer": "Kidney",
          "answer_hi": "गुर्दा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What is the term for the process of cell division that results in two identical cells?",
          "question_hi": "कोशिका विभाजन की प्रक्रिया को क्या कहा जाता है जिससे दो समान कोशिकाएँ बनती हैं?",
          "options_en": ["Meiosis", "Mitosis", "Binary fission", "Fertilization"],
          "options_hi": ["मियोसिस", "माइटोसिस", "द्वैध विभाजन", "निषेचन"],
          "answer": "Mitosis",
          "answer_hi": "माइटोसिस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which of the following is a non-renewable resource?",
          "question_hi": "निम्नलिखित में से कौन सा एक अविनाशी संसाधन है?",
          "options_en": ["Solar energy", "Wind energy", "Coal", "Biomass"],
          "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "जैविक ऊर्जा"],
          "answer": "Coal",
          "answer_hi": "कोयला",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which of the following processes is responsible for the release of energy in plants?",
          "question_hi": "निम्नलिखित में से कौन सा प्रक्रिया पौधों में ऊर्जा के विमोचन के लिए जिम्मेदार है?",
          "options_en": ["Photosynthesis", "Respiration", "Transpiration", "Digestion"],
          "options_hi": ["सौर संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "पाचन"],
          "answer": "Respiration",
          "answer_hi": "श्वसन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which organ in the human body produces insulin?",
          "question_hi": "मानव शरीर में कौन सा अंग इंसुलिन उत्पन्न करता है?",
          "options_en": ["Pancreas", "Liver", "Stomach", "Lungs"],
          "options_hi": ["अग्न्याशय", "यकृत", "पेट", "फेफड़े"],
          "answer": "Pancreas",
          "answer_hi": "अग्न्याशय",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which part of the plant is responsible for photosynthesis?",
          "question_hi": "पौधे का कौन सा भाग सौर संश्लेषण के लिए जिम्मेदार है?",
          "options_en": ["Roots", "Stem", "Leaves", "Flowers"],
          "options_hi": ["मूल", "तना", "पत्तियाँ", "फूल"],
          "answer": "Leaves",
          "answer_hi": "पत्तियाँ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is the basic unit of heredity?",
          "question_hi": "विरासत की बुनियादी इकाई क्या है?",
          "options_en": ["Gene", "Chromosome", "Cell", "DNA"],
          "options_hi": ["जीन", "क्रोमोसोम", "कोशिका", "डीएनए"],
          "answer": "Gene",
          "answer_hi": "जीन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which vitamin is synthesized by the human skin when exposed to sunlight?",
          "question_hi": "कौन सा विटामिन मानव त्वचा द्वारा सूर्य के प्रकाश के संपर्क में आने पर संश्लेषित होता है?",
          "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
          "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
          "answer": "Vitamin D",
          "answer_hi": "विटामिन D",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What is the name of the process by which plants lose water vapor?",
          "question_hi": "वह प्रक्रिया जिसका नाम पौधों द्वारा जलवाष्प खोने के लिए किया जाता है क्या है?",
          "options_en": ["Transpiration", "Evaporation", "Condensation", "Absorption"],
          "options_hi": ["वाष्पोत्सर्जन", "वाष्पीकरण", "संकुचन", "अवशोषण"],
          "answer": "Transpiration",
          "answer_hi": "वाष्पोत्सर्जन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which of the following is not a function of the liver?",
          "question_hi": "निम्नलिखित में से कौन सा यकृत का कार्य नहीं है?",
          "options_en": ["Bile production", "Detoxification", "Storage of glucose", "Blood cell formation"],
          "options_hi": ["पित्त उत्पादन", "डिटॉक्सीफिकेशन", "ग्लूकोज का संचयन", "रक्त कोशिका निर्माण"],
          "answer": "Blood cell formation",
          "answer_hi": "रक्त कोशिका निर्माण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which of the following is a characteristic feature of mammals?",
          "question_hi": "निम्नलिखित में से कौन सा विशेषता स्तनधारियों की है?",
          "options_en": ["Laying eggs", "Cold-blooded", "Presence of hair/fur", "Gills for breathing"],
          "options_hi": ["अंडे देना", "ठंडे रक्त वाले", "बाल/रोएं का होना", "श्वास के लिए गलफड़े"],
          "answer": "Presence of hair/fur",
          "answer_hi": "बाल/रोएं का होना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What type of bond holds the two strands of a DNA molecule together?",
          "question_hi": "किस प्रकार का बंध दो स्ट्रैंड्स को एक साथ जोड़ता है DNA अणु में?",
          "options_en": ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"],
          "options_hi": ["आयनिक बंध", "कोवलेंट बंध", "हाइड्रोजन बंध", "धात्विक बंध"],
          "answer": "Hydrogen bond",
          "answer_hi": "हाइड्रोजन बंध",
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


