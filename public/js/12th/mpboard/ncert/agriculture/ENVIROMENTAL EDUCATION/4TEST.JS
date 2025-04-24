const questions = [
        {
          "num": 1,
          "question_en": "What is the primary source of environmental pollution?",
          "question_hi": "पर्यावरण प्रदूषण का मुख्य स्रोत क्या है?",
          "options_en": ["Factories", "Vehicles", "Agriculture", "All of the above"],
          "options_hi": ["कारखाने", "वाहन", "कृषि", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which of the following is a renewable resource?",
          "question_hi": "निम्नलिखित में से कौन सा एक नवीनीकरणीय संसाधन है?",
          "options_en": ["Coal", "Solar Energy", "Natural Gas", "Petroleum"],
          "options_hi": ["कोयला", "सौर ऊर्जा", "प्राकृतिक गैस", "पेट्रोलियम"],
          "answer": "Solar Energy",
          "answer_hi": "सौर ऊर्जा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the major cause of global warming?",
          "question_hi": "वैश्विक तापन का प्रमुख कारण क्या है?",
          "options_en": ["Deforestation", "Greenhouse gases", "Volcanic eruptions", "Ozone depletion"],
          "options_hi": ["वृक्षों की कटाई", "ग्रीनहाउस गैसें", "ज्वालामुखीय विस्फोट", "ओजोन का ह्रास"],
          "answer": "Greenhouse gases",
          "answer_hi": "ग्रीनहाउस गैसें",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "What is the main purpose of afforestation?",
          "question_hi": "वृक्षारोपण का मुख्य उद्देश्य क्या है?",
          "options_en": ["To increase the number of trees", "To prevent soil erosion", "To increase oxygen levels", "All of the above"],
          "options_hi": ["वृक्षों की संख्या बढ़ाना", "मिट्टी का कटाव रोकना", "ऑक्सीजन स्तर बढ़ाना", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which of the following is a non-renewable resource?",
          "question_hi": "निम्नलिखित में से कौन सा एक गैर-नवीनीकरणीय संसाधन है?",
          "options_en": ["Wind", "Coal", "Solar Energy", "Water"],
          "options_hi": ["हवा", "कोयला", "सौर ऊर्जा", "जल"],
          "answer": "Coal",
          "answer_hi": "कोयला",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which of the following is a consequence of deforestation?",
          "question_hi": "वृक्षों की अंधाधुंध कटाई का क्या परिणाम होता है?",
          "options_en": ["Soil erosion", "Increased biodiversity", "Increased rainfall", "Decreased temperature"],
          "options_hi": ["मिट्टी का कटाव", "जैव विविधता में वृद्धि", "वर्षा में वृद्धि", "तापमान में कमी"],
          "answer": "Soil erosion",
          "answer_hi": "मिट्टी का कटाव",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "What is ozone depletion primarily caused by?",
          "question_hi": "ओजोन का ह्रास मुख्य रूप से किस कारण होता है?",
          "options_en": ["CFCs", "CO2", "SO2", "Methane"],
          "options_hi": ["सीएफसी", "सीओ2", "एसओ2", "मीथेन"],
          "answer": "CFCs",
          "answer_hi": "सीएफसी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What is the main effect of acid rain?",
          "question_hi": "एसिड वर्षा का मुख्य प्रभाव क्या है?",
          "options_en": ["Pollution of water bodies", "Damage to buildings", "Soil degradation", "All of the above"],
          "options_hi": ["जल निकायों का प्रदूषण", "भवनों को क्षति", "मिट्टी का अपक्षय", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What does the term 'biodiversity' refer to?",
          "question_hi": "'जैव विविधता' शब्द का क्या अर्थ है?",
          "options_en": ["Variety of ecosystems", "Variety of species", "Variety of genetic material", "All of the above"],
          "options_hi": ["पारिस्थितिकी तंत्र की विविधता", "प्रजातियों की विविधता", "जैविक सामग्री की विविधता", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which of the following is the largest source of energy on Earth?",
          "question_hi": "निम्नलिखित में से पृथ्वी पर ऊर्जा का सबसे बड़ा स्रोत कौन सा है?",
          "options_en": ["Wind", "Solar Energy", "Geothermal Energy", "Nuclear Energy"],
          "options_hi": ["हवा", "सौर ऊर्जा", "भूतापीय ऊर्जा", "परमाणु ऊर्जा"],
          "answer": "Solar Energy",
          "answer_hi": "सौर ऊर्जा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What is the major cause of water pollution?",
          "question_hi": "जल प्रदूषण का प्रमुख कारण क्या है?",
          "options_en": ["Industrial waste", "Domestic waste", "Chemical fertilizers", "All of the above"],
          "options_hi": ["औद्योगिक अपशिष्ट", "घरेलू अपशिष्ट", "रासायनिक उर्वरक", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What is the major effect of greenhouse gases?",
          "question_hi": "ग्रीनहाउस गैसों का प्रमुख प्रभाव क्या है?",
          "options_en": ["Climate change", "Soil erosion", "Ocean acidification", "All of the above"],
          "options_hi": ["जलवायु परिवर्तन", "मिट्टी का कटाव", "समुद्र का अम्लीकरण", "उपरोक्त सभी"],
          "answer": "Climate change",
          "answer_hi": "जलवायु परिवर्तन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What is the primary aim of sustainable development?",
          "question_hi": "सतत विकास का मुख्य उद्देश्य क्या है?",
          "options_en": ["Economic growth", "Environmental protection", "Social equity", "All of the above"],
          "options_hi": ["आर्थिक वृद्धि", "पर्यावरण संरक्षण", "सामाजिक समानता", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "What is the main threat to biodiversity?",
          "question_hi": "जैव विविधता के लिए मुख्य खतरा क्या है?",
          "options_en": ["Deforestation", "Climate change", "Pollution", "All of the above"],
          "options_hi": ["वृक्षों की कटाई", "जलवायु परिवर्तन", "प्रदूषण", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which of the following can be used to reduce plastic pollution?",
          "question_hi": "निम्नलिखित में से कौन सा प्लास्टिक प्रदूषण को कम करने के लिए इस्तेमाल किया जा सकता है?",
          "options_en": ["Biodegradable plastics", "Recycling", "Awareness programs", "All of the above"],
          "options_hi": ["जैविक अपघटित प्लास्टिक", "पुनर्नवीनीकरण", "जागरूकता कार्यक्रम", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "What is the main cause of soil erosion?",
          "question_hi": "मिट्टी का कटाव होने का मुख्य कारण क्या है?",
          "options_en": ["Overgrazing", "Deforestation", "Construction activities", "All of the above"],
          "options_hi": ["अत्यधिक चराई", "वृक्षों की कटाई", "निर्माण गतिविधियाँ", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "What is the term used for the gradual increase in the Earth's temperature?",
          "question_hi": "पृथ्वी के तापमान में धीरे-धीरे वृद्धि को किस शब्द से जाना जाता है?",
          "options_en": ["Global warming", "Climate change", "Ozone depletion", "Acid rain"],
          "options_hi": ["वैश्विक तापन", "जलवायु परिवर्तन", "ओजोन का ह्रास", "एसिड वर्षा"],
          "answer": "Global warming",
          "answer_hi": "वैश्विक तापन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "What is the main role of the ozone layer?",
          "question_hi": "ओजोन परत की मुख्य भूमिका क्या है?",
          "options_en": ["Prevent harmful UV radiation", "Regulate temperature", "Maintain air quality", "Protect biodiversity"],
          "options_hi": ["हानिकारक यूवी विकिरण से सुरक्षा", "तापमान को नियंत्रित करना", "वायु गुणवत्ता बनाए रखना", "जैव विविधता की रक्षा करना"],
          "answer": "Prevent harmful UV radiation",
          "answer_hi": "हानिकारक यूवी विकिरण से सुरक्षा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What is the main reason for loss of biodiversity?",
          "question_hi": "जैव विविधता की हानि का मुख्य कारण क्या है?",
          "options_en": ["Climate change", "Habitat destruction", "Overexploitation", "All of the above"],
          "options_hi": ["जलवायु परिवर्तन", "आवास का विनाश", "अत्यधिक शोषण", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which of the following is the most effective way to reduce carbon footprint?",
          "question_hi": "निम्नलिखित में से कौन सा कार्बन फुटप्रिंट को कम करने का सबसे प्रभावी तरीका है?",
          "options_en": ["Using public transport", "Reducing energy consumption", "Planting trees", "All of the above"],
          "options_hi": ["सार्वजनिक परिवहन का उपयोग करना", "ऊर्जा खपत में कमी", "वृक्षारोपण", "उपरोक्त सभी"],
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
  
  
  