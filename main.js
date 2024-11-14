const beginButton = document.querySelector("#btn-begin")
const nextButton = document.querySelector("#btn-next")
const containerQuestions = document.querySelector("#contenedor-questions")
const eachQuestion = document.querySelector("#question")
const optionAnswers = document.querySelector("#btn-answers")
const containerGraphic = document.querySelector("#container-graphic")
const containerResults = document.querySelector("#contenedor-results")
const correctAnswersElement = document.getElementById("correct-answers");
const incorrectAnswersElement = document.getElementById("incorrect-answers");

let questions = []
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

const getQuestions = async () => {
    try {
        const res = await axios.get(
            "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"
        );
        console.log(res.data);  
        
        questions = res.data.results.map((questionObj) => {
            let answers = questionObj.incorrect_answers.map((answer) => {
                return { text: answer, correct: false };
            });
            answers.push({ text: questionObj.correct_answer, correct: true });
            return {
                question: questionObj.question,
                answers,
            };
        });
    } catch (error) {
        console.error("Error al obtener las preguntas", error);
    }
};




function setStatusClass(element){
    if(element.dataset.correct){
        element.classList.add("correct");
    }else{
        element.classList.add("wrong");
    }
};

function selectAnswer(event) {
    const selectedButton = event.target;
    Array.from(optionAnswers.children).forEach((button) => {
        setStatusClass(button); 
        button.disabled = true;  
    });
    if (selectedButton.dataset.correct === "true") {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }
    nextButton.classList.remove("hide");
}

    function showQuestion (question) {
    eachQuestion.innerText = question.question;
    optionAnswers.innerHTML="";
    question.answers.forEach((answer)=>{
        const button = document.createElement("button");
        button.innerText = answer.text;
        if(answer.correct === true){
            button.dataset.correct = true;
        }
        button.addEventListener("click",selectAnswer);
        optionAnswers.append(button);
    });
}; 



function setNextQuestion(){
    resetState();
    showQuestion(questions[currentQuestionIndex])
}

function resetState() {
    nextButton.classList.add("hide");
    optionAnswers.classList.remove("hide");
}

async function startGame() {
    beginButton.classList.add("hide");
    await getQuestions();
    setNextQuestion();
    containerQuestions.classList.remove("hide");
}

const showResults = () => {
    containerQuestions.classList.add("hide");
    containerResults.classList.remove("hide");
    correctAnswersElement.innerText = `Respuestas correctas: ${correctAnswers}`;
    incorrectAnswersElement.innerText = `Respuestas incorrectas: ${incorrectAnswers}`;
};

beginButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        showResults();
    }
});

