const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("clear")) {
      expression = "";
      display.value = "";
    } 
    else if (btn.classList.contains("del")) {
      expression = expression.slice(0, -1);
      display.value = expression;
    } 
    else if (btn.classList.contains("equal")) {
      try {
        expression = eval(expression.replace("%", "/100"));
        display.value = expression;
      } catch {
        display.value = "Error";
        expression = "";
      }
    } 
    else {
      expression += btn.textContent;
      display.value = expression;
    }
  });
});
