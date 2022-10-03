const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav-links")

const dateNum = document.querySelector(".dateNum")
const month = document.querySelector(".month")
const day = document.querySelector(".day")

/**
* @param {Date} date
*/

function formatDate(date) {
    return `${date.getDate()}`
}

function formatDay(date) {
    const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    return `${DAYS[date.getDay()]}`
}

function formatMonth(date) {
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${MONTHS[date.getMonth()]}`
}

setInterval(() => {
    const now = new Date()

    dateNum.textContent = formatDate(now)
    day.textContent = formatDay(now)
    month.textContent = formatMonth(now)
}, 200)


const hoverEffect = document.getElementById("#hover-effect")
let homeElement = document.getElementById("#home")

hoverEffect.addEventListener("mouseover", () => {
    console.log("HI")
    home.style.backgroundimage = "url(../images/pokekai.png)"
})
hoverEffect.addEventListener("mouseleave", () => {
    console.log("BYE")

    home.style.backgroundimage= null
})