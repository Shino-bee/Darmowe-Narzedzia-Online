// Select average
const selectAverage = document.getElementById("select-average");
selectAverage.addEventListener("change", () => {
  const arithmeticAverageForm = document.getElementById("arithmetic-average-form");
  const geometricAverageForm = document.getElementById("geometric-average-form");
  console.log(selectAverage[selectAverage.selectedIndex].value);
  if (selectAverage[selectAverage.selectedIndex].value == "arithmetic") {
    geometricAverageForm.style.display = "none";
    arithmeticAverageForm.style.display = "block";
  } else if (selectAverage[selectAverage.selectedIndex].value == "weighted") {
    // pass
  } else if (selectAverage[selectAverage.selectedIndex].value == "geometric") {
    arithmeticAverageForm.style.display = "none";
    geometricAverageForm.style.display = "block";
  }
});

/* Arithmetic average calculator */
let arithmeticAverageArrOfNums = [];
// Add button - calculates and shows added nums and results
const arithmeticAverageBtnAdd = document.getElementById("arithmetic-average-btn-calculate");
arithmeticAverageBtnAdd.addEventListener("click", () => {
  const arithmeticAverageForm = document.getElementById("arithmetic-average-form");
  const arithmeticAverageInput = document.getElementById("arithmetic-average-input");
  if (arithmeticAverageForm.checkValidity() && arithmeticAverageInput.value != "") {
    const arithmeticAverageAddedNums = document.getElementById("arithmetic-average-added-nums");
    if (
      arithmeticAverageAddedNums.style.display == "" ||
      arithmeticAverageAddedNums.style.display == "none"
    ) {
      arithmeticAverageAddedNums.style.display = "block";
      arithmeticAverageAddedNums.innerText += arithmeticAverageInput.value;
    } else {
      arithmeticAverageAddedNums.innerText += ", " + arithmeticAverageInput.value;
    }
    arithmeticAverageArrOfNums.push(parseFloat(arithmeticAverageInput.value));
    const arithmeticAverageOutput = document.getElementById("arithmetic-average-result");
    const arithmeticAverageResult = (
      arithmeticAverageArrOfNums.reduce((sum, num) => sum + num) / arithmeticAverageArrOfNums.length
    ).toFixed(2);
    arithmeticAverageOutput.value = arithmeticAverageResult;
    arithmeticAverageInput.value = "";
  }
});
// Reset button
const arithmeticAverageBtnReset = document.getElementById("arithmetic-average-btn-reset");
arithmeticAverageBtnReset.addEventListener("click", () => {
  const arithmeticAverageAddedNums = document.getElementById("arithmetic-average-added-nums");
  arithmeticAverageAddedNums.innerText = "";
  arithmeticAverageAddedNums.style.display = "none";
  arithmeticAverageArrOfNums = [];
});

/* Geometric average calculator */
let geometricAverageArrOfNums = [];
// Add button - calculates and shows added nums and results
const geometricAverageBtnAdd = document.getElementById("geometric-average-btn-calculate");
geometricAverageBtnAdd.addEventListener("click", () => {
  const geometricAverageForm = document.getElementById("geometric-average-form");

  if (geometricAverageForm.checkValidity()) {
    const geometricAverageInput = document.getElementById("geometric-average-input");
    const geometricAverageOutput = document.getElementById("geometric-average-result");
    geometricAverageArrOfNums.push(parseFloat(geometricAverageInput.value));

    console.log(geometricAverageInput.value);
    // const geometricAverageResult = (
    //   geometricAverageArrOfNums.reduce((sum, num) => sum + num) / geometricAverageArrOfNums.length
    // ).toFixed(2);
    const geometricAverageResult = Math.sqrt(
      geometricAverageArrOfNums.reduce((sum, num) => sum * num)
    );
    geometricAverageOutput.value = geometricAverageResult;
  }
});
// Reset button
const geometricAverageBtnReset = document.getElementById("geometric-average-btn-reset");
geometricAverageBtnReset.addEventListener("click", () => {
  const geometricAverageAddedNums = document.getElementById("geometric-average-added-nums");
  geometricAverageAddedNums.innerText = "";
  geometricAverageAddedNums.style.display = "none";
  geometricAverageArrOfNums = [];
});
