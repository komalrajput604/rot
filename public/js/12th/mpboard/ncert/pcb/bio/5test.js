const questions = [ 
   
        {
          "num": 1,
          "question_en": "Which part of the brain controls the heart rate?",
          "question_hi": "मस्तिष्क का कौन सा भाग हृदय गति को नियंत्रित करता है?",
          "options_en": ["Cerebrum", "Cerebellum", "Medulla oblongata", "Pons"],
          "options_hi": ["सेरिब्रलम", "सेरिबेलम", "मेडुला ऑब्लोंगाटा", "पॉन्स"],
          "answer": "Medulla oblongata",
          "answer_hi": "मेडुला ऑब्लोंगाटा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which hormone is known as the emergency hormone?",
          "question_hi": "कौन सा हार्मोन 'आपातकालीन हार्मोन' कहलाता है?",
          "options_en": ["Insulin", "Adrenaline", "Thyroxine", "Glucagon"],
          "options_hi": ["इंसुलिन", "एड्रेनालाईन", "थायरॉक्सिन", "ग्लूकागन"],
          "answer": "Adrenaline",
          "answer_hi": "एड्रेनालाईन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which is the structural and functional unit of kidney?",
          "question_hi": "वृक्क की संरचनात्मक और क्रियात्मक इकाई क्या है?",
          "options_en": ["Neuron", "Nephron", "Glomerulus", "Ureter"],
          "options_hi": ["न्यूरॉन", "नेफ्रॉन", "ग्लोमेरुलस", "यूरीटर"],
          "answer": "Nephron",
          "answer_hi": "नेफ्रॉन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "What is the process of formation of sperm called?",
          "question_hi": "शुक्राणु बनने की प्रक्रिया को क्या कहते हैं?",
          "options_en": ["Spermatogenesis", "Oogenesis", "Fertilization", "Ovulation"],
          "options_hi": ["स्पर्मेटोजेनेसिस", "ऊजेनिसिस", "निषेचन", "अंडोत्सर्जन"],
          "answer": "Spermatogenesis",
          "answer_hi": "स्पर्मेटोजेनेसिस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which vitamin is synthesized in the skin by sunlight?",
          "question_hi": "सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
          "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
          "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
          "answer": "Vitamin D",
          "answer_hi": "विटामिन D",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which blood cells are responsible for clotting of blood?",
          "question_hi": "रक्त का थक्का जमाने के लिए कौन सी रक्त कोशिकाएँ उत्तरदायी होती हैं?",
          "options_en": ["RBC", "WBC", "Platelets", "Plasma"],
          "options_hi": ["लाल रक्त कोशिका", "श्वेत रक्त कोशिका", "प्लेटलेट्स", "प्लाज़्मा"],
          "answer": "Platelets",
          "answer_hi": "प्लेटलेट्स",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which gland is called the master gland?",
          "question_hi": "किस ग्रंथि को 'मुख्य ग्रंथि' कहा जाता है?",
          "options_en": ["Thyroid", "Adrenal", "Pituitary", "Pancreas"],
          "options_hi": ["थायरॉयड", "एड्रिनल", "पिट्यूटरी", "अग्न्याशय"],
          "answer": "Pituitary",
          "answer_hi": "पिट्यूटरी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What is the normal pH of human blood?",
          "question_hi": "मानव रक्त का सामान्य pH क्या होता है?",
          "options_en": ["6.8", "7.0", "7.4", "8.0"],
          "options_hi": ["6.8", "7.0", "7.4", "8.0"],
          "answer": "7.4",
          "answer_hi": "7.4",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which is the longest bone in the human body?",
          "question_hi": "मानव शरीर में सबसे लंबी हड्डी कौन सी होती है?",
          "options_en": ["Tibia", "Humerus", "Femur", "Radius"],
          "options_hi": ["टिबिया", "ह्यूमरस", "फीमर", "रेडियस"],
          "answer": "Femur",
          "answer_hi": "फीमर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which part of the flower develops into fruit?",
          "question_hi": "फूल का कौन सा भाग फल में परिवर्तित होता है?",
          "options_en": ["Petal", "Ovule", "Ovary", "Stigma"],
          "options_hi": ["पंखुड़ी", "बीजांड", "अंडाशय", "वर्तिकाग्र"],
          "answer": "Ovary",
          "answer_hi": "अंडाशय",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which gas is used by plants during photosynthesis?",
          "question_hi": "पौधे प्रकाश संश्लेषण के दौरान किस गैस का उपयोग करते हैं?",
          "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
          "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
          "answer": "Carbon dioxide",
          "answer_hi": "कार्बन डाइऑक्साइड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Where does fertilization occur in human females?",
          "question_hi": "मानव मादा में निषेचन कहाँ होता है?",
          "options_en": ["Ovary", "Uterus", "Vagina", "Fallopian tube"],
          "options_hi": ["अंडाशय", "गर्भाशय", "योनि", "फैलोपियन नली"],
          "answer": "Fallopian tube",
          "answer_hi": "फैलोपियन नली",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which part of the brain maintains posture and balance?",
          "question_hi": "मस्तिष्क का कौन सा भाग शरीर की स्थिति और संतुलन बनाए रखता है?",
          "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
          "options_hi": ["सेरिब्रम", "सेरिबेलम", "मेडुला", "थैलेमस"],
          "answer": "Cerebellum",
          "answer_hi": "सेरिबेलम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which is the largest gland in the human body?",
          "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
          "options_en": ["Thyroid", "Pancreas", "Liver", "Adrenal"],
          "options_hi": ["थायरॉयड", "अग्न्याशय", "यकृत", "एड्रिनल"],
          "answer": "Liver",
          "answer_hi": "यकृत",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which structure in the eye is responsible for vision?",
          "question_hi": "आँख की कौन सी संरचना दृष्टि के लिए उत्तरदायी है?",
          "options_en": ["Cornea", "Iris", "Retina", "Lens"],
          "options_hi": ["कॉर्निया", "आईरिस", "रेटिना", "लेंस"],
          "answer": "Retina",
          "answer_hi": "रेटिना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which is the functional unit of the nervous system?",
          "question_hi": "तंत्रिका तंत्र की क्रियात्मक इकाई कौन सी है?",
          "options_en": ["Neuron", "Axon", "Dendrite", "Synapse"],
          "options_hi": ["न्यूरॉन", "एक्सॉन", "डेंड्राइट", "सिनेप्स"],
          "answer": "Neuron",
          "answer_hi": "न्यूरॉन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "What is the primary function of xylem?",
          "question_hi": "जाइलम का मुख्य कार्य क्या है?",
          "options_en": ["Transport of food", "Transport of water", "Photosynthesis", "Reproduction"],
          "options_hi": ["भोजन का परिवहन", "जल का परिवहन", "प्रकाश संश्लेषण", "प्रजनन"],
          "answer": "Transport of water",
          "answer_hi": "जल का परिवहन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which part of nephron filters the blood?",
          "question_hi": "नेफ्रॉन का कौन सा भाग रक्त को छानता है?",
          "options_en": ["Bowman's capsule", "Loop of Henle", "Collecting duct", "Tubule"],
          "options_hi": ["बोमेन कैप्सूल", "हेंले का लूप", "संग्रह नली", "नलिका"],
          "answer": "Bowman's capsule",
          "answer_hi": "बोमेन कैप्सूल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What is the main excretory product in humans?",
          "question_hi": "मानव में मुख्य उत्सर्जी पदार्थ कौन सा है?",
          "options_en": ["Ammonia", "Urea", "Uric acid", "Carbon dioxide"],
          "options_hi": ["अमोनिया", "यूरिया", "यूरिक एसिड", "कार्बन डाइऑक्साइड"],
          "answer": "Urea",
          "answer_hi": "यूरिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which organ secretes insulin?",
          "question_hi": "इंसुलिन किस अंग द्वारा स्रावित होता है?",
          "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
          "options_hi": ["यकृत", "अग्न्याशय", "वृक्क", "पेट"],
          "answer": "Pancreas",
          "answer_hi": "अग्न्याशय",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Which protein is present in hair and nails?",
          "question_hi": "बालों और नाखूनों में कौन सा प्रोटीन पाया जाता है?",
          "options_en": ["Keratin", "Collagen", "Myosin", "Elastin"],
          "options_hi": ["केराटिन", "कोलेजन", "मायोसिन", "इलास्टिन"],
          "answer": "Keratin",
          "answer_hi": "केराटिन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "What is the role of hemoglobin?",
          "question_hi": "हीमोग्लोबिन की भूमिका क्या होती है?",
          "options_en": ["Digestion", "Excretion", "Oxygen transport", "Immunity"],
          "options_hi": ["पाचन", "उत्सर्जन", "ऑक्सीजन परिवहन", "प्रतिरक्षा"],
          "answer": "Oxygen transport",
          "answer_hi": "ऑक्सीजन परिवहन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Which pigment gives green color to leaves?",
          "question_hi": "पत्तियों को हरा रंग देने वाला वर्णक कौन सा है?",
          "options_en": ["Carotene", "Xanthophyll", "Chlorophyll", "Anthocyanin"],
          "options_hi": ["कैरोटीन", "जैन्थोफिल", "क्लोरोफिल", "एंथोसायनिन"],
          "answer": "Chlorophyll",
          "answer_hi": "क्लोरोफिल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "Which part of the body is affected by arthritis?",
          "question_hi": "आर्थराइटिस किस अंग को प्रभावित करता है?",
          "options_en": ["Liver", "Lungs", "Joints", "Heart"],
          "options_hi": ["यकृत", "फेफड़े", "संधि", "हृदय"],
          "answer": "Joints",
          "answer_hi": "संधि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "What is the basic unit of life?",
          "question_hi": "जीवन की मूल इकाई क्या है?",
          "options_en": ["Tissue", "Organ", "Cell", "Organ system"],
          "options_hi": ["ऊतक", "अंग", "कोशिका", "अंग प्रणाली"],
          "answer": "Cell",
          "answer_hi": "कोशिका",
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


