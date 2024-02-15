// Execute button - changes the text and displays it
const programFormBtnExecute = document.getElementsByClassName("program-form-btn-calculate")[0];
programFormBtnExecute.addEventListener("click", () => {
  const radioBtns = document.querySelectorAll('input[name="caseFormat"]');
  let radioBtnChecked = "";
  // Check which radio option is selected
  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      radioBtnChecked = radioBtns[i].value;
      break;
    }
  }
  const inputTextarea = document.getElementById("input-textarea").value;
  let changedText = "";
  // Changes and displays the text depending on the selected radio option
  switch (radioBtnChecked) {
    case "sentence case":
      let itIsDot = true;
      for (let i = 0; i < inputTextarea.length; i++) {
        const char = inputTextarea[i];
        if (char === "." || char === "?" || char === "!") {
          itIsDot = true;
          changedText += char;
        } else {
          if (itIsDot && char !== " " && char !== "\n" && char !== "\r") {
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
      let itIsSpace = true;
      for (let i = 0; i < inputTextarea.length; i++) {
        const char = inputTextarea[i];
        if (char === " " || char === "\n" || char === "\r" || char === ".") {
          itIsSpace = true;
          changedText += char;
        } else {
          if (itIsSpace && char !== " " && char !== "\n" && char !== "\r" && char !== ".") {
            changedText += char.toUpperCase();
            itIsSpace = false;
          } else {
            changedText += char.toLowerCase();
          }
        }
      }
      break;

    case "inverse case":
      let upperOrLower = "upper";
      for (let i = 0; i < inputTextarea.length; i++) {
        const char = inputTextarea[i];
        if (!char.match(/^[a-zA-Z]+$/)) {
          changedText += char;
          continue;
        }
        if (upperOrLower === "upper") {
          changedText += char.toUpperCase();
          upperOrLower = "lower";
        } else if (upperOrLower === "lower") {
          changedText += char.toLowerCase();
          upperOrLower = "upper";
        }
      }
      break;
  }
  const outputTextarea = document.getElementById("output-textarea");
  outputTextarea.value = changedText;
  outputTextarea.style.height = outputTextarea.scrollHeight + "px";
});

// Clear button - removes text and set default height of input and output textareas
const programFormBtnClean = document.getElementsByClassName("program-form-btn-reset")[0];
programFormBtnClean.addEventListener("click", () => {
  const inputTextarea = document.getElementById("input-textarea");
  const outputTextarea = document.getElementById("output-textarea");
  inputTextarea.value = "";
  inputTextarea.rows = "12";
  inputTextarea.style.height = "auto";
  outputTextarea.value = "";
  outputTextarea.rows = "8";
  outputTextarea.style.height = "auto";
});
