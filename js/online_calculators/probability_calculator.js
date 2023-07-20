// Shows the table of results
function showTable(tableToShow) {
  if (tableToShow.style.opacity == 0) {
    tableToShow.style.transition = "0.8s ease-out";
    tableToShow.style.marginTop = "15px";
    tableToShow.style.height = "auto";
    tableToShow.style.opacity = 1;
  }
}

// Hides the table of results
function hideTable(tableToHide) {
  if (tableToHide.style.opacity == 1) {
    tableToHide.style.transition = "0s";
    tableToHide.style.marginTop = "0px";
    tableToHide.style.height = "0";
    tableToHide.style.opacity = 0;
  }
}

// Select probability - display selected option and hide the rest
const selectProb = document.getElementById("select-prob");
selectProb.addEventListener("change", () => {
  const singleProbTable = document.getElementById("single-prob-table");
  const twoEventsProbTable = document.getElementById("two-events-prob-table");
  hideTable(singleProbTable);
  hideTable(twoEventsProbTable);
  const singleProbForm = document.getElementById("single-prob-form");
  const twoEventsProbForm = document.getElementById("two-events-prob-form");
  const multipleEventsProbForm = document.getElementById("multiple-events-prob-form");
  if (selectProb[selectProb.selectedIndex].value == "single") {
    singleProbForm.style.display = "block";
    twoEventsProbForm.style.display = "none";
    multipleEventsProbForm.style.display = "none";
  } else if (selectProb[selectProb.selectedIndex].value == "two events") {
    singleProbForm.style.display = "none";
    twoEventsProbForm.style.display = "block";
    multipleEventsProbForm.style.display = "none";
  } else if (selectProb[selectProb.selectedIndex].value == "multiple events") {
    singleProbForm.style.display = "none";
    twoEventsProbForm.style.display = "none";
    multipleEventsProbForm.style.display = "block";
  }
});

/* Single probability */
// Calculate button - calculates the results and shows in the table
const singleProbBtnCalculate = document.getElementById("single-prob-btn-calculate");
singleProbBtnCalculate.addEventListener("click", () => {
  const singleProbForm = document.getElementById("single-prob-form");
  if (singleProbForm.checkValidity()) {
    const singleProbTable = document.getElementById("single-prob-table");
    const singleProbInput1 = parseFloat(document.getElementById("single-prob-input1").value);
    const singleProbInput2 = parseFloat(document.getElementById("single-prob-input2").value);
    const singleProbOutputDecimal = document.getElementsByClassName("single-prob-output-decimal");
    const singleProbOutputPercent = document.getElementsByClassName("single-prob-output-percent");

    const singleProbArrOfResultsDecimal = [];
    const singleProbArrOfResultsPercent = [];
    singleProbArrOfResultsDecimal.push(
      String(Number((singleProbInput2 / singleProbInput1).toFixed(3)))
    );
    singleProbArrOfResultsPercent.push(
      String(Number(((singleProbInput2 / singleProbInput1) * 100).toFixed(1))) + "%"
    );
    singleProbArrOfResultsDecimal.push(
      String(Number((1 - singleProbInput2 / singleProbInput1).toFixed(3)))
    );
    singleProbArrOfResultsPercent.push(
      String(Number(((1 - singleProbInput2 / singleProbInput1) * 100).toFixed(1))) + "%"
    );

    for (let i = 0; i < 2; i++) {
      singleProbOutputDecimal[i].innerHTML = singleProbArrOfResultsDecimal[i];
      singleProbOutputPercent[i].innerHTML = singleProbArrOfResultsPercent[i];
    }
    showTable(singleProbTable);
  }
});
// Reset button
const singleProbBtnReset = document.getElementById("single-prob-btn-reset");
singleProbBtnReset.addEventListener("click", () => {
  const singleProbTable = document.getElementById("single-prob-table");
  hideTable(singleProbTable);
});

/* Probability of Two Events */
// Calculate button - calculates the results and shows in the table
const twoEventsProbBtnCalculate = document.getElementById("two-events-prob-btn-calculate");
twoEventsProbBtnCalculate.addEventListener("click", () => {
  const twoEventsProbForm = document.getElementById("two-events-prob-form");
  if (twoEventsProbForm.checkValidity()) {
    const twoEventsProbTable = document.getElementById("two-events-prob-table");
    const twoEventsProbInput1 = parseFloat(document.getElementById("two-events-prob-input1").value);
    const twoEventsProbInput2 = parseFloat(document.getElementById("two-events-prob-input2").value);
    const twoEventsProbOutputDecimal = document.getElementsByClassName(
      "two-events-prob-output-decimal"
    );
    const twoEventsProbOutputPercent = document.getElementsByClassName(
      "two-events-prob-output-percent"
    );
    const twoEventsProbArrOfResultsDecimal = [];
    const twoEventsProbArrOfResultsPercent = [];

    // P(A') = 1 - P(A)
    twoEventsProbArrOfResultsDecimal.push(String(Number((1 - twoEventsProbInput1).toFixed(4))));
    twoEventsProbArrOfResultsPercent.push(
      String(Number(((1 - twoEventsProbInput1) * 100).toFixed(2))) + "%"
    );

    // P(B') = 1 - P(B)
    twoEventsProbArrOfResultsDecimal.push(String(Number((1 - twoEventsProbInput2).toFixed(4))));
    twoEventsProbArrOfResultsPercent.push(
      String(Number(((1 - twoEventsProbInput2) * 100).toFixed(2))) + "%"
    );

    // P(A∩B) = P(A) * P(B)
    twoEventsProbArrOfResultsDecimal.push(
      String(Number((twoEventsProbInput1 * twoEventsProbInput2).toFixed(4)))
    );
    twoEventsProbArrOfResultsPercent.push(
      String(Number((twoEventsProbInput1 * twoEventsProbInput2 * 100).toFixed(2))) + "%"
    );

    // P(A∪B) = P(A) + P(B) - P(A∩B)
    twoEventsProbArrOfResultsDecimal.push(
      String(
        Number(
          twoEventsProbInput1 + twoEventsProbInput2 - twoEventsProbArrOfResultsDecimal[2]
        ).toFixed(4)
      )
    );
    twoEventsProbArrOfResultsPercent.push(
      String(
        Number(
          (
            (twoEventsProbInput1 + twoEventsProbInput2 - twoEventsProbArrOfResultsDecimal[2]) *
            100
          ).toFixed(2)
        )
      ) + "%"
    );

    // P(AΔB) = P(A) + P(B) - 2P(A∩B)
    twoEventsProbArrOfResultsDecimal.push(
      String(
        Number(
          (
            twoEventsProbInput1 +
            twoEventsProbInput2 -
            2 * twoEventsProbArrOfResultsDecimal[2]
          ).toFixed(4)
        )
      )
    );
    twoEventsProbArrOfResultsPercent.push(
      String(
        Number(
          (
            (twoEventsProbInput1 + twoEventsProbInput2 - 2 * twoEventsProbArrOfResultsDecimal[2]) *
            100
          ).toFixed(2)
        )
      ) + "%"
    );

    // P((A∪B)') = 1 - P(A∪B)
    twoEventsProbArrOfResultsDecimal.push(
      String(Number((1 - twoEventsProbArrOfResultsDecimal[3]).toFixed(4)))
    );
    twoEventsProbArrOfResultsPercent.push(
      String(Number(((1 - twoEventsProbArrOfResultsDecimal[3]) * 100).toFixed(2))) + "%"
    );

    // P(A occuring but not B) = P(A) * (1- P(B))
    twoEventsProbArrOfResultsDecimal.push(
      String(Number((twoEventsProbInput1 * twoEventsProbArrOfResultsDecimal[1]).toFixed(4)))
    );
    twoEventsProbArrOfResultsPercent.push(
      String(Number((twoEventsProbInput1 * twoEventsProbArrOfResultsDecimal[1] * 100).toFixed(2))) +
        "%"
    );

    // P(B occuring but not A) = (1 - P(A)) * P(B)
    twoEventsProbArrOfResultsDecimal.push(
      String(Number(((1 - twoEventsProbInput1) * twoEventsProbInput2).toFixed(4)))
    );
    twoEventsProbArrOfResultsPercent.push(
      String(Number(((1 - twoEventsProbInput1) * twoEventsProbInput2 * 100).toFixed(2))) + "%"
    );

    for (let i = 0; i < 8; i++) {
      twoEventsProbOutputDecimal[i].innerHTML = twoEventsProbArrOfResultsDecimal[i];
      twoEventsProbOutputPercent[i].innerHTML = twoEventsProbArrOfResultsPercent[i];
    }
    showTable(twoEventsProbTable);
  }
});
// Reset button
const twoEventsProbBtnReset = document.getElementById("two-events-prob-btn-reset");
twoEventsProbBtnReset.addEventListener("click", () => {
  const twoEventsProbTable = document.getElementById("two-events-prob-table");
  hideTable(twoEventsProbTable);
});

/* Probability of Two Events */
// Calculate button - calculates the results and shows in the table
const multipleEventsProbBtnCalculate = document.getElementById(
  "multiple-events-prob-btn-calculate"
);
multipleEventsProbBtnCalculate.addEventListener("click", () => {
  console.log("click");
});
