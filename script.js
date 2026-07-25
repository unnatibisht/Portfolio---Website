/* ==========================================================================
   DYNAMIC TYPEWRITER ANIMATION ENGINE
   ========================================================================== */
const titles = [
  "Data Scientist",
  "Data Analyst",
  "Data Scientist & Data Analyst"
];

let titleIndex = 0;
let characterIndex = 0;
let isDeletingMode = false;
const targetElement = document.getElementById("dynamic-text");

function runTypewriter() {
  if (!targetElement) return;

  const currentString = titles[titleIndex];
  
  if (isDeletingMode) {
    targetElement.textContent = currentString.substring(0, characterIndex - 1);
    characterIndex--;
  } else {
    targetElement.textContent = currentString.substring(0, characterIndex + 1);
    characterIndex++;
  }

  let typingSpeed = isDeletingMode ? 40 : 80;

  if (!isDeletingMode && characterIndex === currentString.length) {
    if (titleIndex === titles.length - 1) {
      typingSpeed = 6000; 
      isDeletingMode = true;
    } else {
      typingSpeed = 2000; 
      isDeletingMode = true;
    }
  } else if (isDeletingMode && characterIndex === 0) {
    isDeletingMode = false;
    titleIndex = (titleIndex + 1) % titles.length;
    typingSpeed = 400; 
  }

  setTimeout(runTypewriter, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  runTypewriter();
});