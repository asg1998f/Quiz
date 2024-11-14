const beginButton = document.querySelector("#btn-begin")
const nextButton = document.querySelector("#btn-next")
const containerQuestions = document.querySelector("#contenedor-questions")
const eachQuestion = document.querySelector("#question")
const optionAnswers = document.querySelector("#btn-answers")
const containerGraphic = document.querySelector("#container-graphic")
const containerResults = document.querySelector("#contenedor-results")

let questions = []
let currentQuestionIndex = 0;

const getQuestions = async () => {
    const res = await axios.get(
        "https://opentdb.com/api.php?amount=10&type=multiple&encode=base64"
    );
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
};



function setStatusClass(element){
    if(element.dataset.correct){
        element.classList.add("correct");
    }else{
        element.classList.add("wrong");
    }
};

function selectAnswer(){
    Array.from(optionAnswers.children).forEach((button)=>{
        setStatusClass(button);
    });
    if(questions.length > currentQuestionIndex +1){
        nextButton.classList.remove("hide");
    }else{
        beginButton.innerText = "Restart"
        beginButton.classList.remove("hide")
    }
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

async function startGame(){
    beginButton.classList.add("hide");
    await getQuestions();
    setNextQuestion();
    containerQuestions.classList.remove("hide");
}
beginButton.addEventListener("click",startGame);

nextButton.addEventListener("click",() => {
    currentQuestionIndex++;
if(currentQuestionIndex<questions.length){
    setNextQuestion();
}else{
    containerQuestions.classList.add("hide");
    containerResults.classList.remove("hide");
}
});