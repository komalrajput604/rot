const questions = [ 
    
    {
      "num": 1,
      "question_en": "Which of the following is an example of a coordination compound?",
      "question_hi": "निम्नलिखित में से कौन एक समन्वय यौगिक का उदाहरण है?",
      "options_en": ["NaCl", "[Cu(NH3)4]SO4", "KNO3", "CaCO3"],
      "options_hi": ["NaCl", "[Cu(NH3)4]SO4", "KNO3", "CaCO3"],
      "answer": "[Cu(NH3)4]SO4",
      "answer_hi": "[Cu(NH3)4]SO4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Which gas is used in the Haber process for the synthesis of ammonia?",
      "question_hi": "हैबर प्रक्रिया में अमोनिया संश्लेषण के लिए किस गैस का उपयोग होता है?",
      "options_en": ["Oxygen", "Hydrogen", "Chlorine", "Helium"],
      "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "क्लोरीन", "हीलियम"],
      "answer": "Hydrogen",
      "answer_hi": "हाइड्रोजन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Which of the following compounds will not give a positive Tollens' test?",
      "question_hi": "निम्नलिखित में से कौन सा यौगिक टॉलेंस परीक्षण में सकारात्मक प्रतिक्रिया नहीं देगा?",
      "options_en": ["Formaldehyde", "Benzaldehyde", "Acetone", "Glucose"],
      "options_hi": ["फॉर्मल्डिहाइड", "बेंज़ाल्डिहाइड", "एसीटोन", "ग्लूकोज़"],
      "answer": "Acetone",
      "answer_hi": "एसीटोन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Which of the following is a Lewis acid?",
      "question_hi": "निम्नलिखित में से कौन लुईस अम्ल है?",
      "options_en": ["NH3", "H2O", "BF3", "CH4"],
      "options_hi": ["NH3", "H2O", "BF3", "CH4"],
      "answer": "BF3",
      "answer_hi": "BF3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Which one is used as a preservative in pickles?",
      "question_hi": "अचार में संरक्षक के रूप में किसका उपयोग किया जाता है?",
      "options_en": ["Acetic acid", "Formic acid", "Citric acid", "Lactic acid"],
      "options_hi": ["एसेटिक अम्ल", "फॉर्मिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल"],
      "answer": "Acetic acid",
      "answer_hi": "एसेटिक अम्ल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Which of the following is the correct IUPAC name of acetone?",
      "question_hi": "निम्नलिखित में से एसीटोन का सही IUPAC नाम क्या है?",
      "options_en": ["Propan-2-one", "Butanone", "Propanal", "Methanal"],
      "options_hi": ["प्रोपेन-2-वन", "ब्यूटेनोन", "प्रोपेनाल", "मेथेनाल"],
      "answer": "Propan-2-one",
      "answer_hi": "प्रोपेन-2-वन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Which of the following compounds has a peptide bond?",
      "question_hi": "निम्नलिखित में से किस यौगिक में पेप्टाइड बॉन्ड होता है?",
      "options_en": ["Protein", "Starch", "Cellulose", "Lipid"],
      "options_hi": ["प्रोटीन", "स्टार्च", "सेल्यूलोज़", "लिपिड"],
      "answer": "Protein",
      "answer_hi": "प्रोटीन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Which element is common in all amino acids?",
      "question_hi": "सभी अमीनो अम्लों में कौन सा तत्व सामान्य होता है?",
      "options_en": ["Sulfur", "Phosphorus", "Nitrogen", "Calcium"],
      "options_hi": ["सल्फर", "फास्फोरस", "नाइट्रोजन", "कैल्शियम"],
      "answer": "Nitrogen",
      "answer_hi": "नाइट्रोजन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Which of the following is a non-reducing sugar?",
      "question_hi": "निम्नलिखित में से कौन सी एक अपचायक शर्करा नहीं है?",
      "options_en": ["Glucose", "Fructose", "Sucrose", "Maltose"],
      "options_hi": ["ग्लूकोज", "फ्रक्टोज़", "सुक्रोज़", "माल्टोज़"],
      "answer": "Sucrose",
      "answer_hi": "सुक्रोज़",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Which of the following is used as an analgesic?",
      "question_hi": "निम्नलिखित में से किसका उपयोग दर्द निवारक के रूप में किया जाता है?",
      "options_en": ["Paracetamol", "Chloramphenicol", "Quinine", "Ciprofloxacin"],
      "options_hi": ["पेरासिटामोल", "क्लोरैम्फेनिकोल", "क्विनिन", "सिप्रोफ्लॉक्सासिन"],
      "answer": "Paracetamol",
      "answer_hi": "पेरासिटामोल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "Which form of sulphur is most stable at room temperature?",
      "question_hi": "कक्ष तापमान पर सबसे स्थायी गंधक का रूप कौन सा है?",
      "options_en": ["Monoclinic sulphur", "Rhombic sulphur", "Plastic sulphur", "Colloidal sulphur"],
      "options_hi": ["मोनोक्लिनिक गंधक", "रोम्बिक गंधक", "प्लास्टिक गंधक", "कोलॉइडल गंधक"],
      "answer": "Rhombic sulphur",
      "answer_hi": "रोम्बिक गंधक",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "Which of the following is used as a rocket fuel?",
      "question_hi": "निम्नलिखित में से किसका उपयोग रॉकेट ईंधन के रूप में किया जाता है?",
      "options_en": ["Hydrogen", "Methane", "Ammonia", "Hydrazine"],
      "options_hi": ["हाइड्रोजन", "मीथेन", "अमोनिया", "हाइड्राज़ीन"],
      "answer": "Hydrazine",
      "answer_hi": "हाइड्राज़ीन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "Which compound is used for artificial ripening of fruits?",
      "question_hi": "फलों के कृत्रिम पकाने के लिए किस यौगिक का उपयोग किया जाता है?",
      "options_en": ["Calcium carbide", "Sodium chloride", "Calcium phosphate", "Ammonium nitrate"],
      "options_hi": ["कैल्शियम कार्बाइड", "सोडियम क्लोराइड", "कैल्शियम फॉस्फेट", "अमोनियम नाइट्रेट"],
      "answer": "Calcium carbide",
      "answer_hi": "कैल्शियम कार्बाइड",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Which of the following is a biodegradable detergent?",
      "question_hi": "निम्नलिखित में से कौन सा एक बायोडिग्रेडेबल डिटर्जेंट है?",
      "options_en": ["Branched chain alkyl benzene sulphonate", "Linear alkyl benzene sulphonate", "Aromatic hydrocarbons", "None"],
      "options_hi": ["ब्रांच्ड चेन ऐल्काइल बेंजीन सल्फोनेट", "लीनियर ऐल्काइल बेंजीन सल्फोनेट", "सुगंधित हाइड्रोकार्बन", "कोई नहीं"],
      "answer": "Linear alkyl benzene sulphonate",
      "answer_hi": "लीनियर ऐल्काइल बेंजीन सल्फोनेट",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "Which type of isomerism is shown by C₂H₆O?",
      "question_hi": "C₂H₆O किस प्रकार का समावयवता दर्शाता है?",
      "options_en": ["Chain isomerism", "Position isomerism", "Functional group isomerism", "Metamerism"],
      "options_hi": ["श्रृंखला समावयवता", "स्थिति समावयवता", "कार्यात्मक समूह समावयवता", "मेटामेरिज्म"],
      "answer": "Functional group isomerism",
      "answer_hi": "कार्यात्मक समूह समावयवता",
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
  
  
  