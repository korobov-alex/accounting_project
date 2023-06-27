

// Get the year value from localStorage and convert it to a number

let year = Number(localStorage.getItem("Year_Summary"));

// Retrieve the object string from localStorage and parse it into an object

var objString = localStorage.getItem("Data");
var obj = JSON.parse(objString);

// Array of month names

let monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//checking the presence of an object for the needed year

if (obj === null) {
    alert(`There is no data for the ${year} year. Please, provide it first.`)
    window.close()
  }


// Get the month data for the year

const monthData = obj[year];

// Function to get the data for a specific month
function getMonthData(month) {
  if (monthData[month]?.totalSavings === null) {
    monthData[month].totalSavings = 0;
  }
  if (!(month in monthData)) {
    monthData[month] = { totalSavings: 0 };
  }
  return monthData[month];
}

// Create an array of savings values for each month

const savingsArray = monthArray.map(
  (month) => getMonthData(month).totalSavings
);
console.log(savingsArray);

// Function to create a chart for the year

function createYearChart(arr) {
  let xValues = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let yValues = [...arr];

  let barColors = [
    "#00aba9",
    "#00aba9",
    "#00aba9",
    "#00aba9",
    "#00aba9",
    "#00aba9",
    "#00aba9",
    "#00aba9",
    "#00aba9",
    "#00aba9",
    "#00aba9",
    "#00aba9",
  ];

  let totalYearSavings = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  new Chart("myChart", {
    type: "bar",
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
      legend: { display: false },
      title: {
        display: true,
        text: `Year: ${year}      Total year savings: ${totalYearSavings}`,
      },
    },
  });
}

// Function to delete the latest year from localStorage

function deleteLatestDate() {
  localStorage.removeItem("Year_Summary");
}

// Call the necessary functions to create the chart and delete the year from localStorage

createYearChart(savingsArray);
deleteLatestDate();

//describing the data format for an Excel file

let data = [
  [`${year}`, "Month", "Total income", "Apartment", "Food", "Hobby", "Other", "Month savings"]
];

//creating the loop for a fulfilling an array with Excel data
if (obj.hasOwnProperty(year)) {
  const yearObj = obj[year];
  for (let month in yearObj) {
    const monthData = yearObj[month];
    const row = [
      `${year}`,
      month,
      monthData.income,
      monthData.apartmentPayment,
      monthData.foodPayment,
      monthData.hobbyPayment,
      monthData.otherPayments,
      monthData.totalSavings
    ];
    data.push(row);
  }
}

//creating the function for a Excel file downloading

document.getElementById("excel").onclick = () => { 
  var workbook = XLSX.utils.book_new(),
    worksheet = XLSX.utils.aoa_to_sheet(data);
workbook.SheetNames.push("First");
workbook.Sheets["First"] = worksheet;
XLSX.writeFile(workbook, `${year}_financialSummary.xlsx`);
};



