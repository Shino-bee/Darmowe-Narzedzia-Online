const form1 = document.getElementById("form1");
const form1Btn = document.getElementById("form1-btn");

form1Btn.addEventListener("click", () => {
  if (form1.checkValidity() == true) {
    const form1WhatIsPct = parseFloat(
      document.getElementById("form1-what-is-pct").value
    );
    const form1OfNum = parseFloat(
      document.getElementById("form1-of-num").value
    );
    const form1Result = document.getElementById("form1-result");
    form1Result.value = (form1WhatIsPct / 100) * form1OfNum;
  }
});
