
const Counter = document.querySelector(".count");
const resetButton = document.querySelector(".reset");
const buttons = document.querySelectorAll(".btn");
let count = localStorage.getItem("count")
  ? parseInt(localStorage.getItem("count"))
  : 0;
  Counter.textContent = count;

function incrementCount() {
  count++;
  Counter.textContent = count;
   localStorage.setItem("count", count);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    incrementCount();
    
  });
});

resetButton.addEventListener("click", () => {
  count = 0;
  Counter.textContent = count;
   localStorage.setItem("count", count);
});
