const birthDateId = document.getElementById("birth-date");
const endDateId = document.getElementById("end-date");
const calculateBtn = document.getElementById("program-form-btn-calculate");
const resetBtn = document.getElementById("program-form-btn-reset");

function reset() {
  endDateId.valueAsDate = new Date();
  birthDateId.valueAsDate = new Date("2023-07-01");
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

    // console.log((endDate.getMonth()+12*endDate.getFullYear())-(birthDate.getMonth()+12*birthDate.getFullYear()));
    // console.log(endDate.getFullYear());
    // console.log(endDate.getMonth());
    // console.log(birthDate.getFullYear());
    // console.log(birthDate.getMonth());
    const numOfDays = (endDate - birthDate) / (1000 * 60 * 60 * 24);


    const years = Math.abs(Math.floor(numOfDays / 365));
    const months = Math.abs(Math.floor(((numOfDays / 365) * 12))-(years*12));
    const days = Math.abs(Math.ceil(numOfDays - (years*365.242199) - (months * 30.4368499)));
    console.log(years);
    console.log(months);
    console.log(days);
    console.log("-------------------");

    // console.log((endDate - birthDate) / (1000 * 60 * 60 * 24 * 30.4368499) / 12);
    // console.log(((endDate - birthDate) / (1000 * 60 * 60 * 24 * 30.4368499)) % 12);

    tableCurrentYearResult.innerText =
      Math.abs(
        Math.floor(
          (endDate - birthDate) / (1000 * 60 * 60 * 24 * 30.4368499) / 12
        )
      ) +
      " lata, " +
      Math.floor(
        ((endDate - birthDate) / (1000 * 60 * 60 * 24 * 30.4368499)) % 12
      ) +
      " miesiące, ";
    // tableCurrentYearResult.innerText = Math.abs(Math.floor(numOfDays / 365)) + " lat, " + Math.abs(Math.floor((numOfDays % 365) / 30.4368499)) + " miesięcy, " + Math.abs(Math.floor((numOfDays % 365) % 30.4368499)) + " dni";
    // tableMonthResult.innerText =
    //   Math.abs(Math.floor(numOfDays / 30.4368499)) +
    //   " miesięcy i " +
    //   Math.abs(Math.floor(numOfDays % 30.4368499)) +
    //   " dni";
    tableWeekResult.innerText =
      Math.abs(Math.floor(numOfDays / 7)) +
      " tygodni i " +
      Math.abs(Math.floor(numOfDays % 7)) +
      " dni";
    tableDayResult.innerText = numOfDays + " dni";

    if (tableOfResults.style.opacity == 0) {
      tableOfResults.style.transition = "0.8s ease-out";
      tableOfResults.style.marginTop = "15px";
      tableOfResults.style.height = "auto";
      tableOfResults.style.opacity = 1;
    }
  }
});

// Reset button - hide table, reset to default values
resetBtn.addEventListener("click", () => {
  setTimeout(() => {
    reset();
  }, 8);
});
