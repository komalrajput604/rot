const questions = [
        {
          "num": 1,
          "question_en": "What is the main cause of global warming?",
          "question_hi": "वैश्विक उष्मीकरण का मुख्य कारण क्या है?",
          "options_en": ["Deforestation", "Industrialization", "Greenhouse gases", "Water pollution"],
          "options_hi": ["वनों की कटाई", "औद्योगिकीकरण", "ग्रीनहाउस गैसें", "जल प्रदूषण"],
          "answer": "Greenhouse gases",
          "answer_hi": "ग्रीनहाउस गैसें",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which of the following is a non-renewable resource?",
          "question_hi": "निम्नलिखित में से कौन सा एक अक्षय संसाधन नहीं है?",
          "options_en": ["Solar energy", "Wind energy", "Coal", "Biomass"],
          "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "जैविक पदार्थ"],
          "answer": "Coal",
          "answer_hi": "कोयला",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which of the following is an example of a biodegradable pollutant?",
          "question_hi": "निम्नलिखित में से कौन सा जैविक रूप से विघटित होने वाला प्रदूषक है?",
          "options_en": ["Plastic", "Pesticides", "Cigarette butts", "Organic waste"],
          "options_hi": ["प्लास्टिक", "कीटनाशक", "सिगरेट के ढेर", "जैविक अपशिष्ट"],
          "answer": "Organic waste",
          "answer_hi": "जैविक अपशिष्ट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "What does the term 'ecology' refer to?",
          "question_hi": "'पारिस्थितिकी' शब्द का क्या अर्थ है?",
          "options_en": ["Study of animals", "Study of plants", "Study of ecosystems", "Study of weather patterns"],
          "options_hi": ["पशुओं का अध्ययन", "पौधों का अध्ययन", "पारिस्थितिकी प्रणालियों का अध्ययन", "मौसम पैटर्न का अध्ययन"],
          "answer": "Study of ecosystems",
          "answer_hi": "पारिस्थितिकी प्रणालियों का अध्ययन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which of the following gases is primarily responsible for acid rain?",
          "question_hi": "निम्नलिखित में से कौन सी गैस मुख्य रूप से अम्लीय वर्षा के लिए जिम्मेदार है?",
          "options_en": ["Nitrogen", "Carbon dioxide", "Sulfur dioxide", "Oxygen"],
          "options_hi": ["नाइट्रोजन", "कार्बन डाइऑक्साइड", "सल्फर डाइऑक्साइड", "ऑक्सीजन"],
          "answer": "Sulfur dioxide",
          "answer_hi": "सल्फर डाइऑक्साइड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which is a consequence of deforestation?",
          "question_hi": "वनों की कटाई का परिणाम क्या है?",
          "options_en": ["Increased rainfall", "Soil erosion", "Improved air quality", "More wildlife"],
          "options_hi": ["बढ़ी हुई वर्षा", "मृदा अपरदन", "बेहतर वायु गुणवत्ता", "अधिक वन्यजीव"],
          "answer": "Soil erosion",
          "answer_hi": "मृदा अपरदन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "What is the main component of the ozone layer?",
          "question_hi": "ओजोन परत का मुख्य घटक क्या है?",
          "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Ozone"],
          "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "ओजोन"],
          "answer": "Ozone",
          "answer_hi": "ओजोन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What is the main cause of water pollution?",
          "question_hi": "जल प्रदूषण का मुख्य कारण क्या है?",
          "options_en": ["Industrial waste", "Domestic waste", "Agricultural runoff", "All of the above"],
          "options_hi": ["औद्योगिक कचरा", "घरेलू कचरा", "कृषि अपवाह", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which of the following is the largest source of renewable energy?",
          "question_hi": "निम्नलिखित में से कौन सा अक्षय ऊर्जा का सबसे बड़ा स्रोत है?",
          "options_en": ["Solar energy", "Hydropower", "Wind energy", "Geothermal energy"],
          "options_hi": ["सौर ऊर्जा", "जलविद्युत", "पवन ऊर्जा", "भूतापीय ऊर्जा"],
          "answer": "Hydropower",
          "answer_hi": "जलविद्युत",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is a major consequence of climate change?",
          "question_hi": "जलवायु परिवर्तन का एक प्रमुख परिणाम क्या है?",
          "options_en": ["Rising sea levels", "Increased biodiversity", "Increased crop yields", "Decreased pollution"],
          "options_hi": ["समुद्र स्तर का बढ़ना", "बढ़ती जैव विविधता", "बढ़ी हुई फसल उपज", "कम होता प्रदूषण"],
          "answer": "Rising sea levels",
          "answer_hi": "समुद्र स्तर का बढ़ना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which of the following is an example of a renewable resource?",
          "question_hi": "निम्नलिखित में से कौन सा एक अक्षय संसाधन का उदाहरण है?",
          "options_en": ["Natural gas", "Solar energy", "Coal", "Nuclear energy"],
          "options_hi": ["प्राकृतिक गैस", "सौर ऊर्जा", "कोयला", "परमाणु ऊर्जा"],
          "answer": "Solar energy",
          "answer_hi": "सौर ऊर्जा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What is the main cause of ozone depletion?",
          "question_hi": "ओजोन परत के क्षरण का मुख्य कारण क्या है?",
          "options_en": ["Greenhouse gases", "CFCs", "Carbon dioxide", "Water vapour"],
          "options_hi": ["ग्रीनहाउस गैसें", "सीएफसी", "कार्बन डाइऑक्साइड", "वाष्प जल"],
          "answer": "CFCs",
          "answer_hi": "सीएफसी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What is the effect of acid rain on soil?",
          "question_hi": "अम्लीय वर्षा का मृदा पर क्या प्रभाव पड़ता है?",
          "options_en": ["Increases fertility", "Decreases fertility", "Neutralizes soil", "No effect"],
          "options_hi": ["उर्वरता में वृद्धि", "उर्वरता में कमी", "मृदा को तटस्थ करता है", "कोई प्रभाव नहीं"],
          "answer": "Decreases fertility",
          "answer_hi": "उर्वरता में कमी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "What is the term for the gradual increase in Earth's temperature?",
          "question_hi": "पृथ्वी के तापमान में धीरे-धीरे वृद्धि को क्या कहा जाता है?",
          "options_en": ["Global warming", "Greenhouse effect", "Ozone depletion", "Climate change"],
          "options_hi": ["वैश्विक उष्मीकरण", "ग्रीनहाउस प्रभाव", "ओजोन परत का क्षरण", "जलवायु परिवर्तन"],
          "answer": "Global warming",
          "answer_hi": "वैश्विक उष्मीकरण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What does the term 'sustainability' mean?",
          "question_hi": "'सततता' शब्द का क्या अर्थ है?",
          "options_en": ["Meeting present needs without compromising future needs", "Using resources without any limit", "Destroying ecosystems for economic growth", "Maximizing short-term profits"],
          "options_hi": ["वर्तमान आवश्यकताओं को भविष्य की आवश्यकताओं से समझौता किए बिना पूरा करना", "संसाधनों का असीमित उपयोग करना", "आर्थिक विकास के लिए पारिस्थितिकी प्रणालियों का विनाश करना", "संक्षिप्त अवधि के लाभ को अधिकतम करना"],
          "answer": "Meeting present needs without compromising future needs",
          "answer_hi": "वर्तमान आवश्यकताओं को भविष्य की आवश्यकताओं से समझौता किए बिना पूरा करना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which of the following is an example of a non-biodegradable pollutant?",
          "question_hi": "निम्नलिखित में से कौन सा एक गैर-बायोडिग्रेडेबल प्रदूषक है?",
          "options_en": ["Plastic", "Organic waste", "Food scraps", "Paper"],
          "options_hi": ["प्लास्टिक", "जैविक अपशिष्ट", "खाद्य अवशेष", "कागज"],
          "answer": "Plastic",
          "answer_hi": "प्लास्टिक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which of the following is a major greenhouse gas?",
          "question_hi": "निम्नलिखित में से कौन सी एक प्रमुख ग्रीनहाउस गैस है?",
          "options_en": ["Nitrogen", "Methane", "Oxygen", "Argon"],
          "options_hi": ["नाइट्रोजन", "मीथेन", "ऑक्सीजन", "आर्गन"],
          "answer": "Methane",
          "answer_hi": "मीथेन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "What is the effect of deforestation on wildlife?",
          "question_hi": "वनों की कटाई का वन्यजीवों पर क्या प्रभाव पड़ता है?",
          "options_en": ["Increases habitat", "Decreases habitat", "Increases biodiversity", "Improves ecosystems"],
          "options_hi": ["आवास में वृद्धि", "आवास में कमी", "जैव विविधता में वृद्धि", "पारिस्थितिकी प्रणालियों में सुधार"],
          "answer": "Decreases habitat",
          "answer_hi": "आवास में कमी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What is the purpose of recycling?",
          "question_hi": "पुनः प्रयोग का उद्देश्य क्या है?",
          "options_en": ["Reduce waste", "Save energy", "Conserve natural resources", "All of the above"],
          "options_hi": ["कचरा कम करना", "ऊर्जा बचाना", "प्राकृतिक संसाधनों का संरक्षण", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which of the following is an environmental issue caused by industrialization?",
          "question_hi": "औद्योगिकीकरण द्वारा उत्पन्न पर्यावरणीय समस्या कौन सी है?",
          "options_en": ["Air pollution", "Soil erosion", "Deforestation", "All of the above"],
          "options_hi": ["वायु प्रदूषण", "मृदा अपरदन", "वनों की कटाई", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Which of the following is a direct consequence of overpopulation?",
          "question_hi": "अत्यधिक जनसंख्या का सीधा परिणाम क्या है?",
          "options_en": ["Resource depletion", "Increased food production", "Improved healthcare", "None of the above"],
          "options_hi": ["संसाधनों की कमी", "बढ़ी हुई खाद्य उत्पादन", "बेहतर स्वास्थ्य देखभाल", "उपरोक्त में से कोई नहीं"],
          "answer": "Resource depletion",
          "answer_hi": "संसाधनों की कमी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "What is the primary cause of the depletion of the ozone layer?",
          "question_hi": "ओजोन परत के क्षरण का प्राथमिक कारण क्या है?",
          "options_en": ["Nitrogen oxides", "Carbon dioxide", "CFCs", "Methane"],
          "options_hi": ["नाइट्रोजन ऑक्साइड", "कार्बन डाइऑक्साइड", "सीएफसी", "मीथेन"],
          "answer": "CFCs",
          "answer_hi": "सीएफसी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "What is the effect of excessive use of chemical fertilizers?",
          "question_hi": "रासायनिक उर्वरकों के अत्यधिक उपयोग का क्या प्रभाव पड़ता है?",
          "options_en": ["Increases soil fertility", "Reduces soil fertility", "Improves crop yield", "None of the above"],
          "options_hi": ["मृदा की उर्वरता में वृद्धि", "मृदा की उर्वरता में कमी", "फसल की उपज में सुधार", "उपरोक्त में से कोई नहीं"],
          "answer": "Reduces soil fertility",
          "answer_hi": "मृदा की उर्वरता में कमी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "What does the term 'carbon footprint' refer to?",
          "question_hi": "'कार्बन फुटप्रिंट' शब्द का क्या अर्थ है?",
          "options_en": ["The total emissions of carbon dioxide by an individual", "The amount of food consumed", "The quantity of renewable resources used", "None of the above"],
          "options_hi": ["व्यक्ति द्वारा उत्पन्न कुल कार्बन डाइऑक्साइड उत्सर्जन", "खपत किए गए खाद्य की मात्रा", "उपयोग किए गए अक्षय संसाधनों की मात्रा", "उपरोक्त में से कोई नहीं"],
          "answer": "The total emissions of carbon dioxide by an individual",
          "answer_hi": "व्यक्ति द्वारा उत्पन्न कुल कार्बन डाइऑक्साइड उत्सर्जन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "What is the goal of sustainable development?",
          "question_hi": "सतत विकास का उद्देश्य क्या है?",
          "options_en": ["Maximize profits", "Reduce waste", "Balance economic growth with environmental protection", "Increase industrial output"],
          "options_hi": ["लाभ अधिकतम करना", "कचरा कम करना", "आर्थिक विकास को पर्यावरणीय संरक्षण के साथ संतुलित करना", "औद्योगिक उत्पादन बढ़ाना"],
          "answer": "Balance economic growth with environmental protection",
          "answer_hi": "आर्थिक विकास को पर्यावरणीय संरक्षण के साथ संतुलित करना",
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
  
  
  