const Alphabet = "AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpQqRrSsŚśTtUuVvWwXxYyZzŹźŻż".split("");

// Execute button - counts the text content and displays it in a table
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

    let isSpace = true;
    let isWord = false;
    let isSentence = true;
    let isNewLine = true;
    const endPunctuationMarks = [".", "!", "?"];
    for (let i = 0; i < inputTextarea.length; i++) {
      const char = inputTextarea[i];
      // Add a point if there is WORD (e.g. hello)
      if (isWord && (isSpace || isNewLine)) {
        console.log("SŁOWO");
        wordCounterResults["Words"]++;
        isWord = false;
        isSpace = false;
      } // Add a point if there is NEW LINE (e.g. \n, enter)
      else if (isNewLine) {
        if (char === "\n") continue;
        else {
          wordCounterResults["Paragraphs"]++;
          isNewLine = false;
        }
      } // Add a point if there is correct SENTENCE (e.g. Hello world!)
      if (isSentence) {
        console.log("ZDANIE");
        const nextChar = inputTextarea[i + 1];
        if (nextChar === undefined || nextChar === " " || nextChar === "\n") continue;
        if (
          i === 0 ||
          ((char === " " || char === "\n") &&
            ((Alphabet.includes(nextChar) && nextChar === nextChar.toUpperCase()) ||
              nextChar.match(/[0-9]/)))
        ) {
          console.log("JEST");
          wordCounterResults["Sentences"]++;
        }
        isSentence = false;
      }

      // Add a point to ALL CHARS
      wordCounterResults["All chars"]++;

      // Add a point if char is LETTER of the Polish alphabet (AaĄąBbCcĆć...)
      if (Alphabet.includes(char)) {
        console.log("LITERA:", char);
        wordCounterResults["Letters"]++;
        isWord = true;
      } // Add a point if char is NUMBER (123...)
      else if (char.match(/[0-9]/)) {
        console.log("CYFRA:", char);
        wordCounterResults["Numbers"]++;
        isWord = true;
      } // Add a point if char is SPACE ( )
      else if (char === " ") {
        console.log("SPACJA:", char);
        wordCounterResults["Spaces"]++;
        isSpace = true;
      } // Reduce a point of ALL CHARS if char is NEW LINE (\n, enter)
      else if (char === "\n") {
        console.log("NEW LINE:", char);
        wordCounterResults["All chars"]--;
        isNewLine = true;
      } // Add a point if char is END PUNCTUATION MARK (.!?)
      else if (endPunctuationMarks.includes(char)) {
        console.log("INTERPUNKCJA:", char);
        wordCounterResults["Special chars"]++;
        isWord = true;
        isSentence = true;
      } // Add a point if char is SPECIAL CHARACTER (!@#$%^&...)
      else {
        console.log("SPECJALNY", char);
        wordCounterResults["Special chars"]++;
        isWord = true;
      }
    }

    // Add the results to the table
    const tableOfValues = document.getElementsByClassName("word-counter-results");
    for (let i = 0; i < tableOfValues.length; i++) {
      const result = Object.values(wordCounterResults)[i];
      const tableCellValue = tableOfValues[i];
      console.log(result);
      tableCellValue.innerText = result;
    }

    // Show the table of results
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
