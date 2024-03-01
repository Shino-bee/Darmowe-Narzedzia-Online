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
  // Data's values - change value in chart when user types number in input (dynamically)
  for (let i = 0; i < chartDatasetsAmount; i++) {
    for (let j = 0; j < inputs.length; j++) {
      inputs[j].getElementsByTagName("input")[i + 1].addEventListener("input", () => {
        const inputValue = parseFloat(inputs[j].getElementsByTagName("input")[i + 1].value);
        chartData[i][j] = inputValue;
        updateChart(selectedChart);
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
    layout: {
      padding: {
        top: 10,
        bottom: 20,
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
    borderWidth: 2,
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
    // indexAxis: "y",
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
    tension: 0.1,
    pointRadius: 4,
  },
});

/* Initialize functionality for inputs */
updateInputs();

// ------------------------------------------------
// ---------------- BUTTONS & SELECT --------------
/* Select chart - display selected option, hide the rest and updates chart */
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

/* "Add Dataset" button */
const addDatasetButton = document.getElementById("add-dataset-btn");
addDatasetButton.addEventListener("click", () => {
  chartDatasetsAmount++;
  chartData.push([]);
  for (let i = 0; i < inputs.length; i++) {
    // Copies values from last dataset array to new pushed empty array
    const valueToCopy = parseFloat(inputs[i].lastElementChild.value);
    chartData[chartData.length - 1].push(valueToCopy);
    // Creates new input tag with copied value
    const inputTag = `<input type="number" name="data" class="data" value="${valueToCopy}"/>`;
    inputs[i].insertAdjacentHTML("beforeend", inputTag);
    // Change inputs container grid-template-column value from "0.5fr 1fr" to "1fr 1fr 1fr"
    const inputsGridTemplateColumns = inputs[i].style.gridTemplateColumns;
    if (inputsGridTemplateColumns !== "1fr 1fr 1fr") {
      inputs[i].style.gridTemplateColumns = "1fr 1fr 1fr";
    }
  }
  // Pushes to chart new dataset with label and copied values
  chartDatasets.push({
    label: ` Zbiór danych ${chartDatasetsAmount}`,
    data: chartData[chartDatasetsAmount - 1],
  });
  // Update chart and inputs
  updateChart(selectedChart);
  updateInputs();
});

/* "Remove dataset" button - removes last dataset, his label and inputs */
const removeDatasetButton = document.getElementById("remove-dataset-btn");
removeDatasetButton.addEventListener("click", () => {
  // Remove
  if (chartDatasetsAmount > 1) {
    chartDatasetsAmount--;
    chartData.pop();
    chartDatasets.pop();

    for (let i = 0; i < inputs.length; i++) {
      if (chartDatasetsAmount <= 1) {
        inputs[i].style.gridTemplateColumns = "0.5fr 1fr";
      }
      const lastDatasetInputs = inputs[i].lastElementChild;
      inputs[i].removeChild(lastDatasetInputs);
    }
    updateChart(selectedChart);
  }
});

/* "Add Data" button - adds to chart new data (copies last data value of last array), his label (with box-shadow color) and inputs */
const addDataButton = document.getElementById("add-data-btn");
addDataButton.addEventListener("click", () => {
  const data = chartData[chartData.length - 1][chartData[chartData.length - 1].length - 1];
  const labelBoxShadow =
    chartLabels.length >= borderColors.length
      ? borderColors[chartLabels.length % borderColors.length]
      : borderColors[chartLabels.length];
  // $$$$$$$$$$ CREATE INPUTS NUMBER DEPENDING ON chartDatasetsAmount
  const inputTag = `<div class="data-inputs">
  <input type="text" name="labels" class="labels" autocomplete="off" value="Nowy" style="box-shadow: 0px 0px 10px ${labelBoxShadow};"/>
  <input type="number" name="data" class="data" value="${data}"/>
</div>`;
  chartLabels.push("Nowy");
  // $$$$$$$$$$$
  console.log(data);
  inputsContainer.insertAdjacentHTML("beforeend", inputTag);
  // $$$$$$$$$$$
  for (let i = 0; i < chartDatasetsAmount - 1; i++) {
    console.log(inputs[inputs.length - 2]);
    inputs[inputs.length - 1].insertAdjacentHTML(
      "beforeend",
      `<input type="number" name="data" class="data" value="${data}"/>`
    );
  }

  updateChart(selectedChart);
  updateInputs();
});

/* "Remove data" button - removes last data, his label and inputs */
const removeDataButton = document.getElementById("remove-data-btn");
removeDataButton.addEventListener("click", () => {
  if (chartData[chartData.length - 1].length > 1) {
    chartLabels.pop();
    chartData[0].pop();
    inputsContainer.removeChild(inputsContainer.lastElementChild);
    updateChart(selectedChart);
  }
});
