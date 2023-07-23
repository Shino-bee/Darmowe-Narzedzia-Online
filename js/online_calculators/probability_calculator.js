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

    twoEventsProbArrOfResultsDecimal.push(String(Number((1 - twoEventsProbInput1).toFixed(4))));
    twoEventsProbArrOfResultsPercent.push(
      String(Number(((1 - twoEventsProbInput1) * 100).toFixed(2))) + "%"
    );

    twoEventsProbArrOfResultsDecimal.push(String(Number((1 - twoEventsProbInput2).toFixed(4))));
    twoEventsProbArrOfResultsPercent.push(
      String(Number(((1 - twoEventsProbInput2) * 100).toFixed(2))) + "%"
    );

    twoEventsProbArrOfResultsDecimal.push(
      String(Number((twoEventsProbInput1 * twoEventsProbInput2).toFixed(4)))
    );
    twoEventsProbArrOfResultsPercent.push(
      String(Number((twoEventsProbInput1 * twoEventsProbInput2 * 100).toFixed(2))) + "%"
    );

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

    twoEventsProbArrOfResultsDecimal.push(
      String(Number((1 - twoEventsProbArrOfResultsDecimal[3]).toFixed(4)))
    );
    twoEventsProbArrOfResultsPercent.push(
      String(Number(((1 - twoEventsProbArrOfResultsDecimal[3]) * 100).toFixed(2))) + "%"
    );

    twoEventsProbArrOfResultsDecimal.push(
      String(Number((twoEventsProbInput1 * twoEventsProbArrOfResultsDecimal[1]).toFixed(4)))
    );
    twoEventsProbArrOfResultsPercent.push(
      String(Number((twoEventsProbInput1 * twoEventsProbArrOfResultsDecimal[1] * 100).toFixed(2))) +
        "%"
    );

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
    const multipleEventsProbArrOfResultsDecimal = [];
    const multipleEventsProbArrOfResultsPercent = [];

    multipleEventsProbArrOfResultsDecimal.push(
      String(Number((multipleEventsProbInput2 / multipleEventsProbInput1).toFixed(4)))
    );
    multipleEventsProbArrOfResultsPercent.push(
      String(Number(((multipleEventsProbInput2 / multipleEventsProbInput1) * 100).toFixed(2))) + "%"
    );

    multipleEventsProbArrOfResultsDecimal.push(
      String(Number((1 - multipleEventsProbInput2 / multipleEventsProbInput1).toFixed(4)))
    );
    multipleEventsProbArrOfResultsPercent.push(
      String(Number(((1 - multipleEventsProbInput2 / multipleEventsProbInput1) * 100).toFixed(2))) +
        "%"
    );

    multipleEventsProbArrOfResultsDecimal.push(
      String(Number((multipleEventsProbInput3 / multipleEventsProbInput1).toFixed(4)))
    );
    multipleEventsProbArrOfResultsPercent.push(
      String(Number(((multipleEventsProbInput3 / multipleEventsProbInput1) * 100).toFixed(2))) + "%"
    );

    multipleEventsProbArrOfResultsDecimal.push(
      String(Number((1 - multipleEventsProbInput3 / multipleEventsProbInput1).toFixed(4)))
    );
    multipleEventsProbArrOfResultsPercent.push(
      String(Number(((1 - multipleEventsProbInput3 / multipleEventsProbInput1) * 100).toFixed(2))) +
        "%"
    );

    multipleEventsProbArrOfResultsDecimal.push(
      String(
        Number(
          (
            multipleEventsProbArrOfResultsDecimal[0] * multipleEventsProbArrOfResultsDecimal[2]
          ).toFixed(4)
        )
      )
    );
    multipleEventsProbArrOfResultsPercent.push(
      String(
        Number(
          (
            multipleEventsProbArrOfResultsDecimal[0] *
            multipleEventsProbArrOfResultsDecimal[2] *
            100
          ).toFixed(2)
        )
      ) + "%"
    );

    multipleEventsProbArrOfResultsDecimal.push(
      String(
        Number(
          (
            Number(multipleEventsProbArrOfResultsDecimal[0]) +
            Number(multipleEventsProbArrOfResultsDecimal[2]) -
            Number(multipleEventsProbArrOfResultsDecimal[4])
          ).toFixed(4)
        )
      )
    );
    multipleEventsProbArrOfResultsPercent.push(
      String(
        Number(
          (
            (Number(multipleEventsProbArrOfResultsDecimal[0]) +
              Number(multipleEventsProbArrOfResultsDecimal[2]) -
              Number(multipleEventsProbArrOfResultsDecimal[4])) *
            100
          ).toFixed(2)
        )
      ) + "%"
    );

    multipleEventsProbArrOfResultsDecimal.push(
      String(Number((multipleEventsProbInput2 / multipleEventsProbInput1).toFixed(4)))
    );
    multipleEventsProbArrOfResultsPercent.push(
      String(Number(((multipleEventsProbInput2 / multipleEventsProbInput1) * 100).toFixed(2))) + "%"
    );

    for (let i = 0; i < 7; i++) {
      multipleEventsProbOutputDecimal[i].innerHTML = multipleEventsProbArrOfResultsDecimal[i];
      multipleEventsProbOutputPercent[i].innerHTML = multipleEventsProbArrOfResultsPercent[i];
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
seriesEventsProbBtnCalculate.addEventListener("click", () => {
  const seriesEventsProbForm = document.getElementById("series-events-prob-form");
  console.log(seriesEventsProbForm.checkValidity());
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
    const seriesEventsProbOutputResults = document.getElementsByClassName(
      "series-events-prob-output-results"
    );
    const seriesEventsProbArrOfResults = [];

    seriesEventsProbArrOfResults.push(
      String(Number(Math.pow(seriesEventsProbInputA1, seriesEventsProbInputA2).toFixed(5)))
    );

    for (let i = 0; i < 3; i++) {
      seriesEventsProbOutputNum1[i].innerHTML = seriesEventsProbInputA2;
      seriesEventsProbOutputNum2[i].innerHTML = seriesEventsProbInputB2;
    }
    for (let i = 0; i < 13; i++) {
      seriesEventsProbOutputResults[i].innerHTML = seriesEventsProbArrOfResults[i];
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
