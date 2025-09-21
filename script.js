// Greeting Message
window.onload = function() {
  const now = new Date();
  const hour = now.getHours();
  const greetingEl = document.getElementById("greeting");
  let greeting;

  if(hour < 12){
    greeting = "Good Morning! ☀️";
  } else if(hour < 18){
    greeting = "Good Afternoon! 🌤️";
  } else {
    greeting = "Good Evening! 🌙";
  }

  greetingEl.innerText = greeting;
}

// Color-changing Button
const btn = document.getElementById("colorBtn");
btn.addEventListener("click", function() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  btn.style.backgroundColor = randomColor;
  btn.style.color = "#fff";
});

// Calculator Function
const calcButtons = document.querySelectorAll(".calcBtn");
calcButtons.forEach(button => {
  button.addEventListener("click", function() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const resultEl = document.getElementById("result");

    if(isNaN(n1) || isNaN(n2)){
      resultEl.innerText = "Please enter valid numbers!";
      return;
    }

    let result;
    switch(button.dataset.op){
      case "add":
        result = n1 + n2;
        break;
      case "sub":
        result = n1 - n2;
        break;
      case "mul":
        result = n1 * n2;
        break;
      case "div":
        if(n2 === 0){
          resultEl.innerText = "Cannot divide by zero!";
          return;
        }
        result = n1 / n2;
        break;
    }

    resultEl.innerText = `Result: ${result} ✅`;
  });
});

// Clear Button
const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function() {
  document.getElementById("num1").value = '';
  document.getElementById("num2").value = '';
  document.getElementById("result").innerText = '';
});
