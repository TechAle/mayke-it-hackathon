const karmaCards = {
    "karma1": {
        "name": "First karma",
        "description": "This is the first karma",
        "icon": "karma1.jpeg",
    },
    "karma2": {
        "name": "Second karma",
        "description": "This is the second karma",
        "icon": "karma2.png",
    },
}

let karmaUnlocked = {}

loadKarmaFromCookies()
function loadKarmaFromCookies() {
    if (getCookie("karmaUnlocked")) {
        karmaUnlocked = JSON.parse(getCookie("karmaUnlocked"))
    }
}