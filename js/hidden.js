export function initGame() {
  const startBtn = document.querySelector(".section1-btn");
  const section1 = document.querySelector(".section1");
  const section2 = document.querySelector(".section2");
  const easyBtn = document.querySelector(".btn-easy");
  const normalBtn = document.querySelector(".btn-normal");
  const hardBtn = document.querySelector(".btn-hard");
  const easySection = document.querySelector(".easy");
  const normalSection = document.querySelector(".normal");
  const hardSection = document.querySelector(".hard");

  startBtn.addEventListener("click", () => {
    section1.classList.add("hidden");   
    section2.classList.remove("hidden"); 
  });

  easyBtn.addEventListener("click", () => {
    section2.classList.add("hidden");
    easySection.classList.remove("hidden");
  });
  normalBtn.addEventListener("click", () => {
    section2.classList.add("hidden");
    normalSection.classList.remove("hidden");
  });
  hardBtn.addEventListener("click", () => {
    section2.classList.add("hidden");
    hardSection.classList.remove("hidden");
  });
}

