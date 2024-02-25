// Generaters 6 new random colors in RGB way, converts values from RGB to HEX/HSL and adds these values to 3 different arrays, displayes color and HEX/RGB/HSL values on the page
function generateNewColors() {
  const randomHexNums = [];
  const randomRgbNums = [];
  const randomHslNums = [];

  for (let i = 0; i < 6; i++) {
    // Random values from 0 to 255 for RGB (red, green, blue)
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // RGB to Hex
    if (red.toString(16).length == 1) randomHexNums.push("0" + red);
    else randomHexNums.push(red.toString(16));
    if (green.toString(16).length == 1) randomHexNums.push("0" + green);
    else randomHexNums.push(green.toString(16));
    if (blue.toString(16).length == 1) randomHexNums.push("0" + blue);
    else randomHexNums.push(blue.toString(16));

    // RGB
    randomRgbNums.push(red.toString(), green.toString(), blue.toString());

    // RGB to Hsl
    red /= 255;
    green /= 255;
    blue /= 255;

    let cmin = Math.min(red, green, blue);
    let cmax = Math.max(red, green, blue);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    if (delta == 0) h = 0;
    else if (cmax == red) h = ((green - blue) / delta) % 6;
    else if (cmax == green) h = (blue - red) / delta + 2;
    else h = (red - green) / delta + 4;

    h = Math.round(h * 60);
    if (h < 0) h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    randomHslNums.push(h.toString(), s.toString(), l.toString());
  }

  console.log("HEX:", randomHexNums);
  console.log("RGB:", randomRgbNums);
  console.log("HSL:", randomHslNums);

  const hexClasses = document.getElementsByClassName("hex");
  const rgbClasses = document.getElementsByClassName("rgb");
  const hslClasses = document.getElementsByClassName("hsl");
  const colorShowClasses = document.getElementsByClassName("colors-show");

  for (let i = 0; i < 6; i++) {
    hexClasses[i].innerText = `#${randomHexNums[i * 3 - 2]}${randomHexNums[i * 3 - 1]}${
      randomHexNums[i * 3]
    }`;
    rgbClasses[i].innerText = `(${randomRgbNums[i]}, ${randomRgbNums[i + 1]}, ${
      randomRgbNums[i + 2]
    })`;
    hslClasses[i].innerText = `(${randomHslNums[i]}, ${randomHslNums[i + 1]}%, ${
      randomHslNums[i + 2]
    }%)`;
    colorShowClasses[i].style.background = `rgb(${randomRgbNums[i]}, ${randomRgbNums[i + 1]}, ${
      randomRgbNums[i + 2]
    })`;
  }
}

// Call the function when the page is loaded
generateNewColors();

// Generate button - generates six new colors, displays their values in hex/rgb/hsl and changes the dislpayed color
const programFormBtnGenerate = document.getElementsByClassName("program-form-btn-calculate")[0];
programFormBtnGenerate.addEventListener("click", () => {
  generateNewColors();
});
