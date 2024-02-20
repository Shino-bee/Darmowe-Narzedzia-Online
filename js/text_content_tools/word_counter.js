const Alphabet = "AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpQqRrSsŚśTtUuVvWwXxYyZzŹźŻż".split("");
const tableOfResults = document.getElementById("program-table");

// Execute button - counts the text content and displays it in a table
const programFormBtnExecute = document.getElementsByClassName("program-form-btn-calculate")[0];
programFormBtnExecute.addEventListener("click", () => {
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

    let isSpace = false;
    let isWord = false;
    let isEndPunctuation = false;
    let isNewLine = false;
    const endPunctuationMarks = [".", "!", "?"];
    for (let i = 0; i < inputTextarea.length; i++) {
      const char = inputTextarea[i];

      if (isWord && (isSpace || isNewLine || i === inputTextarea.length - 1)) {
        console.log("SŁOWO", char === "\n");
        if (char !== " " && char !== "\n") {
          wordCounterResults["Words"]++;
          isWord = false;
          isSpace = false;
        } else console.log("space");
      }

      if (isNewLine || i === inputTextarea.length - 1) {
        wordCounterResults["Paragraphs"]++;
        isNewLine = false;
      }

      // --------------------------------------------

      // Add a point if there is WORD (e.g. hello)
      // if (isWord && (isSpace || isNewLine)) {
      //   console.log("SŁOWO");
      //   wordCounterResults["Words"]++;
      //   isWord = false;
      //   isSpace = false;

      // if (i === inputTextarea.length - 1) {
      //   console.log("KONIEC");
      //   wordCounterResults["Sentences"]++;
      // }
      // }

      // Add a point if there is NEW LINE (e.g. \n, enter)
      // if (isNewLine) {
      //   console.log("NEW LINE:", char);
      //   if (char === "\n") continue;
      //   else {
      //     wordCounterResults["Paragraphs"]++;
      //     isNewLine = false;
      //   }
      // }

      // Add a point if there is correct SENTENCE (e.g. Hello world!)
      // if (isEndPunctuation) {
      //   console.log("ZDANIE");

      //   const nextChar = inputTextarea[i + 1];
      //   console.log(nextChar);
      //   // Add a point to SENTENCE at start or end
      //   if (i === 0 || nextChar === undefined) {
      //     wordCounterResults["Sentences"]++;
      //     isEndPunctuation = false;
      //     continue;
      //   }

      //   if (char === " " || char === "\n") {
      //     if (
      //       (Alphabet.includes(nextChar) && nextChar === nextChar.toUpperCase()) ||
      //       nextChar.match(/[0-9]/)
      //     ) {
      //       console.log("+ ZDANIE +");
      //       wordCounterResults["Sentences"]++;
      //       isEndPunctuation = false;
      //     }
      //   }
      // }

      // -------------------------------------------------

      // Add a point to ALL CHARS
      wordCounterResults["All chars"]++;
      // Add a point if char is LETTER of the Polish alphabet (AaĄąBbCcĆć...)
      if (Alphabet.includes(char)) {
        // console.log("LITERA:", char);
        wordCounterResults["Letters"]++;
        isWord = true;
      } // Add a point if char is NUMBER (123...)
      else if (char.match(/[0-9]/)) {
        // console.log("CYFRA:", char);
        wordCounterResults["Numbers"]++;
        isWord = true;
      } // Add a point if char is SPACE ( )
      else if (char === " ") {
        // console.log("SPACJA:", char);
        wordCounterResults["Spaces"]++;
        isSpace = true;
      } // Reduce a point of ALL CHARS if char is NEW LINE (\n, enter)
      else if (char === "\n") {
        // console.log("NEW LINE:", char);
        wordCounterResults["All chars"]--;
        isNewLine = true;
      } // Add a point if char is END PUNCTUATION MARK (.!?)
      else if (endPunctuationMarks.includes(char)) {
        console.log("INTERPUNKCJA:", char);
        wordCounterResults["Special chars"]++;
        // isWord = true;
        isEndPunctuation = true;
      } // Add a point if char is SPECIAL CHARACTER (!@#$%^&...)
      else {
        // console.log("SPECJALNY", char);
        wordCounterResults["Special chars"]++;
        // isWord = true;
      }
    }

    // Add the results to the table
    const tableOfValues = document.getElementsByClassName("word-counter-results");
    for (let i = 0; i < tableOfValues.length; i++) {
      const result = Object.values(wordCounterResults)[i];
      const tableCellValue = tableOfValues[i];
      tableCellValue.innerText = result;
    }
  }
});

// Reset button - hide the table, reset label and sets default values
const programFormBtnClean = document.getElementsByClassName("program-form-btn-reset")[0];
programFormBtnClean.addEventListener("click", () => {
  const tableOfValues = document.getElementsByClassName("word-counter-results");
  for (let i = 0; i < tableOfValues.length; i++) tableOfValues[i].innerText = "0";
});
