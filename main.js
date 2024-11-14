const beginButton = document.querySelector("#btn-begin")
const nextButton = document.querySelector("#btn-next")
const containerQuestions = document.querySelector("#contenedor-questions")
const eachQuestion = document.querySelector("#question")
const optionAnswers = document.querySelector("#btn-answers")
const containerGraphic = document.querySelector("#container-graphic")
const containerResults = document.querySelector("#contenedor-results")

let questions = []

const getQuestions = async() => {
    const res = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=22&difficulty=hard&type=multiple"
    )
    questions = res.data.results.map((questionObj) => {
        let answers = [];
        answers = questionObj.incorrect_answers.map((answer)=>{
            return {text: answer, correct: false};
        })
        answers.push({text:questionObj.correct_answer, correct: true})
        const newQuestion = {
            question: questionObj.question,
            answers,
        };
        return newQuestion   
});
};

let currentQuestionIndex = 0;

function setStatusClass(element){
    if(element.dataset.correct){
        element.classList.add("correct");
    }else{
        element.classList.add("wrong");
    }
};

function selectAnswer(){
    Array.from(answerButtonsElement.children).forEach((button)=>{
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
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML="";
    question.answers.forEach((answer)=>{
        const button = document.createElement("button");
        button.innerText = answer.text;
        if(answer.correct === true){
            button.dataset.correct = true;
        }
        button.addEventListener("click",selectAnswer);
        answerButtonElement.append(button);
    });
};

function setNextQuestion(){
    resetState();
    showQuestion(questions[currentQuestionIndex])
}

async function startGame(){
    beginButton.classList.add("hide");
    await getQuestions();
    currentQuestionIndex=0;
    containerQuestions.classList.remove("hide");
    setNextQuestion();
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