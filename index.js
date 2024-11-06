function generateResult(event) {
  event.preventDefault();

  new Typewriter("#result", {
    strings: "The result will be here",
    autoStart: true,
    cursor: null,
    delay: 30,
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateResult);
