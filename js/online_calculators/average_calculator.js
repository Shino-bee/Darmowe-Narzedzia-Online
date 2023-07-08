/* Arithmetic average calculator */
const arithmeticAverageBtnAdd = document.getElementById("arithmetic-average-btn-calculate");
let arrOfNums = [];

// Add button - calculates and shows added nums and results
arithmeticAverageBtnAdd.addEventListener("click", () => {
  const arithmeticAverageForm = document.getElementById("arithmetic-average-form");
  const arithmeticAverageInput = document.getElementById("arithmetic-average-input");
  if (arithmeticAverageForm.checkValidity() && arithmeticAverageInput.value != "") {
    const arithmeticAverageAddedNums = document.getElementById("arithmetic-average-added-nums");
    console.log(arithmeticAverageAddedNums.style.display);
    if (
      arithmeticAverageAddedNums.style.display == "" ||
      arithmeticAverageAddedNums.style.display == "none"
    ) {
      arithmeticAverageAddedNums.style.display = "block";
      arithmeticAverageAddedNums.innerText += arithmeticAverageInput.value;
    } else {
      arithmeticAverageAddedNums.innerText += ", " + arithmeticAverageInput.value;
    }
    arrOfNums.push(parseFloat(arithmeticAverageInput.value));
    const arithmeticAverageOutput = document.getElementById("arithmetic-average-result");
    const arithmeticAverageResult = (
      arrOfNums.reduce((sum, num) => sum + num) / arrOfNums.length
    ).toFixed(2);
    arithmeticAverageOutput.value = arithmeticAverageResult;
    arithmeticAverageInput.value = "";
  }

  // Reset button
  const arithmeticAverageBtnReset = document.getElementById("arithmetic-average-btn-reset");
  arithmeticAverageBtnReset.addEventListener("click", () => {
    const arithmeticAverageAddedNums = document.getElementById("arithmetic-average-added-nums");
    arithmeticAverageAddedNums.innerText = "";
    arithmeticAverageAddedNums.style.display = "none";
  });
});

/* const invalidChars = /[^0-9,]/gi;
const arithmeticAverageInput = document.getElementById(
  "arithmetic-average-input"
);
arithmeticAverageInput.addEventListener("keyup", () => {
  if (invalidChars.test(arithmeticAverageInput.value)) {
    arithmeticAverageInput.value = arithmeticAverageInput.value.replace(
      invalidChars,
      ""
    );
  }
});

const arithmeticAverageBtnCalculate = document.getElementById(
  "arithmetic-average-btn-calculate"
);
arithmeticAverageBtnCalculate.addEventListener("click", () => {
  const arithmeticAverageForm = document.getElementById(
    "arithmetic-average-form"
  );
  if (arithmeticAverageForm.checkValidity() == true) {
    let arrOfNums = arithmeticAverageInput.value
      .split(",")
      .filter((num) => num.length > 0);
    for (let i = 0; i < arrOfNums.length; i++) {
      if (invalidChars.test(arrOfNums[i])) {
        arrOfNums[i] = arrOfNums[i].replace(invalidChars, "");
        if (arrOfNums[i].length <= 0) {
          arrOfNums.splice(i, 1);
        }
      }
    }

    console.log(arrOfNums);
    console.log(typeof(arrOfNums[0]));
  }
}); */
