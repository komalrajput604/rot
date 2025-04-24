const questions = [
        {
          "num": 1,
          "question_en": "What is the main source of energy for ecosystems?",
          "question_hi": "पारिस्थितिकी तंत्रों के लिए मुख्य ऊर्जा स्रोत क्या है?",
          "options_en": ["Sunlight", "Wind", "Water", "Soil"],
          "options_hi": ["सूर्य की रोशनी", "हवा", "पानी", "मिट्टी"],
          "answer": "Sunlight",
          "answer_hi": "सूर्य की रोशनी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What is the greenhouse effect?",
          "question_hi": "ग्रीनहाउस प्रभाव क्या है?",
          "options_en": ["Warming of Earth by gases", "Cooling of Earth by gases", "Absorption of sunlight by Earth", "Emission of gases into the atmosphere"],
          "options_hi": ["गैसों द्वारा पृथ्वी का गर्म होना", "गैसों द्वारा पृथ्वी का ठंडा होना", "पृथ्वी द्वारा सूर्य के प्रकाश का अवशोषण", "वायुमंडल में गैसों का उत्सर्जन"],
          "answer": "Warming of Earth by gases",
          "answer_hi": "गैसों द्वारा पृथ्वी का गर्म होना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which of the following is a renewable resource?",
          "question_hi": "निम्नलिखित में से कौन सा एक नवीकरणीय संसाधन है?",
          "options_en": ["Coal", "Natural gas", "Wind", "Oil"],
          "options_hi": ["कोयला", "प्राकृतिक गैस", "हवा", "तेल"],
          "answer": "Wind",
          "answer_hi": "हवा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which of the following is not a type of pollution?",
          "question_hi": "निम्नलिखित में से कौन सा प्रदूषण का प्रकार नहीं है?",
          "options_en": ["Air Pollution", "Water Pollution", "Noise Pollution", "Ecosystem Pollution"],
          "options_hi": ["वायु प्रदूषण", "जल प्रदूषण", "ध्वनि प्रदूषण", "पारिस्थितिकी तंत्र प्रदूषण"],
          "answer": "Ecosystem Pollution",
          "answer_hi": "पारिस्थितिकी तंत्र प्रदूषण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which gas is primarily responsible for global warming?",
          "question_hi": "वैश्विक तापवृद्धि के लिए प्रमुख गैस कौन सी है?",
          "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
          "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
          "answer": "Carbon dioxide",
          "answer_hi": "कार्बन डाइऑक्साइड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which of the following is a major source of water pollution?",
          "question_hi": "निम्नलिखित में से कौन जल प्रदूषण का एक प्रमुख स्रोत है?",
          "options_en": ["Factories", "Trees", "Sunlight", "Wind"],
          "options_hi": ["कारख़ाने", "वृक्ष", "सूर्य की रोशनी", "हवा"],
          "answer": "Factories",
          "answer_hi": "कारख़ाने",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "What is deforestation?",
          "question_hi": "वनों की अतिक्रमण क्या है?",
          "options_en": ["Cutting down trees", "Replanting trees", "Growing trees", "Protecting forests"],
          "options_hi": ["वृक्षों को काटना", "वृक्षों को फिर से लगाना", "वृक्षों को बढ़ाना", "जंगलों का संरक्षण"],
          "answer": "Cutting down trees",
          "answer_hi": "वृक्षों को काटना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which of the following is a non-renewable resource?",
          "question_hi": "निम्नलिखित में से कौन सा एक अपुनर्नवीकरणीय संसाधन है?",
          "options_en": ["Wind", "Solar energy", "Coal", "Biomass"],
          "options_hi": ["हवा", "सौर ऊर्जा", "कोयला", "जैविक पदार्थ"],
          "answer": "Coal",
          "answer_hi": "कोयला",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What is the primary cause of ozone layer depletion?",
          "question_hi": "ओजोन परत की कमी का मुख्य कारण क्या है?",
          "options_en": ["CFCs", "CO2", "Methane", "Oxygen"],
          "options_hi": ["सीएफसी", "सीओ2", "मीथेन", "ऑक्सीजन"],
          "answer": "CFCs",
          "answer_hi": "सीएफसी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which of the following is a method to conserve water?",
          "question_hi": "निम्नलिखित में से कौन सा जल संरक्षण की विधि है?",
          "options_en": ["Water recycling", "Water pollution", "Water wasting", "Water extraction"],
          "options_hi": ["जल पुनर्चक्रण", "जल प्रदूषण", "जल बर्बादी", "जल निष्कर्षण"],
          "answer": "Water recycling",
          "answer_hi": "जल पुनर्चक्रण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which type of energy is solar energy?",
          "question_hi": "सौर ऊर्जा किस प्रकार की ऊर्जा है?",
          "options_en": ["Renewable", "Non-renewable", "Fossil", "Atomic"],
          "options_hi": ["नवीकरणीय", "अपुनर्नवीकरणीय", "जीवाश्म", "आणविक"],
          "answer": "Renewable",
          "answer_hi": "नवीकरणीय",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What does 'sustainable development' mean?",
          "question_hi": "'स्थायी विकास' का क्या अर्थ है?",
          "options_en": ["Development that meets present needs without compromising future generations", "Rapid industrial growth", "Unlimited resource consumption", "Population growth without consideration of resources"],
          "options_hi": ["विकास जो वर्तमान की जरूरतों को भविष्य पीढ़ियों के अधिकारों से समझौता किए बिना पूरा करता है", "तेज़ औद्योगिक विकास", "असीमित संसाधन खपत", "संसाधनों की परवाह किए बिना जनसंख्या वृद्धि"],
          "answer": "Development that meets present needs without compromising future generations",
          "answer_hi": "विकास जो वर्तमान की जरूरतों को भविष्य पीढ़ियों के अधिकारों से समझौता किए बिना पूरा करता है",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What is the term for the destruction of forests for agricultural purposes?",
          "question_hi": "कृषि उद्देश्यों के लिए वनों के विनाश को क्या कहते हैं?",
          "options_en": ["Deforestation", "Reforestation", "Afforestation", "Desertification"],
          "options_hi": ["वनों की अतिक्रमण", "वनरोपण", "वनवास", "मरुस्थलीकरण"],
          "answer": "Deforestation",
          "answer_hi": "वनों की अतिक्रमण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which of the following is an effect of global warming?",
          "question_hi": "वैश्विक तापवृद्धि का निम्नलिखित में से कौन सा प्रभाव है?",
          "options_en": ["Rising sea levels", "Cold winters", "Decreasing biodiversity", "All of the above"],
          "options_hi": ["समुद्र स्तर का बढ़ना", "ठंडी सर्दियाँ", "जैव विविधता का घटना", "उपरोक्त सभी"],
          "answer": "Rising sea levels",
          "answer_hi": "समुद्र स्तर का बढ़ना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which of the following is a greenhouse gas?",
          "question_hi": "निम्नलिखित में से कौन सी एक ग्रीनहाउस गैस है?",
          "options_en": ["Oxygen", "Nitrogen", "Methane", "Hydrogen"],
          "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "मीथेन", "हाइड्रोजन"],
          "answer": "Methane",
          "answer_hi": "मीथेन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "What is the primary purpose of conservation?",
          "question_hi": "संरक्षण का मुख्य उद्देश्य क्या है?",
          "options_en": ["To protect biodiversity", "To increase resource consumption", "To build more industries", "To expand urban areas"],
          "options_hi": ["जैव विविधता की रक्षा करना", "संसाधन खपत बढ़ाना", "और अधिक उद्योग बनाना", "शहरी क्षेत्रों का विस्तार करना"],
          "answer": "To protect biodiversity",
          "answer_hi": "जैव विविधता की रक्षा करना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "What is the process of converting waste into useful products called?",
          "question_hi": "कचरे को उपयोगी उत्पादों में बदलने की प्रक्रिया को क्या कहते हैं?",
          "options_en": ["Recycling", "Incineration", "Landfilling", "Composting"],
          "options_hi": ["पुनर्चक्रण", "दहन", "भूमिगत करना", "सारकारण"],
          "answer": "Recycling",
          "answer_hi": "पुनर्चक्रण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "What is the main consequence of soil erosion?",
          "question_hi": "मृदा अपरदन का मुख्य परिणाम क्या है?",
          "options_en": ["Loss of fertility", "Increased rainfall", "Increased biodiversity", "None of the above"],
          "options_hi": ["उर्वरता की हानि", "वृष्टि में वृद्धि", "जैव विविधता में वृद्धि", "उपरोक्त में से कोई नहीं"],
          "answer": "Loss of fertility",
          "answer_hi": "उर्वरता की हानि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which of the following is an example of non-biodegradable waste?",
          "question_hi": "निम्नलिखित में से कौन सा अपघटनशील कचरे का उदाहरण है?",
          "options_en": ["Plastic", "Food waste", "Paper", "Wood"],
          "options_hi": ["प्लास्टिक", "खाद्य अपशिष्ट", "कागज", "लकड़ी"],
          "answer": "Plastic",
          "answer_hi": "प्लास्टिक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "What is the main goal of sustainable agriculture?",
          "question_hi": "स्थायी कृषि का मुख्य लक्ष्य क्या है?",
          "options_en": ["To produce food in an environmentally friendly way", "To increase pesticide use", "To use more chemical fertilizers", "To reduce crop yields"],
          "options_hi": ["पर्यावरण के अनुकूल तरीके से भोजन का उत्पादन करना", "कीटनाशकों का अधिक उपयोग करना", "रासायनिक उर्वरकों का अधिक उपयोग करना", "फसल उत्पादन को कम करना"],
          "answer": "To produce food in an environmentally friendly way",
          "answer_hi": "पर्यावरण के अनुकूल तरीके से भोजन का उत्पादन करना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Which is the primary method to reduce air pollution?",
          "question_hi": "वायु प्रदूषण को कम करने का मुख्य तरीका क्या है?",
          "options_en": ["Using cleaner fuels", "Increasing industrial activity", "Increasing transportation", "Reducing green spaces"],
          "options_hi": ["साफ ईंधन का उपयोग करना", "औद्योगिक गतिविधि बढ़ाना", "यातायात बढ़ाना", "हरियाली क्षेत्र कम करना"],
          "answer": "Using cleaner fuels",
          "answer_hi": "साफ ईंधन का उपयोग करना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "What is the main cause of acid rain?",
          "question_hi": "वर्षा के अम्लीय होने का मुख्य कारण क्या है?",
          "options_en": ["Emission of sulfur dioxide and nitrogen oxides", "Overuse of fertilizers", "Deforestation", "Overpopulation"],
          "options_hi": ["सल्फर डाइऑक्साइड और नाइट्रोजन ऑक्साइड्स का उत्सर्जन", "उर्वरकों का अत्यधिक उपयोग", "वनों की अतिक्रमण", "अतिपीढ़ी"],
          "answer": "Emission of sulfur dioxide and nitrogen oxides",
          "answer_hi": "सल्फर डाइऑक्साइड और नाइट्रोजन ऑक्साइड्स का उत्सर्जन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "What is an example of sustainable energy?",
          "question_hi": "स्थायी ऊर्जा का एक उदाहरण क्या है?",
          "options_en": ["Solar power", "Coal", "Natural gas", "Oil"],
          "options_hi": ["सौर ऊर्जा", "कोयला", "प्राकृतिक गैस", "तेल"],
          "answer": "Solar power",
          "answer_hi": "सौर ऊर्जा",
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
  
  
  