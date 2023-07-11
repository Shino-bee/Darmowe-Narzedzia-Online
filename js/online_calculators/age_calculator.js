const birthDateId = document.getElementById("birth-date");
const endDateId = document.getElementById("end-date");
const calculateBtn = document.getElementsByClassName("program-form-btn-calculate")[0];
const resetBtn = document.getElementsByClassName("program-form-btn-reset")[0];
const tableOfResults = document.getElementById("program-table");

// Hide the table, reset to default values
function reset() {
  endDateId.valueAsDate = new Date();
  tableOfResults.style.transition = "0s";
  tableOfResults.style.marginTop = "0px";
  tableOfResults.style.height = "0";
  tableOfResults.style.opacity = 0;
}
reset();

// Calculate button - calculates the results and displays them in the table and shows table if is not displayed
calculateBtn.addEventListener("click", () => {
  const programFormValidity = document
    .getElementsByClassName("program-form")[0]
    .checkValidity();

  if (programFormValidity === true) {
    let birthDate = new Date(birthDateId.valueAsDate);
    let endDate = new Date(endDateId.valueAsDate);
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
    const tableHoursResult = tableOfResults
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr")[4]
      .getElementsByTagName("td")[1];
    const tableMinutesResult = tableOfResults
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr")[5]
      .getElementsByTagName("td")[1];
    const tableSecondsResult = tableOfResults
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr")[6]
      .getElementsByTagName("td")[1];

    if (birthDate > endDate) {
      const swap = birthDate;
      birthDate = endDate;
      endDate = swap;
    }
    const birthYear = birthDate.getFullYear();
    const february =
      (birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0
        ? 29
        : 28;
    const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let yearDiff = endDate.getFullYear() - birthYear;
    let monthDiff = endDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    let dayDiff = endDate.getDate() - birthDate.getDate();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[birthDate.getMonth()];
    }
    
    const onlyDaysDiff = (endDate - birthDate) / (1000 * 60 * 60 * 24);
    const hoursDiff = onlyDaysDiff * 24;
    const minutesDiff = onlyDaysDiff * 24 * 60;
    const secondsDiff = onlyDaysDiff * 24 * 60 * 60;
    tableCurrentYearResult.innerText =
      yearDiff + " lat, " + monthDiff + " miesięcy, " + dayDiff + " dni";
    tableMonthResult.innerText =
      Math.abs(Math.floor(onlyDaysDiff / 30.4368499)) +
      " miesięcy i " +
      dayDiff +
      " dni";
    tableWeekResult.innerText =
      Math.abs(Math.floor(onlyDaysDiff / 7)) +
      " tygodni i " +
      Math.abs(Math.floor(onlyDaysDiff % 7)) +
      " dni";
    tableDayResult.innerText = onlyDaysDiff + " dni";
    tableHoursResult.innerText = hoursDiff + " h";
    tableMinutesResult.innerText = minutesDiff + " min";
    tableSecondsResult.innerText = secondsDiff + " s";

    if (tableOfResults.style.opacity == 0) {
      tableOfResults.style.transition = "0.8s ease-out";
      tableOfResults.style.marginTop = "15px";
      tableOfResults.style.height = "auto";
      tableOfResults.style.opacity = 1;
    }
  }
});

// Reset button - calls reset() func
resetBtn.addEventListener("click", () => {
  setTimeout(() => {
    reset();
  }, 8);
});
