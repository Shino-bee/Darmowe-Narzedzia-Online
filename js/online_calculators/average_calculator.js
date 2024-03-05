// Select average - display selected option and hide the rest
const selectAverage = document.getElementById("select-average");
selectAverage.addEventListener("change", () => {
  const arithmeticAverageForm = document.getElementById("arithmetic-average-form");
  const geometricAverageForm = document.getElementById("geometric-average-form");
  const weightedAverageForm = document.getElementById("weighted-average-form");
  const selectedAverage = selectAverage[selectAverage.selectedIndex].value;
  if (selectedAverage == "arithmetic") {
    arithmeticAverageForm.style.display = "block";
    weightedAverageForm.style.display = "none";
    geometricAverageForm.style.display = "none";
  } else if (selectedAverage == "weighted") {
    arithmeticAverageForm.style.display = "none";
    weightedAverageForm.style.display = "block";
    geometricAverageForm.style.display = "none";
  } else if (selectedAverage == "geometric") {
    arithmeticAverageForm.style.display = "none";
    weightedAverageForm.style.display = "none";
    geometricAverageForm.style.display = "block";
  }
});

/* ----------------------------------- */
/* -- Arithmetic average calculator -- */
let arithmeticAverageArrOfNums = [];

// Add button (arithmetic) - calculates and shows added nums and results
const arithmeticAverageBtnAdd = document.getElementById("arithmetic-average-btn-calculate");
arithmeticAverageBtnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  const arithmeticAverageForm = document.getElementById("arithmetic-average-form");
  const arithmeticAverageInput = document.getElementById("arithmetic-average-input");
  if (arithmeticAverageForm.checkValidity() && arithmeticAverageInput.value != "") {
    const arithmeticAverageAddedNums = document.getElementById("arithmetic-average-added-nums");
    if (arithmeticAverageAddedNums.style.display != "block") {
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

// Reset button (arithmetic)
const arithmeticAverageBtnReset = document.getElementById("arithmetic-average-btn-reset");
arithmeticAverageBtnReset.addEventListener("click", () => {
  const arithmeticAverageAddedNums = document.getElementById("arithmetic-average-added-nums");
  arithmeticAverageAddedNums.innerText = "";
  arithmeticAverageAddedNums.style.display = "none";
  arithmeticAverageArrOfNums = [];
});

/* ----------------------------------- */
/* --- Weighted average calculator --- */
let weightedAverageArrOfArrsOfNums = [];

// Remove row button (weighted)
const weightedAverageBtnRemoveRow = document.getElementsByClassName(
  "weighted-average-btn-remove-row"
);
function weightedAverageUpdateRowsCount() {
  for (let i = 0; i < weightedAverageBtnRemoveRow.length; i++) {
    weightedAverageBtnRemoveRow[i].addEventListener("click", (event) => {
      event.target.parentNode.remove();
    });
  }
}
weightedAverageUpdateRowsCount();

// Add row button (weighted)
const weightedAverageBtnAddRow = document.getElementById("weighted-average-btn-add-row");
weightedAverageBtnAddRow.addEventListener("click", () => {
  const weightedAverageFieldset = document.getElementById("weighted-average-fieldset");
  const fieldsetContainer = document.createElement("div");
  fieldsetContainer.classList.add("weighted-average-fieldset-inputs");
  const fieldsetInputValue = document.createElement("input");
  fieldsetInputValue.setAttribute("type", "number");
  fieldsetInputValue.classList.add("weighted-average-input-value");
  fieldsetInputValue.setAttribute("step", "any");
  fieldsetInputValue.setAttribute("autocomplete", "off");
  fieldsetInputValue.setAttribute("placeholder", "Wartość");
  const fieldsetInputWeight = document.createElement("input");
  fieldsetInputWeight.setAttribute("type", "number");
  fieldsetInputWeight.classList.add("weighted-average-input-weight");
  fieldsetInputWeight.setAttribute("step", "any");
  fieldsetInputWeight.setAttribute("autocomplete", "off");
  fieldsetInputWeight.setAttribute("placeholder", "Waga");
  const fieldsetBtnRemove = document.createElement("button");
  fieldsetBtnRemove.setAttribute("type", "button");
  fieldsetBtnRemove.classList.add("weighted-average-btn-remove-row");
  fieldsetBtnRemove.innerHTML = "&#10006;";
  fieldsetContainer.appendChild(fieldsetInputValue);
  fieldsetContainer.appendChild(fieldsetInputWeight);
  fieldsetContainer.appendChild(fieldsetBtnRemove);
  weightedAverageFieldset.appendChild(fieldsetContainer);
  weightedAverageUpdateRowsCount();
});

// Calculate button (weighted) - calculates and shows result
const weightedAverageBtnAdd = document.getElementById("weighted-average-btn-calculate");
weightedAverageBtnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  const weightedAverageForm = document.getElementById("weighted-average-form");
  if (weightedAverageForm.checkValidity()) {
    const weightedAverageFieldsetInputs = document.getElementsByClassName(
      "weighted-average-fieldset-inputs"
    );
    for (let i = 0; i < weightedAverageFieldsetInputs.length; i++) {
      const fieldsetInputValue = parseFloat(
        weightedAverageFieldsetInputs[i].getElementsByTagName("input")[0].value
      );
      const fieldsetInputWeight = parseFloat(
        weightedAverageFieldsetInputs[i].getElementsByTagName("input")[1].value
      );
      if (!isNaN(fieldsetInputValue) && !isNaN(fieldsetInputWeight)) {
        weightedAverageArrOfArrsOfNums[weightedAverageArrOfArrsOfNums.length] = [
          fieldsetInputValue,
          fieldsetInputWeight,
        ];
      }
    }
    const weightedAverageResult = document.getElementById("weighted-average-result");
    if (weightedAverageArrOfArrsOfNums.length > 0) {
      let resultLeftSide = []; // = sum of values multiplied by weights
      let resultRightSide = 0; // = sum of weights
      for (let i = 0; i < weightedAverageArrOfArrsOfNums.length; i++) {
        resultLeftSide.push(
          weightedAverageArrOfArrsOfNums[i][0] * weightedAverageArrOfArrsOfNums[i][1]
        );
        resultRightSide += weightedAverageArrOfArrsOfNums[i][1];
      }
      resultLeftSide = resultLeftSide.reduce((sum, num) => sum + num);
      const result = resultLeftSide / resultRightSide;
      weightedAverageResult.value = result;
    } else {
      weightedAverageResult.value = "";
    }
    weightedAverageArrOfArrsOfNums = [];
  }
});

/* ----------------------------------- */
/* -- Geometric average calculator --- */
let geometricAverageArrOfNums = [];

// Add button (geometric) - calculates and shows added nums and results
const geometricAverageBtnAdd = document.getElementById("geometric-average-btn-calculate");
geometricAverageBtnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  const geometricAverageForm = document.getElementById("geometric-average-form");
  const geometricAverageInput = document.getElementById("geometric-average-input");
  if (geometricAverageForm.checkValidity() && geometricAverageInput.value != "") {
    const geometricAverageAddedNums = document.getElementById("geometric-average-added-nums");

    if (geometricAverageAddedNums.style.display != "block") {
      geometricAverageAddedNums.style.display = "block";
      geometricAverageAddedNums.innerText += geometricAverageInput.value;
    } else {
      geometricAverageAddedNums.innerText += ", " + geometricAverageInput.value;
    }
    geometricAverageArrOfNums.push(parseFloat(geometricAverageInput.value));
    const geometricAverageOutput = document.getElementById("geometric-average-result");
    const geometricAverageResult = Math.pow(
      geometricAverageArrOfNums.reduce((sum, num) => sum * num),
      1 / geometricAverageArrOfNums.length
    );
    geometricAverageOutput.value = geometricAverageResult;
    geometricAverageInput.value = "";
  }
});

// Reset button (geometric)
const geometricAverageBtnReset = document.getElementById("geometric-average-btn-reset");
geometricAverageBtnReset.addEventListener("click", () => {
  const geometricAverageAddedNums = document.getElementById("geometric-average-added-nums");
  geometricAverageAddedNums.innerText = "";
  geometricAverageAddedNums.style.display = "none";
  geometricAverageArrOfNums = [];
});
