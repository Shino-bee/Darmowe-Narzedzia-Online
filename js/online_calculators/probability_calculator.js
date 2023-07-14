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
    const singleProbResultDecimal1 = String(
      Number((singleProbInput2 / singleProbInput1).toFixed(3))
    );
    const singleProbResultPercent1 =
      String(Number(((singleProbInput2 / singleProbInput1) * 100).toFixed(1))) + "%";
    const singleProbResultDecimal2 = String(
      Number((1 - singleProbInput2 / singleProbInput1).toFixed(3))
    );
    const singleProbResultPercent2 =
      String(Number(((1 - singleProbInput2 / singleProbInput1) * 100).toFixed(1))) + "%";

    singleProbOutputDecimal[0].innerText = singleProbResultDecimal1;
    singleProbOutputPercent[0].innerText = singleProbResultPercent1;
    singleProbOutputDecimal[1].innerText = singleProbResultDecimal2;
    singleProbOutputPercent[1].innerText = singleProbResultPercent2;
    showTable(singleProbTable);
  }
});
// Reset button
const singleProbBtnReset = document.getElementById("single-prob-btn-reset");
singleProbBtnReset.addEventListener("click", () => {
  const singleProbTable = document.getElementById("single-prob-table");
  hideTable(singleProbTable);
});
