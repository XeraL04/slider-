const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const lenght = images.length;

// the bottom button =>
for (let i = 0; i < lenght; i++) {
  const div = document.createElement("div");
  div.className = "btn";
  bottom.appendChild(div);
}

const btns = document.querySelectorAll(".btn");

const resetBg = () => {
  btns.forEach((btn) => {
    btn.style.backgroundColor = "transparent";
  });
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 600}px)`;
    slideNumber = i + 1;
    btn.style.backgroundColor = "white";
  });
});

const changeColor = () => {
  resetBg();
  btns[slideNumber - 1].style.backgroundColor = "white";
};

// right side slide logic =>
const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 600}px)`;
  slideNumber++;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

right.addEventListener("click", () => {
  slideNumber < lenght ? nextSlide() : getFirstSlide();
  changeColor();
});

// left side slide =>
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 600}px)`;
  slideNumber--;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(lenght - 1) * 600}px)`;
  slideNumber = lenght;
};

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});
