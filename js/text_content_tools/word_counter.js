// Calculate button - calculates the results and changes content (text and results) in the table and shows table if is not displayed
const Alphabet = "AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpQqRrSsŚśTtUuVvWwXxYyZzŹźŻż".split("");
const wordCounterBtnCalculate = document.getElementsByClassName("program-form-btn-calculate")[0];
wordCounterBtnCalculate.addEventListener("click", () => {
  console.log("---------------------");
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
    let isNewLine = false;
    for (let i = 0; i < inputTextarea.length; i++) {
      wordCounterResults["All chars"] += 1;
      const char = inputTextarea[i];

      if (Alphabet.includes(char)) {
        // console.log("LITERA:", char);
        wordCounterResults["Letters"]++;
        isNewLine = true;
        continue;
      } else if (char.match(/[0-9]/)) {
        // console.log("CYFRA:", char);
        wordCounterResults["Numbers"]++;
        isNewLine = true;
        continue;
      } else if (char === " ") {
        // console.log("SPACJA", char);
        wordCounterResults["Spaces"]++;
        continue;
      } else if (char === "\n") {
        console.log("NEW LINE", char);
        wordCounterResults["All chars"]--;
        wordCounterResults["Paragraphs"]--;
      } else {
        console.log("SPECJALNY", char);
        wordCounterResults["Special chars"]++;
        isNewLine = true;
      }
    }

    const tableValues = document.getElementsByClassName("word-counter-results");
    // console.log(Object.entries(wordCounterResults)[0][1]);
    for (let i = 0; i < Object.keys(wordCounterResults).length; i++) {
      const element1 = Object.entries(wordCounterResults)[i][0];
      const element2 = Object.entries(wordCounterResults)[i][1];
      console.log(element1);
      console.log(element2);
    }

    const tableOfResults = document.getElementById("program-table");
    if (tableOfResults.style.opacity == 0) {
      tableOfResults.style.transition = "0.8s ease-out";
      tableOfResults.style.marginTop = "15px";
      tableOfResults.style.height = "auto";
      tableOfResults.style.opacity = 1;
    }
  }
});

// Reset button - hide the table, reset label and sets default values
const unitConverterBtnReset = document.getElementsByClassName("program-form-btn-reset")[0];
unitConverterBtnReset.addEventListener("click", () => {
  const tableOfUnits = document.getElementById("program-table");
  tableOfUnits.style.transition = "0s";
  tableOfUnits.style.marginTop = "0px";
  tableOfUnits.style.height = "0";
  tableOfUnits.style.opacity = 0;
});
