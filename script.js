/*const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;


const questions =[
    {
            question:"Which is largest animal in the world?",
            answers: [
                {text: "Shark", correct:false},
                {text:"Blue whale",correct:true},
                {text:"Elephant",correct:false},
                {text:"Giraff",correct:false}
            ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Rome", correct: false },
            { text: "Berlin", correct: false }
        ]

    }
];

function startQuiz(){
    currentQuestionIndex= 0;
    score= 0;
    nextButton.innerHTML="Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + "."+ currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{

        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
//remove previos answwer
function resetState(){
    nextButton.style.display="none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    //if select wrong answer then show correct answer
    answerButtons.appendChild(button);
    Array.from(answerButtons.children).forEach(button=>{
        if (button.dataset.correct=="true"){
            button.classList.add("correct");

        }
        button.disabled=true;

    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
};


nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
 

startQuiz();*/
// Get references to HTML elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; // Track the current question index
let score = 0; // Track the user's score

// Array of questions and answers
const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Rome", correct: false },
            { text: "Berlin", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water?",
        answers: [
            { text: "90°C", correct: false },
            { text: "100°C", correct: true },
            { text: "80°C", correct: false },
            { text: "110°C", correct: false }
        ]
    }
];

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0; // Reset to the first question
    score = 0; // Reset the score
    nextButton.innerHTML = "Next"; // Set the next button text
    showQuestion(); // Display the first question
}

// Display the current question and answers
function showQuestion() {
    resetState(); // Reset the answer buttons and UI
    let currentQuestion = questions[currentQuestionIndex]; // Get the current question
    let questionNo = currentQuestionIndex + 1; // Calculate question number
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Display question text

    // Loop through each answer and create a button
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct; // Add data attribute for correct answer
        }
        button.addEventListener("click", selectAnswer); // Add click event listener
    });
}

// Reset the answer buttons and hide the next button
function resetState() {
    nextButton.style.display = "none"; // Hide next button
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Remove old buttons
    }
}

// Handle answer selection
function selectAnswer(e) {
    const selectedBtn = e.target; // Get the clicked button
    const isCorrect = selectedBtn.dataset.correct === "true"; // Check if it's correct
    if (isCorrect) {
        selectedBtn.classList.add("correct"); // Highlight correct answer
        score++; // Increment score
    } else {
        selectedBtn.classList.add("incorrect"); // Highlight incorrect answer
    }

    // Show the correct answer for all buttons
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true; // Disable all buttons
    });

    nextButton.style.display = "block"; // Show next button
}

// Display the user's score at the end of the quiz
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again"; // Change next button text
    nextButton.style.display = "block"; // Show the button
}

// Handle the Next button click
function handleNextButton() {
    currentQuestionIndex++; // Go to the next question
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Show the next question
    } else {
        showScore(); // Show the final score
    }
}

// Add click event listener to the Next button
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz(); // Restart the quiz
    }
});

// Start the quiz on page load
startQuiz();
