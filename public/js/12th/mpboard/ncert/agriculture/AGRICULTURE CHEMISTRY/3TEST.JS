const questions = [
        {
          "num": 1,
          "question_en": "Which element is essential for nitrogen fixation in legumes?",
          "question_hi": "दलहनी फसलों में नाइट्रोजन स्थिरीकरण के लिए कौन सा तत्व आवश्यक होता है?",
          "options_en": ["Iron", "Molybdenum", "Zinc", "Copper"],
          "options_hi": ["लौह", "मोलिब्डेनम", "जिंक", "तांबा"],
          "answer": "Molybdenum",
          "answer_hi": "मोलिब्डेनम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What is the pH range suitable for most crops?",
          "question_hi": "अधिकांश फसलों के लिए उपयुक्त pH सीमा क्या है?",
          "options_en": ["3.0-4.0", "5.5-7.5", "8.0-9.5", "9.5-11.0"],
          "options_hi": ["3.0-4.0", "5.5-7.5", "8.0-9.5", "9.5-11.0"],
          "answer": "5.5-7.5",
          "answer_hi": "5.5-7.5",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Urea contains what percentage of nitrogen?",
          "question_hi": "यूरिया में नाइट्रोजन की कितनी प्रतिशत मात्रा होती है?",
          "options_en": ["26%", "36%", "46%", "56%"],
          "options_hi": ["26%", "36%", "46%", "56%"],
          "answer": "46%",
          "answer_hi": "46%",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which fertilizer is known as potassic fertilizer?",
          "question_hi": "पोटैशिक उर्वरक के रूप में कौन जाना जाता है?",
          "options_en": ["MOP", "DAP", "Urea", "Super phosphate"],
          "options_hi": ["एमओपी", "डीएपी", "यूरिया", "सुपर फॉस्फेट"],
          "answer": "MOP",
          "answer_hi": "एमओपी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which nutrient deficiency causes chlorosis in plants?",
          "question_hi": "किस पोषक तत्व की कमी से पौधों में पीतपत्रिता (chlorosis) होती है?",
          "options_en": ["Iron", "Calcium", "Phosphorus", "Magnesium"],
          "options_hi": ["लौह", "कैल्शियम", "फास्फोरस", "मैग्नीशियम"],
          "answer": "Iron",
          "answer_hi": "लौह",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which fertilizer is used to increase phosphorus in soil?",
          "question_hi": "मृदा में फास्फोरस बढ़ाने के लिए कौन सा उर्वरक प्रयोग किया जाता है?",
          "options_en": ["Urea", "MOP", "DAP", "Ammonium nitrate"],
          "options_hi": ["यूरिया", "एमओपी", "डीएपी", "अमोनियम नाइट्रेट"],
          "answer": "DAP",
          "answer_hi": "डीएपी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which of the following is a micronutrient?",
          "question_hi": "निम्न में से कौन एक सूक्ष्म पोषक तत्व है?",
          "options_en": ["Nitrogen", "Potassium", "Zinc", "Phosphorus"],
          "options_hi": ["नाइट्रोजन", "पोटैशियम", "जिंक", "फास्फोरस"],
          "answer": "Zinc",
          "answer_hi": "जिंक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What is the formula of gypsum used as soil amendment?",
          "question_hi": "मृदा संशोधन के रूप में उपयोग किए जाने वाले जिप्सम का सूत्र क्या है?",
          "options_en": ["CaSO₄·2H₂O", "CaCO₃", "MgSO₄", "NaCl"],
          "options_hi": ["CaSO₄·2H₂O", "CaCO₃", "MgSO₄", "NaCl"],
          "answer": "CaSO₄·2H₂O",
          "answer_hi": "CaSO₄·2H₂O",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which fertilizer is also known as ammoniacal fertilizer?",
          "question_hi": "कौन सा उर्वरक अमोनियाकल उर्वरक के रूप में जाना जाता है?",
          "options_en": ["Ammonium sulfate", "Urea", "DAP", "MOP"],
          "options_hi": ["अमोनियम सल्फेट", "यूरिया", "डीएपी", "एमओपी"],
          "answer": "Ammonium sulfate",
          "answer_hi": "अमोनियम सल्फेट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "The deficiency of which nutrient results in 'Khaira disease' in rice?",
          "question_hi": "धान में 'खैरा रोग' किस पोषक तत्व की कमी से होता है?",
          "options_en": ["Zinc", "Iron", "Nitrogen", "Calcium"],
          "options_hi": ["जिंक", "लौह", "नाइट्रोजन", "कैल्शियम"],
          "answer": "Zinc",
          "answer_hi": "जिंक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which form of nitrogen is easily absorbed by plants?",
          "question_hi": "नाइट्रोजन का कौन सा रूप पौधों द्वारा आसानी से अवशोषित किया जाता है?",
          "options_en": ["N₂", "NO₃⁻", "NH₃", "NH₂"],
          "options_hi": ["N₂", "NO₃⁻", "NH₃", "NH₂"],
          "answer": "NO₃⁻",
          "answer_hi": "NO₃⁻",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Green manuring improves which property of soil?",
          "question_hi": "हरित खाद मृदा की किस विशेषता को सुधारती है?",
          "options_en": ["Acidity", "Alkalinity", "Organic matter", "Salinity"],
          "options_hi": ["अम्लता", "क्षारीयता", "जैविक पदार्थ", "लवणता"],
          "answer": "Organic matter",
          "answer_hi": "जैविक पदार्थ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which is not a straight fertilizer?",
          "question_hi": "निम्न में से कौन एक सरल उर्वरक नहीं है?",
          "options_en": ["Urea", "Super phosphate", "MOP", "NPK"],
          "options_hi": ["यूरिया", "सुपर फॉस्फेट", "एमओपी", "एनपीके"],
          "answer": "NPK",
          "answer_hi": "एनपीके",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Vermicompost is produced by the action of:",
          "question_hi": "वर्मी कम्पोस्ट किसकी क्रिया द्वारा तैयार किया जाता है?",
          "options_en": ["Bacteria", "Earthworms", "Fungi", "Insects"],
          "options_hi": ["बैक्टीरिया", "केंचुए", "कवक", "कीड़े"],
          "answer": "Earthworms",
          "answer_hi": "केंचुए",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What is the ideal C:N ratio in compost for agriculture?",
          "question_hi": "कृषि के लिए खाद में आदर्श C:N अनुपात क्या है?",
          "options_en": ["10:1", "20:1", "30:1", "40:1"],
          "options_hi": ["10:1", "20:1", "30:1", "40:1"],
          "answer": "20:1",
          "answer_hi": "20:1",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which nutrient helps in root development?",
          "question_hi": "कौन सा पोषक तत्व जड़ विकास में सहायक होता है?",
          "options_en": ["Nitrogen", "Potassium", "Phosphorus", "Calcium"],
          "options_hi": ["नाइट्रोजन", "पोटैशियम", "फास्फोरस", "कैल्शियम"],
          "answer": "Phosphorus",
          "answer_hi": "फास्फोरस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which nutrient improves disease resistance in plants?",
          "question_hi": "कौन सा पोषक तत्व पौधों में रोग प्रतिरोधक क्षमता को बढ़ाता है?",
          "options_en": ["Potassium", "Nitrogen", "Sulfur", "Iron"],
          "options_hi": ["पोटैशियम", "नाइट्रोजन", "सल्फर", "लौह"],
          "answer": "Potassium",
          "answer_hi": "पोटैशियम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which is an organic fertilizer?",
          "question_hi": "निम्न में से कौन जैविक उर्वरक है?",
          "options_en": ["Urea", "Compost", "MOP", "DAP"],
          "options_hi": ["यूरिया", "कम्पोस्ट", "एमओपी", "डीएपी"],
          "answer": "Compost",
          "answer_hi": "कम्पोस्ट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What is the role of boron in plants?",
          "question_hi": "पौधों में बोरॉन की भूमिका क्या है?",
          "options_en": ["Helps in flowering", "Root growth", "Leaf formation", "Water absorption"],
          "options_hi": ["फूल आने में सहायक", "जड़ वृद्धि", "पत्ती निर्माण", "जल अवशोषण"],
          "answer": "Helps in flowering",
          "answer_hi": "फूल आने में सहायक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which element is a secondary nutrient for plants?",
          "question_hi": "पौधों के लिए कौन सा तत्व द्वितीयक पोषक है?",
          "options_en": ["Nitrogen", "Magnesium", "Zinc", "Copper"],
          "options_hi": ["नाइट्रोजन", "मैग्नीशियम", "जिंक", "तांबा"],
          "answer": "Magnesium",
          "answer_hi": "मैग्नीशियम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Which nutrient regulates stomatal opening in plants?",
          "question_hi": "पौधों में स्टोमेटा के खुलने को कौन सा पोषक तत्व नियंत्रित करता है?",
          "options_en": ["Potassium", "Nitrogen", "Phosphorus", "Zinc"],
          "options_hi": ["पोटैशियम", "नाइट्रोजन", "फास्फोरस", "जिंक"],
          "answer": "Potassium",
          "answer_hi": "पोटैशियम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "Lime is used in acidic soil to improve:",
          "question_hi": "अम्लीय मृदा में सुधार के लिए चूना किसके लिए प्रयोग किया जाता है?",
          "options_en": ["Acidity", "Salinity", "Alkalinity", "Moisture"],
          "options_hi": ["अम्लता", "लवणता", "क्षारीयता", "आर्द्रता"],
          "answer": "Acidity",
          "answer_hi": "अम्लता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Which compound is used in foliar spray to supply micronutrients?",
          "question_hi": "सूक्ष्म पोषक तत्वों की पूर्ति के लिए पत्तियों पर छिड़काव में कौन यौगिक प्रयोग होता है?",
          "options_en": ["Chelates", "Carbamates", "Urea", "Sulphates"],
          "options_hi": ["किलेट्स", "कार्बामेट्स", "यूरिया", "सल्फेट्स"],
          "answer": "Chelates",
          "answer_hi": "किलेट्स",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "Which fertilizer increases protein content in cereals?",
          "question_hi": "कौन सा उर्वरक अनाजों में प्रोटीन की मात्रा बढ़ाता है?",
          "options_en": ["Potash", "Phosphate", "Nitrogen", "Sulfur"],
          "options_hi": ["पोटाश", "फॉस्फेट", "नाइट्रोजन", "सल्फर"],
          "answer": "Nitrogen",
          "answer_hi": "नाइट्रोजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "Which is a biofertilizer?",
          "question_hi": "निम्न में से कौन एक जैव उर्वरक है?",
          "options_en": ["Rhizobium", "Urea", "MOP", "NPK"],
          "options_hi": ["राइजोबियम", "यूरिया", "एमओपी", "एनपीके"],
          "answer": "Rhizobium",
          "answer_hi": "राइजोबियम",
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
  
  
  