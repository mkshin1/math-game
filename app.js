const inputEl = document.querySelector("#input-el");
const checkBtn = document.querySelector("#check-btn");
console.log(inputEl);
console.log(checkBtn);

checkBtn.addEventListener("click", () => {
  modal.style.display = "block";
  let userInput = parseInt(inputEl.value);
  console.log(userInput);

  if (userInput === 2) {
    modal.style.background = "#2ecc71";
    theAnswer.textContent = userInput + " is " + answerOptions[0];
  } else if (userInput < 2 || userInput > 2) {
    modal.style.background = "#e74c3c";
    theAnswer.textContent = userInput + " is " + answerOptions[1];
  } else {
    modal.style.background = "#34495e";
    theAnswer.textContent = "Please type a number";
  }
});

// Show the pop up box
// show the right or wrong answer
// then Close Btn (the X Sign) which will close the parent element

// #1 select modal
const modal = document.querySelector("#myModal");
// #2 select the answer
const theAnswer = document.querySelector(".theAnswer");
// #3 select the s sign (close btn)
const closeBtn = document.querySelector(".close");

// Answers: "Correct, good work", "Incorrect, try again"
let answerOptions = ["Correct", "Incorrect"];

// programmatically give the correct answer
