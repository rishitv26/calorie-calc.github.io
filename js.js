const out = document.getElementById("out")
let cal

function calculate() {
    const d = document.getElementById("distance").value
    const kg = document.getElementById("weight").value
    const r = document.getElementById("rounds").value

    console.log(d)
    console.log(kg)
    console.log(r)

    cal = 4/4184*(9.8*kg*d*r)
    out.innerHTML = `Total Calories Burnt: ${cal} Calories`
    alert(`Total Calories Burnt: ${cal} Calories`)
    return false
}

function init() {
    document.getElementById("form").onsubmit = calculate
}

window.onload = init
