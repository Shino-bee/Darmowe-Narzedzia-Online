// // Pie Chart
// const pieChart = document.getElementById("pie-chart-canvas");

// new Chart(pieChart, {
//   type: "doughnut",
//   data: {
//     labels: [
//       'Red',
//       'Blue',
//       'Yellow'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [300, 50, 100],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)'
//       ],
//       hoverOffset: 4
//     }]
//   },
// });

// Column Chart
const columnChart = document.getElementById("column-chart-canvas");

new Chart(columnChart, {
  type: "bar",
  data: {
    labels: ["Czerwony", "Pomarańczowy", "Żółty", "Zielony", "Niebieski", "Fioletowy"],
    datasets: [
      {
        label: "Zbiór danych 1",
        data: [65, 59, 70, 81, 60, 55],
      },
      {
        label: "Zbiór danych 2",
        data: [65, 59, 70, 81, 60, 55],
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    backgroundColor: [
      "rgba(255, 99, 132, 0.4)",
      "rgba(255, 159, 64, 0.4)",
      "rgba(255, 255, 86, 0.4)",
      "rgba(75, 255, 192, 0.4)",
      "rgba(54, 162, 235, 0.4)",
      "rgba(153, 102, 255, 0.4)",
      "rgba(110, 72, 43, 0.4)",
      "rgba(219, 164, 245, 0.4)",
      "rgba(72, 82, 54, 0.4)",
      "rgba(195, 220, 136, 0.4)",
      "rgba(210, 173, 126, 0.4)",
      "rgba(95, 100, 124, 0.4)",
      "rgba(199, 174, 100, 0.4)",
      "rgba(192, 64, 222, 0.4)",
      "rgba(127, 194, 142, 0.4)",
    ],
    borderColor: [
      "rgb(255, 99, 132)",
      "rgb(255, 159, 64)",
      "rgb(255, 255, 86)",
      "rgb(75, 255, 192)",
      "rgb(54, 162, 235)",
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
    ],
    borderWidth: 1,
  },
});
