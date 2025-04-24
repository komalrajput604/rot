const questions = [ 

    
        {
          "num": 1,
          "question_en": "In 'The Last Lesson', which language was going to be banned?",
          "question_hi": "'The Last Lesson' में किस भाषा को प्रतिबंधित किया जा रहा था?",
          "options_en": ["French", "German", "English", "Spanish"],
          "options_hi": ["फ्रेंच", "जर्मन", "अंग्रेजी", "स्पेनिश"],
          "answer": "French",
          "answer_hi": "फ्रेंच",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What is the central idea of 'Lost Spring'?",
          "question_hi": "'Lost Spring' का मुख्य विचार क्या है?",
          "options_en": ["Child labor and poverty", "Education", "Festivals", "Village life"],
          "options_hi": ["बाल श्रम और गरीबी", "शिक्षा", "त्योहार", "गांव का जीवन"],
          "answer": "Child labor and poverty",
          "answer_hi": "बाल श्रम और गरीबी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Who helped the peddler in 'The Rattrap'?",
          "question_hi": "'The Rattrap' में पेडलर की मदद किसने की?",
          "options_en": ["Ironmaster", "Edla", "Blacksmith", "Franz"],
          "options_hi": ["लोहे का मालिक", "एडला", "लोहार", "फ्रांज"],
          "answer": "Edla",
          "answer_hi": "एडला",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "What lesson does 'Deep Water' teach?",
          "question_hi": "'Deep Water' से हमें क्या शिक्षा मिलती है?",
          "options_en": ["Never trust strangers", "Overcoming fear", "Learning to swim", "Respect elders"],
          "options_hi": ["अजनबियों पर कभी भरोसा न करें", "भय पर विजय", "तैरना सीखना", "बड़ों का सम्मान"],
          "answer": "Overcoming fear",
          "answer_hi": "भय पर विजय",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What did Gandhi consider as the real victory in 'Indigo'?",
          "question_hi": "'Indigo' में गांधी जी ने असली विजय किसे माना?",
          "options_en": ["Freedom of farmers", "Courage of peasants", "Self-reliance of peasants", "Fearlessness among peasants"],
          "options_hi": ["किसानों की स्वतंत्रता", "किसानों का साहस", "किसानों की आत्मनिर्भरता", "किसानों में निर्भयता"],
          "answer": "Fearlessness among peasants",
          "answer_hi": "किसानों में निर्भयता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "What is the tone of 'Keeping Quiet'?",
          "question_hi": "'Keeping Quiet' की भाषा-शैली क्या है?",
          "options_en": ["Peaceful and reflective", "Aggressive", "Joyful", "Violent"],
          "options_hi": ["शांत और चिंतनशील", "आक्रामक", "आनंदमय", "हिंसक"],
          "answer": "Peaceful and reflective",
          "answer_hi": "शांत और चिंतनशील",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "In 'My Mother at Sixty-Six', the poet compares her mother’s face to?",
          "question_hi": "'My Mother at Sixty-Six' में कवि अपनी माँ के चेहरे की तुलना किससे करता है?",
          "options_en": ["Winter's moon", "Full moon", "Rose", "Sun"],
          "options_hi": ["सर्दियों के चाँद", "पूर्णिमा के चाँद", "गुलाब", "सूरज"],
          "answer": "Winter's moon",
          "answer_hi": "सर्दियों के चाँद",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Why was the peddler surprised in 'The Rattrap'?",
          "question_hi": "'The Rattrap' में पेडलर क्यों चकित था?",
          "options_en": ["He was invited like a guest", "He got a gift", "He got food", "He was recognized"],
          "options_hi": ["उसे एक अतिथि की तरह बुलाया गया", "उसे एक उपहार मिला", "उसे खाना मिला", "उसे पहचाना गया"],
          "answer": "He was invited like a guest",
          "answer_hi": "उसे एक अतिथि की तरह बुलाया गया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Where was the studio located in 'Poets and Pancakes'?",
          "question_hi": "'Poets and Pancakes' में स्टूडियो कहाँ स्थित था?",
          "options_en": ["Chennai", "Mumbai", "Delhi", "Kolkata"],
          "options_hi": ["चेन्नई", "मुंबई", "दिल्ली", "कोलकाता"],
          "answer": "Chennai",
          "answer_hi": "चेन्नई",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What did Aunt Jennifer create in her embroidery?",
          "question_hi": "आंट जेनिफर ने अपनी कढ़ाई में क्या बनाया?",
          "options_en": ["Tigers", "Peacocks", "Roses", "Trees"],
          "options_hi": ["बाघ", "मोर", "गुलाब", "पेड़"],
          "answer": "Tigers",
          "answer_hi": "बाघ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What does 'a thing of beauty' provide according to the poem?",
          "question_hi": "कविता के अनुसार 'a thing of beauty' क्या प्रदान करती है?",
          "options_en": ["Joy forever", "Temporary joy", "Sadness", "Loneliness"],
          "options_hi": ["हमेशा आनंद", "क्षणिक खुशी", "दुख", "अकेलापन"],
          "answer": "Joy forever",
          "answer_hi": "हमेशा आनंद",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Who is the central character in 'The Enemy'?",
          "question_hi": "'The Enemy' में मुख्य पात्र कौन है?",
          "options_en": ["Dr. Sadao", "Tom", "Edla", "Saheb"],
          "options_hi": ["डॉ. सदाओ", "टॉम", "एडला", "साहेब"],
          "answer": "Dr. Sadao",
          "answer_hi": "डॉ. सदाओ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What was the profession of Saheb’s parents in 'Lost Spring'?",
          "question_hi": "'Lost Spring' में साहेब के माता-पिता का व्यवसाय क्या था?",
          "options_en": ["Bangle making", "Ragpicking", "Masonry", "Farming"],
          "options_hi": ["चूड़ी निर्माण", "कबाड़ इकट्ठा करना", "राजमिस्त्री", "खेती"],
          "answer": "Bangle making",
          "answer_hi": "चूड़ी निर्माण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "What is the message of 'An Elementary School Classroom in a Slum'?",
          "question_hi": "'An Elementary School Classroom in a Slum' का संदेश क्या है?",
          "options_en": ["Education for all", "Poverty is good", "Nature is best", "Technology helps"],
          "options_hi": ["सभी के लिए शिक्षा", "गरीबी अच्छी है", "प्रकृति श्रेष्ठ है", "प्रौद्योगिकी सहायक है"],
          "answer": "Education for all",
          "answer_hi": "सभी के लिए शिक्षा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What is the attitude of Sophie's father?",
          "question_hi": "सोफी के पिता का रवैया कैसा है?",
          "options_en": ["Strict and practical", "Loving and soft", "Careless", "Supportive"],
          "options_hi": ["सख्त और व्यावहारिक", "स्नेही और नरम", "लापरवाह", "सहायक"],
          "answer": "Strict and practical",
          "answer_hi": "सख्त और व्यावहारिक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "What is the significance of silence in 'Keeping Quiet'?",
          "question_hi": "'Keeping Quiet' में मौन का क्या महत्व है?",
          "options_en": ["Helps self-introspection", "Spreads fear", "Kills time", "Shows ignorance"],
          "options_hi": ["आत्मचिंतन में सहायक", "भय फैलाता है", "समय नष्ट करता है", "अज्ञानता दर्शाता है"],
          "answer": "Helps self-introspection",
          "answer_hi": "आत्मचिंतन में सहायक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "What does the poet want people to do in 'Keeping Quiet'?",
          "question_hi": "'Keeping Quiet' में कवि लोगों से क्या चाहता है?",
          "options_en": ["Be silent and introspect", "Shout slogans", "Protest", "Dance and sing"],
          "options_hi": ["मौन रहकर आत्मचिंतन करें", "नारे लगाएं", "विरोध करें", "नाचें और गायें"],
          "answer": "Be silent and introspect",
          "answer_hi": "मौन रहकर आत्मचिंतन करें",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "What does 'Pancakes' refer to in 'Poets and Pancakes'?",
          "question_hi": "'Poets and Pancakes' में 'पैनकेक' किसका प्रतीक है?",
          "options_en": ["Make-up material", "Food", "A book", "A machine"],
          "options_hi": ["मेकअप का सामान", "खाना", "एक किताब", "एक मशीन"],
          "answer": "Make-up material",
          "answer_hi": "मेकअप का सामान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What was the topic of the lecture delivered by the guest in Gemini Studios?",
          "question_hi": "जेमिनी स्टूडियो में अतिथि द्वारा दिए गए भाषण का विषय क्या था?",
          "options_en": ["Freedom", "Literature", "Communism", "Make-up"],
          "options_hi": ["स्वतंत्रता", "साहित्य", "साम्यवाद", "मेकअप"],
          "answer": "Communism",
          "answer_hi": "साम्यवाद",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Why did the peddler sign himself as 'Captain von Stahle'?",
          "question_hi": "पेडलर ने खुद को 'Captain von Stahle' क्यों लिखा?",
          "options_en": ["He wanted to honor Edla", "He lied", "He was really a captain", "It was a code name"],
          "options_hi": ["वह एडला का सम्मान करना चाहता था", "उसने झूठ बोला", "वह वास्तव में कप्तान था", "यह एक कोड नाम था"],
          "answer": "He wanted to honor Edla",
          "answer_hi": "वह एडला का सम्मान करना चाहता था",
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
  
  
  