
const questions = [
    {
      "num": 1,
      "question_en": "Which of the following is a vector quantity?",
      "question_hi": "निम्नलिखित में से कौन एक सदिश राशि है?",
      "options_en": ["Speed", "Distance", "Displacement", "Mass"],
      "options_hi": ["गति", "दूरी", "विस्थापन", "द्रव्यमान"],
      "answer": "Displacement",
      "answer_hi": "विस्थापन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "SI unit of electric charge is?",
      "question_hi": "वैद्युत आवेश की एस.आई. इकाई क्या है?",
      "options_en": ["Ampere", "Volt", "Coulomb", "Ohm"],
      "options_hi": ["एंपियर", "वोल्ट", "कूलॉम्ब", "ओम"],
      "answer": "Coulomb",
      "answer_hi": "कूलॉम्ब",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "What is the dimensional formula of force?",
      "question_hi": "बल का विमीय सूत्र क्या है?",
      "options_en": ["[MLT⁻²]", "[ML²T⁻²]", "[MLT]", "[ML⁻¹T⁻²]"],
      "options_hi": ["[MLT⁻²]", "[ML²T⁻²]", "[MLT]", "[ML⁻¹T⁻²]"],
      "answer": "[MLT⁻²]",
      "answer_hi": "[MLT⁻²]",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "The focal length of a plane mirror is?",
      "question_hi": "एक समतल दर्पण की फोकस दूरी होती है?",
      "options_en": ["Infinity", "Zero", "Negative", "One"],
      "options_hi": ["अनंत", "शून्य", "ऋणात्मक", "एक"],
      "answer": "Infinity",
      "answer_hi": "अनंत",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Which law is used in the working of transformer?",
      "question_hi": "ट्रांसफार्मर के कार्य में किस नियम का उपयोग होता है?",
      "options_en": ["Lenz's Law", "Ampere's Law", "Faraday's Law", "Ohm's Law"],
      "options_hi": ["लेन्ज़ का नियम", "एम्पियर का नियम", "फैरेडे का नियम", "ओम का नियम"],
      "answer": "Faraday's Law",
      "answer_hi": "फैरेडे का नियम",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Which of the following is not a unit of power?",
      "question_hi": "निम्नलिखित में से कौन शक्ति की इकाई नहीं है?",
      "options_en": ["Watt", "Horsepower", "Joule", "kW"],
      "options_hi": ["वॉट", "हॉर्सपावर", "जूल", "किलोवॉट"],
      "answer": "Joule",
      "answer_hi": "जूल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Which type of mirror is used in vehicles as rear view mirror?",
      "question_hi": "वाहनों में रियर व्यू मिरर के रूप में किस प्रकार का दर्पण प्रयोग होता है?",
      "options_en": ["Concave", "Convex", "Plane", "None"],
      "options_hi": ["अवतल", "उत्तल", "समतल", "कोई नहीं"],
      "answer": "Convex",
      "answer_hi": "उत्तल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Which physical quantity is represented by the area under velocity-time graph?",
      "question_hi": "वेग-समय ग्राफ के अंतर्गत क्षेत्रफल किस भौतिक राशि को दर्शाता है?",
      "options_en": ["Acceleration", "Displacement", "Velocity", "Time"],
      "options_hi": ["त्वरण", "विस्थापन", "वेग", "समय"],
      "answer": "Displacement",
      "answer_hi": "विस्थापन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "In a simple harmonic motion, acceleration is proportional to?",
      "question_hi": "सरल आवर्त गति में त्वरण किसके अनुपाती होता है?",
      "options_en": ["Displacement", "Velocity", "Time", "Frequency"],
      "options_hi": ["विस्थापन", "वेग", "समय", "आवृत्ति"],
      "answer": "Displacement",
      "answer_hi": "विस्थापन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Which of the following is a scalar quantity?",
      "question_hi": "निम्नलिखित में से कौन एक अदिश राशि है?",
      "options_en": ["Velocity", "Force", "Work", "Acceleration"],
      "options_hi": ["वेग", "बल", "कार्य", "त्वरण"],
      "answer": "Work",
      "answer_hi": "कार्य",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "The unit of magnetic flux is?",
      "question_hi": "चुंबकीय फ्लक्स की इकाई क्या है?",
      "options_en": ["Tesla", "Weber", "Henry", "Farad"],
      "options_hi": ["टेस्ला", "वेबर", "हेनरी", "फैराड"],
      "answer": "Weber",
      "answer_hi": "वेबर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "Ohm’s Law gives relation between?",
      "question_hi": "ओम का नियम किन राशियों के बीच संबंध दर्शाता है?",
      "options_en": ["V, I, R", "I, R, C", "V, Q, T", "P, V, T"],
      "options_hi": ["V, I, R", "I, R, C", "V, Q, T", "P, V, T"],
      "answer": "V, I, R",
      "answer_hi": "V, I, R",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "Which has the highest refractive index?",
      "question_hi": "निम्न में से किसका अपवर्तनांक सबसे अधिक होता है?",
      "options_en": ["Water", "Glass", "Air", "Diamond"],
      "options_hi": ["जल", "कांच", "वायु", "हीरा"],
      "answer": "Diamond",
      "answer_hi": "हीरा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Which wave can travel through vacuum?",
      "question_hi": "निम्न में से कौन सी तरंग निर्वात में संचरित हो सकती है?",
      "options_en": ["Sound", "Water", "Seismic", "Light"],
      "options_hi": ["ध्वनि", "जल", "भूकंपी", "प्रकाश"],
      "answer": "Light",
      "answer_hi": "प्रकाश",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "The dimensional formula of pressure is?",
      "question_hi": "दाब का विमीय सूत्र क्या है?",
      "options_en": ["[ML⁻¹T⁻²]", "[MLT⁻²]", "[ML²T⁻²]", "[M⁻¹LT⁻²]"],
      "options_hi": ["[ML⁻¹T⁻²]", "[MLT⁻²]", "[ML²T⁻²]", "[M⁻¹LT⁻²]"],
      "answer": "[ML⁻¹T⁻²]",
      "answer_hi": "[ML⁻¹T⁻²]",
      "attempted": false,
      "selected": ""
    },

        {
          "num": 16,
          "question_en": "What is the unit of electric potential?",
          "question_hi": "वैद्युत विभव की इकाई क्या है?",
          "options_en": ["Ohm", "Coulomb", "Volt", "Ampere"],
          "options_hi": ["ओम", "कूलॉम्ब", "वोल्ट", "एम्पियर"],
          "answer": "Volt",
          "answer_hi": "वोल्ट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which type of motion is exhibited by a pendulum?",
          "question_hi": "लोलक किस प्रकार की गति करता है?",
          "options_en": ["Linear", "Rotational", "Simple harmonic", "Random"],
          "options_hi": ["रेखीय", "घूर्णन", "सरल आवर्त", "यादृच्छिक"],
          "answer": "Simple harmonic",
          "answer_hi": "सरल आवर्त",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "The speed of light in vacuum is?",
          "question_hi": "निर्वात में प्रकाश की गति कितनी होती है?",
          "options_en": ["3 × 10⁸ m/s", "1.5 × 10⁸ m/s", "3 × 10⁶ m/s", "1 × 10⁶ m/s"],
          "options_hi": ["3 × 10⁸ मी/से", "1.5 × 10⁸ मी/से", "3 × 10⁶ मी/से", "1 × 10⁶ मी/से"],
          "answer": "3 × 10⁸ m/s",
          "answer_hi": "3 × 10⁸ मी/से",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What is the resistance of an ideal voltmeter?",
          "question_hi": "आदर्श वोल्टमीटर का प्रतिरोध कितना होता है?",
          "options_en": ["Zero", "Infinite", "1 ohm", "100 ohm"],
          "options_hi": ["शून्य", "अनंत", "1 ओम", "100 ओम"],
          "answer": "Infinite",
          "answer_hi": "अनंत",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which law is used to find direction of force on a current-carrying conductor in magnetic field?",
          "question_hi": "चुंबकीय क्षेत्र में विद्युत धारा वहन करने वाले चालक पर लगने वाले बल की दिशा जानने के लिए कौन सा नियम प्रयोग होता है?",
          "options_en": ["Ohm’s Law", "Lenz’s Law", "Fleming’s Left Hand Rule", "Fleming’s Right Hand Rule"],
          "options_hi": ["ओम का नियम", "लेन्ज़ का नियम", "फ्लेमिंग का बांया हाथ नियम", "फ्लेमिंग का दायां हाथ नियम"],
          "answer": "Fleming’s Left Hand Rule",
          "answer_hi": "फ्लेमिंग का बांया हाथ नियम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "In which medium does sound travel fastest?",
          "question_hi": "ध्वनि किस माध्यम में सबसे तेज गति से चलती है?",
          "options_en": ["Air", "Water", "Steel", "Vacuum"],
          "options_hi": ["वायु", "जल", "स्टील", "निर्वात"],
          "answer": "Steel",
          "answer_hi": "स्टील",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "Which of the following is used to convert AC to DC?",
          "question_hi": "निम्न में से किसका उपयोग AC को DC में बदलने के लिए किया जाता है?",
          "options_en": ["Motor", "Transformer", "Rectifier", "Generator"],
          "options_hi": ["मोटर", "ट्रांसफार्मर", "रेक्टिफायर", "जनरेटर"],
          "answer": "Rectifier",
          "answer_hi": "रेक्टिफायर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "The work done in moving a charge in an electric field is called?",
          "question_hi": "विद्युत क्षेत्र में आवेश को स्थानांतरित करने में किया गया कार्य क्या कहलाता है?",
          "options_en": ["Potential energy", "Kinetic energy", "Electric potential", "Electric work"],
          "options_hi": ["स्थितिज ऊर्जा", "गतिज ऊर्जा", "विद्युत विभव", "विद्युत कार्य"],
          "answer": "Electric potential",
          "answer_hi": "विद्युत विभव",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "1 horsepower is equal to how many watts?",
          "question_hi": "1 हॉर्सपावर कितने वॉट के बराबर होता है?",
          "options_en": ["746 W", "500 W", "1000 W", "100 W"],
          "options_hi": ["746 वॉट", "500 वॉट", "1000 वॉट", "100 वॉट"],
          "answer": "746 W",
          "answer_hi": "746 वॉट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "Which device is used to measure electric current?",
          "question_hi": "विद्युत धारा मापने के लिए किस यंत्र का प्रयोग होता है?",
          "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Wattmeter"],
          "options_hi": ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "वॉटमीटर"],
          "answer": "Ammeter",
          "answer_hi": "एमीटर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 26,
          "question_en": "In resonance, which of the following are equal?",
          "question_hi": "अनुनाद में निम्नलिखित में से कौन-सी राशियाँ समान होती हैं?",
          "options_en": ["Frequency of driving force and natural frequency", "Amplitude and frequency", "Phase and amplitude", "Voltage and current"],
          "options_hi": ["प्रेरक बल की आवृत्ति और प्राकृतिक आवृत्ति", "आयाम और आवृत्ति", "फेज और आयाम", "वोल्टेज और धारा"],
          "answer": "Frequency of driving force and natural frequency",
          "answer_hi": "प्रेरक बल की आवृत्ति और प्राकृतिक आवृत्ति",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 27,
          "question_en": "What is the unit of capacitance?",
          "question_hi": "धारिता की इकाई क्या है?",
          "options_en": ["Farad", "Ohm", "Volt", "Coulomb"],
          "options_hi": ["फैराड", "ओम", "वोल्ट", "कूलॉम्ब"],
          "answer": "Farad",
          "answer_hi": "फैराड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 28,
          "question_en": "What is the shape of magnetic field lines around a straight current carrying conductor?",
          "question_hi": "धारा वहन करने वाले सीधे चालक के चारों ओर चुंबकीय क्षेत्र रेखाओं का आकार कैसा होता है?",
          "options_en": ["Straight lines", "Elliptical", "Concentric circles", "Radial lines"],
          "options_hi": ["सीधी रेखाएं", "दीर्घवृत्त", "समवृत्त वृत्त", "त्रिज्यीय रेखाएं"],
          "answer": "Concentric circles",
          "answer_hi": "समवृत्त वृत्त",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 29,
          "question_en": "Which law gives relation between induced emf and rate of change of magnetic flux?",
          "question_hi": "प्रेरित विद्युत वाहक बल और चुंबकीय फ्लक्स के परिवर्तन दर के बीच संबंध कौन सा नियम बताता है?",
          "options_en": ["Lenz's Law", "Faraday's Law", "Ampere's Law", "Coulomb's Law"],
          "options_hi": ["लेन्ज़ का नियम", "फैरेडे का नियम", "एम्पियर का नियम", "कूलॉम्ब का नियम"],
          "answer": "Faraday's Law",
          "answer_hi": "फैरेडे का नियम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 30,
          "question_en": "What is the unit of frequency?",
          "question_hi": "आवृत्ति की इकाई क्या है?",
          "options_en": ["Hertz", "Newton", "Watt", "Joule"],
          "options_hi": ["हर्ट्ज", "न्यूटन", "वॉट", "जूल"],
          "answer": "Hertz",
          "answer_hi": "हर्ट्ज",
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


