const questions = [
     {
          "num": 1,
          "question_en": "What is the chemical formula of Ammonium Nitrate?",
          "question_hi": "अमोनियम नाइट्रेट का रासायनिक सूत्र क्या है?",
          "options_en": ["NH3NO3", "NH4NO3", "N2H4NO3", "NH4NO2"],
          "options_hi": ["एनएच3एनओ3", "एनएच4एनओ3", "एन2एच4एनओ3", "एनएच4एनओ2"],
          "answer": "NH4NO3",
          "answer_hi": "एनएच4एनओ3",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which is the most common solvent used in the extraction of essential oils?",
          "question_hi": "आवश्यक तेलों के निष्कर्षण में सबसे सामान्य विलायक कौन सा है?",
          "options_en": ["Ethanol", "Acetone", "Water", "Hexane"],
          "options_hi": ["एथेनॉल", "एसीटोन", "पानी", "हेक्सेन"],
          "answer": "Hexane",
          "answer_hi": "हेक्सेन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the main constituent of biogas?",
          "question_hi": "बायोगैस का मुख्य संघटक क्या है?",
          "options_en": ["Methane", "Carbon Dioxide", "Oxygen", "Nitrogen"],
          "options_hi": ["मीथेन", "कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन"],
          "answer": "Methane",
          "answer_hi": "मीथेन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which of the following is an example of a non-metallic fertilizer?",
          "question_hi": "निम्नलिखित में से कौन सा गैर-धातु उर्वरक का उदाहरण है?",
          "options_en": ["Potassium Sulphate", "Ammonium Nitrate", "Superphosphate", "Urea"],
          "options_hi": ["पोटेशियम सल्फेट", "अमोनियम नाइट्रेट", "सुपरफॉस्फेट", "यूरिया"],
          "answer": "Potassium Sulphate",
          "answer_hi": "पोटेशियम सल्फेट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which element is commonly found in pesticides?",
          "question_hi": "किस तत्व को आमतौर पर कीटनाशकों में पाया जाता है?",
          "options_en": ["Sulphur", "Phosphorus", "Carbon", "Nitrogen"],
          "options_hi": ["सल्फर", "फॉस्फोरस", "कार्बन", "नाइट्रोजन"],
          "answer": "Phosphorus",
          "answer_hi": "फॉस्फोरस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "What is the process of converting nitrogen into a usable form for plants called?",
          "question_hi": "नाइट्रोजन को पौधों के लिए उपयोगी रूप में बदलने की प्रक्रिया को क्या कहा जाता है?",
          "options_en": ["Nitrogen Fixation", "Nitrification", "Denitrification", "Ammonification"],
          "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "डिनाइट्रीकरण", "अमोनिफिकेशन"],
          "answer": "Nitrogen Fixation",
          "answer_hi": "नाइट्रोजन स्थिरीकरण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which acid is used in the preparation of fertilizers?",
          "question_hi": "उर्वरकों की तैयारी में कौन सा अम्ल उपयोग किया जाता है?",
          "options_en": ["Sulphuric Acid", "Nitric Acid", "Phosphoric Acid", "Acetic Acid"],
          "options_hi": ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "फास्फोरिक अम्ल", "एसीटिक अम्ल"],
          "answer": "Phosphoric Acid",
          "answer_hi": "फास्फोरिक अम्ल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which compound is commonly used as a fungicide in agriculture?",
          "question_hi": "कृषि में आमतौर पर किस यौगिक का उपयोग फंगीसाइड के रूप में किया जाता है?",
          "options_en": ["Copper Sulphate", "Calcium Carbonate", "Sodium Chloride", "Magnesium Sulphate"],
          "options_hi": ["कॉपर सल्फेट", "कैल्शियम कार्बोनेट", "सोडियम क्लोराइड", "मैग्नीशियम सल्फेट"],
          "answer": "Copper Sulphate",
          "answer_hi": "कॉपर सल्फेट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What is the primary purpose of irrigation in agriculture?",
          "question_hi": "कृषि में सिंचाई का मुख्य उद्देश्य क्या है?",
          "options_en": ["Increase soil fertility", "Provide water to crops", "Control pests", "Provide nutrients to plants"],
          "options_hi": ["मृदा उर्वरता बढ़ाना", "फसलों को पानी देना", "कीटों को नियंत्रित करना", "पौधों को पोषक तत्व देना"],
          "answer": "Provide water to crops",
          "answer_hi": "फसलों को पानी देना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which chemical is used in the preparation of herbicides?",
          "question_hi": "हर्बीसाइड्स की तैयारी में किस रासायनिक का उपयोग किया जाता है?",
          "options_en": ["Glyphosate", "Aldicarb", "Atrazine", "Chlorpyrifos"],
          "options_hi": ["ग्लाइफोसेट", "एल्डीकार्ब", "एट्राजिन", "क्लोरपाइरिफोस"],
          "answer": "Glyphosate",
          "answer_hi": "ग्लाइफोसेट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which of the following is an organic fertilizer?",
          "question_hi": "निम्नलिखित में से कौन सा जैविक उर्वरक है?",
          "options_en": ["Urea", "Compost", "Ammonium Sulphate", "Potassium Nitrate"],
          "options_hi": ["यूरिया", "कंपोस्ट", "अमोनियम सल्फेट", "पोटेशियम नाइट्रेट"],
          "answer": "Compost",
          "answer_hi": "कंपोस्ट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What is the pH range of soil for optimal plant growth?",
          "question_hi": "पौधों की सर्वोत्तम वृद्धि के लिए मिट्टी का पीएच सीमा क्या है?",
          "options_en": ["4.5 - 5.5", "5.5 - 7", "7 - 8", "8 - 9"],
          "options_hi": ["4.5 - 5.5", "5.5 - 7", "7 - 8", "8 - 9"],
          "answer": "5.5 - 7",
          "answer_hi": "5.5 - 7",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which of the following elements is essential for photosynthesis?",
          "question_hi": "निम्नलिखित में से कौन सा तत्व प्रकाश संश्लेषण के लिए आवश्यक है?",
          "options_en": ["Oxygen", "Nitrogen", "Magnesium", "Iron"],
          "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "मैग्नीशियम", "लोहा"],
          "answer": "Magnesium",
          "answer_hi": "मैग्नीशियम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which of the following is used as a preservative in food?",
          "question_hi": "निम्नलिखित में से कौन सा खाद्य पदार्थों में संरक्षक के रूप में उपयोग किया जाता है?",
          "options_en": ["Ascorbic Acid", "Citric Acid", "Sodium Benzoate", "Tartaric Acid"],
          "options_hi": ["एस्कॉर्बिक अम्ल", "सिट्रिक अम्ल", "सोडियम बेंजोएट", "टारटारिक अम्ल"],
          "answer": "Sodium Benzoate",
          "answer_hi": "सोडियम बेंजोएट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which chemical compound is used in the preparation of bleaching powder?",
          "question_hi": "ब्लीचिंग पाउडर की तैयारी में किस रासायनिक यौगिक का उपयोग किया जाता है?",
          "options_en": ["Calcium Hydroxide", "Calcium Oxide", "Calcium Carbonate", "Calcium Chloride"],
          "options_hi": ["कैल्शियम हाइड्रॉक्साइड", "कैल्शियम ऑक्साइड", "कैल्शियम कार्बोनेट", "कैल्शियम क्लोराइड"],
          "answer": "Calcium Oxide",
          "answer_hi": "कैल्शियम ऑक्साइड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which gas is released during the fermentation process in agriculture?",
          "question_hi": "कृषि में किण्वन प्रक्रिया के दौरान कौन सा गैस रिलीज होता है?",
          "options_en": ["Oxygen", "Methane", "Carbon Dioxide", "Nitrogen"],
          "options_hi": ["ऑक्सीजन", "मीथेन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
          "answer": "Carbon Dioxide",
          "answer_hi": "कार्बन डाइऑक्साइड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which of the following is used to check soil fertility?",
          "question_hi": "मिट्टी की उर्वरता की जांच करने के लिए निम्नलिखित में से कौन सा उपयोग किया जाता है?",
          "options_en": ["pH meter", "Refractometer", "Hydrometer", "Salinity Tester"],
          "options_hi": ["पीएच मीटर", "रिफ्रेक्टोमीटर", "हाइड्रोमीटर", "सालिनिटी टेस्टर्स"],
          "answer": "pH meter",
          "answer_hi": "पीएच मीटर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which element is primarily responsible for the formation of proteins in plants?",
          "question_hi": "पौधों में प्रोटीन के निर्माण के लिए कौन सा तत्व मुख्य रूप से जिम्मेदार है?",
          "options_en": ["Nitrogen", "Phosphorus", "Magnesium", "Calcium"],
          "options_hi": ["नाइट्रोजन", "फॉस्फोरस", "मैग्नीशियम", "कैल्शियम"],
          "answer": "Nitrogen",
          "answer_hi": "नाइट्रोजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which pesticide is used to control insects?",
          "question_hi": "कीड़ों को नियंत्रित करने के लिए कौन सा कीटनाशक उपयोग किया जाता है?",
          "options_en": ["Herbicide", "Insecticide", "Fungicide", "Bactericide"],
          "options_hi": ["हर्बीसाइड", "कीटनाशक", "फंगीसाइड", "बैक्टीरिया नाशक"],
          "answer": "Insecticide",
          "answer_hi": "कीटनाशक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which nutrient is primarily absorbed by plants from the soil?",
          "question_hi": "पौधे मुख्य रूप से मिट्टी से कौन सा पोषक तत्व अवशोषित करते हैं?",
          "options_en": ["Nitrogen", "Oxygen", "Water", "Carbon Dioxide"],
          "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "पानी", "कार्बन डाइऑक्साइड"],
          "answer": "Nitrogen",
          "answer_hi": "नाइट्रोजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "What is the function of calcium in plants?",
          "question_hi": "पौधों में कैल्शियम का कार्य क्या है?",
          "options_en": ["Enzyme Activation", "Cell Wall Strengthening", "Water Transport", "Photosynthesis"],
          "options_hi": ["एंजाइम सक्रियण", "कोशिका दीवार मजबूत करना", "पानी परिवहन", "प्रकाश संश्लेषण"],
          "answer": "Cell Wall Strengthening",
          "answer_hi": "कोशिका दीवार मजबूत करना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "Which compound is responsible for the acidity of fertilizers?",
          "question_hi": "उर्वरकों की अम्लता के लिए कौन सा यौगिक जिम्मेदार है?",
          "options_en": ["Urea", "Ammonium", "Phosphoric Acid", "Sulfur"],
          "options_hi": ["यूरिया", "अमोनियम", "फास्फोरिक अम्ल", "सल्फर"],
          "answer": "Ammonium",
          "answer_hi": "अमोनियम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Which of the following is a nitrogenous fertilizer?",
          "question_hi": "निम्नलिखित में से कौन सा नाइट्रोजनयुक्त उर्वरक है?",
          "options_en": ["Urea", "Superphosphate", "Potassium Nitrate", "Calcium Carbonate"],
          "options_hi": ["यूरिया", "सुपरफॉस्फेट", "पोटेशियम नाइट्रेट", "कैल्शियम कार्बोनेट"],
          "answer": "Urea",
          "answer_hi": "यूरिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "What is the main use of nitrogen fertilizers in agriculture?",
          "question_hi": "कृषि में नाइट्रोजन उर्वरकों का मुख्य उपयोग क्या है?",
          "options_en": ["Increase protein content", "Increase carbohydrate content", "Increase water retention", "Increase growth rate"],
          "options_hi": ["प्रोटीन की मात्रा बढ़ाना", "कार्बोहाइड्रेट की मात्रा बढ़ाना", "पानी रोकने की क्षमता बढ़ाना", "वृद्धि दर बढ़ाना"],
          "answer": "Increase protein content",
          "answer_hi": "प्रोटीन की मात्रा बढ़ाना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "Which of the following is a green manure?",
          "question_hi": "निम्नलिखित में से कौन सा हरा खाद है?",
          "options_en": ["Mustard", "Soybean", "Lentil", "Sunflower"],
          "options_hi": ["सरसों", "सोयाबीन", "मसूर", "सूरजमुखी"],
          "answer": "Soybean",
          "answer_hi": "सोयाबीन",
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
  
  
  