const questions = [
        {
          "num": 1,
          "question_en": "Which nutrient is essential for the synthesis of chlorophyll?",
          "question_hi": "क्लोरोफिल के संश्लेषण के लिए कौन सा पोषक तत्व आवश्यक होता है?",
          "options_en": ["Nitrogen", "Phosphorus", "Potassium", "Calcium"],
          "options_hi": ["नाइट्रोजन", "फॉस्फोरस", "पोटैशियम", "कैल्शियम"],
          "answer": "Nitrogen",
          "answer_hi": "नाइट्रोजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which fertilizer is known as a complex fertilizer?",
          "question_hi": "कौन सा उर्वरक एक संयुक्त उर्वरक के रूप में जाना जाता है?",
          "options_en": ["Urea", "Ammonium nitrate", "DAP", "Calcium ammonium nitrate"],
          "options_hi": ["यूरिया", "अमोनियम नाइट्रेट", "डीएपी", "कैल्शियम अमोनियम नाइट्रेट"],
          "answer": "DAP",
          "answer_hi": "डीएपी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which nutrient deficiency causes chlorosis in plants?",
          "question_hi": "कौन से पोषक तत्व की कमी से पौधों में पर्णहरितहीनता होती है?",
          "options_en": ["Magnesium", "Sulphur", "Zinc", "Iron"],
          "options_hi": ["मैग्नीशियम", "सल्फर", "जिंक", "आयरन"],
          "answer": "Magnesium",
          "answer_hi": "मैग्नीशियम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "The pH of neutral soil is:",
          "question_hi": "तटस्थ मृदा का pH कितना होता है?",
          "options_en": ["5", "6", "7", "8"],
          "options_hi": ["5", "6", "7", "8"],
          "answer": "7",
          "answer_hi": "7",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which of the following is a micronutrient for plants?",
          "question_hi": "निम्न में से कौन पौधों के लिए सूक्ष्म पोषक तत्व है?",
          "options_en": ["Nitrogen", "Potassium", "Boron", "Calcium"],
          "options_hi": ["नाइट्रोजन", "पोटैशियम", "बोरॉन", "कैल्शियम"],
          "answer": "Boron",
          "answer_hi": "बोरॉन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which fertilizer contains the highest nitrogen content?",
          "question_hi": "किस उर्वरक में सर्वाधिक नाइट्रोजन की मात्रा होती है?",
          "options_en": ["Urea", "Ammonium Sulphate", "CAN", "DAP"],
          "options_hi": ["यूरिया", "अमोनियम सल्फेट", "सीएएन", "डीएपी"],
          "answer": "Urea",
          "answer_hi": "यूरिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Green manuring improves the content of which nutrient?",
          "question_hi": "हरी खाद किस पोषक तत्व की मात्रा को बढ़ाती है?",
          "options_en": ["Phosphorus", "Potassium", "Nitrogen", "Sulphur"],
          "options_hi": ["फॉस्फोरस", "पोटैशियम", "नाइट्रोजन", "सल्फर"],
          "answer": "Nitrogen",
          "answer_hi": "नाइट्रोजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which nutrient is associated with energy transfer in plants?",
          "question_hi": "पौधों में ऊर्जा स्थानांतरण से कौन सा पोषक तत्व संबंधित है?",
          "options_en": ["Potassium", "Calcium", "Phosphorus", "Magnesium"],
          "options_hi": ["पोटैशियम", "कैल्शियम", "फॉस्फोरस", "मैग्नीशियम"],
          "answer": "Phosphorus",
          "answer_hi": "फॉस्फोरस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "The deficiency of which nutrient leads to browning of leaf tips?",
          "question_hi": "किस पोषक तत्व की कमी से पत्तियों के सिरे भूरे हो जाते हैं?",
          "options_en": ["Potassium", "Nitrogen", "Iron", "Zinc"],
          "options_hi": ["पोटैशियम", "नाइट्रोजन", "आयरन", "जिंक"],
          "answer": "Potassium",
          "answer_hi": "पोटैशियम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which fertilizer is most commonly used in India?",
          "question_hi": "भारत में सबसे अधिक प्रयुक्त उर्वरक कौन सा है?",
          "options_en": ["DAP", "Urea", "SSP", "MOP"],
          "options_hi": ["डीएपी", "यूरिया", "एसएसपी", "एमओपी"],
          "answer": "Urea",
          "answer_hi": "यूरिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Gypsum is used to improve which type of soil?",
          "question_hi": "जिप्सम का उपयोग किस प्रकार की मिट्टी को सुधारने के लिए किया जाता है?",
          "options_en": ["Acidic soil", "Sandy soil", "Saline soil", "Alkaline soil"],
          "options_hi": ["अम्लीय मृदा", "बलुई मृदा", "लवणीय मृदा", "क्षारीय मृदा"],
          "answer": "Alkaline soil",
          "answer_hi": "क्षारीय मृदा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which acid is present in SSP fertilizer?",
          "question_hi": "एसएसपी उर्वरक में कौन सा अम्ल उपस्थित होता है?",
          "options_en": ["Nitric acid", "Sulphuric acid", "Phosphoric acid", "Hydrochloric acid"],
          "options_hi": ["नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "फॉस्फोरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
          "answer": "Sulphuric acid",
          "answer_hi": "सल्फ्यूरिक अम्ल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What is the ideal pH range for most crops?",
          "question_hi": "अधिकांश फसलों के लिए आदर्श pH रेंज क्या है?",
          "options_en": ["4.5 - 5.5", "5.5 - 6.5", "6.0 - 7.5", "7.5 - 8.5"],
          "options_hi": ["4.5 - 5.5", "5.5 - 6.5", "6.0 - 7.5", "7.5 - 8.5"],
          "answer": "6.0 - 7.5",
          "answer_hi": "6.0 - 7.5",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which element is involved in the formation of protein in plants?",
          "question_hi": "पौधों में प्रोटीन के निर्माण में कौन सा तत्व शामिल होता है?",
          "options_en": ["Phosphorus", "Nitrogen", "Potassium", "Zinc"],
          "options_hi": ["फॉस्फोरस", "नाइट्रोजन", "पोटैशियम", "जिंक"],
          "answer": "Nitrogen",
          "answer_hi": "नाइट्रोजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What does MOP stand for in fertilizers?",
          "question_hi": "उर्वरकों में एमओपी का क्या अर्थ है?",
          "options_en": ["Magnesium of Potash", "Muriate of Potash", "Mineral of Phosphorus", "Moist Organic Powder"],
          "options_hi": ["मैग्नीशियम ऑफ पोटाश", "म्युरिएट ऑफ पोटाश", "मिनरल ऑफ फॉस्फोरस", "मॉइस्ट ऑर्गेनिक पाउडर"],
          "answer": "Muriate of Potash",
          "answer_hi": "म्युरिएट ऑफ पोटाश",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which nutrient is mobile in plants?",
          "question_hi": "कौन सा पोषक तत्व पौधों में गतिशील होता है?",
          "options_en": ["Iron", "Calcium", "Nitrogen", "Boron"],
          "options_hi": ["आयरन", "कैल्शियम", "नाइट्रोजन", "बोरॉन"],
          "answer": "Nitrogen",
          "answer_hi": "नाइट्रोजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Soil fertility is measured by:",
          "question_hi": "मृदा की उर्वरता को किससे मापा जाता है?",
          "options_en": ["pH value", "Texture", "Nutrient content", "Color"],
          "options_hi": ["pH मान", "संरचना", "पोषक तत्व सामग्री", "रंग"],
          "answer": "Nutrient content",
          "answer_hi": "पोषक तत्व सामग्री",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which nutrient is required in the smallest quantity?",
          "question_hi": "कौन सा पोषक तत्व सबसे कम मात्रा में आवश्यक होता है?",
          "options_en": ["Zinc", "Calcium", "Nitrogen", "Potassium"],
          "options_hi": ["जिंक", "कैल्शियम", "नाइट्रोजन", "पोटैशियम"],
          "answer": "Zinc",
          "answer_hi": "जिंक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which nutrient helps in root development?",
          "question_hi": "कौन सा पोषक तत्व जड़ों के विकास में सहायक होता है?",
          "options_en": ["Phosphorus", "Nitrogen", "Iron", "Sulphur"],
          "options_hi": ["फॉस्फोरस", "नाइट्रोजन", "आयरन", "सल्फर"],
          "answer": "Phosphorus",
          "answer_hi": "फॉस्फोरस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which of the following is a straight fertilizer?",
          "question_hi": "निम्नलिखित में से कौन एक साधारण उर्वरक है?",
          "options_en": ["NPK", "DAP", "Urea", "Complex"],
          "options_hi": ["एनपीके", "डीएपी", "यूरिया", "जटिल"],
          "answer": "Urea",
          "answer_hi": "यूरिया",
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
  
  
  