const questions = [ 
    

      
        {
          "num": 1,
          "question_en": "Which acid is present in vinegar?",
          "question_hi": "सिरके में कौन सा अम्ल पाया जाता है?",
          "options_en": ["Formic acid", "Acetic acid", "Citric acid", "Sulfuric acid"],
          "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "सल्फ्यूरिक अम्ल"],
          "answer": "Acetic acid",
          "answer_hi": "एसिटिक अम्ल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which gas is used in the Haber process?",
          "question_hi": "हैबर प्रक्रिया में कौन सी गैस प्रयुक्त होती है?",
          "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Chlorine"],
          "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "क्लोरीन"],
          "answer": "Nitrogen",
          "answer_hi": "नाइट्रोजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which of the following is a noble gas?",
          "question_hi": "निम्नलिखित में से कौन सी एक निष्क्रिय गैस है?",
          "options_en": ["Hydrogen", "Nitrogen", "Neon", "Oxygen"],
          "options_hi": ["हाइड्रोजन", "नाइट्रोजन", "निऑन", "ऑक्सीजन"],
          "answer": "Neon",
          "answer_hi": "निऑन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which element is found in Vitamin B12?",
          "question_hi": "विटामिन B12 में कौन सा तत्व पाया जाता है?",
          "options_en": ["Iron", "Calcium", "Cobalt", "Zinc"],
          "options_hi": ["लोहा", "कैल्शियम", "कोबाल्ट", "जिंक"],
          "answer": "Cobalt",
          "answer_hi": "कोबाल्ट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What is the IUPAC name of CH₃–CH₂–OH?",
          "question_hi": "CH₃–CH₂–OH का IUPAC नाम क्या है?",
          "options_en": ["Methanol", "Propanol", "Ethanol", "Butanol"],
          "options_hi": ["मेथनॉल", "प्रोपेनॉल", "एथनॉल", "ब्यूटेनॉल"],
          "answer": "Ethanol",
          "answer_hi": "एथनॉल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which metal is purified by Mond’s process?",
          "question_hi": "मॉन्ड प्रक्रिया से किस धातु को शुद्ध किया जाता है?",
          "options_en": ["Copper", "Nickel", "Zinc", "Iron"],
          "options_hi": ["तांबा", "निकल", "जिंक", "लोहा"],
          "answer": "Nickel",
          "answer_hi": "निकल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which type of bond is present in diamond?",
          "question_hi": "हीरे में किस प्रकार का बंध पाया जाता है?",
          "options_en": ["Ionic", "Metallic", "Covalent", "Hydrogen"],
          "options_hi": ["आयनिक", "धात्विक", "कोवेलेंट", "हाइड्रोजन"],
          "answer": "Covalent",
          "answer_hi": "कोवेलेंट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which vitamin is synthesized from cholesterol?",
          "question_hi": "कौन सा विटामिन कोलेस्ट्रॉल से संश्लेषित होता है?",
          "options_en": ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin K"],
          "options_hi": ["विटामिन A", "विटामिन D", "विटामिन C", "विटामिन K"],
          "answer": "Vitamin D",
          "answer_hi": "विटामिन D",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which of the following is an example of biodegradable polymer?",
          "question_hi": "निम्नलिखित में से कौन बायोडिग्रेडेबल पॉलिमर का उदाहरण है?",
          "options_en": ["Nylon", "PHBV", "Teflon", "PVC"],
          "options_hi": ["नायलॉन", "PHBV", "टेफ्लॉन", "पीवीसी"],
          "answer": "PHBV",
          "answer_hi": "PHBV",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which functional group is present in aldehydes?",
          "question_hi": "एल्डिहाइड में कौन सा फंक्शनल ग्रुप होता है?",
          "options_en": ["–COOH", "–OH", "–CHO", "–NH₂"],
          "options_hi": ["–COOH", "–OH", "–CHO", "–NH₂"],
          "answer": "–CHO",
          "answer_hi": "–CHO",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which of the following is used in dry cleaning?",
          "question_hi": "ड्राई क्लीनिंग में निम्नलिखित में से किसका उपयोग किया जाता है?",
          "options_en": ["Chloroform", "Toluene", "Carbon tetrachloride", "Benzene"],
          "options_hi": ["क्लोरोफॉर्म", "टोल्यून", "कार्बन टेट्राक्लोराइड", "बेंजीन"],
          "answer": "Carbon tetrachloride",
          "answer_hi": "कार्बन टेट्राक्लोराइड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which of the following has peptide bonds?",
          "question_hi": "निम्नलिखित में से किसमें पेप्टाइड बॉन्ड पाया जाता है?",
          "options_en": ["Lipids", "Carbohydrates", "Proteins", "Vitamins"],
          "options_hi": ["लिपिड", "कार्बोहाइड्रेट", "प्रोटीन", "विटामिन"],
          "answer": "Proteins",
          "answer_hi": "प्रोटीन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which is an example of a coordination compound?",
          "question_hi": "निम्नलिखित में से कौन समन्वय यौगिक का उदाहरण है?",
          "options_en": ["NaCl", "[Cu(NH₃)₄]²⁺", "CH₄", "KNO₃"],
          "options_hi": ["NaCl", "[Cu(NH₃)₄]²⁺", "CH₄", "KNO₃"],
          "answer": "[Cu(NH₃)₄]²⁺",
          "answer_hi": "[Cu(NH₃)₄]²⁺",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which of the following is an oxidising agent?",
          "question_hi": "निम्नलिखित में से कौन एक ऑक्सीकरण अभिकर्मक है?",
          "options_en": ["H₂", "Cl₂", "Na", "C"],
          "options_hi": ["H₂", "Cl₂", "Na", "C"],
          "answer": "Cl₂",
          "answer_hi": "Cl₂",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What is the pH of neutral solution at 25°C?",
          "question_hi": "25°C पर एक तटस्थ विलयन का pH क्या होता है?",
          "options_en": ["5", "7", "9", "11"],
          "options_hi": ["5", "7", "9", "11"],
          "answer": "7",
          "answer_hi": "7",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Name the strongest acid among the following:",
          "question_hi": "निम्नलिखित में से सबसे मजबूत अम्ल कौन सा है?",
          "options_en": ["HCl", "H₂SO₄", "HNO₃", "HClO₄"],
          "options_hi": ["HCl", "H₂SO₄", "HNO₃", "HClO₄"],
          "answer": "HClO₄",
          "answer_hi": "HClO₄",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "What is the formula of bleaching powder?",
          "question_hi": "ब्लीचिंग पाउडर का सूत्र क्या है?",
          "options_en": ["CaCl₂", "CaOCl₂", "NaCl", "NaOCl"],
          "options_hi": ["CaCl₂", "CaOCl₂", "NaCl", "NaOCl"],
          "answer": "CaOCl₂",
          "answer_hi": "CaOCl₂",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which type of isomerism is shown by glucose and fructose?",
          "question_hi": "ग्लूकोज और फ्रुक्टोज किस प्रकार का समावयवता प्रदर्शित करते हैं?",
          "options_en": ["Chain", "Functional", "Tautomerism", "Geometrical"],
          "options_hi": ["श्रृंखला", "कार्यक्षमता", "टॉटोमरी", "ज्यामितीय"],
          "answer": "Functional",
          "answer_hi": "कार्यक्षमता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which of the following is a non-reducing sugar?",
          "question_hi": "निम्नलिखित में से कौन एक अपचायक शर्करा नहीं है?",
          "options_en": ["Glucose", "Fructose", "Lactose", "Sucrose"],
          "options_hi": ["ग्लूकोज", "फ्रुक्टोज", "लैक्टोज", "सुक्रोज"],
          "answer": "Sucrose",
          "answer_hi": "सुक्रोज",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which compound is used in tincture of iodine?",
          "question_hi": "आयोडीन टिंक्चर में कौन सा यौगिक प्रयुक्त होता है?",
          "options_en": ["Iodine and ethanol", "Iodine and methanol", "Iodine and water", "Iodine and glycerol"],
          "options_hi": ["आयोडीन और एथेनॉल", "आयोडीन और मेथनॉल", "आयोडीन और जल", "आयोडीन और ग्लिसरॉल"],
          "answer": "Iodine and ethanol",
          "answer_hi": "आयोडीन और एथेनॉल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Which alkene is formed in Saytzeff’s rule?",
          "question_hi": "सेटजेफ नियम में कौन सी एल्कीन बनती है?",
          "options_en": ["Least substituted", "Most substituted", "Primary", "None"],
          "options_hi": ["सबसे कम सब्स्टीट्यूटेड", "सबसे अधिक सब्स्टीट्यूटेड", "प्राथमिक", "कोई नहीं"],
          "answer": "Most substituted",
          "answer_hi": "सबसे अधिक सब्स्टीट्यूटेड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "Which of the following is a 1° alcohol?",
          "question_hi": "निम्न में से कौन एक प्राथमिक एल्कोहल है?",
          "options_en": ["Isopropanol", "Ethanol", "Tertiary butanol", "Methanol"],
          "options_hi": ["आइसोप्रोपेनॉल", "एथनॉल", "टर्शरी ब्यूटानॉल", "मेथनॉल"],
          "answer": "Ethanol",
          "answer_hi": "एथनॉल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Which of the following is a greenhouse gas?",
          "question_hi": "निम्नलिखित में से कौन एक ग्रीनहाउस गैस है?",
          "options_en": ["Nitrogen", "Oxygen", "Methane", "Hydrogen"],
          "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "मीथेन", "हाइड्रोजन"],
          "answer": "Methane",
          "answer_hi": "मीथेन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "Which is used as an anticoagulant in blood samples?",
          "question_hi": "रक्त के नमूनों में किसका उपयोग एंटीकोआगुलेंट के रूप में किया जाता है?",
          "options_en": ["Sodium citrate", "Sodium chloride", "Sodium carbonate", "Sodium bicarbonate"],
          "options_hi": ["सोडियम साइट्रेट", "सोडियम क्लोराइड", "सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट"],
          "answer": "Sodium citrate",
          "answer_hi": "सोडियम साइट्रेट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "Which of the following is an ore of aluminum?",
          "question_hi": "निम्नलिखित में से कौन एल्युमिनियम का अयस्क है?",
          "options_en": ["Hematite", "Bauxite", "Magnetite", "Galena"],
          "options_hi": ["हीमैटाइट", "बॉक्साइट", "मैग्नेटाइट", "गैलेना"],
          "answer": "Bauxite",
          "answer_hi": "बॉक्साइट",
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
  
  
  