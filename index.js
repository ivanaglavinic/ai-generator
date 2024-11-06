function displayResult(response) {
  console.log("Result generated");
  new Typewriter("#result", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 15,
  });
}

function generateResult(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2be12f1a1ef003988503e7odt2f49b94";
  let prompt = `Generate only one short and structured quick meal recipe about ${instructionsInput.value}`;
  let context =
    "You are an expert in quick meal recipes, you love cooking food from cultures all over the world. Your mission is to write short recipes based on ingredients from user instructions. Write recipe in basic HTML without word html being displayed and make sure that each step is documented in new text line with <br/>. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating result");

  axios.get(apiUrl).then(displayResult);
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateResult);
