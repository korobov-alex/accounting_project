function saveData(){
    let income = document.getElementById("income")
    let incomeData = income.value;
    localStorage.setItem("incomeData", incomeData)

    let apartmentPayment = document.getElementById("apartment_payment")
    let apartmentPaymentData = apartmentPayment.value;
    localStorage.setItem("apartmentPaymentData", apartmentPaymentData)

    let foodPayment = document.getElementById("food_payment")
    let foodPaymentData = foodPayment.value;
    localStorage.setItem("foodPaymentData", foodPaymentData)

    let hobbyPayment = document.getElementById("hobby_payment")
    let hobbyPaymentData = hobbyPayment.value;
    localStorage.setItem("hobbyPaymentData", hobbyPaymentData)
    
    let otherPayments = document.getElementById("other_payments")
    let otherPaymentsData = otherPayments.value;
    localStorage.setItem("otherPaymentsData", otherPaymentsData)   

    let currentMonth = document.getElementById("dropdown");
    let currentMonthText = currentMonth.options[currentMonth.selectedIndex].text;
    localStorage.setItem("currentMonthText", currentMonthText)

    window.open("charts.html", "_blank");

}

function yearCharts(){
    window.open("year.html", "_blank");
}
