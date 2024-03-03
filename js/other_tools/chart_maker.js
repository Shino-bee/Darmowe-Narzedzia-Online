// -----------------------------------------------
// ------------------ FUNCTIONS ------------------
/* Function updates selected chart depeding on selected chart or button pressed (show values on selected chart) */
function updateChart(chart) {
  switch (chart) {
    case "pie chart":
      pieChart.update();
      break;
    case "bar chart":
      barChart.update();
      break;
    case "line chart":
      lineChart.update();
      break;
  }
}

/* Function updates/adds functionality for dynamic display values in chart while user entered input values (label and data) */
function updateInputs() {
  // Data's labels - change value in chart when user types text in input (dynamically)
  for (let i = 0; i < inputLabels.length; i++) {
    inputLabels[i].addEventListener("input", () => {
      chartLabels[i] = inputLabels[i].value;
      updateChart(selectedChart);
    });
  }
  // Data's values - change value in chart when user types number in input (dynamically) and does not allow the user to enter number larger than maxlength
  for (let i = 0; i < chartDatasetsAmount; i++) {
    for (let j = 0; j < inputs.length; j++) {
      inputs[j].getElementsByTagName("input")[i + 1].addEventListener("input", () => {
        const input = inputs[j].getElementsByTagName("input")[i + 1];
        if (input.value.length > input.maxLength)
          input.value = input.value.slice(0, input.maxLength);
        chartData[i][j] = parseFloat(input.value);
        updateChart(selectedChart);
      });
      // Prevents ["+", "-", "e"] characters from being entered in input
      inputs[j].getElementsByTagName("input")[i + 1].addEventListener("keydown", (event) => {
        if (["+", "-", "e"].includes(event.key)) event.preventDefault();
      });
    }
  }
}

// ------------------------------------------------
// --------------- GLOBAL VARIABLES ---------------
/* USER DATA initialize */
const chartLabels = ["Czerwony", "Niebieski", "Żółty", "Pomarańczowy", "Zielony", "Fioletowy"];
const chartData = [[65, 59, 70, 81, 60, 55]];

let chartDatasetsAmount = 1;
const chartDatasets = [
  {
    label: ` Zbiór danych ${chartDatasetsAmount}`,
    data: chartData[0],
  },
];

/* Initialize INPUT LABELS AND TAGS and adds default values */
const inputsContainer = document.getElementById("data-inputs-container");
const inputs = document.getElementsByClassName("data-inputs");
const inputLabels = document.getElementsByClassName("labels");
const inputData = document.getElementsByClassName("data");
for (let i = 0; i < inputLabels.length; i++) {
  inputLabels[i].value = chartLabels[i];
  inputData[i].value = chartData[0][i];
  inputs[i].style.gridTemplateColumns = "0.5fr 1fr";
}

/* Default COLORS for chart elements */
const backgroundColors = [
  "rgba(255, 99, 132, 0.5)",
  "rgba(54, 162, 235, 0.5)",
  "rgba(255, 255, 86, 0.5)",
  "rgba(255, 159, 64, 0.5)",
  "rgba(75, 255, 192, 0.5)",
  "rgba(153, 102, 255, 0.5)",
  "rgba(121, 92, 52, 0.5)",
  "rgba(219, 164, 245, 0.5)",
  "rgba(72, 82, 54, 0.5)",
  "rgba(195, 220, 136, 0.5)",
  "rgba(210, 173, 126, 0.5)",
  "rgba(95, 100, 124, 0.5)",
  "rgba(199, 174, 100, 0.5)",
  "rgba(192, 64, 222, 0.5)",
  "rgba(127, 194, 142, 0.5)",
];
const borderColors = [
  "rgb(255, 99, 132)",
  "rgb(54, 162, 235)",
  "rgb(255, 255, 86)",
  "rgb(255, 159, 64)",
  "rgb(75, 255, 192)",
  "rgb(153, 102, 255)",
  "rgb(121, 92, 52)",
  "rgb(219, 164, 245)",
  "rgb(72, 82, 54)",
  "rgb(195, 220, 136)",
  "rgb(210, 173, 126)",
  "rgb(95, 100, 124)",
  "rgb(199, 174, 100)",
  "rgb(192, 64, 222)",
  "rgb(127, 194, 142)",
];

// ------------------------------------------------
// ------------------- CHARTS ---------------------
/* Pie Chart */
const pieChartId = document.getElementById("pie-chart");

const pieChart = new Chart(pieChartId, {
  type: "doughnut",
  data: {
    labels: chartLabels,
    datasets: chartDatasets,
  },

  options: {
    backgroundColor: backgroundColors,
    borderWidth: 1,
    hoverOffset: 5,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
        right: 5,
        bottom: 20,
        left: 5,
      },
    },
  },
});

/* Bar Chart */
const barChartId = document.getElementById("bar-chart");

const barChart = new Chart(barChartId, {
  type: "bar",
  data: {
    labels: chartLabels,
    datasets: chartDatasets,
  },

  options: {
    backgroundColor: backgroundColors,
    borderColor: borderColors,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
        bottom: 20,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

/* Line Chart */
const lineChartId = document.getElementById("line-chart");

const lineChart = new Chart(lineChartId, {
  type: "line",
  data: {
    labels: chartLabels,
    datasets: chartDatasets,
  },

  options: {
    backgroundColor: backgroundColors,
    borderColor: borderColors,
    borderWidth: 1,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
        bottom: 20,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    tension: 0.15,
    pointRadius: 4,
  },
});

/* Initialize functionality for inputs */
updateInputs();

// ------------------------------------------------
// ---------------- BUTTONS & SELECT --------------
/* Select chart - displays selected option, hides the rest and updates chart */
const selectChart = document.getElementById("select-chart");
let selectedChart = selectChart[selectChart.selectedIndex].value;
selectChart.addEventListener("change", () => {
  const pieChartContainer = document.getElementById("pie-chart-container");
  const barChartContainer = document.getElementById("bar-chart-container");
  const lineChartContainer = document.getElementById("line-chart-container");
  selectedChart = selectChart[selectChart.selectedIndex].value;
  if (selectedChart == "pie chart") {
    pieChartContainer.style.display = "flex";
    barChartContainer.style.display = "none";
    lineChartContainer.style.display = "none";
  } else if (selectedChart == "bar chart") {
    pieChartContainer.style.display = "none";
    barChartContainer.style.display = "flex";
    lineChartContainer.style.display = "none";
  } else if (selectedChart == "line chart") {
    pieChartContainer.style.display = "none";
    barChartContainer.style.display = "none";
    lineChartContainer.style.display = "flex";
  }
  updateChart(selectedChart);
});

/* --- DATASET ADD/REMOVE BUTTONS ---*/
/* "Add Dataset" button */
const addDatasetButton = document.getElementById("add-dataset-btn");
addDatasetButton.addEventListener("click", () => {
  chartDatasetsAmount++;
  chartData.push([]);
  for (let i = 0; i < inputs.length; i++) {
    // Copies values from last dataset array to new pushed empty data array
    const valueToCopy = parseFloat(inputs[i].lastElementChild.value);
    chartData[chartData.length - 1].push(valueToCopy);
    // Creates new input tag with copied value
    const inputTag = `<input type="number" name="data" class="data" maxlength="15" value="${valueToCopy}"/>`;
    inputs[i].insertAdjacentHTML("beforeend", inputTag);
    // Change inputs container grid-template-column value from "0.5fr 1fr" to "1fr 1fr 1fr"
    inputs[i].style.gridTemplateColumns = "1fr 1fr 1fr";
  }
  // Pushes to chart new dataset with label and copied values
  chartDatasets.push({
    label: ` Zbiór danych ${chartDatasetsAmount}`,
    data: chartData[chartDatasetsAmount - 1],
  });
  // Updates selected chart and inputs
  updateChart(selectedChart);
  updateInputs();
});

/* "Remove dataset" button */
const removeDatasetButton = document.getElementById("remove-dataset-btn");
removeDatasetButton.addEventListener("click", () => {
  // Remove last data array and dataset
  if (chartDatasetsAmount > 1) {
    chartDatasetsAmount--;
    chartData.pop();
    chartDatasets.pop();
    // Removes last inputs in every input container
    for (let i = 0; i < inputs.length; i++) {
      const lastDatasetInputs = inputs[i].lastElementChild;
      inputs[i].removeChild(lastDatasetInputs);
    }
    // Change inputs container grid-template-column value from "1fr 1fr 1fr" to "0.5fr 1fr" if datasets amount is less than 2
    if (chartDatasetsAmount < 2) {
      for (let i = 0; i < inputs.length; i++) inputs[i].style.gridTemplateColumns = "0.5fr 1fr";
    }
    // Update selected chart
    updateChart(selectedChart);
  }
});

/* --- DATA ADD/REMOVE BUTTONS ---*/
/* "Add Data" button */
const addDataButton = document.getElementById("add-data-btn");
addDataButton.addEventListener("click", () => {
  // Copies to new array data from last dataset
  const data = [];
  const lastInputContainer = inputs[inputs.length - 1].children;
  for (let i = 1; i < lastInputContainer.length; i++)
    data.push(parseFloat(lastInputContainer[i].value));
  // Adds box-shadow to label (start from the beginning if the colors have run out in array of colors)
  const labelBoxShadow =
    chartLabels.length >= borderColors.length
      ? borderColors[chartLabels.length % borderColors.length]
      : borderColors[chartLabels.length];
  // Adds new input tags container with label input
  const inputTag = `<div class="data-inputs"><input type="text" name="labels" class="labels" autocomplete="off" maxlength="35" value="Nowy" style="box-shadow: 0px 0px 10px ${labelBoxShadow};"/></div>`;
  inputsContainer.insertAdjacentHTML("beforeend", inputTag);
  // Change input container grid-template-column value from "1fr 1fr 1fr" to "0.5fr 1fr" if datasets amount is less than 2
  if (chartDatasetsAmount < 2) inputs[inputs.length - 1].style.gridTemplateColumns = "0.5fr 1fr";
  // Pushes last copied values of datasets to chart data & adds new data inputs (depending on amount of datasets)
  for (let i = 0; i < chartDatasetsAmount; i++) {
    chartData[i].push(data[i]);
    inputs[inputs.length - 1].insertAdjacentHTML(
      "beforeend",
      `<input type="number" name="data" class="data" maxlength="15" value="${data[i]}"/>`
    );
  }
  // Adds new label (legend) to the chart
  chartLabels.push("Nowy");
  // Updates selected chart and inputs
  updateChart(selectedChart);
  updateInputs();
});

/* "Remove data" button */
const removeDataButton = document.getElementById("remove-data-btn");
removeDataButton.addEventListener("click", () => {
  if (chartData[chartData.length - 1].length > 1) {
    // Removes last label in chart
    chartLabels.pop();
    // Removes last input container
    inputsContainer.removeChild(inputsContainer.lastElementChild);
    // Removes last value in data array
    for (let i = 0; i < chartData.length; i++) chartData[i].pop();
    // Update selected chart
    updateChart(selectedChart);
  }
});

/* --- FILE MANAGMENT BUTTONS ---*/
/* "Take a screenshot" button */
const screenshotButton = document.getElementById("screenshot-btn");
screenshotButton.addEventListener("click", () => {
  // Select chart image depending on the selected chart
  let chartImage = document.getElementsByTagName("canvas");
  switch (selectedChart) {
    case "pie chart":
      chartImage = chartImage[0];
      break;
    case "bar chart":
      chartImage = chartImage[1];
      break;
    case "line chart":
      chartImage = chartImage[2];
      break;
  }
  // Create canvas object
  const canvas = document.createElement("canvas");
  canvas.width = chartImage.width;
  canvas.height = chartImage.height;
  // Get drawing context
  const ctx = canvas.getContext("2d");
  // Draw a picture on canvas
  ctx.drawImage(chartImage, 0, 0);
  // Get data in the form of a URL (PNG)
  const dataUrl = canvas.toDataURL("image/png");
  // Create a download link item
  const link = document.createElement("a");
  link.download = "wykres.png";
  link.href = dataUrl;
  link.click();
});

/* "Save data file" button */
const saveDataFileButton = document.getElementById("save-data-file-btn");
saveDataFileButton.addEventListener("click", () => {
  console.log("SAVE");
});

/* "Upload data file" button */
const uploadDataFileButton = document.getElementById("upload-data-file-btn");
uploadDataFileButton.addEventListener("click", () => {
  const fileInput = document.getElementById("fileInput");
  // When the button is clicked, it simulates a click on a hidden input element
  fileInput.click();
  // Event handling when the user selects a file
  fileInput.addEventListener("change", function () {
    // Downloads the first selected file
    const file = fileInput.files[0];
    // Checks if the file has been selected
    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (fileExtension === "txt") {
        // Creates FileReader object
        const reader = new FileReader();
        // Event handling after file loading is finished
        reader.onload = function (event) {
          // Download the contents of the file
          const fileContent = event.target.result;
          // Cleans data and labels arrays
          chartData.splice(0, chartData.length);
          chartLabels.splice(0, chartLabels.length);
          // Tutaj możesz wykonać operacje na zawartości pliku
          const labelsAndData = fileContent.split("\n");
          if (labelsAndData.length === 2) {
            try {
              const labelsFromFile = JSON.parse(labelsAndData[0]);
              const dataFromFile = JSON.parse(labelsAndData[1]);
            } catch (error) {
              console.log(error);
            }

            const dataFromFile = labelsAndData[1].split;
            console.log(labelsFromFile);
            console.log(dataFromFile);
            for (let i = 0; i < labelsFromFile.length; i++) {
              console.log(labelsFromFile[i]);
              chartLabels.push(labelsFromFile[i]);
            }
            console.log(chartLabels);
          } else {
            alert("Plik tekstowy jest nieprawidłowy!");
          }
        };
        // Wczytujemy zawartość pliku jako tekst
        reader.readAsText(file);
      } else {
        alert("Wybierz plik o rozszerzeniu .txt!");
      }
    }
  });
});
