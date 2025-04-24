const questions = [
        {
          "num": 1,
          "question_en": "What is the primary source of environmental pollution?",
          "question_hi": "पर्यावरण प्रदूषण का प्राथमिक स्रोत क्या है?",
          "options_en": ["Industrial emissions", "Agricultural runoff", "Deforestation", "All of the above"],
          "options_hi": ["औद्योगिक उत्सर्जन", "कृषि बहाव", "वृक्षों की कटाई", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which gas is primarily responsible for global warming?",
          "question_hi": "वैश्विक तापन के लिए कौन सा गैस मुख्य रूप से जिम्मेदार है?",
          "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
          "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "मीथेन"],
          "answer": "Carbon Dioxide",
          "answer_hi": "कार्बन डाइऑक्साइड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What does the term 'Biodiversity' refer to?",
          "question_hi": "'जैव विविधता' शब्द का क्या अर्थ है?",
          "options_en": ["Variety of species", "Variation in climate", "Different ecosystems", "All of the above"],
          "options_hi": ["प्रजातियों की विविधता", "जलवायु में भिन्नता", "विभिन्न पारिस्थितिकी तंत्र", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "What is the main cause of ozone layer depletion?",
          "question_hi": "ओजोन परत के क्षय का मुख्य कारण क्या है?",
          "options_en": ["Chlorofluorocarbons (CFCs)", "Carbon monoxide", "Methane", "Sulphur dioxide"],
          "options_hi": ["क्लोरोफ्लोरोकार्बन (CFCs)", "कार्बन मोनोऑक्साइड", "मीथेन", "सल्फर डाइऑक्साइड"],
          "answer": "Chlorofluorocarbons (CFCs)",
          "answer_hi": "क्लोरोफ्लोरोकार्बन (CFCs)",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What is the process of converting waste into reusable material called?",
          "question_hi": "कचरे को पुन: उपयोगी सामग्री में परिवर्तित करने की प्रक्रिया को क्या कहा जाता है?",
          "options_en": ["Recycling", "Composting", "Incineration", "Landfilling"],
          "options_hi": ["पुनःसंचयन", "कम्पोस्टिंग", "जला देना", "भूमिगत कचरा"],
          "answer": "Recycling",
          "answer_hi": "पुनःसंचयन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which of the following is a non-renewable resource?",
          "question_hi": "निम्नलिखित में से कौन सा एक गैर-नवीकरणीय संसाधन है?",
          "options_en": ["Solar energy", "Wind energy", "Coal", "Geothermal energy"],
          "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "भूतापीय ऊर्जा"],
          "answer": "Coal",
          "answer_hi": "कोयला",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which of the following is an example of a renewable resource?",
          "question_hi": "निम्नलिखित में से कौन सा एक नवीकरणीय संसाधन है?",
          "options_en": ["Natural gas", "Coal", "Solar energy", "Petroleum"],
          "options_hi": ["प्राकृतिक गैस", "कोयला", "सौर ऊर्जा", "पेट्रोलियम"],
          "answer": "Solar energy",
          "answer_hi": "सौर ऊर्जा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What is the primary cause of acid rain?",
          "question_hi": "अम्लीय वर्षा का मुख्य कारण क्या है?",
          "options_en": ["Industrial emissions", "Agricultural runoff", "Natural causes", "Both A and B"],
          "options_hi": ["औद्योगिक उत्सर्जन", "कृषि बहाव", "प्राकृतिक कारण", "A और B दोनों"],
          "answer": "Industrial emissions",
          "answer_hi": "औद्योगिक उत्सर्जन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which of the following is an effect of global warming?",
          "question_hi": "वैश्विक तापन का निम्नलिखित में से कौन सा प्रभाव है?",
          "options_en": ["Melting of polar ice", "Rising sea levels", "Changes in weather patterns", "All of the above"],
          "options_hi": ["ध्रुवीय बर्फ का पिघलना", "समुद्र स्तर का बढ़ना", "मौसम पैटर्न में बदलाव", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What does the term 'Sustainability' refer to?",
          "question_hi": "'सततता' शब्द का क्या अर्थ है?",
          "options_en": ["Long-term environmental health", "Economic development", "Social equality", "All of the above"],
          "options_hi": ["दीर्घकालिक पर्यावरणीय स्वास्थ्य", "आर्थिक विकास", "सामाजिक समानता", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What is the key to reducing greenhouse gas emissions?",
          "question_hi": "ग्रीनहाउस गैसों के उत्सर्जन को कम करने की कुंजी क्या है?",
          "options_en": ["Energy efficiency", "Afforestation", "Reducing waste", "All of the above"],
          "options_hi": ["ऊर्जा दक्षता", "वृक्षारोपण", "कचरे को कम करना", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which ecosystem is most affected by deforestation?",
          "question_hi": "वृक्षों की कटाई से कौन सा पारिस्थितिकी तंत्र सबसे अधिक प्रभावित होता है?",
          "options_en": ["Forest ecosystem", "Aquatic ecosystem", "Desert ecosystem", "Urban ecosystem"],
          "options_hi": ["वन पारिस्थितिकी तंत्र", "जलीय पारिस्थितिकी तंत्र", "मृग पारिस्थितिकी तंत्र", "शहरी पारिस्थितिकी तंत्र"],
          "answer": "Forest ecosystem",
          "answer_hi": "वन पारिस्थितिकी तंत्र",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What is the role of wetlands in the environment?",
          "question_hi": "पर्यावरण में आर्द्रभूमि की क्या भूमिका है?",
          "options_en": ["Water purification", "Flood control", "Habitat for wildlife", "All of the above"],
          "options_hi": ["जल शुद्धिकरण", "बाढ़ नियंत्रण", "जंगली जीवन के लिए आवास", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which of the following is an example of environmental conservation?",
          "question_hi": "निम्नलिखित में से पर्यावरण संरक्षण का एक उदाहरण क्या है?",
          "options_en": ["Reforestation", "Pollution control", "Energy saving", "All of the above"],
          "options_hi": ["पुनःवनीकरण", "प्रदूषण नियंत्रण", "ऊर्जा बचत", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What is the major cause of soil erosion?",
          "question_hi": "मृदा अपरदन का प्रमुख कारण क्या है?",
          "options_en": ["Deforestation", "Overgrazing", "Agricultural activities", "All of the above"],
          "options_hi": ["वृक्षों की कटाई", "अधिक घास चरना", "कृषि गतिविधियाँ", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which of the following is a greenhouse gas?",
          "question_hi": "निम्नलिखित में से कौन सा ग्रीनहाउस गैस है?",
          "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
          "answer": "Carbon Dioxide",
          "answer_hi": "कार्बन डाइऑक्साइड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which of the following is a result of overpopulation?",
          "question_hi": "अत्यधिक जनसंख्या का परिणाम निम्नलिखित में से क्या है?",
          "options_en": ["Resource depletion", "Overconsumption of goods", "Pollution", "All of the above"],
          "options_hi": ["संसाधनों की कमी", "सामग्रियों की अधिक खपत", "प्रदूषण", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "What is the primary goal of environmental education?",
          "question_hi": "पर्यावरण शिक्षा का मुख्य उद्देश्य क्या है?",
          "options_en": ["Raising awareness", "Promoting sustainability", "Encouraging conservation", "All of the above"],
          "options_hi": ["जागरूकता बढ़ाना", "सततता को बढ़ावा देना", "संरक्षण को बढ़ावा देना", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which of the following is a sustainable practice?",
          "question_hi": "निम्नलिखित में से कौन सा सतत अभ्यास है?",
          "options_en": ["Water conservation", "Energy-efficient technology", "Waste reduction", "All of the above"],
          "options_hi": ["जल संरक्षण", "ऊर्जा दक्ष तकनीक", "कचरा कम करना", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "What is the importance of tree planting?",
          "question_hi": "वृक्षारोपण का क्या महत्व है?",
          "options_en": ["Mitigating climate change", "Improving air quality", "Providing wildlife habitat", "All of the above"],
          "options_hi": ["जलवायु परिवर्तन को कम करना", "वायु गुणवत्ता में सुधार", "जंगली जीवन के लिए आवास प्रदान करना", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "What is the role of the atmosphere in protecting life on Earth?",
          "question_hi": "पृथ्वी पर जीवन की रक्षा में वातावरण की क्या भूमिका है?",
          "options_en": ["Absorbing harmful solar radiation", "Providing oxygen", "Regulating temperature", "All of the above"],
          "options_hi": ["हानिकारक सौर विकिरण को अवशोषित करना", "ऑक्सीजन प्रदान करना", "तापमान को नियंत्रित करना", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "Which of the following is a major environmental challenge in urban areas?",
          "question_hi": "शहरी क्षेत्रों में प्रमुख पर्यावरणीय चुनौती क्या है?",
          "options_en": ["Air pollution", "Waste management", "Water scarcity", "All of the above"],
          "options_hi": ["वायु प्रदूषण", "कचरा प्रबंधन", "जल संकट", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
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
  
  
  