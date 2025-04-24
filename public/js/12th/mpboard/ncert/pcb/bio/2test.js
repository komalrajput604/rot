const questions = [ 
        {
          "num": 1,
          "question_en": "What is the main function of chlorophyll in plants?",
          "question_hi": "पौधों में क्लोरोफिल का मुख्य कार्य क्या है?",
          "options_en": ["Absorption of water", "Absorption of light", "Absorption of minerals", "Transpiration"],
          "options_hi": ["पानी का अवशोषण", "प्रकाश का अवशोषण", "खनिजों का अवशोषण", "वाष्पीकरण"],
          "answer": "Absorption of light",
          "answer_hi": "प्रकाश का अवशोषण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What is the genetic material in humans?",
          "question_hi": "मनुष्यों में आनुवंशिक सामग्री क्या होती है?",
          "options_en": ["DNA", "RNA", "Protein", "Lipids"],
          "options_hi": ["डीएनए", "आरएनए", "प्रोटीन", "लिपिड्स"],
          "answer": "DNA",
          "answer_hi": "डीएनए",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which part of the cell controls all its activities?",
          "question_hi": "कोशिका का कौन सा भाग उसकी सभी गतिविधियों को नियंत्रित करता है?",
          "options_en": ["Nucleus", "Cytoplasm", "Mitochondria", "Ribosome"],
          "options_hi": ["न्यूक्लियस", "साइटोप्लाज्म", "माइटोकॉन्ड्रिया", "राइबोसोम"],
          "answer": "Nucleus",
          "answer_hi": "न्यूक्लियस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "What is the powerhouse of the cell?",
          "question_hi": "कोशिका का ऊर्जा उत्पादक भाग कौन सा है?",
          "options_en": ["Nucleus", "Mitochondria", "Chloroplast", "Endoplasmic reticulum"],
          "options_hi": ["न्यूक्लियस", "माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "एंडोप्लाज्मिक रेटिकुलम"],
          "answer": "Mitochondria",
          "answer_hi": "माइटोकॉन्ड्रिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What is the basic unit of life?",
          "question_hi": "जीवन की बुनियादी इकाई क्या है?",
          "options_en": ["Atom", "Molecule", "Cell", "Tissue"],
          "options_hi": ["परमाणु", "अणु", "कोशिका", "ऊतक"],
          "answer": "Cell",
          "answer_hi": "कोशिका",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which part of the brain is responsible for controlling voluntary actions?",
          "question_hi": "मस्तिष्क का कौन सा भाग स्वैच्छिक क्रियाओं को नियंत्रित करता है?",
          "options_en": ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
          "options_hi": ["सेरेब्रुम", "सेरेबेलम", "मेडुला ऑब्लांगाटा", "हाइपोथैलेमस"],
          "answer": "Cerebrum",
          "answer_hi": "सेरेब्रुम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "What is the role of white blood cells in the body?",
          "question_hi": "शरीर में सफेद रक्त कणिकाओं का क्या कार्य है?",
          "options_en": ["Transport oxygen", "Fight infections", "Clot blood", "Digest food"],
          "options_hi": ["ऑक्सीजन का परिवहन", "संक्रमण से लड़ना", "रक्त का थक्का बनाना", "खाना पचाना"],
          "answer": "Fight infections",
          "answer_hi": "संक्रमण से लड़ना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which part of the plant conducts photosynthesis?",
          "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
          "options_en": ["Roots", "Stem", "Leaves", "Flowers"],
          "options_hi": ["मूल", "तना", "पत्तियाँ", "फूल"],
          "answer": "Leaves",
          "answer_hi": "पत्तियाँ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which of the following is a type of connective tissue?",
          "question_hi": "निम्नलिखित में से कौन सा संयोजी ऊतक का प्रकार है?",
          "options_en": ["Muscle tissue", "Bone tissue", "Nerve tissue", "Epithelial tissue"],
          "options_hi": ["पेशी ऊतक", "हड्डी ऊतक", "तंत्रिका ऊतक", "एपिथीलियल ऊतक"],
          "answer": "Bone tissue",
          "answer_hi": "हड्डी ऊतक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which part of the human eye controls the amount of light entering?",
          "question_hi": "मानव नेत्र का कौन सा भाग प्रकाश की मात्रा को नियंत्रित करता है?",
          "options_en": ["Cornea", "Pupil", "Lens", "Retina"],
          "options_hi": ["कॉर्निया", "प्यूपिल", "लेंस", "रेटिना"],
          "answer": "Pupil",
          "answer_hi": "प्यूपिल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which of the following is a characteristic of mammals?",
          "question_hi": "निम्नलिखित में से कौन सी विशेषता स्तनधारियों की है?",
          "options_en": ["Laying eggs", "Presence of feathers", "Presence of hair", "Cold-blooded"],
          "options_hi": ["अंडे देना", "पंखों की उपस्थिति", "बालों की उपस्थिति", "ठंडे खून वाले"],
          "answer": "Presence of hair",
          "answer_hi": "बालों की उपस्थिति",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What is the main function of red blood cells?",
          "question_hi": "लाल रक्त कणिकाओं का मुख्य कार्य क्या है?",
          "options_en": ["Fight infections", "Transport oxygen", "Clot blood", "Transport nutrients"],
          "options_hi": ["संक्रमण से लड़ना", "ऑक्सीजन का परिवहन", "रक्त का थक्का बनाना", "पोषक तत्वों का परिवहन"],
          "answer": "Transport oxygen",
          "answer_hi": "ऑक्सीजन का परिवहन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which hormone is responsible for the development of secondary sexual characteristics in females?",
          "question_hi": "महिलाओं में द्वितीयक यौन लक्षणों के विकास के लिए कौन सा हार्मोन जिम्मेदार है?",
          "options_en": ["Testosterone", "Estrogen", "Progesterone", "Insulin"],
          "options_hi": ["टेस्टोस्टेरोन", "एस्ट्रोजेन", "प्रोजेस्टेरोन", "इंसुलिन"],
          "answer": "Estrogen",
          "answer_hi": "एस्ट्रोजेन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which is the largest organ in the human body?",
          "question_hi": "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
          "options_en": ["Heart", "Lungs", "Liver", "Skin"],
          "options_hi": ["हृदय", "फेफड़े", "यकृत", "त्वचा"],
          "answer": "Skin",
          "answer_hi": "त्वचा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What is the function of the stomata in plants?",
          "question_hi": "पौधों में स्तोमेटा का क्या कार्य है?",
          "options_en": ["Absorption of water", "Exchange of gases", "Absorption of light", "Transport of nutrients"],
          "options_hi": ["पानी का अवशोषण", "गैसों का आदान-प्रदान", "प्रकाश का अवशोषण", "पोषक तत्वों का परिवहन"],
          "answer": "Exchange of gases",
          "answer_hi": "गैसों का आदान-प्रदान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "What is the process of cell division in which the chromosome number remains constant?",
          "question_hi": "कोशिका विभाजन की वह प्रक्रिया जिसमें गुणसूत्रों की संख्या स्थिर रहती है, क्या कहलाती है?",
          "options_en": ["Mitosis", "Meiosis", "Binary fission", "Germination"],
          "options_hi": ["माइटोसिस", "मियोसिस", "द्विगुण विभाजन", "विकासन"],
          "answer": "Mitosis",
          "answer_hi": "माइटोसिस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which of the following is an example of a unicellular organism?",
          "question_hi": "निम्नलिखित में से कौन एकलकोशिकीय जीव का उदाहरण है?",
          "options_en": ["Human", "Frog", "Amoeba", "Cow"],
          "options_hi": ["मानव", "मेंढ़क", "ऐमिबा", "गाय"],
          "answer": "Amoeba",
          "answer_hi": "ऐमिबा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which vitamin is essential for the absorption of calcium?",
          "question_hi": "कैल्शियम के अवशोषण के लिए कौन सा विटामिन आवश्यक है?",
          "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
          "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
          "answer": "Vitamin D",
          "answer_hi": "विटामिन D",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Where does the process of fertilization occur in humans?",
          "question_hi": "मनुष्यों में निषेचन की प्रक्रिया कहाँ होती है?",
          "options_en": ["Ovary", "Uterus", "Fallopian tube", "Vagina"],
          "options_hi": ["अंडाशय", "गर्भाशय", "फैलोपियन नलिका", "योनि"],
          "answer": "Fallopian tube",
          "answer_hi": "फैलोपियन नलिका",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which process is responsible for the release of energy in plants?",
          "question_hi": "पौधों में ऊर्जा के रिलीज होने के लिए कौन सी प्रक्रिया जिम्मेदार है?",
          "options_en": ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
          "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "वाष्पीकरण", "खमीरकरण"],
          "answer": "Respiration",
          "answer_hi": "श्वसन",
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


