

const questions = [
  {
    "num": 1,
    "question_en": "Which physical quantity is measured in Farad?",
    "question_hi": "फैराड किस भौतिक राशि की इकाई है?",
    "options_en": ["Resistance", "Capacitance", "Inductance", "Conductance"],
    "options_hi": ["प्रतिरोध", "धारिता", "प्रेरकत्व", "प्रवाहकता"],
    "answer": "Capacitance",
    "answer_hi": "धारिता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The speed of light in vacuum is approximately?",
    "question_hi": "शून्य स्थान में प्रकाश की गति लगभग कितनी होती है?",
    "options_en": ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁵ m/s"],
    "options_hi": ["3 × 10⁶ मी/से", "3 × 10⁸ मी/से", "3 × 10¹⁰ मी/से", "3 × 10⁵ मी/से"],
    "answer": "3 × 10⁸ m/s",
    "answer_hi": "3 × 10⁸ मी/से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Who discovered electromagnetic waves?",
    "question_hi": "विद्युतचुंबकीय तरंगों की खोज किसने की थी?",
    "options_en": ["Newton", "Einstein", "Maxwell", "Hertz"],
    "options_hi": ["न्यूटन", "आइंस्टीन", "मैक्सवेल", "हर्ट्ज़"],
    "answer": "Hertz",
    "answer_hi": "हर्ट्ज़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The SI unit of magnetic field is?",
    "question_hi": "चुंबकीय क्षेत्र की SI इकाई क्या है?",
    "options_en": ["Tesla", "Weber", "Gauss", "Henry"],
    "options_hi": ["टेस्ला", "वेबर", "गॉस", "हेनरी"],
    "answer": "Tesla",
    "answer_hi": "टेस्ला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Lenz’s law is related to which principle?",
    "question_hi": "लेन्ज़ का नियम किस सिद्धांत से संबंधित है?",
    "options_en": ["Conservation of mass", "Conservation of energy", "Conservation of momentum", "None"],
    "options_hi": ["द्रव्यमान संरक्षण", "ऊर्जा संरक्षण", "संचलन संरक्षण", "कोई नहीं"],
    "answer": "Conservation of energy",
    "answer_hi": "ऊर्जा संरक्षण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of the following has the highest refractive index?",
    "question_hi": "निम्नलिखित में से किसका अपवर्तनांक सबसे अधिक होता है?",
    "options_en": ["Water", "Glass", "Air", "Diamond"],
    "options_hi": ["जल", "कांच", "वायु", "हीरा"],
    "answer": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which mirror is used in a rear-view mirror of vehicles?",
    "question_hi": "वाहनों के पीछे देखने वाले दर्पण में कौन सा दर्पण प्रयोग होता है?",
    "options_en": ["Concave", "Plane", "Convex", "None"],
    "options_hi": ["अवतल", "समतल", "उत्तल", "कोई नहीं"],
    "answer": "Convex",
    "answer_hi": "उत्तल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which device is used to measure electric current?",
    "question_hi": "विद्युत धारा को मापने के लिए किस यंत्र का प्रयोग किया जाता है?",
    "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Multimeter"],
    "options_hi": ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "मल्टीमीटर"],
    "answer": "Ammeter",
    "answer_hi": "एमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Transformer works on the principle of?",
    "question_hi": "ट्रांसफॉर्मर किस सिद्धांत पर कार्य करता है?",
    "options_en": ["Ohm’s law", "Self-induction", "Mutual induction", "Capacitance"],
    "options_hi": ["ओम का नियम", "स्व-प्रेरण", "पारस्परिक प्रेरण", "धारिता"],
    "answer": "Mutual induction",
    "answer_hi": "पारस्परिक प्रेरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which waves are used in microwave ovens?",
    "question_hi": "माइक्रोवेव ओवन में कौन सी तरंगों का उपयोग होता है?",
    "options_en": ["X-rays", "Microwaves", "Ultraviolet", "Infrared"],
    "options_hi": ["एक्स-रे", "माइक्रोवेव", "पराबैंगनी", "इन्फ्रारेड"],
    "answer": "Microwaves",
    "answer_hi": "माइक्रोवेव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Electric field inside a conductor is?",
    "question_hi": "किसी चालक के अंदर विद्युत क्षेत्र होता है?",
    "options_en": ["Zero", "Infinity", "Constant", "Variable"],
    "options_hi": ["शून्य", "अनंत", "सदैव समान", "परिवर्तनीय"],
    "answer": "Zero",
    "answer_hi": "शून्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which law gives the relation between current and voltage?",
    "question_hi": "विद्युत धारा और वोल्टेज के बीच संबंध किस नियम द्वारा दिया जाता है?",
    "options_en": ["Lenz's Law", "Ohm's Law", "Faraday's Law", "Ampere's Law"],
    "options_hi": ["लेन्ज़ का नियम", "ओम का नियम", "फेरेडे का नियम", "एम्पियर का नियम"],
    "answer": "Ohm's Law",
    "answer_hi": "ओम का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "SI unit of electric charge is?",
    "question_hi": "विद्युत आवेश की SI इकाई क्या है?",
    "options_en": ["Ampere", "Volt", "Coulomb", "Farad"],
    "options_hi": ["एम्पियर", "वोल्ट", "कूलॉम्ब", "फैराड"],
    "answer": "Coulomb",
    "answer_hi": "कूलॉम्ब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Who discovered the photoelectric effect?",
    "question_hi": "फोटोइलेक्ट्रिक प्रभाव की खोज किसने की थी?",
    "options_en": ["Newton", "Einstein", "Faraday", "Planck"],
    "options_hi": ["न्यूटन", "आइंस्टीन", "फेरेडे", "प्लांक"],
    "answer": "Einstein",
    "answer_hi": "आइंस्टीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the unit of magnetic flux?",
    "question_hi": "चुंबकीय फ्लक्स की इकाई क्या है?",
    "options_en": ["Weber", "Tesla", "Gauss", "Henry"],
    "options_hi": ["वेबर", "टेस्ला", "गॉस", "हेनरी"],
    "answer": "Weber",
    "answer_hi": "वेबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which phenomenon explains the blue color of the sky?",
    "question_hi": "आकाश के नीले रंग का कारण कौन सा प्रभाव है?",
    "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
    "options_hi": ["परावर्तन", "अपवर्तन", "प्रकीर्णन", "प्रसरण"],
    "answer": "Scattering",
    "answer_hi": "प्रकीर्णन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "The device used to convert AC to DC is?",
    "question_hi": "AC को DC में बदलने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Rectifier", "Amplifier", "Transformer", "Oscillator"],
    "options_hi": ["रेक्टिफायर", "एम्प्लीफायर", "ट्रांसफॉर्मर", "ऑस्सीलेटर"],
    "answer": "Rectifier",
    "answer_hi": "रेक्टिफायर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which rule is used to determine the direction of induced current?",
    "question_hi": "प्रेरित धारा की दिशा जानने के लिए किस नियम का प्रयोग किया जाता है?",
    "options_en": ["Ohm’s Law", "Lenz’s Law", "Coulomb’s Law", "Kirchhoff’s Law"],
    "options_hi": ["ओम का नियम", "लेन्ज़ का नियम", "कूलॉम्ब का नियम", "किर्चॉफ का नियम"],
    "answer": "Lenz’s Law",
    "answer_hi": "लेन्ज़ का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which of the following is a scalar quantity?",
    "question_hi": "निम्न में से कौन एक अदिश राशि है?",
    "options_en": ["Velocity", "Acceleration", "Force", "Energy"],
    "options_hi": ["वेग", "त्वरण", "बल", "ऊर्जा"],
    "answer": "Energy",
    "answer_hi": "ऊर्जा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the shape of the path of a projectile?",
    "question_hi": "प्रक्षिप्त पिंड की गति का पथ कैसा होता है?",
    "options_en": ["Circular", "Parabolic", "Linear", "Elliptical"],
    "options_hi": ["वृतीय", "परवलयी", "रेखीय", "दीर्घवृत्तीय"],
    "answer": "Parabolic",
    "answer_hi": "परवलयी",
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


