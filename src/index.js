// prompt dialog to get the users choice
const userChoice = (() => prompt("Rock...Paper...Scissors...GO!"))()

// get random computer choice of rock, paper, or scissors based on percentage
const computerChoice = (() => {
  const randomChoice = Math.random()
  if (randomChoice < 0.33333333333333) {
    const computerChoice = "Rock"
    return computerChoice
  } else if (randomChoice > 0.6666666666666666666666666) {
    const computerChoice = "Scissors"
    return computerChoice
  } else {
    const computerChoice = "Paper"
    return computerChoice
  }
})()

// create function to display who is the winner between user prompt choice and random computer choice
const getWinner = (computer, user) => {
  const looser = () => alert("Looser! Try again!")
  const winner = () => alert("Winner! Wanna do it again?")
  if (user === computer) {
    return alert("Tie! Try Again!")
  } else if (user === "Rock") {
    if (computer === "Scissors") {
      return winner()
    } else if (computer === "Paper") {
      return looser()
    }
  } else if (user === "Paper") {
    if (computer === "Rock") {
      return winner()
    } else if (computer === "Scissors") {
      return looser()
    }
  } else if (user === "Scissors") {
    if (computer === "Rock") {
      return looser()
    } else if (computer === "Paper") {
      return winner()
    }
  } else if (user === "Nuke") {
    return winner()
  } else {
    return alert("Invalid Entery...did you make sure to capitalize your choice?")
  }
}
// call the getWinner function and pass in the usrchoice and compchoice as parameters
getWinner(computerChoice, userChoice)
// log the choices to make sure the program is running correctly
console.log("userChoice => " + userChoice)
console.log("computerChoice => " + computerChoice)
