
function createChart(){
    let xValues = ["Apartment payment", "Food payment", "Hobby payment", "Other payments"];
    let yValues = [`${Number(localStorage.getItem('apartmentPaymentData'))}`, `${Number(localStorage.getItem('foodPaymentData'))}`, `${Number(localStorage.getItem('hobbyPaymentData'))}`, `${Number(localStorage.getItem('otherPaymentsData'))}`];
    let barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9"
    ];

    new Chart("myChart", {
        type: "pie",
        data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
        },
        options: {
        title: {
            display: true,
            text: "Pie chart of percentage of your payments"
        }
        }
    });
}

createChart();


let adviceInfo = document.createElement('p');

let allPayments = Number(localStorage.getItem('apartmentPaymentData')) +  Number(localStorage.getItem('foodPaymentData')) + Number(localStorage.getItem('hobbyPaymentData')) + Number(localStorage.getItem('otherPaymentsData'))
let currentMonthLeftover = Number(localStorage.getItem('incomeData')) - allPayments;

adviceInfo.innerHTML = `So, based on the data that you were provided we can summarize:
<b>Your month salary:</b> ${Number(localStorage.getItem('incomeData'))}$.<br>
<b>Your monthly payment (including all of your payments):</b> ${allPayments}$.<br>
<b>The amount of the money that you can save:</b> ${currentMonthLeftover}$`

let generalDiv = document.querySelector('.general');
generalDiv.appendChild(adviceInfo);
adviceInfo.classList.add('advice'); 



let titleMonth = document.createElement('p');
titleMonth.innerHTML = `${localStorage.getItem('currentMonthText')}`;
let currentChart = document.getElementById("myChart");
currentChart.parentNode.insertBefore(titleMonth, currentChart);
titleMonth.classList.add('month');

localStorage.setItem(`${titleMonth.innerText}`, currentMonthLeftover)