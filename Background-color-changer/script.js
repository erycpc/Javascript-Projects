const generate = document.getElementById("generateBtn")


generate.addEventListener("click", function() {
    const randomColour = "#" + Math.floor(Math.random() * 16777216).toString(16)
    document.body.style.backgroundColor = randomColour
    document.getElementById("hexCode").textContent = randomColour

    navigator.clipboard.writeText(randomColour)
    .then(function() {
        const hex = document.getElementById("hexCode")
        hex.textContent = "Copied!"
        setTimeout(function() {
            hex.textContent = randomColour  // restore after 1.5s
        }, 1500)
    })
})