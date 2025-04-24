const questions = [
        {
          "num": 1,
          "question_en": "What is the main cause of environmental degradation?",
          "question_hi": "पर्यावरणीय गिरावट का मुख्य कारण क्या है?",
          "options_en": ["Deforestation", "Pollution", "Urbanization", "Overpopulation"],
          "options_hi": ["वनस्पति विनाश", "प्रदूषण", "शहरीकरण", "अत्यधिक जनसंख्या"],
          "answer": "Pollution",
          "answer_hi": "प्रदूषण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which of the following is a renewable resource?",
          "question_hi": "निम्नलिखित में से कौन सा एक नवीकरणीय संसाधन है?",
          "options_en": ["Coal", "Natural gas", "Solar energy", "Petroleum"],
          "options_hi": ["कोयला", "प्राकृतिक गैस", "सौर ऊर्जा", "पेट्रोलियम"],
          "answer": "Solar energy",
          "answer_hi": "सौर ऊर्जा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which is the largest source of air pollution?",
          "question_hi": "वायु प्रदूषण का सबसे बड़ा स्रोत कौन सा है?",
          "options_en": ["Industrial emissions", "Vehicular emissions", "Agricultural activities", "Natural sources"],
          "options_hi": ["औद्योगिक उत्सर्जन", "वाहन उत्सर्जन", "कृषि गतिविधियाँ", "प्राकृतिक स्रोत"],
          "answer": "Vehicular emissions",
          "answer_hi": "वाहन उत्सर्जन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which of the following is an example of non-renewable resource?",
          "question_hi": "निम्नलिखित में से कौन सा एक गैर-नवीकरणीय संसाधन का उदाहरण है?",
          "options_en": ["Wind energy", "Fossil fuels", "Solar energy", "Biomass"],
          "options_hi": ["पवन ऊर्जा", "जीवाश्म ईंधन", "सौर ऊर्जा", "जैवमास"],
          "answer": "Fossil fuels",
          "answer_hi": "जीवाश्म ईंधन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What does 'Biodiversity' refer to?",
          "question_hi": "'जैव विविधता' से क्या तात्पर्य है?",
          "options_en": ["Variety of species", "Variety of ecosystems", "Both A and B", "None of the above"],
          "options_hi": ["प्रजातियों की विविधता", "पारिस्थितिकी तंत्र की विविधता", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
          "answer": "Both A and B",
          "answer_hi": "A और B दोनों",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "What is the main reason for the depletion of the ozone layer?",
          "question_hi": "ओजोन परत के समाप्त होने का मुख्य कारण क्या है?",
          "options_en": ["Chlorofluorocarbons (CFCs)", "Carbon dioxide", "Methane", "Nitrous oxide"],
          "options_hi": ["क्लोरोफ्लोरोकार्बन (CFCs)", "कार्बन डाइऑक्साइड", "मीथेन", "नाइट्रस ऑक्साइड"],
          "answer": "Chlorofluorocarbons (CFCs)",
          "answer_hi": "क्लोरोफ्लोरोकार्बन (CFCs)",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which gas is a major contributor to the greenhouse effect?",
          "question_hi": "कौन सा गैस ग्रीनहाउस प्रभाव में मुख्य योगदानकर्ता है?",
          "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
          "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
          "answer": "Carbon dioxide",
          "answer_hi": "कार्बन डाइऑक्साइड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What is meant by the term 'Sustainable Development'?",
          "question_hi": "'सतत विकास' शब्द का क्या अर्थ है?",
          "options_en": ["Development without using natural resources", "Development that meets the needs of the present without compromising future generations", "Development with excessive use of resources", "None of the above"],
          "options_hi": ["प्राकृतिक संसाधनों का उपयोग किए बिना विकास", "विकास जो वर्तमान की आवश्यकताओं को पूरा करता है बिना भविष्य पीढ़ियों की आवश्यकता से समझौता किए", "संसाधनों के अत्यधिक उपयोग के साथ विकास", "उपरोक्त में से कोई नहीं"],
          "answer": "Development that meets the needs of the present without compromising future generations",
          "answer_hi": "विकास जो वर्तमान की आवश्यकताओं को पूरा करता है बिना भविष्य पीढ़ियों की आवश्यकता से समझौता किए",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which of the following is a major environmental issue?",
          "question_hi": "निम्नलिखित में से कौन सा एक प्रमुख पर्यावरणीय मुद्दा है?",
          "options_en": ["Climate change", "Recycling", "Waste management", "All of the above"],
          "options_hi": ["जलवायु परिवर्तन", "रीसायक्लिंग", "कचरा प्रबंधन", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is the primary source of water pollution?",
          "question_hi": "जल प्रदूषण का प्राथमिक स्रोत क्या है?",
          "options_en": ["Industrial waste", "Agricultural runoff", "Domestic sewage", "All of the above"],
          "options_hi": ["औद्योगिक कचरा", "कृषि अपवाह", "घरेलू गंदगी", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which of the following is an effect of deforestation?",
          "question_hi": "वनस्पति विनाश का कौन सा प्रभाव है?",
          "options_en": ["Loss of biodiversity", "Increased carbon emissions", "Soil erosion", "All of the above"],
          "options_hi": ["जैव विविधता की हानि", "कार्बन उत्सर्जन में वृद्धि", "मृदा अपरदन", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which is the largest greenhouse gas contributor?",
          "question_hi": "सबसे बड़ा ग्रीनहाउस गैस योगदानकर्ता कौन सा है?",
          "options_en": ["Carbon dioxide", "Methane", "Water vapour", "Nitrous oxide"],
          "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "जल वाष्प", "नाइट्रस ऑक्साइड"],
          "answer": "Water vapour",
          "answer_hi": "जल वाष्प",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which of the following is not a consequence of global warming?",
          "question_hi": "निम्नलिखित में से कौन सा वैश्विक तापन का परिणाम नहीं है?",
          "options_en": ["Melting of polar ice caps", "Rising sea levels", "Decreased rainfall", "Increased biodiversity"],
          "options_hi": ["ध्रुवीय बर्फ की चादरों का पिघलना", "समुद्र स्तर में वृद्धि", "वर्षा में कमी", "जैव विविधता में वृद्धि"],
          "answer": "Increased biodiversity",
          "answer_hi": "जैव विविधता में वृद्धि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which of the following is an example of non-point source pollution?",
          "question_hi": "निम्नलिखित में से कौन सा एक गैर-बिंदु स्रोत प्रदूषण का उदाहरण है?",
          "options_en": ["Factory discharge", "Agricultural runoff", "Sewage treatment plant", "Power plant emissions"],
          "options_hi": ["कारखाना उत्सर्जन", "कृषि अपवाह", "गंदगी उपचार संयंत्र", "ऊर्जा संयंत्र उत्सर्जन"],
          "answer": "Agricultural runoff",
          "answer_hi": "कृषि अपवाह",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which of the following is an example of environmental conservation?",
          "question_hi": "निम्नलिखित में से कौन सा पर्यावरणीय संरक्षण का उदाहरण है?",
          "options_en": ["Recycling waste", "Overfishing", "Pollution", "Deforestation"],
          "options_hi": ["कचरे की रीसायक्लिंग", "अत्यधिक मछली पकड़ना", "प्रदूषण", "वनस्पति विनाश"],
          "answer": "Recycling waste",
          "answer_hi": "कचरे की रीसायक्लिंग",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "What is the primary cause of acid rain?",
          "question_hi": "द्रवीय वर्षा का प्राथमिक कारण क्या है?",
          "options_en": ["SO2 emissions", "CO2 emissions", "NOx emissions", "All of the above"],
          "options_hi": ["SO2 उत्सर्जन", "CO2 उत्सर्जन", "NOx उत्सर्जन", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which of the following practices helps in water conservation?",
          "question_hi": "निम्नलिखित में से कौन सी प्रथा जल संरक्षण में मदद करती है?",
          "options_en": ["Rainwater harvesting", "Deforestation", "Overfishing", "Pollution"],
          "options_hi": ["वर्षा जल संचयन", "वनस्पति विनाश", "अत्यधिक मछली पकड़ना", "प्रदूषण"],
          "answer": "Rainwater harvesting",
          "answer_hi": "वर्षा जल संचयन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which of the following is a direct cause of soil erosion?",
          "question_hi": "निम्नलिखित में से कौन सा मृदा अपरदन का सीधा कारण है?",
          "options_en": ["Deforestation", "Overgrazing", "Urbanization", "All of the above"],
          "options_hi": ["वनस्पति विनाश", "अत्यधिक चराई", "शहरीकरण", "उपरोक्त सभी"],
          "answer": "All of the above",
          "answer_hi": "उपरोक्त सभी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What is the term used for the variety of life forms in an ecosystem?",
          "question_hi": "एक पारिस्थितिकी तंत्र में जीवन रूपों की विविधता के लिए कौन सा शब्द प्रयोग किया जाता है?",
          "options_en": ["Biodiversity", "Ecology", "Ecosystem", "None of the above"],
          "options_hi": ["जैव विविधता", "पारिस्थितिकी", "पारिस्थितिकी तंत्र", "उपरोक्त में से कोई नहीं"],
          "answer": "Biodiversity",
          "answer_hi": "जैव विविधता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which of the following is a major source of noise pollution?",
          "question_hi": "निम्नलिखित में से कौन सा शोर प्रदूषण का प्रमुख स्रोत है?",
          "options_en": ["Factories", "Traffic", "Construction activities", "All of the above"],
          "options_hi": ["कारखाने", "यातायात", "निर्माण गतिविधियाँ", "उपरोक्त सभी"],
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
  
  
  