const birthDate = document.getElementById("birth-date");
const endDate = document.getElementById("end-date");
const calculateBtn = document.getElementById("program-form-btn-calculate");
const resetBtn = document.getElementById("program-form-btn-reset");

function reset() {
  endDate.valueAsDate = new Date();
}
reset();

// Calculate button - calculates the results and displays them in the table and shows table if is not displayed
calculateBtn.addEventListener("click", () => {
  console.log(birthDate.valueAsDate);
  console.log(endDate.valueAsDate);
});

// Reset button - hide table, reset to default values
resetBtn.addEventListener("click", () => {
  setTimeout(() => {
    reset();
  }, 8);
});
