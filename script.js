var questions = [
    {
        question: 'Which language is used to dictate how a website looks?',
        options: ['JavaScript', 'Python', 'CSS', 'HTML'],
        correct: 'CSS'
    },
    {
        question: 'What does an <href> tag do in HTML?',
        options: ['Gives the HTML component a size value',
         'Links to a specified URL',
          'Imports an image',
           'Downloads a specific file to your local machine'],
        correct: 'Links to a specified URL'
    },
    {
        question: 'Which semantic tag should you use for the title of your webpage',
        options: ['h1', 'h2', 'h3', 'h4'],
        correct: 'h1'
    },
    {
        question: 'What is the first command you should enter into the command line to push a Repo to GitHub',
        options: ['git ready all', 'git this going', 'git add .', 'git ready +'],
        correct: 'git add .'
    },
    {
        question: 'Which tag dictates how Chrome represents your site on the Tab',
        options: ['tab', 'header', 'title', 'top'],
        correct: 'title'
    }
]

var startBtn = document.getElementById('start-button')
var questionDiv = document.getElementById('question')
var optionsContainer = document.getElementById('options')
var timeContainer = document.getElementById('timer')
var form = document.getElementById('userForm')

var questionIndex = 0
var score = 0
var timer = 60

startBtn.addEventListener('click', function() {
    startBtn.setAttribute('class', 'hidden')
    timerCountdown()
    renderQuestion()
})

// function to set a time interval for timer


function timerCountdown() {
    var startTimer = setInterval(function() {
        timeContainer.textContent = timer
        timer--
        if (timer < 0 || questionIndex > questions.length - 1) {
            clearInterval(startTimer)
            endQuiz()
            return
        }
    },1000)
}

// function for local storage to save a username and the score that they got
// check if the key exsists if it doesnt then you want to set it as an empty array.

function renderQuestion() {

    // if statement to check it questions index is greater than the questions.length -1
    if (questionIndex > questions.length - 1) {
        return
    }

    questionDiv.textContent = ''
    optionsContainer.textContent = ''

    questionDiv.textContent = questions[questionIndex].question

    for(var i = 0; i < questions[questionIndex].options.length; i++) {
        var option = document.createElement('li')
        option.setAttribute('id', questions[questionIndex].options[i])
        option.textContent = questions[questionIndex].options[i]
        optionsContainer.append(option)

        option.addEventListener('click', function(event) {
            if (event.target.id === questions[questionIndex].correct) {
                console.log('correct')
                score += 20
            } else {
                console.log('incorrect')
                timer -= 10
            }
            questionIndex++
            renderQuestion()
        })
    }

}

function endQuiz() {
    questionDiv.textContent = ''
    optionsContainer.textContent = ''
    timeContainer.textContent = ''

    var userInput = document.createElement('input')
    userInput.setAttribute('placerholder', 'Please enter your name')
    form.prepend(userInput)
    
    var submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'
    form.append(submitBtn)

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault()
        var storage = JSON.parse(localStorage.getItem('highscore'))
        if (storage === null) {
            storage = []
        }
    
        var currentUser = {
            name: userInput.value,
            currentScore: score
        }
    
        storage.push(currentUser)
        localStorage.setItem('highscore', JSON.stringify(storage))
        window.location.href = 'high-score.html'
    })

}