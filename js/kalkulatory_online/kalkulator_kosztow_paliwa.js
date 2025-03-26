// Calculate button - calculates and shows result
const fuelCostBtnCalculate = document.getElementById("fuel-cost-calculator-btn-calculate");
fuelCostBtnCalculate.addEventListener("click", (event) => {
  event.preventDefault();
  const fuelCostForm = document.getElementById("fuel-cost-calculator-form");
  if (fuelCostForm.checkValidity()) {
    const fuelCostInput1 = document.getElementById("fuel-cost-calculator-input1").value;
    const fuelCostInput2 = document.getElementById("fuel-cost-calculator-input2").value;
    const fuelCostInput3 = document.getElementById("fuel-cost-calculator-input3").value;
    const fuelCostResut1 = document.getElementById("fuel-cost-calculator-result1");
    const fuelCostResut2 = document.getElementById("fuel-cost-calculator-result2");
    fuelCostResut1.value =
      ((fuelCostInput2 / 100) * fuelCostInput1 * fuelCostInput3).toFixed(2) + " zł";
    fuelCostResut2.value = ((fuelCostInput1 / 100) * fuelCostInput2).toFixed(2) + " L";
  }
});
