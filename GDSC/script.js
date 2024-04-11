function verification() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "") {
    document.getElementById("jsInput").innerHTML = "Name cannot be empty";
    return false;
  }
  if (email.trim() === "") {
    document.getElementById("jsInput").innerHTML =
      "Email cannot be empty";
    return false;
  }
  if (message.trim() === "") {
    document.getElementById("jsInput").innerHTML =
      "Message cannot be empty";
    return false;
  }
  document.getElementById("jsInput").innerHTML = "Response submitted successfully!";
}

document
  .getElementById("submit-btn")
  .addEventListener("click", function () {
    verification();
});


// for data visualization

const data = {
  labels: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"],
  datasets: [
    {
      label: "Run Tally",
      data: [10000, 9000, 8000, 7000, 6000], // Example run tallies
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

// Function to render the chart
function renderChart() {
  const ctx = document.getElementById("barChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Event listener for the button click
document
  .getElementById("toggleButton")
  .addEventListener("click", function () {
    const chartContainer = document.getElementById("chartContainer");
    const isHidden = chartContainer.style.display === "none";
    chartContainer.style.display = isHidden ? "block" : "none";
    if (isHidden) {
      renderChart();
    }
  });