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
  const multipleEventsProbTable = document.getElementById("multiple-events-prob-table");
  const seriesEventsProbTable = document.getElementById("series-events-prob-table");
  hideTable(singleProbTable);
  hideTable(twoEventsProbTable);
  hideTable(multipleEventsProbTable);
  hideTable(seriesEventsProbTable);

  const singleProbForm = document.getElementById("single-prob-form");
  const twoEventsProbForm = document.getElementById("two-events-prob-form");
  const multipleEventsProbForm = document.getElementById("multiple-events-prob-form");
  const seriesEventsProbForm = document.getElementById("series-events-prob-form");
  if (selectProb[selectProb.selectedIndex].value == "single") {
    singleProbForm.style.display = "block";
    twoEventsProbForm.style.display = "none";
    multipleEventsProbForm.style.display = "none";
    seriesEventsProbForm.style.display = "none";
  } else if (selectProb[selectProb.selectedIndex].value == "two events") {
    singleProbForm.style.display = "none";
    twoEventsProbForm.style.display = "block";
    multipleEventsProbForm.style.display = "none";
    seriesEventsProbForm.style.display = "none";
  } else if (selectProb[selectProb.selectedIndex].value == "multiple events") {
    singleProbForm.style.display = "none";
    twoEventsProbForm.style.display = "none";
    multipleEventsProbForm.style.display = "block";
    seriesEventsProbForm.style.display = "none";
  } else if (selectProb[selectProb.selectedIndex].value == "series of events") {
    singleProbForm.style.display = "none";
    twoEventsProbForm.style.display = "none";
    multipleEventsProbForm.style.display = "none";
    seriesEventsProbForm.style.display = "block";
  }
});

/* Single probability */
// Calculate button - calculates the results and shows in the table
const singleProbBtnCalculate = document.getElementById("single-prob-btn-calculate");
singleProbBtnCalculate.addEventListener("click", (event) => {
  event.preventDefault();
  const singleProbForm = document.getElementById("single-prob-form");
  if (singleProbForm.checkValidity()) {
    const singleProbTable = document.getElementById("single-prob-table");
    const singleProbInput1 = parseFloat(document.getElementById("single-prob-input1").value);
    const singleProbInput2 = parseFloat(document.getElementById("single-prob-input2").value);
    const singleProbOutputDecimal = document.getElementsByClassName("single-prob-output-decimal");
    const singleProbOutputPercent = document.getElementsByClassName("single-prob-output-percent");
    const singleProbArrOfResults = [];

    singleProbArrOfResults.push(String(Number((singleProbInput2 / singleProbInput1).toFixed(3))));
    singleProbArrOfResults.push(
      String(Number((1 - singleProbInput2 / singleProbInput1).toFixed(3)))
    );

    for (let i = 0; i < 2; i++) {
      singleProbOutputDecimal[i].innerHTML = singleProbArrOfResults[i];
      singleProbOutputPercent[i].innerHTML =
        String(Number((singleProbArrOfResults[i] * 100).toFixed(1))) + "%";
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
twoEventsProbBtnCalculate.addEventListener("click", (event) => {
  event.preventDefault();
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
    const twoEventsProbArrOfResults = [];

    twoEventsProbArrOfResults.push(String(Number((1 - twoEventsProbInput1).toFixed(4))));
    twoEventsProbArrOfResults.push(String(Number((1 - twoEventsProbInput2).toFixed(4))));
    twoEventsProbArrOfResults.push(
      String(Number((twoEventsProbInput1 * twoEventsProbInput2).toFixed(4)))
    );
    twoEventsProbArrOfResults.push(
      String(
        Number(twoEventsProbInput1 + twoEventsProbInput2 - twoEventsProbArrOfResults[2]).toFixed(4)
      )
    );
    twoEventsProbArrOfResults.push(
      String(
        Number(
          (twoEventsProbInput1 + twoEventsProbInput2 - 2 * twoEventsProbArrOfResults[2]).toFixed(4)
        )
      )
    );
    twoEventsProbArrOfResults.push(String(Number((1 - twoEventsProbArrOfResults[3]).toFixed(4))));
    twoEventsProbArrOfResults.push(
      String(Number((twoEventsProbInput1 * twoEventsProbArrOfResults[1]).toFixed(4)))
    );
    twoEventsProbArrOfResults.push(
      String(Number(((1 - twoEventsProbInput1) * twoEventsProbInput2).toFixed(4)))
    );

    for (let i = 0; i < 8; i++) {
      twoEventsProbOutputDecimal[i].innerHTML = twoEventsProbArrOfResults[i];
      twoEventsProbOutputPercent[i].innerHTML =
        String(Number((twoEventsProbArrOfResults[i] * 100).toFixed(1))) + "%";
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

/* Probability of Multiple Events */
// Calculate button - calculates the results and shows in the table
const multipleEventsProbBtnCalculate = document.getElementById(
  "multiple-events-prob-btn-calculate"
);
multipleEventsProbBtnCalculate.addEventListener("click", (event) => {
  event.preventDefault();
  const multipleEventsProbForm = document.getElementById("multiple-events-prob-form");
  if (multipleEventsProbForm.checkValidity()) {
    const multipleEventsProbTable = document.getElementById("multiple-events-prob-table");
    const multipleEventsProbInput1 = parseFloat(
      document.getElementById("multiple-events-prob-input1").value
    );
    const multipleEventsProbInput2 = parseFloat(
      document.getElementById("multiple-events-prob-input2").value
    );
    const multipleEventsProbInput3 = parseFloat(
      document.getElementById("multiple-events-prob-input3").value
    );
    const multipleEventsProbOutputDecimal = document.getElementsByClassName(
      "multiple-events-prob-output-decimal"
    );
    const multipleEventsProbOutputPercent = document.getElementsByClassName(
      "multiple-events-prob-output-percent"
    );
    const multipleEventsProbArrOfResults = [];

    multipleEventsProbArrOfResults.push(
      String(Number((multipleEventsProbInput2 / multipleEventsProbInput1).toFixed(4)))
    );
    multipleEventsProbArrOfResults.push(
      String(Number((1 - multipleEventsProbInput2 / multipleEventsProbInput1).toFixed(4)))
    );
    multipleEventsProbArrOfResults.push(
      String(Number((multipleEventsProbInput3 / multipleEventsProbInput1).toFixed(4)))
    );
    multipleEventsProbArrOfResults.push(
      String(Number((1 - multipleEventsProbInput3 / multipleEventsProbInput1).toFixed(4)))
    );
    multipleEventsProbArrOfResults.push(
      String(
        Number((multipleEventsProbArrOfResults[0] * multipleEventsProbArrOfResults[2]).toFixed(4))
      )
    );
    multipleEventsProbArrOfResults.push(
      String(
        Number(
          (
            Number(multipleEventsProbArrOfResults[0]) +
            Number(multipleEventsProbArrOfResults[2]) -
            Number(multipleEventsProbArrOfResults[4])
          ).toFixed(4)
        )
      )
    );
    multipleEventsProbArrOfResults.push(
      String(Number((multipleEventsProbInput2 / multipleEventsProbInput1).toFixed(4)))
    );

    for (let i = 0; i < 7; i++) {
      multipleEventsProbOutputDecimal[i].innerHTML = multipleEventsProbArrOfResults[i];
      multipleEventsProbOutputPercent[i].innerHTML =
        String(Number((multipleEventsProbArrOfResults[i] * 100).toFixed(1))) + "%";
    }
    showTable(multipleEventsProbTable);
  }
});
// Reset button
const multipleEventsProbBtnReset = document.getElementById("multiple-events-prob-btn-reset");
multipleEventsProbBtnReset.addEventListener("click", () => {
  const multipleEventsProbTable = document.getElementById("multiple-events-prob-table");
  hideTable(multipleEventsProbTable);
});

/* Probability of Series of Events */
// Calculate button - calculates the results and shows in the table
const seriesEventsProbBtnCalculate = document.getElementById("series-events-prob-btn-calculate");
seriesEventsProbBtnCalculate.addEventListener("click", (event) => {
  event.preventDefault();
  const seriesEventsProbForm = document.getElementById("series-events-prob-form");
  if (seriesEventsProbForm.checkValidity()) {
    const seriesEventsProbTable = document.getElementById("series-events-prob-table");
    const seriesEventsProbInputA1 = parseFloat(
      document.getElementById("series-events-prob-input-A1").value
    );
    const seriesEventsProbInputA2 = parseFloat(
      document.getElementById("series-events-prob-input-A2").value
    );
    const seriesEventsProbInputB1 = parseFloat(
      document.getElementById("series-events-prob-input-B1").value
    );
    const seriesEventsProbInputB2 = parseFloat(
      document.getElementById("series-events-prob-input-B2").value
    );
    const seriesEventsProbOutputNum1 = document.getElementsByClassName(
      "series-events-prob-output-num1"
    );
    const seriesEventsProbOutputNum2 = document.getElementsByClassName(
      "series-events-prob-output-num2"
    );
    const seriesEventsProbOutputResultsDecimal = document.getElementsByClassName(
      "series-events-prob-output-results-decimal"
    );
    const seriesEventsProbOutputResultsPercent = document.getElementsByClassName(
      "series-events-prob-output-results-percent"
    );
    const seriesEventsProbArrOfResults = [];

    seriesEventsProbArrOfResults.push(
      String(Number(Math.pow(seriesEventsProbInputA1, seriesEventsProbInputA2).toFixed(5)))
    );
    seriesEventsProbArrOfResults.push(
      String(Number(Math.pow(1 - seriesEventsProbInputA1, seriesEventsProbInputA2).toFixed(5)))
    );
    seriesEventsProbArrOfResults.push(
      String(Number((1 - seriesEventsProbArrOfResults[1]).toFixed(5)))
    );
    seriesEventsProbArrOfResults.push(
      String(Number(Math.pow(seriesEventsProbInputB1, seriesEventsProbInputB2).toFixed(5)))
    );
    seriesEventsProbArrOfResults.push(
      String(Number(Math.pow(1 - seriesEventsProbInputB1, seriesEventsProbInputB2).toFixed(5)))
    );
    seriesEventsProbArrOfResults.push(
      String(Number((1 - seriesEventsProbArrOfResults[4]).toFixed(5)))
    );
    seriesEventsProbArrOfResults.push(
      String(
        Number(
          (
            Math.pow(seriesEventsProbInputA1, seriesEventsProbInputA2) *
            Math.pow(seriesEventsProbInputB1, seriesEventsProbInputB2)
          ).toFixed(5)
        )
      )
    );
    seriesEventsProbArrOfResults.push(
      String(Number((1 - seriesEventsProbArrOfResults[6]).toFixed(5)))
    );
    seriesEventsProbArrOfResults.push(
      String(Number((seriesEventsProbInputA1 * seriesEventsProbArrOfResults[5]).toFixed(5)))
    );
    seriesEventsProbArrOfResults.push(
      String(Number((seriesEventsProbArrOfResults[0] * seriesEventsProbArrOfResults[4]).toFixed(5)))
    );
    seriesEventsProbArrOfResults.push(
      String(Number((seriesEventsProbArrOfResults[3] * seriesEventsProbArrOfResults[0]).toFixed(5)))
    );
    seriesEventsProbArrOfResults.push(
      String(
        Number(
          (
            seriesEventsProbInputA1 *
            (1 - (seriesEventsProbInputA1 * seriesEventsProbInputB1) / seriesEventsProbInputA1)
          ).toFixed(5)
        )
      )
    );
    seriesEventsProbArrOfResults.push(
      String(
        Number(
          (
            seriesEventsProbInputB1 *
            (1 - (seriesEventsProbInputA1 * seriesEventsProbInputB1) / seriesEventsProbInputB1)
          ).toFixed(5)
        )
      )
    );

    for (let i = 0; i < 4; i++) {
      seriesEventsProbOutputNum1[i].innerHTML = seriesEventsProbInputA2;
      seriesEventsProbOutputNum2[i].innerHTML = seriesEventsProbInputB2;
    }
    for (let i = 0; i < 13; i++) {
      seriesEventsProbOutputResultsDecimal[i].innerHTML = seriesEventsProbArrOfResults[i];
      seriesEventsProbOutputResultsPercent[i].innerHTML =
        String(Number((seriesEventsProbArrOfResults[i] * 100).toFixed(1))) + "%";
    }
    showTable(seriesEventsProbTable);
  }
});
// Reset button
const seriesEventsProbBtnReset = document.getElementById("series-events-prob-btn-reset");
seriesEventsProbBtnReset.addEventListener("click", () => {
  const seriesEventsProbTable = document.getElementById("series-events-prob-table");
  hideTable(seriesEventsProbTable);
});
