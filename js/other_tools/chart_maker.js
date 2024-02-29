// Function updates selected chart depeding on selected chart or button pressed
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

// Function updates functionality for dynamic display values in chart while user entered input values (label and data)
function updateInputs() {
  for (let i = 0; i < inputLabels.length; i++) {
    // Data's labels - change value in chart when user types input (dynamically)
    inputLabels[i].addEventListener("input", () => {
      chartLabels[i] = inputLabels[i].value;
      updateChart(selectedChart);
    });

    // Data's values - change value in chart when user types input (dynamically)
    inputData[i].addEventListener("input", () => {
      console.log(inputData[i].value);
      console.log(inputsContainer);
      chartData[chartData.length - 1][i] = parseFloat(inputData[i].value);
      updateChart(selectedChart);
    });
  }
}

// -----------GLOBAL VARIABLES----------
// USER DATA initialize
const chartLabels = ["Czerwony", "Niebieski", "Żółty", "Pomarańczowy", "Zielony", "Fioletowy"];
const chartData = [[65, 59, 70, 81, 60, 55]];

let chartDatasetsAmount = 1;
const chartDatasets = [
  {
    label: ` Zbiór danych ${chartDatasetsAmount}`,
    data: chartData[0],
  },
];

// Initialize INPUT LABELS AND TAGS and adds default values
const inputsContainer = document.getElementById("data-inputs-container");
const inputs = document.getElementsByClassName("data-inputs");
const inputLabels = document.getElementsByClassName("labels");
const inputData = document.getElementsByClassName("data");
for (let i = 0; i < inputLabels.length; i++) {
  const label = inputLabels[i];
  const data = inputData[i];
  label.value = chartLabels[i];
  data.value = chartData[0][i];
}

// Default COLORS for chart elements
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

// -------------------CHARTS---------------------------
// Pie Chart
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

// Bar Chart
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

// Line Chart
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

// Initialize functionality
updateInputs();

// -------------------------------------------------
// ---------------BUTTONS & SELECT------------------
// Select chart - display selected option and hide the rest
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

// "Add Dataset" button - adds to chart new dataset (copies last data array), his label and inputs
const addDatasetButton = document.getElementById("add-dataset-btn");
addDatasetButton.addEventListener("click", () => {
  console.log(chartData);
  chartDatasetsAmount++;
  chartData.push(chartData[chartData.length - 1]);
  chartDatasets.push({
    label: ` Zbiór danych ${chartDatasetsAmount}`,
    data: chartData[chartDatasetsAmount - 1],
  });

  for (let i = 0; i < inputs.length; i++) {
    const inputTag = `<input type="number" name="data" class="data" value="${
      chartData[chartData.length - 1][i]
    }"/>`;
    inputs[i].style.gridTemplateColumns = "1fr 1fr 1fr";
    inputs[i].insertAdjacentHTML("beforeend", inputTag);
  }
  updateChart(selectedChart);
  updateInputs();
});

// "Remove dataset" button - removes last dataset, his label and inputs
const removeDatasetButton = document.getElementById("remove-dataset-btn");
removeDatasetButton.addEventListener("click", () => {
  if (chartDatasetsAmount > 1) {
    chartDatasetsAmount--;
    chartData.pop();
    chartDatasets.pop();
    for (let i = 0; i < inputs.length; i++) inputs[i].removeChild(inputs[i].lastElementChild);
    updateChart(selectedChart);
  }
});

// "Add Data" button - adds to chart new data (copies last data value of last array), his label (with box-shadow color) and inputs
const addDataButton = document.getElementById("add-data-btn");
addDataButton.addEventListener("click", () => {
  const data = chartData[chartData.length - 1][chartData[chartData.length - 1].length - 1];
  const labelBoxShadow =
    chartLabels.length >= borderColors.length
      ? borderColors[chartLabels.length % borderColors.length]
      : borderColors[chartLabels.length];
  // console.log(labelBoxShadow);
  // console.log(chartLabels.length, );
  // if (chartLabels.length <= borderColors.length) borderColors[borderColors.length];
  // else false;
  const inputTag = `<div class="data-inputs">
  <input type="text" name="labels" class="labels" autocomplete="off" value="Nowy" style="box-shadow: 0px 0px 10px ${labelBoxShadow};"/>
  <input type="number" name="data" class="data" value="${data}"/>
</div>`;
  chartLabels.push("Nowy");
  chartData[0].push(data);
  inputsContainer.insertAdjacentHTML("beforeend", inputTag);
  updateChart(selectedChart);
  updateInputs();
});

// "Remove data" button - removes last data, his label and inputs
const removeDataButton = document.getElementById("remove-data-btn");
removeDataButton.addEventListener("click", () => {
  if (chartData[chartData.length - 1].length > 1) {
    chartLabels.pop();
    chartData[0].pop();
    inputsContainer.removeChild(inputsContainer.lastElementChild);
    updateChart(selectedChart);
  }
});
