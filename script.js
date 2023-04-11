let dayIn = document.getElementById("day-input");
let monthIn = document.getElementById("month-input");
let yearIn = document.getElementById("year-input");
let dayOut = document.getElementById("day-output");
let monthOut = document.getElementById("month-output");
let yearOut = document.getElementById("year-output");
let calc = document.getElementById("calculate");

let date = new Date();
let today = date.getDate();
let thisMonth = date.getMonth() + 1 ;
let thisYear = date.getFullYear();


const ageIs = () => {
    if ((dayIn.value !== 0 && dayIn.value !== '') && (monthIn.value !== 0 && monthIn.value !== '') && (yearIn.value !== 0 && yearIn.value !== '')){
        dayOut.textContent = Math.abs(dayIn.value - today);
        monthOut.textContent = Math.abs(monthIn.value - thisMonth);
        yearOut.textContent = Math.abs(yearIn.value - thisYear);
        dayIn.value = "";
        monthIn.value = "";
        yearIn.value = "";
    }
}




calc.addEventListener('click', ageIs)
