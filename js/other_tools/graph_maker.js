// Fnction updates selected chart depeding on selected chart or button pressed
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

// Default colors for chart elements
const backgroundColors = [
  "rgba(255, 99, 132, 0.5)",
  "rgba(54, 162, 235, 0.5)",
  "rgba(255, 255, 86, 0.5)",
  "rgba(255, 159, 64, 0.5)",
  "rgba(75, 255, 192, 0.5)",
  "rgba(153, 102, 255, 0.5)",
  "rgba(110, 72, 43, 0.5)",
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
  "rgb(110, 72, 43)",
  "rgb(219, 164, 245)",
  "rgb(72, 82, 54)",
  "rgb(195, 220, 136)",
  "rgb(210, 173, 126)",
  "rgb(95, 100, 124)",
  "rgb(199, 174, 100)",
  "rgb(192, 64, 222)",
  "rgb(127, 194, 142)",
];

// User editable data variables with default values
const chartLabels = ["Czerwony", "Niebieski", "Żółty", "Pomarańczowy", "Zielony", "Fioletowy"];
const chartData = [[65, 59, 70, 81, 60, 55]];

let chartDatasetsAmount = 1;
const chartDatasets = [
  {
    label: ` Zbiór danych ${chartDatasetsAmount}`,
    data: chartData[chartDatasetsAmount - 1],
  },
];

// Add labels and data to input tags
const inputLabels = document.getElementsByClassName("labels");
const inputData = document.getElementsByClassName("data");
console.log(inputLabels[0].value);
for (let i = 0; i < inputLabels.length; i++) {
  const label = inputLabels[i];
  const data = inputData[i];
  label.value = chartLabels[i];
  data.value = chartData[0][i];
}

// ---------------------------------------------------
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

// -------------------------------------------------
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

// "Add Dataset" button
const addDatasetButton = document.getElementById("add-dataset-btn");
addDatasetButton.addEventListener("click", () => {
  chartDatasetsAmount++;
  chartData.push(chartData[chartData.length - 1]);
  chartDatasets.push({
    label: ` Zbiór danych ${chartDatasetsAmount}`,
    data: chartData[chartDatasetsAmount - 1],
  });
  updateChart(selectedChart);
});

// "Remove dataset" button
const removeDatasetButton = document.getElementById("remove-dataset-btn");
removeDatasetButton.addEventListener("click", () => {
  if (chartDatasetsAmount > 1) {
    chartDatasetsAmount--;
    chartData.pop();
    chartDatasets.pop();
    updateChart(selectedChart);
  }
});

// "Add Data" button
const addDataButton = document.getElementById("add-data-btn");
addDataButton.addEventListener("click", () => {
  console.log("add data");
  for (let i = 0; i < chartData.length; i++) {
    const data = chartData[i][chartData[i].length - 1];
    chartLabels.push("Nowy");
    chartData[i].push(data);
  }
  updateChart(selectedChart);
});
