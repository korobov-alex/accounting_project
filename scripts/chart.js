// Get the year and month values from localStorage and convert the year to a number

let year = Number(localStorage.getItem("Year"));
let month = localStorage.getItem("Month");

// Retrieve the object string from localStorage and parse it into an object

var objString = localStorage.getItem("Data");
var obj = JSON.parse(objString);

// Extract the income and payment values from the object

var income = obj[year][month]["income"];
var apartment = obj[year][month]["apartmentPayment"];
var food = obj[year][month]["foodPayment"];
var hobby = obj[year][month]["hobbyPayment"];
var other = obj[year][month]["otherPayments"];

// Function for creating a chart using Chart.js library

function createChart(apartment, food, hobby, other) {
  let xValues = [
    "Apartment payment",
    "Food payment",
    "Hobby payment",
    "Other payments",
  ];
  let yValues = [apartment, food, hobby, other];
  let barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9"];

  // Create a new pie chart using Chart.js

  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Pie chart of percentage of your payments",
      },
    },
  });
}

// Function to delete the latest date and month from localStorage

function deleteLatestDateAndMonth() {
  localStorage.removeItem("Year");
  localStorage.removeItem("Month");
}

// Function to create advice based on the data

function createAdvice() {
  let adviceInfo = document.createElement("p");
  let allPayments = apartment + food + hobby + other;
  let currentMonthLeftover = income - allPayments;

  // Check if any of the calculations resulted in NaN and set them to 0 if true

  if (isNaN(allPayments)) {
    allPayments = 0;
  }
  if (isNaN(currentMonthLeftover)) {
    currentMonthLeftover = 0;
  }
  if (typeof income !== "number") {
    income = 0;
  }

  // Set the innerHTML of adviceInfo with the calculated values

  adviceInfo.innerHTML = `So, based on the data that you were provided we can summarize:
    <b>Your month salary:</b>${income}$.<br>
    <b>Your monthly payment (including all of your payments):</b> ${allPayments}$.<br>
    <b>The amount of the money that you can save:</b> ${currentMonthLeftover}$`;

  // Append the adviceInfo element to the '.general' container and apply a class

  let generalDiv = document.querySelector(".general");
  generalDiv.appendChild(adviceInfo);
  adviceInfo.classList.add("advice");

  // Create a title element displaying the month and insert it before the chart

  let titleMonth = document.createElement("p");
  titleMonth.innerHTML = `${localStorage.getItem("Month")}`;
  let currentChart = document.getElementById("myChart");
  currentChart.parentNode.insertBefore(titleMonth, currentChart);
  titleMonth.classList.add("month");
}

// Call the necessary functions to create the chart, generate advice, and delete date and month from localStorage

createChart(apartment, food, hobby, other);
createAdvice();
deleteLatestDateAndMonth();
