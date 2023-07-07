// Arithmetic average calculator
const arithmeticAverageInput = document.getElementById(
  "arithmetic-average-input"
);
arithmeticAverageInput.addEventListener("keyup", () => {
  const invalidChars = /[^0-9,]/gi;
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
    // pass
  }
});
