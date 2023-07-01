const birthDateId = document.getElementById("birth-date");
const endDateId = document.getElementById("end-date");
const calculateBtn = document.getElementById("program-form-btn-calculate");
const resetBtn = document.getElementById("program-form-btn-reset");

function reset() {
  endDateId.valueAsDate = new Date();
}
reset();

// Calculate button - calculates the results and displays them in the table and shows table if is not displayed
calculateBtn.addEventListener("click", () => {
  const programFormValidity = document
    .getElementById("program-form")
    .checkValidity();

  if (programFormValidity === true) {
    const birthDate = new Date(birthDateId.valueAsDate);
    const endDate = new Date(endDateId.valueAsDate);
    const tableOfResults = document.getElementById("program-table");
    const tableCurrentYearResult = tableOfResults
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr")[0]
      .getElementsByTagName("td")[1];
    const tableMonthResult = tableOfResults
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr")[1]
      .getElementsByTagName("td")[1];
    const tableWeekResult = tableOfResults
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr")[2]
      .getElementsByTagName("td")[1];
    const tableDayResult = tableOfResults
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr")[3]
      .getElementsByTagName("td")[1];

    tableCurrentYearResult.innerText =
      (endDate.getFullYear() - birthDate.getFullYear()) + " lat, " + (endDate.getMonth() - birthDate.getMonth()) + " miesięcy, " + (endDate.getDate() - birthDate.getDate()) + " dni";

    // console.log(endDate.valueAsDate - birthDate.valueAsDate);

    if (tableOfResults.style.opacity == 0) {
      tableOfResults.style.transition = "0.8s ease-out";
      tableOfResults.style.marginTop = "15px";
      tableOfResults.style.height = "auto";
      tableOfResults.style.opacity = 1;
    }
  }

  // const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  // console.log(new Date(birthDate).getMonth());

  // console.log((endDate.valueAsDate - birthDate.valueAsDate) / oneDay);
});

// Reset button - hide table, reset to default values
resetBtn.addEventListener("click", () => {
  setTimeout(() => {
    reset();
  }, 8);
});
