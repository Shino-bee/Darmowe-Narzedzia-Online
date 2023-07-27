const startingDateId = document.getElementById("tenure-calculator-input1");
const endingDateId = document.getElementById("tenure-calculator-input2");
const tenureCalculatorStartingLabel = document.getElementById("tenure-calculator-starting-label");
let tenureTableOfResults = [0, 0, 0]; // years, months, days

// Hide the table, reset to default values
function reset() {
  const tenureAddedDates = document.getElementById("tenure-calculator-added-dates");
  tenureAddedDates.innerText = "";
  tenureAddedDates.style.display = "none";
  tenureTableOfResults = [0, 0, 0];
  if (startingDateId.style.backgroundColor === "var(--main-color-red)") {
    startingDateId.style.backgroundColor = "var(--main-color-darklight)";
    tenureCalculatorStartingLabel.style.backgroundColor = "";
    tenureCalculatorStartingLabel.innerText = "Data rozpoczęcia pracy:";
  }
}
reset();

startingDateId.addEventListener("change", () => {
  let startingDate = new Date(startingDateId.valueAsDate);
  let endingDate = new Date(endingDateId.valueAsDate);
  if (startingDateId.style.backgroundColor === "var(--main-color-red)" && Math.sign(endingDate - startingDate) > 0) {
    startingDateId.style.backgroundColor = "var(--main-color-darklight)";
    tenureCalculatorStartingLabel.style.backgroundColor = "";
    tenureCalculatorStartingLabel.innerText = "Data rozpoczęcia pracy:";
  }
});

const tenureArrOfNums = [];
// Add button - calculates and shows added dates and results
const tenureBtnAdd = document.getElementById("tenure-calculator-btn-calculate");
tenureBtnAdd.addEventListener("click", () => {
  const tenureForm = document.getElementById("tenure-calculator-form");
  if (tenureForm.checkValidity()) {
    let startingDate = new Date(startingDateId.valueAsDate);
    let endingDate = new Date(endingDateId.valueAsDate);
    if (Math.sign(endingDate - startingDate) <= 0) {
      startingDateId.style.backgroundColor = "var(--main-color-red)";
      tenureCalculatorStartingLabel.style.backgroundColor = "var(--main-color-red)";
      tenureCalculatorStartingLabel.innerText = "Data rozpoczęcia musi być mniejsza niż data zakończenia!";
    } else {
      if (startingDate > endingDate) {
        const swap = startingDate;
        startingDate = endingDate;
        endingDate = swap;
      }
      const birthYear = startingDate.getFullYear();
      const february =
        (birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0 ? 29 : 28;
      const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let yearDiff = endingDate.getFullYear() - birthYear;
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

      const tenureOutputResult = document.getElementById("tenure-calculator-result");
      tenureTableOfResults[0] += yearDiff;
      tenureTableOfResults[1] += monthDiff;
      tenureTableOfResults[2] += dayDiff;
      tenureOutputResult.value =
        tenureTableOfResults[0] +
        " lat, " +
        tenureTableOfResults[1] +
        " miesięcy, " +
        tenureTableOfResults[2] +
        " dni";

      const tenureAddedDates = document.getElementById("tenure-calculator-added-dates");
      if (tenureAddedDates.style.display != "block") {
        tenureAddedDates.style.display = "block";
        tenureAddedDates.innerText = `${endingDate.getDate()}.${
          endingDate.getMonth() + 1
        }.${endingDate.getFullYear()} - ${startingDate.getDate()}.${
          startingDate.getMonth() + 1
        }.${startingDate.getFullYear()} = ${yearDiff} lat, ${monthDiff} miesięcy, ${dayDiff} dni`;
      } else {
        tenureAddedDates.innerText +=
          "\n" +
          `${endingDate.getDate()}.${
            endingDate.getMonth() + 1
          }.${endingDate.getFullYear()} - ${startingDate.getDate()}.${
            startingDate.getMonth() + 1
          }.${startingDate.getFullYear()} = ${yearDiff} lat, ${monthDiff} miesięcy, ${dayDiff} dni`;
      }
    }
  }
});

// Reset button
const tenureBtnReset = document.getElementById("tenure-calculator-btn-reset");
tenureBtnReset.addEventListener("click", reset);
