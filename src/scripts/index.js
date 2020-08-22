// strings to be dispalyed when win/loose/error
const looserString = "Looser! Try again!"
const winnerString = "Winner! Wanna do it again?"
const choicesArray = ["Rock", "Paper", "Scissors"]
const choicesContainer = document.querySelector(".playButtonsContainer")
const startButton = document.getElementById("startButton")

/*
 * function to create button based on choice given with a class and id
 */
const createChoiceButton = choice => {
  let newButton = document.createElement('button')

  newButton.textContent = `${choice}`
  newButton.setAttribute("class", "choiceButton")
  newButton.setAttribute("id", `${choice}Button`)

  return newButton
}

// get random computer choice of rock, paper, or scissors based on percentage
const computerPick = (() => {
  const randomChoice = Math.random()
  if (randomChoice < (1/3)) {
    return "Rock"
  } else if (randomChoice > (2/3)) {
    return "Scissors"
  } else {
    return "Paper"
  }
})()

/*
* function that performs the rock paper scissors based on random computer choice
*/
const rockPaperScissors = ((computerEntry, userEntry) => {
  // create function to display who is the winner between user prompt choice and random computer choice
  if (userEntry === computerEntry) {
    return alert("Tie! Try Again!")
  } 
  if (userEntry === "Rock" && computerEntry === "Scissors") {
    return alert(winnerString)
  }
  if (userEntry === "Rock" && computerEntry === "Paper") {
    return alert(looserString)
  }
  if (userEntry === "Paper" && computerEntry === "Rock") {
    return alert(winnerString)
  }
  if (userEntry === "Paper" && computerEntry === "scissors") {
    return alert(looserString)
  }
  if (userEntry === "scissors" && computerEntry === "Paper") {
    return alert(winnerString)
  }
  if (userEntry === "scissors" && computerEntry === "Rock") {
    return alert(looserString)
  }if (userEntry === "Nuke") { // always win ;)
    return alert(winnerString)
  } else { // error handling
    return alert("Invalid Entery. Please choose Rock, Paper, or Scissors.")
  }
})

/*
 * use the createChoiceButton function to create a button for each choice 
 */
choicesArray.forEach((i) => {
  choicesContainer.appendChild(createChoiceButton(i))
})
let choiceButtonArray = Array.from(document.getElementsByClassName("choiceButton"))

// for each choice button add a click event listener
// when button is pressed perform the rockPaperScissors function
// with the computerChoice as ranodm choice
// and userChoice as the button clicked
choiceButtonArray.forEach(e => {
  e.addEventListener(('click'), (e => {
    let userPick = e.target.textContent
    console.log(userPick, computerPick)
    rockPaperScissors(userPick, computerPick)
  }))
})
