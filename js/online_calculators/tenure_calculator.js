const startingDateId = document.getElementById("tenure-calculator-input1");
const endingDateId = document.getElementById("tenure-calculator-input2");
const tenureCalculatorStartingLabel = document.getElementById("tenure-calculator-starting-label");
let tenureArrayOfResults = [0, 0, 0]; // years, months, days

// Hide the table, reset to default values
function reset() {
  const tenureAddedDates = document.getElementById("tenure-calculator-added-dates");
  tenureAddedDates.innerText = "";
  tenureAddedDates.style.display = "none";
  tenureArrayOfResults = [0, 0, 0];
  if (startingDateId.style.backgroundColor === "var(--main-color-red)") {
    startingDateId.style.backgroundColor = "var(--main-color-darklight)";
    tenureCalculatorStartingLabel.style.backgroundColor = "";
    tenureCalculatorStartingLabel.innerText = "Data rozpoczęcia pracy:";
  }
}
reset();

// Hide error status if changed startingDate is less than endingDate
startingDateId.addEventListener("change", () => {
  const startingDate = new Date(startingDateId.valueAsDate);
  const endingDate = new Date(endingDateId.valueAsDate);
  if (
    startingDateId.style.backgroundColor === "var(--main-color-red)" &&
    Math.sign(endingDate - startingDate) > 0
  ) {
    startingDateId.style.backgroundColor = "var(--main-color-darklight)";
    tenureCalculatorStartingLabel.innerText = "Data rozpoczęcia pracy:";
  }
});

// Add button - calculates and shows added dates and results
const tenureBtnAdd = document.getElementById("tenure-calculator-btn-calculate");
tenureBtnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  const tenureForm = document.getElementById("tenure-calculator-form");
  if (tenureForm.checkValidity()) {
    const startingDate = new Date(startingDateId.valueAsDate);
    const endingDate = new Date(endingDateId.valueAsDate);

    // Show error status if startingDate is higher than endingDate
    if (Math.sign(endingDate - startingDate) <= 0) {
      startingDateId.style.backgroundColor = "var(--main-color-red)";
      tenureCalculatorStartingLabel.innerText =
        "Data rozpoczęcia musi być mniejsza niż data zakończenia!";
    } else {
      const startingYear = startingDate.getFullYear();
      const february =
        (startingYear % 4 === 0 && startingYear % 100 !== 0) || startingYear % 400 === 0 ? 29 : 28;
      const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let yearDiff = endingDate.getFullYear() - startingYear;
      let monthDiff = endingDate.getMonth() - startingDate.getMonth();
      if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
      }
      let dayDiff = endingDate.getDate() - startingDate.getDate();
      if (dayDiff < 0) {
        if (monthDiff > 0) {
          monthDiff--;
        } else {
          yearDiff--;
          monthDiff = 11;
        }
        dayDiff += daysInMonth[startingDate.getMonth()];
      }

      // Update array of results (years, months, days) and print values
      tenureArrayOfResults[0] += yearDiff;
      tenureArrayOfResults[1] += monthDiff;
      tenureArrayOfResults[2] += dayDiff;
      if (tenureArrayOfResults[2] >= 31) {
        tenureArrayOfResults[2] -= 31;
        tenureArrayOfResults[1] += 1;
      }
      if (tenureArrayOfResults[1] >= 12) {
        tenureArrayOfResults[1] -= 12;
        tenureArrayOfResults[0] += 1;
      }
      const tenureOutputResult = document.getElementById("tenure-calculator-result");
      tenureOutputResult.value =
        tenureArrayOfResults[0] +
        " lat, " +
        tenureArrayOfResults[1] +
        " miesięcy, " +
        tenureArrayOfResults[2] +
        " dni";

      // Print added dates (startingDate, endingDate) and differene between them
      const tenureAddedDates = document.getElementById("tenure-calculator-added-dates");
      const tenureAddedDatesContent = `od ${startingDate.getDate()}.${
        startingDate.getMonth() + 1
      }.${startingDate.getFullYear()} do ${endingDate.getDate()}.${
        endingDate.getMonth() + 1
      }.${endingDate.getFullYear()} = ${yearDiff} lat, ${monthDiff} miesięcy, ${dayDiff} dni`;
      if (tenureAddedDates.style.display != "block") {
        tenureAddedDates.style.display = "block";
        tenureAddedDates.innerText = tenureAddedDatesContent;
      } else {
        tenureAddedDates.innerText += "\n" + tenureAddedDatesContent;
      }
    }
  }
});

// Reset button
const tenureBtnReset = document.getElementById("tenure-calculator-btn-reset");
tenureBtnReset.addEventListener("click", reset);
