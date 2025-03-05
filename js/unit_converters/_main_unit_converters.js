import { length_converter } from "./length_converter.js";
import { weight_converter } from "./weight_converter.js";
import { temperature_converter } from "./temperature_converter.js";
import { area_converter } from "./area_converter.js";
import { volume_converter } from "./volume_converter.js";
import { time_converter } from "./time_converter.js";

// Currently loaded page
const path = window.location.pathname;
const page = path.split("/").pop();
let unitCoverterFunction = () => {};
if (page === "length_converter") {
  unitCoverterFunction = length_converter;
} else if (page === "weight_converter") {
  unitCoverterFunction = weight_converter;
} else if (page === "temperature_converter") {
  unitCoverterFunction = temperature_converter;
} else if (page === "area_converter") {
  unitCoverterFunction = area_converter;
} else if (page === "volume_converter") {
  unitCoverterFunction = volume_converter;
} else if (page === "time_converter") {
  unitCoverterFunction = time_converter;
}

// Changes the text in label of <select> tag to the selected value
const unitToConvertOptions = document.getElementById("program-form-unit");
unitToConvertOptions.addEventListener("change", () => {
  const unitToConvertLabel = document.getElementsByClassName("unit-to-convert")[0];
  const unitToConvertText = unitToConvertOptions.options[unitToConvertOptions.selectedIndex].text;
  unitToConvertLabel.innerText = unitToConvertText;
});

// Calculate button - calculates the results and changes content (text and results) in the table and shows table if is not displayed
const unitConverterBtnCalculate = document.getElementsByClassName("program-form-btn-calculate")[0];
unitConverterBtnCalculate.addEventListener("click", (event) => {
  event.preventDefault();
  const programFormValidity = document.getElementsByClassName("program-form")[0].checkValidity();
  if (programFormValidity === true) {
    const tableOfUnits = document.getElementById("program-table");
    const unitToConvertTableNames = document.getElementsByClassName("unit-to-convert");
    const unitToConvertTableValues = document.getElementsByClassName("unit-value-converted");
    const unitToConvertText = unitToConvertOptions.options[unitToConvertOptions.selectedIndex].text;
    const unitToConvertValueName =
      unitToConvertOptions.options[unitToConvertOptions.selectedIndex].value;
    const unitToConvertValue = document.getElementById("program-form-value").value;
    for (let i = 1; i < unitToConvertTableNames.length; i++) {
      unitToConvertTableNames[i].innerText = unitToConvertText;
    }
    for (let i = 0; i < unitToConvertTableValues.length; i++) {
      unitToConvertTableValues[i].innerText = unitCoverterFunction(
        i,
        unitToConvertValueName,
        unitToConvertValue
      );
    }
    if (tableOfUnits.style.opacity == 0) {
      tableOfUnits.style.transition = "0.8s ease-out";
      tableOfUnits.style.marginTop = "15px";
      tableOfUnits.style.height = "auto";
      tableOfUnits.style.opacity = 1;
    }
  }
});

// Reset button - hide the table, reset label and sets default values
const defaultUnitToConvertLabel = document.getElementsByClassName("unit-to-convert")[0].textContent;
const unitConverterBtnReset = document.getElementsByClassName("program-form-btn-reset")[0];
unitConverterBtnReset.addEventListener("click", () => {
  const unitToConvertLabel = document.getElementsByClassName("unit-to-convert")[0];
  const tableOfUnits = document.getElementById("program-table");
  unitToConvertLabel.innerText = defaultUnitToConvertLabel;
  tableOfUnits.style.transition = "0s";
  tableOfUnits.style.marginTop = "0px";
  tableOfUnits.style.height = "0";
  tableOfUnits.style.opacity = 0;
});
