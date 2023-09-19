const questions = [
    
    {
        question: "Quel langage de programmation est principalement utilisé pour le développement web côté serveur ?",
        options: ["Java", "Python", "JavaScript", "PHP"],
        correctAnswer: "PHP"
    },
    {
        question: "Quel protocole est couramment utilisé pour transférer des fichiers sur Internet ?",
        options: ["HTTP", "FTP", "SMTP", "TCP"],
        correctAnswer: "FTP"
    },
    {
        question: "Quel système d'exploitation est basé sur le noyau Linux ?",
        options: ["Windows", "macOS", "Ubuntu", "Android"],
        correctAnswer: "Ubuntu"
    },
    // Ajoutez plus de questions ici
    {
        question: "Quel est le langage de programmation le plus utilisé pour les applications mobiles Android ?",
        options: ["Java", "Python", "JavaScript", "Swift"],
        correctAnswer: "Java"
    },
    {
        question: "Quelle technologie permet de stocker des données de manière persistante dans un navigateur web ?",
        options: ["Cookies", "Sessions", "LocalStorage", "Cache"],
        correctAnswer: "LocalStorage"
    },
    {
        question: "Quel langage de balisage est utilisé pour structurer le contenu des pages web ?",
        options: ["Java", "Python", "HTML", "CSS"],
        correctAnswer: "HTML"
    },
    {
        question: "Quelle entreprise a développé le langage de programmation Python ?",
        options: ["Google", "Microsoft", "Apple", "Python Software Foundation"],
        correctAnswer: "Python Software Foundation"
    },
    {
        question: "Quelle est la signification de l'acronyme CSS ?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Quelle est la base de données la plus populaire parmi les systèmes de gestion de base de données relationnelles (SGBDR) ?",
        options: ["MySQL", "MongoDB", "SQLite", "PostgreSQL"],
        correctAnswer: "MySQL"
    },
    {
        question: "Quel framework JavaScript est principalement utilisé pour le développement d'interfaces utilisateur interactives ?",
        options: ["Angular", "React", "Vue.js", "Ember"],
        correctAnswer: "React"
    },
    {
        question: "Quel est le langage de programmation utilisé pour créer des applications iOS ?",
        options: ["Java", "Python", "Swift", "Objective-C"],
        correctAnswer: "Swift"
    },
    {
        question: "Quelle technologie est utilisée pour rendre les sites web adaptatifs aux différentes tailles d'écrans ?",
        options: ["Responsive Design", "Adaptive Design", "Mobile-First Design", "Fluid Layout"],
        correctAnswer: "Responsive Design"
    },
    {
        question: "Quel est le navigateur web open-source développé par Mozilla ?",
        options: ["Google Chrome", "Microsoft Edge", "Firefox", "Safari"],
        correctAnswer: "Firefox"
    },
    {
        question: "Quelle est la principale fonction d'un serveur DNS (Domain Name System) ?",
        options: ["Stocker des mots de passe", "Gérer les certificats SSL", "Traduire les noms de domaine en adresses IP", "Filtrer les spams"],
        correctAnswer: "Traduire les noms de domaine en adresses IP"
    }
];

let currentQuestionIndex = 0;
let userScore = 0;

const questionElement = document.getElementById("question");
const optionElements = document.querySelectorAll(".option");
const nextButton = document.getElementById("next");
const messageElement = document.getElementById("message");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].textContent = currentQuestion.options[i];
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        userScore++;
    }
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        messageElement.textContent = "";
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz terminé ! Votre score : " + userScore + " sur " + questions.length;
    optionElements.forEach(option => option.style.display = "none");
    nextButton.style.display = "none";
}

optionElements.forEach(option => {
    option.addEventListener("click", function () {
        checkAnswer(option.textContent);
        optionElements.forEach(option => option.style.backgroundColor = "#007bff");
        option.style.backgroundColor = "green";
        nextButton.style.display = "block";
    });
});

nextButton.addEventListener("click", showNextQuestion);

displayQuestion();
