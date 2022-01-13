const
    numbersDrawn = [];

const bntDraw = document.querySelector("#bntDraw")
bntDraw.addEventListener("click", (event) => {
    event.preventDefault()
    const text = document.querySelector("#text")
    text.innerHTML = "Números sorteados: "

    const
        IntervalDraw = setInterval(
            drawNumber, 1000)
    setTimeout(() => {
        clearInterval(
            IntervalDraw)
    }, 6000)
})

function drawNumber() {

    let numDraw = Math.floor(Math.random() * 60) + 1
    let drawn = false
    let result = document.querySelector("#result")

    for (let i of
        numbersDrawn) {
        if (
numDraw == i) {
            drawn = true
        }
    }

    if (drawn == false) {

        numbersDrawn.push(
numDraw)
        result.innerHTML += `${
numDraw} `
    } else {

        drawNumber()
    }
}