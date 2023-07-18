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
  if (selectProb[selectProb.selectedIndex].value == "single") {
    singleProbForm.style.display = "block";
    twoEventsProbForm.style.display = "none";
  } else if (selectProb[selectProb.selectedIndex].value == "two events") {
    singleProbForm.style.display = "none";
    twoEventsProbForm.style.display = "block";
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

    let singleProbArrOfResultsDecimal = [];
    let singleProbArrOfResultsPercent = [];
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

    // console.log(twoEventsProbTable);
    // console.log(twoEventsProbInput1);
    // console.log(twoEventsProbInput2);
    // console.log(twoEventsProbOutputDecimal);

    let twoEventsProbArrOfResultsDecimal = [];
    let twoEventsProbArrOfResultsPercent = [];
    twoEventsProbArrOfResultsDecimal.push(String(Number((1 - twoEventsProbInput1).toFixed(4))));
    twoEventsProbArrOfResultsPercent.push(
      String(Number(((1 - twoEventsProbInput1) * 100).toFixed(2))) + "%"
    );
    twoEventsProbArrOfResultsDecimal.push(String(Number((1 - twoEventsProbInput2).toFixed(4))));
    twoEventsProbArrOfResultsPercent.push(
      String(Number(((1 - twoEventsProbInput2) * 100).toFixed(2))) + "%"
    );

    console.log(twoEventsProbArrOfResultsDecimal);
    console.log(twoEventsProbArrOfResultsPercent);

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

/*   const twoEventsProbForm = document.getElementById("twoEvents-prob-form");
  if (twoEventsProbForm.checkValidity()) {
    const twoEventsProbTable = document.getElementById("twoEvents-prob-table");
    const twoEventsProbInput1 = parseFloat(document.getElementById("twoEvents-prob-input1").value);
    const twoEventsProbInput2 = parseFloat(document.getElementById("twoEvents-prob-input2").value);
    const twoEventsProbOutputDecimal = document.getElementsByClassName("twoEvents-prob-output-decimal");
    const twoEventsProbOutputPercent = document.getElementsByClassName("twoEvents-prob-output-percent");
    const twoEventsProbResultDecimal1 = String(
      Number((twoEventsProbInput2 / twoEventsProbInput1).toFixed(3))
    );
    const twoEventsProbResultPercent1 =
      String(Number(((twoEventsProbInput2 / twoEventsProbInput1) * 100).toFixed(1))) + "%";
    const twoEventsProbResultDecimal2 = String(
      Number((1 - twoEventsProbInput2 / twoEventsProbInput1).toFixed(3))
    );
    const twoEventsProbResultPercent2 =
      String(Number(((1 - twoEventsProbInput2 / twoEventsProbInput1) * 100).toFixed(1))) + "%";

    twoEventsProbOutputDecimal[0].innerText = twoEventsProbResultDecimal1;
    twoEventsProbOutputPercent[0].innerText = twoEventsProbResultPercent1;
    twoEventsProbOutputDecimal[1].innerText = twoEventsProbResultDecimal2;
    twoEventsProbOutputPercent[1].innerText = twoEventsProbResultPercent2;
    showTable(twoEventsProbTable);
  } */

// Reset button
// const twoEventsProbBtnReset = document.getElementById("twoEvents-prob-btn-reset");
// twoEventsProbBtnReset.addEventListener("click", () => {
//   const twoEventsProbTable = document.getElementById("twoEvents-prob-table");
//   hideTable(twoEventsProbTable);
// });
