"use strict";

const adviceIDEl = document.getElementById("advice-id");
const adviceTxtEl = document.getElementById("advice-txt");
const btnDice = document.getElementById("dice-click");

//global variable

const url = `https://api.adviceslip.com/advice`;

//function
const init = () => {
  getRandomAdvice();
};

// async const adviceGenetor=()=>{
//   try{
//    const response=await fetch(url)
//   }catch(err){
//     console.log(err.message)
//   }
// }
async function getRandomAdvice() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    adviceIDEl.innerText = `#${data.slip.id}`;
    adviceTxtEl.innerText = `"${data.slip.advice}"`;
  } catch (err) {
    console.log(err.message);
  }
}

//event listener
btnDice.addEventListener("click", getRandomAdvice);
//init
init();
