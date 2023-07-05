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

const form2 = document.getElementById("form2");
const form2Btn = document.getElementById("form2-btn");
form2Btn.addEventListener("click", () => {
  if (form2.checkValidity() == true) {
    const form2WhatPctOfNum = parseFloat(
      document.getElementById("form2-what-pct-of-num").value
    );
    const form2IsNum = parseFloat(
      document.getElementById("form2-is-num").value
    );
    const form2Result = document.getElementById("form2-result");
    form2Result.value = (form2IsNum / form2WhatPctOfNum) * 100 + "%";
  }
});
