
function createYearChart(){
    let xValues = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    let january = Number(localStorage.getItem("January"))
    let february = Number(localStorage.getItem("February"))
    let march = Number(localStorage.getItem("March"))
    let april = Number(localStorage.getItem("April"))
    let june = Number(localStorage.getItem("June"))
    let july = Number(localStorage.getItem("July"))
    let august = Number(localStorage.getItem("August"))
    let september = Number(localStorage.getItem("September"))
    let october = Number(localStorage.getItem("October"))
    let november = Number(localStorage.getItem("November"))
    let december = Number(localStorage.getItem("December"))

    let yValues = [january, february, march, april, june, july, august, september, october, november, december];
    for (let i = 0; i < yValues.length; i++){
        if(yValues[i] == null){
            yValues[i] = 0
        }
        console.log(yValues)
    }


    let barColors = ["#00aba9", "#00aba9", "#00aba9", "#00aba9", "#00aba9", "#00aba9", "#00aba9", "#00aba9", "#00aba9", "#00aba9", "#00aba9", "#00aba9"];

    let totalYearSavings = january + february + march + april + june + july + august + september + october + november + december;
    new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
        display: true,
        text: `Total year savings: ${totalYearSavings}`
        }
    }
    });
}

createYearChart()