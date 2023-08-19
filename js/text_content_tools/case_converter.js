// const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// Execute button - changes the text and displays it
const programFormBtnExecute = document.getElementsByClassName("program-form-btn-calculate")[0];
programFormBtnExecute.addEventListener("click", () => {
  const radioBtns = document.querySelectorAll('input[name="caseFormat"]');
  let radioBtnChecked = "";

  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      radioBtnChecked = radioBtns[i].value;
      break;
    }
  }

  const inputTextarea = document.getElementById("input-textarea").value;
  let changedText = "";
  switch (radioBtnChecked) {
    case "sentence case":
      let itIsDot = false;
      let itisFirstChar = true;
      for (let i = 0; i < inputTextarea.length; i++) {
        const char = inputTextarea[i];
        if (itisFirstChar && char != " ") {
          changedText += char.toUpperCase();
          itisFirstChar = false;
          continue;
        }
        if (char === ".") {
          itIsDot = true;
          changedText += char;
        } else {
          if (itIsDot && char != " ") {
            changedText += char.toUpperCase();
            itIsDot = false;
          } else {
            changedText += char.toLowerCase();
          }
        }
      }
      break;
    case "lower case":
      changedText = inputTextarea.toLowerCase();
      break;
    case "upper case":
      changedText = inputTextarea.toUpperCase();
      break;
    case "capitalized case":
      console.log(radioBtnChecked);
      break;
    case "inverse case":
      console.log(radioBtnChecked);
      break;
  }
  console.log("--------");
  console.log(changedText);
});

// Clear button - removes text and set default height of input and output textareas
const programFormBtnClean = document.getElementsByClassName("program-form-btn-reset")[0];

/* // Execute button - changes the text and displays it
const programFormBtnExecute = document.getElementsByClassName("program-form-btn-calculate")[0];
cutprogramFormBtnExee.addEventListener("click", () => {
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
  inputRot13.value = "";
  inputRot13.rows = "12";
  inputRot13.style.height = "auto";
  outputRot13.value = "";
  outputRot13.rows = "8";
  outputRot13.style.height = "auto";
}); */
