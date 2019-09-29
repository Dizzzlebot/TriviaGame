$(document).ready(function () {



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

        clearInterval(timer);
        const isQuestionOver = (questions.length - 1) === currentQuestion;
        $(".choices").empty();
        if (isQuestionOver) {
            alert('Game is over!!');
        } else {

            currentQuestion++;
            loadQuestion();
            clearInterval("timer");
        }


    }

    function timeUp() {
        clearInterval("timer");

        lost++;
        $(".choices").empty();
        nextQuestion();
    }
    // start a 30 second timer
    function countDown() {

        counter--;

        $('#time').html('Timer: ' + counter);

        if (counter === 0) {
            timeUp();
            clearInterval("timer");
        }
    }


    //Display questions and answers on the browser
    // $()
    //$("h4")


    function loadQuestion() {
        counter = 30;
        timer = setInterval(countDown, 1000);

        const question = questions[currentQuestion].questions; //

        $("#time").html('Timer:' + counter);
        $("#quest").html(question);
        loadChoices();
        clearInterval("timer");
    }

    function loadChoices() {
        const choices = questions[currentQuestion].choices; //

        for (let i = 0; i < choices.length; i++) {
            var choiceButton = $("<button class='btn btn-primary choice' data-answer='" + choices[i] + "'>" + choices[i] + "</button>")
            $(".choices").append(choiceButton)
        }

    }

    // Either pick right answer or move on to next question

    $(document).on('click', '.choice', function () {
        const selectedAnswer = $(this).attr('data-answer');
        const correctAnswer = questions[currentQuestion].correctAnswer;

        if (correctAnswer === selectedAnswer) {
            score++;
            alert("You win! " + selectedAnswer + " was the correct answer.")
        } else {
            lost++;
            alert("You lose! You chose " + selectedAnswer + " but the correct answer was " + correctAnswer)
        }

        console.log('Yippie!!', selectedAnswer);
        nextQuestion()
    });

    $(".choices").empty();
    loadQuestion();

});