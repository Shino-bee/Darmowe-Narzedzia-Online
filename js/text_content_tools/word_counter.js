// Calculate button - calculates the results and changes content (text and results) in the table and shows table if is not displayed
const wordCounterBtnCalculate = document.getElementsByClassName("program-form-btn-calculate")[0];
wordCounterBtnCalculate.addEventListener("click", () => {
  console.log("click");
  const programFormValidity = document.getElementsByClassName("program-form")[0].checkValidity();
  if (programFormValidity === true) {
    const tableOfResults = document.getElementById("program-table");
    /*     const unitToConvertTableNames = document.getElementsByClassName("unit-to-convert");
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
    } */
    if (tableOfResults.style.opacity == 0) {
      tableOfResults.style.transition = "0.8s ease-out";
      tableOfResults.style.marginTop = "15px";
      tableOfResults.style.height = "auto";
      tableOfResults.style.opacity = 1;
    }
  }
});

// Reset button - hide the table, reset label and sets default values
const unitConverterBtnReset = document.getElementsByClassName("program-form-btn-reset")[0];
unitConverterBtnReset.addEventListener("click", () => {
  const tableOfUnits = document.getElementById("program-table");
  tableOfUnits.style.transition = "0s";
  tableOfUnits.style.marginTop = "0px";
  tableOfUnits.style.height = "0";
  tableOfUnits.style.opacity = 0;
});
