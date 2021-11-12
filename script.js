var questions = [
    {
        question: 'This is question 1',
        options: ['option 1 of 1', 'option 2 of 1', 'option 3 of 1', 'option 4 of 1'],
        correct: 'option 1 of 1'
    },
    {
        question: 'This is question 2',
        options: ['option 1 of 2', 'option 2 of 2', 'option 3 of 2', 'option 4 of 2'],
        correct: 'option 2 of 2'
    },
    {
        question: 'This is question 3',
        options: ['option 1 of 3', 'option 2 of 3', 'option 3 of 3', 'option 4 of 3'],
        correct: 'option 3 of 3'
    },
    {
        question: 'This is question 4',
        options: ['option 1 of 4', 'option 2 of 4', 'option 3 of 4', 'option 4 of 4'],
        correct: 'option 4 of 4'
    },
    {
        question: 'This is question 5',
        options: ['option 1 of 5', 'option 2 of 5', 'option 3 of 5', 'option 4 of 5'],
        correct: 'option 5 of 5'
    }
]

var startBtn = document.getElementById('start-button')
var questionDiv = document.getElementById('question')
var optionsContainer = document.getElementById('options')

var questionIndex = 0
var score = 0
var timer = 60

startBtn.addEventListener('click', function() {
    startBtn.setAttribute('class', 'hidden')
    renderQuestion()
})

// function to set a time interval for timer

// function for local storage to save a username and the score that they got
// check if the key exsists if it doesnt then you want to set it as an empty array.

function renderQuestion() {

    // if statement to check it questions index is greater than the questions.length -1

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