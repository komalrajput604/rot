const questions = [ 



    
    {
      "num": 1,
      "question_en": "Who is the author of the lesson 'The Last Lesson'?",
      "question_hi": "'द लास्ट लेसन' पाठ के लेखक कौन हैं?",
      "options_en": ["Alphonse Daudet", "Robert Frost", "William Wordsworth", "John Keats"],
      "options_hi": ["अल्फोंस डौडे", "रॉबर्ट फ्रॉस्ट", "विलियम वर्ड्सवर्थ", "जॉन कीट्स"],
      "answer": "Alphonse Daudet",
      "answer_hi": "अल्फोंस डौडे",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "What does the word 'Saheb' mean?",
      "question_hi": "'साहेब' शब्द का क्या अर्थ है?",
      "options_en": ["Sir", "Owner", "Servant", "Friend"],
      "options_hi": ["सर", "मालिक", "नौकर", "मित्र"],
      "answer": "Sir",
      "answer_hi": "सर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "What is the theme of 'Lost Spring'?",
      "question_hi": "'लॉस्ट स्प्रिंग' का मुख्य विषय क्या है?",
      "options_en": ["Childhood memories", "Poverty and exploitation of children", "Season change", "Migration"],
      "options_hi": ["बचपन की यादें", "गरीबी और बच्चों का शोषण", "मौसम परिवर्तन", "प्रवास"],
      "answer": "Poverty and exploitation of children",
      "answer_hi": "गरीबी और बच्चों का शोषण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "What is Mukesh's dream in 'Lost Spring'?",
      "question_hi": "'लॉस्ट स्प्रिंग' में मुकेश का सपना क्या है?",
      "options_en": ["To become a teacher", "To become a driver", "To become a doctor", "To become a motor mechanic"],
      "options_hi": ["शिक्षक बनने का", "ड्राइवर बनने का", "डॉक्टर बनने का", "मोटर मैकेनिक बनने का"],
      "answer": "To become a motor mechanic",
      "answer_hi": "मोटर मैकेनिक बनने का",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "What does the word 'Garbage' symbolize in the story 'Lost Spring'?",
      "question_hi": "'लॉस्ट स्प्रिंग' कहानी में 'कचरा' किसका प्रतीक है?",
      "options_en": ["Joy", "Freedom", "Hope and Survival", "Pollution"],
      "options_hi": ["आनंद", "स्वतंत्रता", "आशा और जीविका", "प्रदूषण"],
      "answer": "Hope and Survival",
      "answer_hi": "आशा और जीविका",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Who is the author of 'Deep Water'?",
      "question_hi": "'डीप वाटर' के लेखक कौन हैं?",
      "options_en": ["Stephen Leacock", "Douglas Malloch", "William Douglas", "Shakespeare"],
      "options_hi": ["स्टीफन लीकॉक", "डगलस मालोच", "विलियम डगलस", "शेक्सपीयर"],
      "answer": "William Douglas",
      "answer_hi": "विलियम डगलस",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "What was the main fear of the narrator in 'Deep Water'?",
      "question_hi": "'डीप वाटर' में लेखक का मुख्य भय क्या था?",
      "options_en": ["Fear of ghosts", "Fear of failure", "Fear of deep water", "Fear of exams"],
      "options_hi": ["भूतों का डर", "असफलता का डर", "गहरे पानी का डर", "परीक्षा का डर"],
      "answer": "Fear of deep water",
      "answer_hi": "गहरे पानी का डर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "What did the poet of 'My Mother at Sixty-six' realize?",
      "question_hi": "'माई मदर एट सिक्स्टी-सिक्स' कविता में कवयित्री ने क्या महसूस किया?",
      "options_en": ["Her own aging", "Her mother's old age", "Childhood memories", "Nature's beauty"],
      "options_hi": ["अपनी वृद्धावस्था", "अपनी माँ की वृद्धावस्था", "बचपन की यादें", "प्रकृति की सुंदरता"],
      "answer": "Her mother's old age",
      "answer_hi": "अपनी माँ की वृद्धावस्था",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Who is the author of 'The Rattrap'?",
      "question_hi": "'द रैट ट्रैप' के लेखक कौन हैं?",
      "options_en": ["Selma Lagerlöf", "Louis Fischer", "William Douglas", "Kamala Das"],
      "options_hi": ["सेल्मा लैगरलॉफ़", "लुईस फिशर", "विलियम डगलस", "कमला दास"],
      "answer": "Selma Lagerlöf",
      "answer_hi": "सेल्मा लैगरलॉफ़",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "What did the peddler steal in 'The Rattrap'?",
      "question_hi": "'द रैट ट्रैप' में पेडलर ने क्या चुराया?",
      "options_en": ["A cow", "Some food", "A rattrap", "Thirty kronors"],
      "options_hi": ["एक गाय", "थोड़ा भोजन", "एक चूहेदानी", "तीस क्रोनर"],
      "answer": "Thirty kronors",
      "answer_hi": "तीस क्रोनर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "What is the moral of the story 'The Rattrap'?",
      "question_hi": "'द रैट ट्रैप' कहानी का नैतिक सन्देश क्या है?",
      "options_en": ["Honesty pays", "World is a rattrap", "Love is blind", "Money is everything"],
      "options_hi": ["ईमानदारी लाभ देती है", "दुनिया एक चूहेदानी है", "प्रेम अंधा होता है", "पैसा ही सब कुछ है"],
      "answer": "World is a rattrap",
      "answer_hi": "दुनिया एक चूहेदानी है",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "What is the real name of the poet Kamala Das?",
      "question_hi": "कवयित्री कमला दास का असली नाम क्या है?",
      "options_en": ["Kamala Surayya", "Kamala Nehru", "Kamala Devi", "Kamala Reddy"],
      "options_hi": ["कमला सुरैया", "कमला नेहरू", "कमला देवी", "कमला रेड्डी"],
      "answer": "Kamala Surayya",
      "answer_hi": "कमला सुरैया",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "What does the poem 'A Thing of Beauty' celebrate?",
      "question_hi": "'अ थिंग ऑफ ब्यूटी' कविता किसकी सराहना करती है?",
      "options_en": ["Hatred", "Beauty", "Sorrow", "Poverty"],
      "options_hi": ["घृणा", "सौंदर्य", "दुख", "गरीबी"],
      "answer": "Beauty",
      "answer_hi": "सौंदर्य",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Who wrote the poem 'Keeping Quiet'?",
      "question_hi": "'कीपिंग क्वाइट' कविता किसने लिखी है?",
      "options_en": ["John Keats", "Robert Frost", "Pablo Neruda", "Walt Whitman"],
      "options_hi": ["जॉन कीट्स", "रॉबर्ट फ्रॉस्ट", "पाब्लो नेरूदा", "वाल्ट व्हिटमैन"],
      "answer": "Pablo Neruda",
      "answer_hi": "पाब्लो नेरूदा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "What does the poet suggest in 'Keeping Quiet'?",
      "question_hi": "'कीपिंग क्वाइट' में कवि क्या सुझाव देता है?",
      "options_en": ["War", "Violence", "Introspection and silence", "Celebration"],
      "options_hi": ["युद्ध", "हिंसा", "आत्मविश्लेषण और मौन", "उत्सव"],
      "answer": "Introspection and silence",
      "answer_hi": "आत्मविश्लेषण और मौन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "What is the name of the book from which 'Indigo' is taken?",
      "question_hi": "'इंडिगो' किस पुस्तक से लिया गया है?",
      "options_en": ["Gandhi: The Years That Changed the World", "My Experiments with Truth", "The Life of Mahatma Gandhi", "Gandhi and Churchill"],
      "options_hi": ["गांधी: द ईयर्स दैट चेंज्ड द वर्ल्ड", "सत्य के साथ मेरे प्रयोग", "द लाइफ ऑफ महात्मा गांधी", "गांधी एंड चर्चिल"],
      "answer": "The Life of Mahatma Gandhi",
      "answer_hi": "द लाइफ ऑफ महात्मा गांधी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "Who is the author of 'Indigo'?",
      "question_hi": "'इंडिगो' के लेखक कौन हैं?",
      "options_en": ["William Douglas", "Louis Fischer", "John Keats", "Stephen Spender"],
      "options_hi": ["विलियम डगलस", "लुईस फिशर", "जॉन कीट्स", "स्टीफन स्पेंडर"],
      "answer": "Louis Fischer",
      "answer_hi": "लुईस फिशर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "What is the central idea of the lesson 'Going Places'?",
      "question_hi": "'गोइंग प्लेसेज़' पाठ का केंद्रीय विचार क्या है?",
      "options_en": ["Fantasy vs Reality", "Love for cricket", "Importance of travel", "Adventure"],
      "options_hi": ["कल्पना बनाम वास्तविकता", "क्रिकेट का प्रेम", "यात्रा का महत्व", "साहसिक कार्य"],
      "answer": "Fantasy vs Reality",
      "answer_hi": "कल्पना बनाम वास्तविकता",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Who is Sophie in 'Going Places'?",
      "question_hi": "'गोइंग प्लेसेज़' में सोफी कौन है?",
      "options_en": ["A teacher", "A writer", "A dreamy schoolgirl", "A doctor"],
      "options_hi": ["एक शिक्षिका", "एक लेखिका", "एक कल्पनाओं में जीने वाली छात्रा", "एक डॉक्टर"],
      "answer": "A dreamy schoolgirl",
      "answer_hi": "एक कल्पनाओं में जीने वाली छात्रा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "Which sport is mentioned in 'Going Places'?",
      "question_hi": "'गोइंग प्लेसेज़' में किस खेल का उल्लेख है?",
      "options_en": ["Football", "Tennis", "Basketball", "Cricket"],
      "options_hi": ["फुटबॉल", "टेनिस", "बास्केटबॉल", "क्रिकेट"],
      "answer": "Football",
      "answer_hi": "फुटबॉल",
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


