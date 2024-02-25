// HEX/RGB/HSL classes
const hexClasses = document.getElementsByClassName("hex");
const rgbClasses = document.getElementsByClassName("rgb");
const hslClasses = document.getElementsByClassName("hsl");
const colorShowClasses = document.getElementsByClassName("colors-show");

// Generaters 6 new random colors in RGB way, converts values from RGB to HEX/HSL and adds these values to 3 different arrays, displayes color and HEX/RGB/HSL values on the page
function generateNewColors() {
  // Arrays for HEX/RGB/HSL random numbers
  const randomHexNums = [];
  const randomRgbNums = [];
  const randomHslNums = [];

  for (let i = 0; i < 6; i++) {
    // Random values from 0 to 255 for RGB (red, green, blue)
    const redRgb = Math.floor(Math.random() * 256);
    const greenRgb = Math.floor(Math.random() * 256);
    const blueRgb = Math.floor(Math.random() * 256);

    // RGB
    randomRgbNums.push([redRgb.toString(), greenRgb.toString(), blueRgb.toString()]);

    // RGB to Hex
    let redHex = redRgb.toString(16);
    let greenHex = greenRgb.toString(16);
    let blueHex = blueRgb.toString(16);

    if (redHex.length == 1) redHex = "0" + redHex;
    if (greenHex.length == 1) greenHex = "0" + greenHex;
    if (blueHex.length == 1) blueHex = "0" + blueHex;

    randomHexNums.push([redHex, greenHex, blueHex]);

    // RGB to Hsl
    const redHsl = redRgb / 255;
    const greenHsl = greenRgb / 255;
    const blueHsl = blueRgb / 255;

    let cmin = Math.min(redHsl, greenHsl, blueHsl);
    let cmax = Math.max(redHsl, greenHsl, blueHsl);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    if (delta == 0) h = 0;
    else if (cmax == redHsl) h = ((greenHsl - blueHsl) / delta) % 6;
    else if (cmax == greenHsl) h = (blueHsl - redHsl) / delta + 2;
    else h = (redHsl - greenHsl) / delta + 4;

    h = Math.round(h * 60);
    if (h < 0) h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(0);
    l = +(l * 100).toFixed(0);

    randomHslNums.push([h.toString(), s.toString(), l.toString()]);
  }

  // Displays generated random colors and their HEX/RGB/HSL code on page
  for (let i = 0; i < 6; i++) {
    hexClasses[i].innerText = `#${randomHexNums[i][0]}${randomHexNums[i][1]}${randomHexNums[i][2]}`;
    rgbClasses[
      i
    ].innerText = `${randomRgbNums[i][0]}, ${randomRgbNums[i][1]}, ${randomRgbNums[i][2]}`;
    hslClasses[
      i
    ].innerText = `${randomHslNums[i][0]}°, ${randomHslNums[i][1]}%, ${randomHslNums[i][2]}%`;
    colorShowClasses[
      i
    ].style.background = `rgb(${randomRgbNums[i][0]}, ${randomRgbNums[i][1]}, ${randomRgbNums[i][2]})`;
  }
}

// Calls the function when the page is loaded
generateNewColors();

// ------------------------------------------------------------

// Allows to copy the text to the clipboard after click on the HEX, RGB or HSL color code value
for (let i = 0; i < hexClasses.length; i++) {
  hexClasses[i].addEventListener("click", () =>
    navigator.clipboard.writeText(hexClasses[i].innerText)
  );
  rgbClasses[i].addEventListener("click", () =>
    navigator.clipboard.writeText(rgbClasses[i].innerText)
  );
  hslClasses[i].addEventListener("click", () =>
    navigator.clipboard.writeText(hslClasses[i].innerText)
  );
}

// Generate button - generates six new colors, displays their values in hex/rgb/hsl and changes the dislpayed color
const programFormBtnGenerate = document.getElementsByClassName("program-form-btn-calculate")[0];
programFormBtnGenerate.addEventListener("click", () => {
  generateNewColors();
});
