// Packages Name Writting Effect
const typingEffect = document.getElementById('typing-effect');
const text = typingEffect.textContent;
const textArray = text.split('');
let index = 0;

typingEffect.textContent = '';

let intervalId = setInterval(() => {
  if (index < textArray.length) {
    typingEffect.textContent += textArray[index];
    index++;
  } else {
    clearInterval(intervalId);
  }
}, 100); 



// Counter Fucntion for increasing packages 
document.addEventListener("DOMContentLoaded", function() {
    const packageName = getPackageName(); // Get the package name from the HTML
    const counterKey = `counter_${packageName}`;
    let counter = localStorage.getItem(counterKey) || 0;
    
    const bookNowBtn = document.querySelector("#close-dialog");
    const counterElement = document.querySelector("#counter");
    
    counterElement.textContent = counter;
    
    bookNowBtn.addEventListener("click", function() {
      counter++;
      counterElement.textContent = counter;
      localStorage.setItem(counterKey, counter);
      animateCounter(counterElement);
    });
  });
    
  function getPackageName() {
    const packageName = document.querySelector(".booknow h2").textContent.replace("Book Your ", "").replace(" Package Today!", "");
    return packageName;
  }
    
  function animateCounter(element) {
    element.style.transform = "scale(1.2)";
    element.style.transition = "transform 0.5s ease-in-out";
    setTimeout(function() {
      element.style.transform = "scale(1)";
    }, 500); // length 
  }