// Execute button - changes the text and displays it
const programFormBtnExecute = document.getElementsByClassName("program-form-btn-calculate")[0];
programFormBtnExecute.addEventListener("click", (event) => {
  event.preventDefault();
  const inputRot13 = document.getElementById("input-rot13").value;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let changedText = "";
  for (let i = 0; i < inputRot13.length; i++) {
    const char = inputRot13[i];
    if (char === "\n") {
      changedText += char;
      continue;
    }
    if (alphabet.includes(char.toLowerCase())) {
      let index = alphabet.indexOf(char.toLowerCase()) + 13;
      if (index >= 26) {
        index -= 26;
      }
      if (char === char.toUpperCase()) {
        changedText += alphabet[index].toUpperCase();
      } else {
        changedText += alphabet[index];
      }
    } else {
      changedText += char;
    }
  }
  const outputRot13 = document.getElementById("output-rot13");
  outputRot13.value = changedText;
  outputRot13.style.height = outputRot13.scrollHeight + 2 + "px";
});

// Clear button - removes text and set default height of input and output textareas
const programFormBtnClean = document.getElementsByClassName("program-form-btn-reset")[0];
programFormBtnClean.addEventListener("click", () => {
  const inputRot13 = document.getElementById("input-rot13");
  const outputRot13 = document.getElementById("output-rot13");
  inputRot13.style.height = "auto";
  inputRot13.value = "";
  outputRot13.style.height = "auto";
  outputRot13.value = "";
});
