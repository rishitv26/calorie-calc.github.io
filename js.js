const d = document.getElementById("distance")
const kg = document.getElementById("weight")
const r = document.getElementById("rounds")
const out = document.getElementById("out")
let cal

function calculate() {
    cal = 4/4184*(9.8*kg*d*r)
    out.innerHTML = `Total Calories Burnt: ${cal} Calories`
    alert(`Total Calories Burnt: ${cal} Calories`)
}

function init() {
    document.getElementById("form").onsubmit = calculate
}

window.onload = init
