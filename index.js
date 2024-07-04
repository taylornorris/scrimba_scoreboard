const homeScoreEl = document.getElementById("home_score_el")
const guestScoreEl = document.getElementById("guest_score_el")
const homeScoreDiv = document.getElementById("home_score_div")
const guestScoreDiv = document.getElementById("guest_score_div")

let homeScore = 0
let guestScore = 0

homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore

function updateScore(team, points) {
    if (team === "home") {
        homeScore += points
        homeScoreEl.textContent = homeScore
    }
    else if (team === "guest") {
        guestScore += points
        guestScoreEl.textContent = guestScore
    }
    highlightLeader()
}

function highlightLeader() {
    if (homeScore > guestScore) {
        homeScoreDiv.className = "leader"
    }
}

document.getElementById("h1").addEventListener("click", () => 
    updateScore("home", 1)
)

document.getElementById("h2").addEventListener("click", () => 
    updateScore("home", 2)
)

document.getElementById("h3").addEventListener("click", () => 
    updateScore("home", 3)
)

document.getElementById("g1").addEventListener("click", () => 
    updateScore("guest", 1)
)

document.getElementById("g2").addEventListener("click", () => 
    updateScore("guest", 2)
)

document.getElementById("g3").addEventListener("click", () => 
    updateScore("guest", 3)
)


document.getElementById("new_game").addEventListener("click", () => {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
})

