console.log('Wakey Wakey eggs and Bakey')

var slot = ['oneAnd', 'twoAnd', 'threeAnd', 'fourAnd', 'fiveAnd', 'sixAnd', 'sevenAnd', 'eightAnd', 'nineAnd']
var timeSlot = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var currentTime = moment().format('HH')
console.log(currentTime)
var localList = []
var schedule

// Changes timeblock colours depending on current hour
function colorBlock() {
    for (i = 0; i < 9; i++) {
        if (currentTime < timeSlot[i]) {
            document.querySelector(`#${slot[i]}`).classList.add('future')
            document.querySelector(`#${slot[i]}`).classList.remove('present')
            document.querySelector(`#${slot[i]}`).classList.remove('past')
        }
        else if (currentTime > timeSlot[i]) {
            document.querySelector(`#${slot[i]}`).classList.remove('future')
            document.querySelector(`#${slot[i]}`).classList.remove('present')
            document.querySelector(`#${slot[i]}`).classList.add('past')
        }
        else {
            document.querySelector(`#${slot[i]}`).classList.remove('future')
            document.querySelector(`#${slot[i]}`).classList.add('present')
            document.querySelector(`#${slot[i]}`).classList.remove('past')
        }
    }
}

function loadToday() {
    document.querySelector('#currentDay').innerHTML = moment().format('dddd, MMMM Do YYYY')
}
// Saves text in variable when button is clicked
function saveText(event, section) {
    event.preventDefault()
    var value = document.querySelector(`#${section}`).value
    console.log(value)
    logText(section, value)
}
// Saves text in localStorage when button is clicked
function logText(section, value) {
    section = { section, value }
    localList.push(section)
    localStorage.localList = JSON.stringify(localList)

}
// Iterates through array to list saved events
function displayEvents() {
    schedule = JSON.parse(localStorage.localList || '[]')
    localList = schedule
    console.log(schedule)

    for (i = 0; i < schedule.length; i++) {
        schedule[i].section
        document.querySelector(`#${schedule[i].section}`).value = schedule[i].value
    }
}


// Displays whatever user previously saved in Planner
displayEvents()
// Displays todays date
loadToday()
// Changes timeblock colours depending on current hour
colorBlock()

