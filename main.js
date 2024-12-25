function calculate(operation) {
    const num1 = parseInt(document.getElementById("form1").value);
    const num2 = parseInt(document.getElementById("form2").value);
    const resultElement = document.getElementById("result");
  
    let result;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = "Invalid operation";
    }
  
    resultElement.textContent = result; // Лучше использовать textContent вместо innerHTML для безопасности и производительности
  }
  
  function addition() {
    calculate('+');
  }
  
  function subtraction() {
    calculate('-');
  }
  
  function multiplication() {
    calculate('*');
  }
  
  function division() {
    calculate('/');
  }  