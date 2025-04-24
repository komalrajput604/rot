const questions = [
        {
          "num": 1,
          "question_en": "Which acid is commonly used in the preparation of fertilizers?",
          "question_hi": "किस अम्ल का सामान्यतः उर्वरकों की तैयारी में उपयोग किया जाता है?",
          "options_en": ["Sulfuric acid", "Acetic acid", "Citric acid", "Nitric acid"],
          "options_hi": ["सल्फ्यूरिक अम्ल", "एसीटिक अम्ल", "साइट्रिक अम्ल", "नाइट्रिक अम्ल"],
          "answer": "Sulfuric acid",
          "answer_hi": "सल्फ्यूरिक अम्ल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which element is essential for the formation of chlorophyll?",
          "question_hi": "क्लोरोफिल के निर्माण के लिए कौन-सा तत्व आवश्यक होता है?",
          "options_en": ["Magnesium", "Iron", "Zinc", "Copper"],
          "options_hi": ["मैग्नीशियम", "लौह", "जस्त", "ताँबा"],
          "answer": "Magnesium",
          "answer_hi": "मैग्नीशियम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Urea contains how much percentage of nitrogen?",
          "question_hi": "यूरिया में नाइट्रोजन की कितनी प्रतिशत मात्रा होती है?",
          "options_en": ["36%", "46%", "26%", "56%"],
          "options_hi": ["36%", "46%", "26%", "56%"],
          "answer": "46%",
          "answer_hi": "46%",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "The deficiency of which nutrient causes chlorosis in plants?",
          "question_hi": "किस पोषक तत्व की कमी से पौधों में क्लोरोसिस होता है?",
          "options_en": ["Nitrogen", "Potassium", "Calcium", "Phosphorus"],
          "options_hi": ["नाइट्रोजन", "पोटैशियम", "कैल्शियम", "फॉस्फोरस"],
          "answer": "Nitrogen",
          "answer_hi": "नाइट्रोजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which fertilizer is a source of phosphorus?",
          "question_hi": "कौन-सा उर्वरक फॉस्फोरस का स्रोत है?",
          "options_en": ["DAP", "MOP", "Urea", "Ammonium Sulfate"],
          "options_hi": ["डीएपी", "एमओपी", "यूरिया", "अमोनियम सल्फेट"],
          "answer": "DAP",
          "answer_hi": "डीएपी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which element helps in the opening and closing of stomata?",
          "question_hi": "कौन-सा तत्व स्टोमेटा के खुलने और बंद होने में सहायक होता है?",
          "options_en": ["Potassium", "Iron", "Nitrogen", "Magnesium"],
          "options_hi": ["पोटैशियम", "लौह", "नाइट्रोजन", "मैग्नीशियम"],
          "answer": "Potassium",
          "answer_hi": "पोटैशियम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which compound is used to test soil pH?",
          "question_hi": "मृदा के pH को जाँचने के लिए किस यौगिक का उपयोग किया जाता है?",
          "options_en": ["Litmus", "Phenolphthalein", "Methyl orange", "Universal indicator"],
          "options_hi": ["लिटमस", "फिनॉल्फ्थेलेन", "मीथाइल ऑरेंज", "यूनिवर्सल संकेतक"],
          "answer": "Universal indicator",
          "answer_hi": "यूनिवर्सल संकेतक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "The formula of superphosphate of lime is?",
          "question_hi": "सुपरफॉस्फेट ऑफ लाइम का सूत्र क्या है?",
          "options_en": ["Ca(H₂PO₄)₂", "CaCO₃", "CaCl₂", "Ca(NO₃)₂"],
          "options_hi": ["Ca(H₂PO₄)₂", "CaCO₃", "CaCl₂", "Ca(NO₃)₂"],
          "answer": "Ca(H₂PO₄)₂",
          "answer_hi": "Ca(H₂PO₄)₂",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which nutrient helps in seed germination?",
          "question_hi": "बीज अंकुरण में कौन-सा पोषक तत्व सहायक होता है?",
          "options_en": ["Phosphorus", "Nitrogen", "Magnesium", "Calcium"],
          "options_hi": ["फॉस्फोरस", "नाइट्रोजन", "मैग्नीशियम", "कैल्शियम"],
          "answer": "Phosphorus",
          "answer_hi": "फॉस्फोरस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which fertilizer contains potassium?",
          "question_hi": "कौन-सा उर्वरक पोटैशियम युक्त होता है?",
          "options_en": ["MOP", "Urea", "DAP", "Ammonium Nitrate"],
          "options_hi": ["एमओपी", "यूरिया", "डीएपी", "अमोनियम नाइट्रेट"],
          "answer": "MOP",
          "answer_hi": "एमओपी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which element is known as a micronutrient?",
          "question_hi": "कौन-सा तत्व सूक्ष्म पोषक तत्व के रूप में जाना जाता है?",
          "options_en": ["Zinc", "Nitrogen", "Potassium", "Phosphorus"],
          "options_hi": ["जस्त", "नाइट्रोजन", "पोटैशियम", "फॉस्फोरस"],
          "answer": "Zinc",
          "answer_hi": "जस्त",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Lime is used to reduce which soil property?",
          "question_hi": "चूना मृदा की किस विशेषता को कम करने के लिए प्रयोग किया जाता है?",
          "options_en": ["Acidity", "Salinity", "Alkalinity", "Porosity"],
          "options_hi": ["अम्लता", "लवणता", "क्षारता", "छिद्रता"],
          "answer": "Acidity",
          "answer_hi": "अम्लता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which chemical is used for nitrogen estimation in soil?",
          "question_hi": "मृदा में नाइट्रोजन के अनुमान के लिए किस रसायन का उपयोग किया जाता है?",
          "options_en": ["Kjeldahl method", "Benedict's reagent", "Biuret reagent", "Fehling's solution"],
          "options_hi": ["कजेलडाल विधि", "बेनेडिक्ट अभिकर्मक", "बायूरेट अभिकर्मक", "फेलिंग विलयन"],
          "answer": "Kjeldahl method",
          "answer_hi": "कजेलडाल विधि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "NPK in fertilizers refers to which three nutrients?",
          "question_hi": "उर्वरकों में NPK किस तीन पोषक तत्वों को दर्शाता है?",
          "options_en": ["Nitrogen, Phosphorus, Potassium", "Nickel, Phosphorus, Krypton", "Nitrite, Phosphate, Potash", "None of these"],
          "options_hi": ["नाइट्रोजन, फॉस्फोरस, पोटैशियम", "निकेल, फॉस्फोरस, क्रिप्टोन", "नाइट्राइट, फॉस्फेट, पोटाश", "इनमें से कोई नहीं"],
          "answer": "Nitrogen, Phosphorus, Potassium",
          "answer_hi": "नाइट्रोजन, फॉस्फोरस, पोटैशियम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Gypsum is a good source of which nutrient?",
          "question_hi": "जिप्सम किस पोषक तत्व का अच्छा स्रोत है?",
          "options_en": ["Calcium", "Nitrogen", "Iron", "Phosphorus"],
          "options_hi": ["कैल्शियम", "नाइट्रोजन", "लौह", "फॉस्फोरस"],
          "answer": "Calcium",
          "answer_hi": "कैल्शियम",
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
  
  
  