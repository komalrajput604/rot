const questions = [ 
  {
    "num": 1,
    "question_en": "Which of the following is a primary aliphatic amine?",
    "question_hi": "निम्नलिखित में से कौन सा प्राथमिक ऐलिफैटिक अमीन है?",
    "options_en": ["Aniline", "Ethylamine", "Diphenylamine", "Pyridine"],
    "options_hi": ["एनिलिन", "एथाइल अमीन", "डाइफिनाइल अमीन", "पाइरिडिन"],
    "answer": "Ethylamine",
    "answer_hi": "एथाइल अमीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which compound is used as an antifreeze in automobile radiators?",
    "question_hi": "ऑटोमोबाइल रेडिएटर में किस यौगिक का उपयोग एंटीफ्रीज के रूप में किया जाता है?",
    "options_en": ["Methanol", "Ethanol", "Ethylene glycol", "Propane"],
    "options_hi": ["मेथनॉल", "एथनॉल", "एथिलीन ग्लाइकोल", "प्रोपेन"],
    "answer": "Ethylene glycol",
    "answer_hi": "एथिलीन ग्लाइकोल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which is the monomer of PVC?",
    "question_hi": "पीवीसी का मोनोमर कौन है?",
    "options_en": ["Vinyl chloride", "Ethene", "Styrene", "Teflon"],
    "options_hi": ["विनाइल क्लोराइड", "एथीन", "स्टाइरीन", "टेफ्लॉन"],
    "answer": "Vinyl chloride",
    "answer_hi": "विनाइल क्लोराइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which metal is purified by electrolytic refining?",
    "question_hi": "किस धातु को विद्युत अपघटन परिशोधन द्वारा शुद्ध किया जाता है?",
    "options_en": ["Zinc", "Copper", "Sodium", "Calcium"],
    "options_hi": ["जिंक", "तांबा", "सोडियम", "कैल्शियम"],
    "answer": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of the following is a green house gas?",
    "question_hi": "निम्नलिखित में से कौन सी ग्रीनहाउस गैस है?",
    "options_en": ["Methane", "Argon", "Oxygen", "Helium"],
    "options_hi": ["मीथेन", "आर्गन", "ऑक्सीजन", "हीलियम"],
    "answer": "Methane",
    "answer_hi": "मीथेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Terylene is a polymer of which two compounds?",
    "question_hi": "टेरीलीन किस दो यौगिकों का बहुलक है?",
    "options_en": ["Terephthalic acid and ethylene glycol", "Benzoic acid and methanol", "Acetic acid and ethanol", "Formic acid and propanol"],
    "options_hi": ["टेरेफ्थैलिक अम्ल और एथिलीन ग्लाइकोल", "बेंजोइक अम्ल और मेथनॉल", "एसेटिक अम्ल और एथेनॉल", "फॉर्मिक अम्ल और प्रोपेनॉल"],
    "answer": "Terephthalic acid and ethylene glycol",
    "answer_hi": "टेरेफ्थैलिक अम्ल और एथिलीन ग्लाइकोल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The process of concentrating ore is known as?",
    "question_hi": "अयस्क की सान्द्रता की प्रक्रिया को क्या कहते हैं?",
    "options_en": ["Roasting", "Calcination", "Froth flotation", "Smelting"],
    "options_hi": ["भंजन", "कैल्सिनेशन", "फ्रॉथ फ्लोटेशन", "स्मेल्टिंग"],
    "answer": "Froth flotation",
    "answer_hi": "फ्रॉथ फ्लोटेशन",
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
    "question_en": "Which of the following is an example of a biodegradable polymer?",
    "question_hi": "निम्नलिखित में से कौन सा एक बायोडिग्रेडेबल पॉलिमर है?",
    "options_en": ["PHBV", "PVC", "Bakelite", "Teflon"],
    "options_hi": ["PHBV", "पीवीसी", "बेकलाइट", "टेफ्लॉन"],
    "answer": "PHBV",
    "answer_hi": "PHBV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which reagent is used to distinguish aldehydes from ketones?",
    "question_hi": "एल्डिहाइड और कीटोन में अंतर करने के लिए किस अभिकर्मक का उपयोग किया जाता है?",
    "options_en": ["Tollens' reagent", "Fehling’s solution", "Benedict's solution", "All of these"],
    "options_hi": ["टोलेंस अभिकर्मक", "फेहलिंग विलयन", "बेनेडिक्ट विलयन", "इनमें से सभी"],
    "answer": "All of these",
    "answer_hi": "इनमें से सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is a noble gas?",
    "question_hi": "निम्नलिखित में से कौन सी एक निष्क्रिय गैस है?",
    "options_en": ["Oxygen", "Nitrogen", "Neon", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "निऑन", "हाइड्रोजन"],
    "answer": "Neon",
    "answer_hi": "निऑन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which compound is commonly known as vinegar?",
    "question_hi": "कौन सा यौगिक आमतौर पर सिरका के रूप में जाना जाता है?",
    "options_en": ["Acetic acid", "Formic acid", "Citric acid", "Oxalic acid"],
    "options_hi": ["एसेटिक अम्ल", "फॉर्मिक अम्ल", "साइट्रिक अम्ल", "ऑक्सैलिक अम्ल"],
    "answer": "Acetic acid",
    "answer_hi": "एसेटिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which element is most abundant in the earth’s crust?",
    "question_hi": "पृथ्वी की भू-पर्पटी में सबसे अधिक पाया जाने वाला तत्व कौन सा है?",
    "options_en": ["Silicon", "Oxygen", "Aluminium", "Iron"],
    "options_hi": ["सिलिकॉन", "ऑक्सीजन", "एल्युमिनियम", "लोहा"],
    "answer": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The catalyst used in the contact process is?",
    "question_hi": "कॉन्टैक्ट प्रक्रिया में प्रयुक्त उत्प्रेरक क्या है?",
    "options_en": ["Vanadium pentoxide", "Iron", "Platinum", "Nickel"],
    "options_hi": ["वैनाडियम पेंटऑक्साइड", "लोहा", "प्लैटिनम", "निकल"],
    "answer": "Vanadium pentoxide",
    "answer_hi": "वैनाडियम पेंटऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which ion is responsible for the hardness of water?",
    "question_hi": "जल की कठोरता के लिए कौन सा आयन जिम्मेदार होता है?",
    "options_en": ["Na⁺", "K⁺", "Ca²⁺", "Cl⁻"],
    "options_hi": ["Na⁺", "K⁺", "Ca²⁺", "Cl⁻"],
    "answer": "Ca²⁺",
    "answer_hi": "Ca²⁺",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which compound is used in the preparation of perfumes?",
    "question_hi": "सुगंध बनाने में किस यौगिक का प्रयोग किया जाता है?",
    "options_en": ["Esters", "Aldehydes", "Ketones", "Acids"],
    "options_hi": ["एस्टर", "एल्डिहाइड", "कीटोन", "अम्ल"],
    "answer": "Esters",
    "answer_hi": "एस्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which of the following is used in water softening?",
    "question_hi": "जल को मृदु करने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Baking soda", "Bleaching powder", "Zeolite", "Washing soda"],
    "options_hi": ["बेकिंग सोडा", "ब्लीचिंग पाउडर", "ज़िओलाइट", "वॉशिंग सोडा"],
    "answer": "Zeolite",
    "answer_hi": "ज़िओलाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Name the vitamin that contains cobalt?",
    "question_hi": "वह विटामिन बताइए जिसमें कोबाल्ट पाया जाता है?",
    "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B12", "विटामिन C", "विटामिन D"],
    "answer": "Vitamin B12",
    "answer_hi": "विटामिन B12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which among the following is not an isomer of C4H10?",
    "question_hi": "निम्नलिखित में से कौन C4H10 का समावयव नहीं है?",
    "options_en": ["n-Butane", "Isobutane", "Pentane", "None of these"],
    "options_hi": ["n-ब्यूटेन", "आइसोब्यूटेन", "पेंटेन", "इनमें से कोई नहीं"],
    "answer": "Pentane",
    "answer_hi": "पेंटेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which functional group is present in alcohols?",
    "question_hi": "एल्कोहल में कौन सा फंक्शनल ग्रुप उपस्थित होता है?",
    "options_en": ["–OH", "–COOH", "–CHO", "–NH₂"],
    "options_hi": ["–OH", "–COOH", "–CHO", "–NH₂"],
    "answer": "–OH",
    "answer_hi": "–OH",
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


