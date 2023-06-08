import { length_converter } from "./length_converter.js";

// Currently loaded page
const path = window.location.pathname;
const page = path.split("/").pop();
var unitCoverterFunction = () => {};

if (page === "length_converter.html") {
  unitCoverterFunction = length_converter();
}
console.log(unitCoverterFunction);

// Changes the text in label of select tag to the selected value
const unitToConvertOptions = document.getElementById("program-form-unit");
unitToConvertOptions.addEventListener("change", () => {
  const unitToConvertClass = document.getElementsByClassName("unit-to-convert");
  const unitToConvertText =
    unitToConvertOptions.options[unitToConvertOptions.selectedIndex].text;
  unitToConvertClass[0].innerText =
    unitToConvertText.charAt(0).toLowerCase() + unitToConvertText.slice(1);
});

// Calculate button - calculates the results and changes content (text and results) in the table and shows table if is not displayed
const unitConverBtnCalculate = document.getElementById(
  "program-form-btn-converter"
);
unitConverBtnCalculate.addEventListener("click", () => {
  const tableOfUnits = document.getElementById("program-table");
  const unitToConvertClass = document.getElementsByClassName("unit-to-convert");
  const unitToConvertText =
    unitToConvertOptions.options[unitToConvertOptions.selectedIndex].text;

  for (let i = 1; i < unitToConvertClass.length; i++) {
    unitToConvertClass[i].innerText = unitToConvertText;
  }

  if (tableOfUnits.style.opacity == 0) {
    tableOfUnits.style.transition = "0.8s ease-out";
    tableOfUnits.style.marginTop = "20px";
    tableOfUnits.style.height = "auto";
    tableOfUnits.style.opacity = 1;
  }
});

// Reset button - hide table
const unitConverBtnReset = document.getElementById("program-form-btn-reset");
unitConverBtnReset.addEventListener("click", () => {
  const tableOfUnits = document.getElementById("program-table");
  tableOfUnits.style.transition = "0s";
  tableOfUnits.style.marginTop = "0px";
  tableOfUnits.style.height = "0";
  tableOfUnits.style.opacity = 0;
});
