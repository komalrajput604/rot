const questions = [ 

    
        {
          "num": 1,
          "question_en": "Who is the author of the poem 'My Mother at Sixty-Six'?",
          "question_hi": "'My Mother at Sixty-Six' कविता के लेखक कौन हैं?",
          "options_en": ["Kamala Das", "John Keats", "Robert Frost", "Shakespeare"],
          "options_hi": ["कमला दास", "जॉन कीट्स", "रॉबर्ट फ्रॉस्ट", "शेक्सपियर"],
          "answer": "Kamala Das",
          "answer_hi": "कमला दास",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What does the phrase 'Trees sprinting' signify in 'My Mother at Sixty-Six'?",
          "question_hi": "'My Mother at Sixty-Six' में 'Trees sprinting' का क्या तात्पर्य है?",
          "options_en": ["Moving car", "Old age", "Fast running trees", "Loss of vitality"],
          "options_hi": ["चलती कार", "बुढ़ापा", "तेज़ दौड़ते पेड़", "ऊर्जा की हानि"],
          "answer": "Moving car",
          "answer_hi": "चलती कार",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the central theme of 'Lost Spring'?",
          "question_hi": "'Lost Spring' का मुख्य विषय क्या है?",
          "options_en": ["Nature", "Child exploitation", "History", "Adventure"],
          "options_hi": ["प्रकृति", "बाल शोषण", "इतिहास", "साहसिक कार्य"],
          "answer": "Child exploitation",
          "answer_hi": "बाल शोषण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Who is the author of 'The Last Lesson'?",
          "question_hi": "'The Last Lesson' के लेखक कौन हैं?",
          "options_en": ["Alphonse Daudet", "Douglas", "Kamala Das", "Louis Fischer"],
          "options_hi": ["अल्फोंस डॉडेट", "डगलस", "कमला दास", "लुईस फिशर"],
          "answer": "Alphonse Daudet",
          "answer_hi": "अल्फोंस डॉडेट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What was the subject of the last lesson?",
          "question_hi": "'The Last Lesson' में अंतिम पाठ का विषय क्या था?",
          "options_en": ["Science", "English", "French", "German"],
          "options_hi": ["विज्ञान", "अंग्रेज़ी", "फ्रेंच", "जर्मन"],
          "answer": "French",
          "answer_hi": "फ्रेंच",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Who is the writer of 'Deep Water'?",
          "question_hi": "'Deep Water' के लेखक कौन हैं?",
          "options_en": ["Douglas", "Kamala Das", "Stephen Spender", "Louis Fischer"],
          "options_hi": ["डगलस", "कमला दास", "स्टीफन स्पेंडर", "लुईस फिशर"],
          "answer": "Douglas",
          "answer_hi": "डगलस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "What was the author afraid of in 'Deep Water'?",
          "question_hi": "'Deep Water' में लेखक किससे डरता था?",
          "options_en": ["Fire", "Dogs", "Water", "Darkness"],
          "options_hi": ["आग", "कुत्ते", "पानी", "अंधकार"],
          "answer": "Water",
          "answer_hi": "पानी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What lesson do we learn from 'Deep Water'?",
          "question_hi": "'Deep Water' से हमें क्या शिक्षा मिलती है?",
          "options_en": ["Give up", "Never try", "Face fear", "Ignore fear"],
          "options_hi": ["हार मानो", "कोशिश न करो", "डर का सामना करो", "डर को नजरअंदाज करो"],
          "answer": "Face fear",
          "answer_hi": "डर का सामना करो",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Who is the author of 'Indigo'?",
          "question_hi": "'Indigo' के लेखक कौन हैं?",
          "options_en": ["Louis Fischer", "Kamala Das", "Douglas", "Alphonse Daudet"],
          "options_hi": ["लुईस फिशर", "कमला दास", "डगलस", "अल्फोंस डॉडेट"],
          "answer": "Louis Fischer",
          "answer_hi": "लुईस फिशर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What was the issue in Champaran?",
          "question_hi": "चंपारण में क्या समस्या थी?",
          "options_en": ["High rent", "Slavery", "Forced indigo farming", "Land dispute"],
          "options_hi": ["उच्च किराया", "गुलामी", "जबरन नील की खेती", "भूमि विवाद"],
          "answer": "Forced indigo farming",
          "answer_hi": "जबरन नील की खेती",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Who is the author of the poem 'Keeping Quiet'?",
          "question_hi": "'Keeping Quiet' कविता के लेखक कौन हैं?",
          "options_en": ["Pablo Neruda", "John Keats", "Robert Frost", "Kamala Das"],
          "options_hi": ["पाब्लो नेरूदा", "जॉन कीट्स", "रॉबर्ट फ्रॉस्ट", "कमला दास"],
          "answer": "Pablo Neruda",
          "answer_hi": "पाब्लो नेरूदा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What does the poem 'Keeping Quiet' emphasize?",
          "question_hi": "'Keeping Quiet' कविता किस पर ज़ोर देती है?",
          "options_en": ["Violence", "War", "Introspection", "Celebration"],
          "options_hi": ["हिंसा", "युद्ध", "आत्मनिरीक्षण", "उत्सव"],
          "answer": "Introspection",
          "answer_hi": "आत्मनिरीक्षण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Who is the poet of 'A Thing of Beauty'?",
          "question_hi": "'A Thing of Beauty' के कवि कौन हैं?",
          "options_en": ["John Keats", "Kamala Das", "Pablo Neruda", "Stephen Spender"],
          "options_hi": ["जॉन कीट्स", "कमला दास", "पाब्लो नेरूदा", "स्टीफन स्पेंडर"],
          "answer": "John Keats",
          "answer_hi": "जॉन कीट्स",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "What is a thing of beauty compared to?",
          "question_hi": "सुंदर वस्तु की तुलना किससे की गई है?",
          "options_en": ["Joy forever", "Money", "Power", "Knowledge"],
          "options_hi": ["सदैव की खुशी", "धन", "शक्ति", "ज्ञान"],
          "answer": "Joy forever",
          "answer_hi": "सदैव की खुशी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What does 'Aunt Jennifer’s Tigers' symbolize?",
          "question_hi": "'Aunt Jennifer’s Tigers' में बाघ किसका प्रतीक हैं?",
          "options_en": ["Strength and freedom", "Fear", "Cowardice", "Violence"],
          "options_hi": ["शक्ति और स्वतंत्रता", "डर", "कायरता", "हिंसा"],
          "answer": "Strength and freedom",
          "answer_hi": "शक्ति और स्वतंत्रता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Who wrote the poem 'Aunt Jennifer’s Tigers'?",
          "question_hi": "'Aunt Jennifer’s Tigers' कविता किसने लिखी?",
          "options_en": ["Adrienne Rich", "Kamala Das", "Pablo Neruda", "John Keats"],
          "options_hi": ["एड्रियन रिच", "कमला दास", "पाब्लो नेरूदा", "जॉन कीट्स"],
          "answer": "Adrienne Rich",
          "answer_hi": "एड्रियन रिच",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "What is the literary form of 'The Interview'?",
          "question_hi": "'The Interview' किस साहित्यिक रूप में है?",
          "options_en": ["Essay", "Poem", "Story", "Drama"],
          "options_hi": ["निबंध", "कविता", "कहानी", "नाटक"],
          "answer": "Essay",
          "answer_hi": "निबंध",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Who is interviewed in 'The Interview'?",
          "question_hi": "'The Interview' में किसका साक्षात्कार लिया गया है?",
          "options_en": ["Umberto Eco", "Louis Fischer", "Stephen Spender", "Douglas"],
          "options_hi": ["उम्बर्टो इको", "लुईस फिशर", "स्टीफन स्पेंडर", "डगलस"],
          "answer": "Umberto Eco",
          "answer_hi": "उम्बर्टो इको",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What was the name of the book written by Umberto Eco?",
          "question_hi": "उम्बर्टो इको द्वारा लिखी गई पुस्तक का नाम क्या था?",
          "options_en": ["The Name of the Rose", "The Last Lesson", "Deep Water", "Indigo"],
          "options_hi": ["द नेम ऑफ़ द रोज़", "द लास्ट लेसन", "डीप वॉटर", "इंडिगो"],
          "answer": "The Name of the Rose",
          "answer_hi": "द नेम ऑफ़ द रोज़",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "What does the poem 'A Roadside Stand' criticize?",
          "question_hi": "'A Roadside Stand' कविता किसकी आलोचना करती है?",
          "options_en": ["Urban neglect", "Love", "Nature", "Patriotism"],
          "options_hi": ["शहरी उपेक्षा", "प्रेम", "प्रकृति", "देशभक्ति"],
          "answer": "Urban neglect",
          "answer_hi": "शहरी उपेक्षा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Who wrote 'Going Places'?",
          "question_hi": "'Going Places' किसने लिखा?",
          "options_en": ["A.R. Barton", "Kamala Das", "John Keats", "Douglas"],
          "options_hi": ["ए.आर. बार्टन", "कमला दास", "जॉन कीट्स", "डगलस"],
          "answer": "A.R. Barton",
          "answer_hi": "ए.आर. बार्टन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "What is Sophie’s dream in 'Going Places'?",
          "question_hi": "'Going Places' में सोफी का सपना क्या है?",
          "options_en": ["To be an actress", "To be a manager", "To own a boutique", "To meet a footballer"],
          "options_hi": ["अभिनेत्री बनना", "मैनेजर बनना", "बुटीक खोलना", "फुटबॉलर से मिलना"],
          "answer": "To own a boutique",
          "answer_hi": "बुटीक खोलना",
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


