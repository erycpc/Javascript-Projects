const countDisplay = document.getElementById("count")
const incrementBtn = document.getElementById("incrementBtn")
const decrementBtn = document.getElementById("decrementBtn")
const resetBtn = document.getElementById("resetBtn")

let count = 0

incrementBtn.addEventListener("click", function() {
    count += 1
    countDisplay.textContent = count
})

decrementBtn.addEventListener("click", function() {
    count -= 1
    countDisplay.textContent = count
})

resetBtn.addEventListener("click", function() {
    count = 0
    countDisplay.textContent = count
})