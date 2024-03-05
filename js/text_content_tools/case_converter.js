const Alphabet = "AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpQqRrSsŚśTtUuVvWwXxYyZzŹźŻż".split("");
const spaceChars = [" ", "\n", "\r"];
const endPunctuationChars = [".", "!", "?"];

// Execute button - changes the text and displays it
const programFormBtnExecute = document.getElementsByClassName("program-form-btn-calculate")[0];
programFormBtnExecute.addEventListener("click", (event) => {
  event.preventDefault();
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
        if (endPunctuationChars.includes(char)) {
          itIsDot = true;
          changedText += char;
        } else {
          if (itIsDot && Alphabet.includes(char)) {
            itIsDot = false;
            changedText += char.toUpperCase();
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
      let itIsSpaceOrDot = true;
      for (let i = 0; i < inputTextarea.length; i++) {
        const char = inputTextarea[i];
        if (spaceChars.includes(char) || endPunctuationChars.includes(char)) {
          itIsSpaceOrDot = true;
          changedText += char;
        } else {
          if (itIsSpaceOrDot && !spaceChars.includes(char)) {
            itIsSpaceOrDot = false;
            changedText += char.toUpperCase();
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
        if (!Alphabet.includes(char)) {
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
  // Display changed text in the output textarea
  const outputTextarea = document.getElementById("output-textarea");
  outputTextarea.value = changedText;
  outputTextarea.style.height = outputTextarea.scrollHeight + 2 + "px";
});

// Clear button - removes text and set default height of input and output textareas
const programFormBtnClean = document.getElementsByClassName("program-form-btn-reset")[0];
programFormBtnClean.addEventListener("click", () => {
  const inputTextarea = document.getElementById("input-textarea");
  const outputTextarea = document.getElementById("output-textarea");
  inputTextarea.style.height = "auto";
  outputTextarea.style.height = "auto";
  outputTextarea.value = "";
});
