"strict mode";

//input value is true
let input = document.querySelectorAll(".input");
for (let inp of input) {
  inp.addEventListener("blur", function (event) {
    if (event.target.value !== "") {
      event.target.labels[0].classList.add("input--active");
    } else {
      event.target.labels[0].classList.remove("input--active");
    }
  });
}

//scroll on click
document.addEventListener("click", function (event) {
  let anhors = event.target.hash;
  if (anhors != undefined && anhors != "") {
    event.preventDefault();
    document.querySelector(anhors).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

//scroll block
function onEntry(entry) {
  entry.forEach(function (change) {
    if (change.isIntersecting) {
      change.target.classList.add("form--show");
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let section = document.querySelectorAll(".form__block");
for (let elm of section) {
  observer.observe(elm);
}

//form validation
let form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addEror("Ошибка");
});

// let inputText = document.querySelectorAll(".input__text");
// let addEror = () => {
//   for (let i = 0; i < input.length; i++) {
//     if (!input[i].value) {
//       for( let j=0; j<inputText.lengthl;j++){
//         input[i].
//       }
      
//     }
//   }
// };




// input[i].insertAdjacentHTML(
//           "afterend",
//       `<div class="input__text">${message}</div>`

