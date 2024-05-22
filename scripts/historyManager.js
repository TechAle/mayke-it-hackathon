let history = {}
let optionsHistory = {}

loadHistoryFromCookies()
function loadHistoryFromCookies() {

    if (getCookie("history")) {
        if (getCookie("history") !== "-1") {
            history = JSON.parse(getCookie("history"))
        }
    }
    if (getCookie("options")) {
        if (getCookie("options") !== "-1") {
            optionsHistory = JSON.parse(getCookie("options"))
        }
    }

    for(let conv in conversations) {
        if (!history[conv])
            history[conv] = []
        if (!optionsHistory[conv])
            optionsHistory[conv] = []
    }

    // Save history on cookies
    setCookie("history", JSON.stringify(history))
    setCookie("options", JSON.stringify(optionsHistory))
}