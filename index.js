let arg1 = 0;
let arg2 = 0;
let buffer = true;
let operator = "";
let screen = document.querySelector('.screen');
let rowElement = document.querySelectorAll('.calc-button');

const calculator = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "÷":
      if (num2 === 0) {
        throw "Division by zero is undefined";
      }
      return num1 / num2;
  }
};

const clean = () => {
  arg1 = 0;
  arg2 = 0;
  operator = ""
};

rowElement.forEach(function (element) {
  element.addEventListener('click', _ => {
    let number = parseInt(element.textContent);
    if (isNaN(number)) {
      const symbol = element.textContent;
      const text = screen.textContent;
      switch (symbol) {
        case "C":
          screen.textContent = "0";
          buffer = true;
          clean();
          return;
        case "←":
          screen.textContent = text.substring(0, text.length - 1);
          return;
        case "+":
        case "-":
        case "x":
        case "÷":
          buffer = true;

          let num = parseInt(text)
          if (arg1 === 0) {
            arg1 = num;
            console.log('new', arg1)
          } else {
            arg1 = calculator(operator, arg1, num);
            console.log('in memory', arg2)
          }
          operator = symbol; 
          return;
        case "=":
          arg2 = parseInt(text);
          try {
            screen.textContent = calculator(operator, arg1, arg2);
          } catch (e) {
            screen.textContent = "error";
          }
          clean();
          buffer = true;
          return;
      }
      screen.textContent = "";
      return;
    }

    if (buffer) {
      screen.textContent = "";
      buffer = false;
    }
    screen.textContent += number;
  });
});



