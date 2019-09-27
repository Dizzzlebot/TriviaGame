const questions = [
    {
        questions: "Which Greek philospher believed that wisdom comes from accepting there is much we don't know?",
        choices: ["Plato", "Pythagoras", "Socrates", "Aristotle"],
        correctAnswer: "Socrates"
    },

    {
        questions: "Who directed the epic film Clockwork Orange?",
        choices: ["Tarantino", "Kubrick", "King", "Scorsese"],
        correctAnswer: "Kubrick"
    },

    {
        questions: "Who created the hit TV-show Simpsons?",
        choices: ["Giligan", "Groening", "Simon", "Chase"],
        correctAnswer: "Groening"
    },

    {

        questions: "In what country is the city of Petra found?",
        choices: ["Syria", "China", "Jordan", "Egypt"],
        correctAnswer: "Jordan"
    },

    {
        questions: "Which classical genius composed The Nutcracker op. 71, TH 14/Act 2-No 12e Divertissement ?",
        choices: ["Bach", "Mozart", "Tchaikovsky", "Wagner"],
        correctAnswer: "Tchaikovsky"
    }
]


//initial values
let counter = 30;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;

function nextQuestion() {

    const isQuestionOver = (questions.length - 1) === currentQuestion;
    if (isQuestionOver) {
        console.log('Game is over!!');
    } else {

        currentQuestion++;
        loadQuestion();
    }

}

function timeUp() {
    clearInterval();

    lost++;
    nextQuestion();
}
// start a 30 second timer
function countDown() {
    counter--;

    $('#time').html('Timer: ' + counter);

    if (counter === 0) {
        timeUp();
    }
}


//Display questions and answers on the browser

function loadQuestion() {
    counter = 30;
    timer = setInterval(countDown, 1000);

    const questions = questions[currentQuestion].questions; //
    const choices = questions[currentQuestion].choices; //

    $("#time").html('Timer:' + counter);
    $("#game").html(
        <h4>${questions}</h4>
        ${ "loadChoices"(choices) }
    );
}

function loadChoices(choices) {
    let result = '';

    for (let i = 0; i < choices.length; i++) {
        result += '<p class="choices" data-answer="${choices[i]}">${choices[i]}</p>'
    }

    return result;
}

// Either pick right answer or move on to next question

$(document).on('click', '.choice', function () {
    const selectedAnswer = $(this).attr('data-answer');
    const correctAnswer = questions[currentQuestion].correctAnswer;
    
    if (correctAnswer === selectedAnswer) {
        score++;
        console.log('Wins!!')
    } else {
        lost++;
        console.log('lost!!')
    }
    
    console.log('Yippie!!', selectedAnswer);
});;


