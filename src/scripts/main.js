const section = document.querySelector(".viewport-height");
const image = document.querySelector(".animated-image");
const scratchLogo = document.querySelector(".scratch-logo");
const scratchText = document.querySelector(".scratch-text");

/*
window.addEventListener("scroll", () => {
  const rect = image.getBoundingClientRect();
  if (rect.right >= window.innerWidth - 30) {
      sectionToDisplay.classList.add("highschool-section");
  }
});
*/

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    window.addEventListener("scroll", handleScroll);
  } else {
    window.removeEventListener("scroll", handleScroll);
  }
});

observer.observe(section);
var stopScroll = false;
function handleScroll() {
  if (stopScroll == true) {
    return;
  }
  const scrollPercentage =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const translateX =
    (document.body.clientWidth - image.clientWidth) * scrollPercentage;
  image.style.transform = `translateX(${translateX}px)`;
  const imageRect = image.getBoundingClientRect();
  if (imageRect.right >= window.innerWidth - 30) {
    // add class to trigger fade in effect
    scratchLogo.classList.add("fade-in");
    scratchText.classList.add("fade-in");
    stopScroll = true;
    openSectionTwo();
  }
}

function openSectionTwo() {
  const section2 = document.querySelector(".section-2");
  setTimeout(() => {
    section2.style.display = "block";
  }, "1000");
}

/* Add the following JavaScript to handle the bounce effect */
const sectionContainer = document.querySelector(".section-container");
const containerHeight = sectionContainer.clientHeight;
console.log("Container height:" + containerHeight);
const floatingElements = Array.from(document.querySelectorAll(".floating-element"));
console.log("Found floating elements: ");
console.log(floatingElements);
floatingElements.forEach((element) => {
   let x = Math.random() * (window.innerWidth - 100);
   let y = (Math.random() * 0.5) * (containerHeight - 100);

   //let xSpeed = (Math.random() - 0.5) * 10;
   //let ySpeed = (Math.random() - 0.5) * 10;

  element.style.setProperty("--x", `${x}px`);
  element.style.setProperty("--y", `${y}px`);
  element.xSpeed = 10;
  element.ySpeed = 10;
  element.x = x;
  element.y = y;
})



function move() {
  floatingElements.forEach((element) => {
    let currentX = parseFloat(
      getComputedStyle(element).getPropertyValue("--x")
    );
    let currentY = parseFloat(
      getComputedStyle(element).getPropertyValue("--y")
    );

    if (currentX + element.xSpeed > window.innerWidth - 100 || currentX + element.xSpeed < 0) {
      element.xSpeed = -element.xSpeed;
    }

    if (currentY + element.ySpeed > containerHeight - 200 || currentY + element.ySpeed < 0) {
      element.ySpeed = -element.ySpeed;
    }

    element.x += element.xSpeed;
    element.y += element.ySpeed;

    element.style.setProperty("--x", `${element.x}px`);
    element.style.setProperty("--y", `${element.y}px`);
  });

}
setInterval(move, 50);

var text = "Id like to explain how I developed my programming knowledge in C++ and Java";
text += "\nJava - Using Eclipse IDE to develop GUIs";
text += "\nC++ - Using Visual Studio to program microcontrollers";
const delay = 5; // Milliseconds between each character

function typeEffect() {
  const element = document.querySelector(".typing-text");
  const currentText = element.textContent;
  const nextChar = text[currentText.length];
  if (nextChar) {
    element.textContent = currentText + nextChar;
    setTimeout(typeEffect, delay);
  }
}

typeEffect(); // Start the animation


