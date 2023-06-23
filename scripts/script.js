//creating of the year dropdown menu

let dateDropdown = document.getElementById("date-dropdown");
let yearDateDropdown = document.getElementById("year-date-dropdown");
let currentYear = new Date().getFullYear();
let currentYear2 = new Date().getFullYear();
let earliestYear = 1970;

// Populate the dropdown with year options

while (currentYear >= earliestYear) {
  let dateOption = document.createElement("option");
  dateOption.text = currentYear;
  dateOption.value = currentYear;
  dateDropdown.add(dateOption);
  currentYear -= 1;

  let secondDateOption = document.createElement("option");
  secondDateOption.text = currentYear2;
  secondDateOption.value = currentYear2;
  yearDateDropdown.add(secondDateOption);
  currentYear2 -= 1;
}

//getting the year what was chosen by customer

let selectedYearNumber = 2023;
document.getElementById("date-dropdown").value = selectedYearNumber;

// getting the year what was chosen by customer
document
  .getElementById("date-dropdown")
  .addEventListener("change", function () {
    selectedYearNumber = Number(this.options[this.selectedIndex].text);
  });

//getting the year what was chosen by customer

let yearSummary = 2023;
document.getElementById("year-date-dropdown").value = yearSummary;

// getting the year what was chosen by customer
document
  .getElementById("year-date-dropdown")
  .addEventListener("change", function () {
    yearSummary = Number(this.options[this.selectedIndex].text);
  });

// getting the month what was chosen by customer
let currentMonthText = document.getElementById("dropdown").value;
document.getElementById("dropdown").addEventListener("change", function () {
  currentMonthText = this.options[this.selectedIndex].text;
});

//saving function
function savingTheData(year, month, data) {
  let storedData = JSON.parse(localStorage.getItem("Data")) || {};

  if (!storedData[selectedYearNumber]) {
    storedData[selectedYearNumber] = {};
  }

  if (!storedData[selectedYearNumber][currentMonthText]) {
    storedData[selectedYearNumber][currentMonthText] = {};
  }

  storedData[selectedYearNumber][currentMonthText] = data;

  localStorage.setItem("Data", JSON.stringify(storedData));
}

let income = document
  .getElementById("income")
  .addEventListener("change", function () {
    income = Number(this.value);
  });

let apartmentPayment = document
  .getElementById("apartment_payment")
  .addEventListener("change", function () {
    apartmentPayment = Number(this.value);
  });

let foodPayment = document
  .getElementById("food_payment")
  .addEventListener("change", function () {
    foodPayment = Number(this.value);
  });

let hobbyPayment = document
  .getElementById("hobby_payment")
  .addEventListener("change", function () {
    hobbyPayment = Number(this.value);
  });

let otherPayments = document
  .getElementById("other_payments")
  .addEventListener("change", function () {
    otherPayments = Number(this.value);
  });

// Function to save the selected date to localStorage

function lastChosenDate() {
  localStorage.setItem("Year", selectedYearNumber);
  localStorage.setItem("Month", currentMonthText);
}

// Function to save the selected year for summary to localStorage

function chosenYear() {
  localStorage.setItem("Year_Summary", yearSummary);
}

// Function to save the data and open charts.html

function saves() {
  let totalSavings =
    income - (apartmentPayment + foodPayment + hobbyPayment + otherPayments);
  savingTheData(selectedYearNumber, currentMonthText, {
    income,
    apartmentPayment,
    foodPayment,
    hobbyPayment,
    otherPayments,
    totalSavings,
  });
  window.open("charts.html", "_blank");
  lastChosenDate();
}

// Function to open year.html and save the selected year for summary

function yearCharts() {
  chosenYear();
  window.open("year.html", "_blank");
}
