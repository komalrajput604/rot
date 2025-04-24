const questions = [ 
        {
          "num": 1,
          "question_en": "Which of the following is the functional unit of kidney?",
          "question_hi": "निम्न में से कौन वृक्क की क्रियात्मक इकाई है?",
          "options_en": ["Neuron", "Nephron", "Alveoli", "Axon"],
          "options_hi": ["न्यूरॉन", "नेफ्रॉन", "एल्वियोली", "एक्सोन"],
          "answer": "Nephron",
          "answer_hi": "नेफ्रॉन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which hormone regulates the amount of sugar in the blood?",
          "question_hi": "कौन सा हार्मोन रक्त में शर्करा की मात्रा को नियंत्रित करता है?",
          "options_en": ["Adrenaline", "Thyroxine", "Insulin", "Estrogen"],
          "options_hi": ["एड्रेनालिन", "थायरॉक्सिन", "इंसुलिन", "एस्ट्रोजेन"],
          "answer": "Insulin",
          "answer_hi": "इंसुलिन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which part of the brain controls balance and posture?",
          "question_hi": "मस्तिष्क का कौन सा भाग संतुलन और आसन को नियंत्रित करता है?",
          "options_en": ["Cerebrum", "Medulla", "Cerebellum", "Pons"],
          "options_hi": ["सेरिब्रम", "मेडुला", "सेरिबेलम", "पॉन्स"],
          "answer": "Cerebellum",
          "answer_hi": "सेरिबेलम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which of the following is a sexually transmitted disease?",
          "question_hi": "निम्न में से कौन एक यौन संचारित रोग है?",
          "options_en": ["Malaria", "Tuberculosis", "AIDS", "Typhoid"],
          "options_hi": ["मलेरिया", "क्षय रोग", "एड्स", "टाइफाइड"],
          "answer": "AIDS",
          "answer_hi": "एड्स",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which pigment is present in red blood cells?",
          "question_hi": "लाल रक्त कोशिकाओं में कौन सा वर्णक होता है?",
          "options_en": ["Chlorophyll", "Haemoglobin", "Myosin", "Melanin"],
          "options_hi": ["क्लोरोफिल", "हीमोग्लोबिन", "मायोसिन", "मेलेनिन"],
          "answer": "Haemoglobin",
          "answer_hi": "हीमोग्लोबिन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which part of the flower develops into fruit?",
          "question_hi": "पुष्प का कौन सा भाग फल में परिवर्तित होता है?",
          "options_en": ["Stigma", "Style", "Ovary", "Anther"],
          "options_hi": ["वर्तिकाग्र", "शैली", "अंडाशय", "परागकोष"],
          "answer": "Ovary",
          "answer_hi": "अंडाशय",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which vitamin is synthesized in the skin in the presence of sunlight?",
          "question_hi": "सूर्य प्रकाश की उपस्थिति में त्वचा में कौन सा विटामिन बनता है?",
          "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
          "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
          "answer": "Vitamin D",
          "answer_hi": "विटामिन D",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which gas is released during photosynthesis?",
          "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
          "options_en": ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
          "options_hi": ["कार्बन डाइऑक्साइड", "नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन"],
          "answer": "Oxygen",
          "answer_hi": "ऑक्सीजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which organ purifies blood in the human body?",
          "question_hi": "मानव शरीर में रक्त को शुद्ध करने वाला अंग कौन सा है?",
          "options_en": ["Heart", "Lungs", "Kidney", "Liver"],
          "options_hi": ["हृदय", "फेफड़े", "वृक्क", "यकृत"],
          "answer": "Kidney",
          "answer_hi": "वृक्क",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is the basic unit of heredity?",
          "question_hi": "आनुवंशिकता की मूल इकाई क्या है?",
          "options_en": ["Chromosome", "DNA", "Gene", "RNA"],
          "options_hi": ["गुणसूत्र", "डीएनए", "जीन", "आरएनए"],
          "answer": "Gene",
          "answer_hi": "जीन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What is the full form of DNA?",
          "question_hi": "DNA का पूरा नाम क्या है?",
          "options_en": ["Deoxyribonucleic Acid", "Deoxyribose Nitric Acid", "Dioxygen Nitric Acid", "None"],
          "options_hi": ["डिऑक्सीराइबोन्यूक्लिक एसिड", "डिऑक्सीराइबोज नाइट्रिक एसिड", "डायऑक्सीजन नाइट्रिक एसिड", "इनमें से कोई नहीं"],
          "answer": "Deoxyribonucleic Acid",
          "answer_hi": "डिऑक्सीराइबोन्यूक्लिक एसिड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which process helps in the exchange of gases in the lungs?",
          "question_hi": "फेफड़ों में गैसों के आदान-प्रदान की प्रक्रिया को क्या कहते हैं?",
          "options_en": ["Osmosis", "Photosynthesis", "Diffusion", "Filtration"],
          "options_hi": ["परासरण", "प्रकाश संश्लेषण", "प्रसरण", "निस्यंदन"],
          "answer": "Diffusion",
          "answer_hi": "प्रसरण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which organ is responsible for producing bile?",
          "question_hi": "बाइल (पित्त) बनाने वाला अंग कौन सा है?",
          "options_en": ["Stomach", "Liver", "Pancreas", "Gall bladder"],
          "options_hi": ["आमाशय", "यकृत", "अग्न्याशय", "पित्ताशय"],
          "answer": "Liver",
          "answer_hi": "यकृत",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "What is the mode of reproduction in Amoeba?",
          "question_hi": "अमीबा में जनन की विधि क्या है?",
          "options_en": ["Budding", "Fragmentation", "Binary fission", "Spore formation"],
          "options_hi": ["कलिकाजनन", "खंडन", "द्विखंडी विभाजन", "बीजाणुजनन"],
          "answer": "Binary fission",
          "answer_hi": "द्विखंडी विभाजन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which cells in the blood help in clotting?",
          "question_hi": "रक्त में कौन सी कोशिकाएं थक्के बनाने में सहायक होती हैं?",
          "options_en": ["RBC", "WBC", "Platelets", "Plasma"],
          "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
          "answer": "Platelets",
          "answer_hi": "प्लेटलेट्स",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which enzyme is present in saliva?",
          "question_hi": "लार में कौन एंजाइम पाया जाता है?",
          "options_en": ["Pepsin", "Amylase", "Trypsin", "Lipase"],
          "options_hi": ["पेप्सिन", "एमाइलेज", "ट्रिप्सिन", "लाइपेस"],
          "answer": "Amylase",
          "answer_hi": "एमाइलेज",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "What is the normal human body temperature?",
          "question_hi": "सामान्य मानव शरीर का तापमान कितना होता है?",
          "options_en": ["96.4°F", "98.6°F", "100.4°F", "104°F"],
          "options_hi": ["96.4°F", "98.6°F", "100.4°F", "104°F"],
          "answer": "98.6°F",
          "answer_hi": "98.6°F",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which gland is called the master gland?",
          "question_hi": "किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?",
          "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
          "options_hi": ["थायरॉयड", "पिट्यूटरी", "एड्रिनल", "अग्न्याशय"],
          "answer": "Pituitary",
          "answer_hi": "पिट्यूटरी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which part of the human brain controls breathing?",
          "question_hi": "मानव मस्तिष्क का कौन सा भाग श्वसन को नियंत्रित करता है?",
          "options_en": ["Cerebrum", "Medulla oblongata", "Cerebellum", "Thalamus"],
          "options_hi": ["सेरिब्रम", "मेडुला ऑब्लोंगाटा", "सेरिबेलम", "थैलेमस"],
          "answer": "Medulla oblongata",
          "answer_hi": "मेडुला ऑब्लोंगाटा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which disease is caused by the deficiency of insulin?",
          "question_hi": "इंसुलिन की कमी से कौन सा रोग होता है?",
          "options_en": ["Hypertension", "Diabetes", "Cancer", "Asthma"],
          "options_hi": ["हाइपरटेंशन", "मधुमेह", "कैंसर", "दमा"],
          "answer": "Diabetes",
          "answer_hi": "मधुमेह",
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
  
  
  