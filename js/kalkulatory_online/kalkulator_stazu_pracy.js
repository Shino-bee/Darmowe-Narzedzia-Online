/* ---------------- GLOBAL VARIABLES ----------------- */
const startingDateId = document.getElementById("tenure-calculator-input1");
const endingDateId = document.getElementById("tenure-calculator-input2");
const tenureCalculatorStartingLabel = document.getElementById("tenure-calculator-starting-label");
const tenureAddedDates = document.getElementById("tenure-calculator-added-dates");
const removeTenureDataRowBtn = document.getElementsByClassName("remove-tenure-data-row");
let tenureArrayOfResults = [0, 0, 0]; // years, months, days

/* -------------------- FUNCTIONS -------------------- */
/* Function calculates the difference between two dates (adds or subtracts) and displays the results on the page */
function calculateDiffBetweenDates(addOrSubtract) {
  // Initialize
  let startingDate = new Date();
  let endingDate = new Date();

  // Add or subtract dates assignment
  if (addOrSubtract === "add") {
    // Add
    startingDate = new Date(startingDateId.valueAsDate);
    endingDate = new Date(endingDateId.valueAsDate);
  } else {
    // Substract
    startingDate = new Date(addOrSubtract[0]);
    endingDate = new Date(addOrSubtract[1]);
  }

  // Show error status if startingDate is higher than endingDate (and when the date is added)
  if (Math.sign(endingDate - startingDate) <= 0 && addOrSubtract === "add") {
    startingDateId.style.backgroundColor = "var(--main-color-red)";
    tenureCalculatorStartingLabel.innerText =
      "Data rozpoczęcia musi być mniejsza niż data zakończenia!";
  } else {
    // Calculate difference between dates
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
    if (addOrSubtract === "add") {
      // Add
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
    } else {
      // Substract
      tenureArrayOfResults[0] -= yearDiff;
      tenureArrayOfResults[1] -= monthDiff;
      tenureArrayOfResults[2] -= dayDiff;
      if (tenureArrayOfResults[2] < 0) {
        tenureArrayOfResults[2] += 31;
        tenureArrayOfResults[1] -= 1;
      }
      if (tenureArrayOfResults[1] < 0) {
        tenureArrayOfResults[1] += 12;
        tenureArrayOfResults[0] -= 1;
      }
    }

    // Print sum of results (years + months + days)
    const tenureOutputResult = document.getElementById("tenure-calculator-result");
    tenureOutputResult.value =
      tenureArrayOfResults[0] +
      " lat, " +
      tenureArrayOfResults[1] +
      " miesięcy, " +
      tenureArrayOfResults[2] +
      " dni";

    // Print added dates (startingDate, endingDate) and difference between them in result row with btn
    if (addOrSubtract === "add") {
      const tenureAddedDates = document.getElementById("tenure-calculator-added-dates");
      const tenureAddedDatesContent = `od ${startingDate.getDate()}.${
        startingDate.getMonth() + 1
      }.${startingDate.getFullYear()} do ${endingDate.getDate()}.${
        endingDate.getMonth() + 1
      }.${endingDate.getFullYear()} = ${yearDiff} lat, ${monthDiff} miesięcy, ${dayDiff} dni`;
      const tenureRowOfResults = `<p>${tenureAddedDatesContent}&emsp13;<button type="button" class="remove-tenure-data-row">&#10006;</button></p>`;
      tenureAddedDates.insertAdjacentHTML("beforeend", tenureRowOfResults);
    }
  }
}

/* Reset result rows container and reset inputs to default values */
function reset() {
  tenureAddedDates.innerHTML = "";
  tenureArrayOfResults = [0, 0, 0];
  if (startingDateId.style.backgroundColor === "var(--main-color-red)") {
    startingDateId.style.backgroundColor = "var(--main-color-darklight)";
    tenureCalculatorStartingLabel.style.backgroundColor = "";
    tenureCalculatorStartingLabel.innerText = "Data rozpoczęcia pracy:";
  }
}

/* ----------- CHANGE DATE EVENT & BUTTONS ----------- */
/* Hide error status if changed startingDate is less than endingDate */
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

/* Add button - calculates and shows added dates and result of the difference between them */
const tenureBtnAdd = document.getElementById("tenure-calculator-btn-calculate");
tenureBtnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  const tenureForm = document.getElementById("tenure-calculator-form");
  if (tenureForm.checkValidity()) calculateDiffBetweenDates("add");
});

/* Reset button */
const tenureBtnReset = document.getElementById("tenure-calculator-btn-reset");
tenureBtnReset.addEventListener("click", reset);

/* Remove tenure data row button */
tenureAddedDates.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-tenure-data-row")) {
    // Regex that matches date formats like dd.mm.yyyy
    const re = /\b\d{1,2}\.\d{1,2}\.\d{4}\b/g;
    // Find the parent (p) of the button
    const parent = event.target.parentNode;
    // Takes the dates (start date and end date) from the clicked row and changes their format to yyyy.mm.dd
    const datesToSubtract = parent.textContent.match(re).map((date) => {
      const parts = date.split(".");
      return `${parts[2]}.${parts[1]}.${parts[0]}`;
    });
    // Subtract the differences between the dates
    calculateDiffBetweenDates(datesToSubtract);
    // Remove the parent (p)
    parent.remove();
  }
});
