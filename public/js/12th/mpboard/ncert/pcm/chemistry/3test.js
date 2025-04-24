const questions = [ 
        {
          "num": 1,
          "question_en": "Which of the following is a colligative property?",
          "question_hi": "निम्नलिखित में से कौन एक सहगामी गुण है?",
          "options_en": ["Boiling point", "Freezing point", "Vapour pressure", "Osmotic pressure"],
          "options_hi": ["उबाल बिंदु", "हिमांक", "वाष्प दाब", "परासरण दाब"],
          "answer": "Osmotic pressure",
          "answer_hi": "परासरण दाब",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which of the following has the highest boiling point?",
          "question_hi": "निम्न में से किसका क्वथनांक सबसे अधिक है?",
          "options_en": ["H2O", "H2S", "H2Se", "H2Te"],
          "options_hi": ["H2O", "H2S", "H2Se", "H2Te"],
          "answer": "H2O",
          "answer_hi": "H2O",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which compound shows positive deviation from Raoult's law?",
          "question_hi": "कौन-सा यौगिक राउल्ट के नियम से सकारात्मक विचलन दिखाता है?",
          "options_en": ["Acetone + Chloroform", "Water + HCl", "Water + Alcohol", "Benzene + Toluene"],
          "options_hi": ["एसीटोन + क्लोरोफॉर्म", "पानी + HCl", "पानी + अल्कोहॉल", "बेंजीन + टोल्यून"],
          "answer": "Water + Alcohol",
          "answer_hi": "पानी + अल्कोहॉल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which of the following is not a unit of rate constant?",
          "question_hi": "निम्नलिखित में से कौन अभिकारक स्थिरांक की इकाई नहीं है?",
          "options_en": ["mol L⁻¹ s⁻¹", "s⁻¹", "mol² L⁻² s⁻¹", "mol⁻¹ L s⁻¹"],
          "options_hi": ["mol L⁻¹ s⁻¹", "s⁻¹", "mol² L⁻² s⁻¹", "mol⁻¹ L s⁻¹"],
          "answer": "mol² L⁻² s⁻¹",
          "answer_hi": "mol² L⁻² s⁻¹",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "The order of a reaction is determined by:",
          "question_hi": "किसी अभिक्रिया का क्रम किससे ज्ञात किया जाता है?",
          "options_en": ["Balanced equation", "Reactants", "Products", "Experimental data"],
          "options_hi": ["संतुलित समीकरण", "अभिकारक", "उत्पाद", "प्रयोगात्मक आंकड़े"],
          "answer": "Experimental data",
          "answer_hi": "प्रयोगात्मक आंकड़े",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which is used as a catalyst in the Haber process?",
          "question_hi": "हैबर प्रक्रिया में किसे उत्प्रेरक के रूप में उपयोग किया जाता है?",
          "options_en": ["Iron", "Platinum", "Vanadium oxide", "Nickel"],
          "options_hi": ["लोहा", "प्लैटिनम", "वेनाडियम ऑक्साइड", "निकेल"],
          "answer": "Iron",
          "answer_hi": "लोहा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which of the following is not a crystalline solid?",
          "question_hi": "निम्नलिखित में से कौन क्रिस्टलीय ठोस नहीं है?",
          "options_en": ["Quartz", "Glass", "Sodium chloride", "Diamond"],
          "options_hi": ["क्वार्ट्ज", "काँच", "सोडियम क्लोराइड", "हीरा"],
          "answer": "Glass",
          "answer_hi": "काँच",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What type of semiconductor is formed when silicon is doped with phosphorus?",
          "question_hi": "सिलिकॉन को फॉस्फोरस से डोप करने पर कौन-सा अर्धचालक बनता है?",
          "options_en": ["p-type", "n-type", "Superconductor", "Insulator"],
          "options_hi": ["p-प्रकार", "n-प्रकार", "सुपरकंडक्टर", "निरोधक"],
          "answer": "n-type",
          "answer_hi": "n-प्रकार",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which of the following is not a colligative property?",
          "question_hi": "निम्नलिखित में से कौन एक सहगामी गुण नहीं है?",
          "options_en": ["Boiling point elevation", "Freezing point depression", "Vapour pressure lowering", "Refraction index"],
          "options_hi": ["उबाल बिंदु वृद्धि", "हिमांक अवनमन", "वाष्प दाब में कमी", "अपवर्तनांक"],
          "answer": "Refraction index",
          "answer_hi": "अपवर्तनांक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which oxide is amphoteric?",
          "question_hi": "कौन-सा ऑक्साइड द्विआम्ल-क्षारीय है?",
          "options_en": ["Na2O", "CO2", "ZnO", "SO2"],
          "options_hi": ["Na2O", "CO2", "ZnO", "SO2"],
          "answer": "ZnO",
          "answer_hi": "ZnO",
          "attempted": false,
          "selected": ""
        },
      
      
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
  
  
  