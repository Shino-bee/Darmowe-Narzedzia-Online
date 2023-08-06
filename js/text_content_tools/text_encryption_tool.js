// Execute button - changes the text and displays it
const programFormBtnExecute = document.getElementsByClassName("program-form-btn-calculate")[0];
programFormBtnExecute.addEventListener("click", () => {
  const inputRot13 = document.getElementById("input-rot13").value;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let changedText = "";
  for (let i = 0; i < inputRot13.length; i++) {
    const char = inputRot13[i];
    if (alphabet.includes(char.toLowerCase())) {
      let index = alphabet.indexOf(char.toLowerCase()) + 13;
      if (index >= 26) {
        index -= 26;
      }
      if (char === char.toUpperCase()) {
        changedText += alphabet[index].toUpperCase();
      } else {
        changedText += alphabet[index];
      }
    } else {
      changedText += char;
    }
  }
  console.log(changedText);
});
