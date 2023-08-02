import dogs from "./data.js";
import Dog from "./Dog.js";

let dog = new Dog(dogs.shift());

document
  .querySelector(".slider-btns")
  .addEventListener("click", (e) => handleSliderBtnsClick(e.target));

const handleSliderBtnsClick = (btn) => {
  if (btn.dataset.state === "reject") {
    dog.rejectDogProfile();
    document.body.classList.add("bg-gradient-red");
  } else if (btn.dataset.state === "accept") {
    dog.likeDogProfile();
    document.body.classList.add("bg-gradient-green");
  }

  toggleSliderBtnsState();

  render();

  setTimeout(() => {
    if (dogs.length > 0) {
      removeBodyBackground();
      dog = new Dog(dogs.shift());
      render();
      toggleSliderBtnsState();
    }
  }, 1000);
};

const removeBodyBackground = () => {
  document.body.classList.remove("bg-gradient-red");
  document.body.classList.remove("bg-gradient-green");
};

const toggleSliderBtnsState = () => {
  document.querySelector(".slider-btns").classList.toggle("disabled");
};

const render = () => {
  document.querySelector(".profile").innerHTML = dog.getDogHtml();
};

render();
