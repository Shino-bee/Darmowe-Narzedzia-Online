const Alphabet = "AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpQqRrSsŚśTtUuVvWwXxYyZzŹźŻż".split("");
const tableOfResults = document.getElementById("program-table");

// Execute button - counts the text content and displays results it in a table
const programFormBtnExecute = document.getElementsByClassName("program-form-btn-calculate")[0];
programFormBtnExecute.addEventListener("click", (event) => {
  event.preventDefault();
  const programFormValidity = document.getElementsByClassName("program-form")[0].checkValidity();
  if (programFormValidity === true) {
    const inputTextarea = document.getElementById("input-textarea").value;
    const wordCounterResults = {
      "All chars": 0,
      Letters: 0,
      Numbers: 0,
      Spaces: 0,
      "Special chars": 0,
      Words: 0,
      Sentences: 0,
      Paragraphs: 0,
    };

    // Calculate and add the results to the wordCounterResults
    wordCounterResults["Letters"] = inputTextarea.replace(/[^a-zA-ZąĄćĆęĘłŁóÓśŚźŹżŻ]/g, "").length;
    wordCounterResults["Numbers"] = inputTextarea.replace(/\D+/g, "").length;
    wordCounterResults["Special chars"] = inputTextarea.replace(
      /[a-zA-Z0-9ąĄćĆęĘłŁóÓśŚźŹżŻ\s]/g,
      ""
    ).length;
    wordCounterResults["Spaces"] = inputTextarea.split(" ").length - 1;
    wordCounterResults["All chars"] =
      wordCounterResults["Letters"] +
      wordCounterResults["Numbers"] +
      wordCounterResults["Special chars"] +
      wordCounterResults["Spaces"];
    wordCounterResults["Words"] = inputTextarea
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    wordCounterResults["Sentences"] = inputTextarea
      .split(/[.!?]/)
      .filter((sentence) => sentence.length > 0).length;
    wordCounterResults["Paragraphs"] = inputTextarea
      .split(/\n{1,}/)
      .filter((paragraph) => paragraph.trim().length > 0).length;

    // Add the results to the table
    const tableOfValues = document.getElementsByClassName("word-counter-results");
    for (let i = 0; i < tableOfValues.length; i++) {
      const result = Object.values(wordCounterResults)[i];
      const tableCellValue = tableOfValues[i];
      tableCellValue.innerText = result;
    }
  }
});

// Reset button - sets default values and default height of input textarea
const programFormBtnClean = document.getElementsByClassName("program-form-btn-reset")[0];
programFormBtnClean.addEventListener("click", () => {
  const tableOfValues = document.getElementsByClassName("word-counter-results");
  for (let i = 0; i < tableOfValues.length; i++) tableOfValues[i].innerText = "0";
  const inputTextarea = document.getElementById("input-textarea");
  inputTextarea.style.height = "auto";
});
