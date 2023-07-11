// 1st form button - what is (x)% of num (y)
const form1Btn = document.getElementById("form1-btn");
form1Btn.addEventListener("click", () => {
  const form1 = document.getElementById("form1");
  if (form1.checkValidity() == true) {
    const form1WhatIsPct = parseFloat(document.getElementById("form1-what-is-pct").value);
    const form1OfNum = parseFloat(document.getElementById("form1-of-num").value);
    const form1Result = document.getElementById("form1-result");
    form1Result.value = (form1WhatIsPct / 100) * form1OfNum;
  }
});

// 2nd form button - what % of num (x) is num (y)
const form2Btn = document.getElementById("form2-btn");
form2Btn.addEventListener("click", () => {
  const form2 = document.getElementById("form2");
  if (form2.checkValidity() == true) {
    const form2WhatPctOfNum = parseFloat(document.getElementById("form2-what-pct-of-num").value);
    const form2IsNum = parseFloat(document.getElementById("form2-is-num").value);
    const form2Result = document.getElementById("form2-result");
    form2Result.value = (form2IsNum / form2WhatPctOfNum) * 100 + "%";
  }
});

// 3rd form button - by how much % num (x) is different from num (y)
const form3Btn = document.getElementById("form3-btn");
form3Btn.addEventListener("click", () => {
  const form3 = document.getElementById("form3");
  if (form3.checkValidity() == true) {
    const form3ByHowMuchPct = parseFloat(document.getElementById("form3-by-how-much-pct").value);
    const form3IsDifferentFrom = parseFloat(
      document.getElementById("form3-is-different-from").value
    );
    const form3Result = document.getElementById("form3-result");
    form3Result.value =
      ((form3IsDifferentFrom - form3ByHowMuchPct) / form3ByHowMuchPct) * 100 + "%";
  }
});

// 4th form button - num (x) increase by (y)%
const form4Btn = document.getElementById("form4-btn");
form4Btn.addEventListener("click", () => {
  const form4 = document.getElementById("form4");
  if (form4.checkValidity() == true) {
    const form4Num = parseFloat(document.getElementById("form4-num").value);
    const form4IncreaseByPct = parseFloat(document.getElementById("form4-increase-by-pct").value);
    const form4Result = document.getElementById("form4-result");
    form4Result.value = form4Num * (1 + form4IncreaseByPct / 100);
  }
});

// 5th form button - num (x) reduce by (y)%
const form5Btn = document.getElementById("form5-btn");
form5Btn.addEventListener("click", () => {
  const form5 = document.getElementById("form5");
  if (form5.checkValidity() == true) {
    const form5Num = parseFloat(document.getElementById("form5-num").value);
    const form5ReduceByPct = parseFloat(document.getElementById("form5-reduce-by-pct").value);
    const form5Result = document.getElementById("form5-result");
    form5Result.value = form5Num * (1 - form5ReduceByPct / 100);
  }
});
