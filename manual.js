function calculate1() {
    const out = document.getElementById("out1")
    const d = document.getElementById("distance").value
    const kg = document.getElementById("weight").value
    const r = document.getElementById("rounds").value
    let cal

    cal = (9.8*kg*d*r*4) / 4148
    out.innerHTML = `Total Calories Burnt: ${cal} Kilo Calories, or ${cal * 1000} Small calories`
    alert(`Total Calories Burnt: ${cal} Calories (Kilo Calories), or ${cal * 1000} Small calories, Good Job!`)
    return false
}

function calculate2() {
    const out = document.getElementById("out2")
    const d = document.getElementById("distance2").value
    const kg = document.getElementById("weight2").value
    const cal = document.getElementById("cal").value
    let rounds

    rounds = 4148 * cal / (9.8*4*kg*d)
    out.innerHTML = `Total Rounds you need to do: ${rounds}`
    alert(`Total Rounds you need to do: ${rounds}, You can do it!`)
    return false
}

function one() {
    document.getElementById("1l").style.display = ''
    document.getElementById("2l").style.display = 'none'
    document.getElementById("3l").style.display = 'none'
    document.getElementById("4l").style.display = 'none'
}

function two() {
    document.getElementById("1l").style.display = 'none'
    document.getElementById("2l").style.display = ''
    document.getElementById("3l").style.display = 'none'
    document.getElementById("4l").style.display = 'none'
}

function three() {
    document.getElementById("1l").style.display = 'none'
    document.getElementById("2l").style.display = 'none'
    document.getElementById("3l").style.display = ''
    document.getElementById("4l").style.display = 'none'
}

function four() {
    document.getElementById("1l").style.display = 'none'
    document.getElementById("2l").style.display = 'none'
    document.getElementById("3l").style.display = 'none'
    document.getElementById("4l").style.display = ''
}

function init() {
    document.getElementById("form1").onsubmit = calculate1
    document.getElementById("form2").onsubmit = calculate2
    document.getElementById("1l").style.display = 'none'
    document.getElementById("2l").style.display = 'none'
    document.getElementById("3l").style.display = 'none'
    document.getElementById("4l").style.display = 'none'

    function handleMotionEvent(event) {
        const x = event.accelerationIncludingGravity.x;
        const y = event.accelerationIncludingGravity.y;
        const z = event.accelerationIncludingGravity.z;
    
        document.getElementById("x").innerHTML = x
        document.getElementById("y").innerHTML = y
        document.getElementById("z").innerHTML = z
    }
    
    window.addEventListener("devicemotion", handleMotionEvent, true);
    console.log("added litsener")
}

window.onload = init
