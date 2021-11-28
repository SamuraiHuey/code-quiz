var storage = JSON.parse(localStorage.getItem('highscore'))
var scoreDiv = document.getElementById('scores')
var scoreList = document.getElementById('scoreList')
var nullStorage = document.createElement('h1')

if(storage === null) {
    nullStorage.textContent = 'No Scores'
    scoreDiv.append(nullStorage)
} else {
    nullStorage.textContent = ''
    for (var i = 0; i < storage.length; i++) {
        var li = document.createElement('li')
        li.textContent= 'Name: ' + storage[i].name + ' - ' + "Score: " + storage[i].currentScore
        scoreList.append(li)
    }

}