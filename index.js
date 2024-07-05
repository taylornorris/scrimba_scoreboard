const homeScoreEl = document.getElementById("home_score_el")
const guestScoreEl = document.getElementById("guest_score_el")
const homeScoreDiv = document.getElementById("home_score_div")
const guestScoreDiv = document.getElementById("guest_score_div")
const periodTwoDiv = document.getElementById("period_two")
const periodThreeDiv = document.getElementById("period_three")
const periodFourDiv = document.getElementById("period_four")

let period = 1
let homeScore = 0
let guestScore = 0

homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore

document.getElementById("new_game_btn").addEventListener("click", () => {
    period = 1
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    homeScoreDiv.className = ""
    guestScoreDiv.className = ""
    periodTwoDiv.classList.remove("background_red")
    periodThreeDiv.classList.remove("background_red")
    periodFourDiv.classList.remove("background_red")
})

document.getElementById("period_btn").addEventListener("click", function() {
    if (period === 1) {
        periodTwoDiv.classList.add("background_red")
    }
    else if (period === 2) {
        periodThreeDiv.classList.add("background_red")
    }
    else if (period === 3) {
        periodFourDiv.classList.add("background_red")
    }

    period += 1
})

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
        guestScoreDiv.className = ""
    } 
    else if (guestScore > homeScore) {
        guestScoreDiv.className = "leader"
        homeScoreDiv.className = ""
    }
    else {
        guestScoreDiv.className = ""
        homeScoreDiv.className = ""  
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



