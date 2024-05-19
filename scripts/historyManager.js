let history = {}
let optionsHistory = {}

loadHistoryFromCookies()
function loadHistoryFromCookies() {
    if (getCookie("history")) {
        history = JSON.parse(getCookie("history"))
    }
    if (getCookie("options")) {
        optionsHistory = JSON.parse(getCookie("options"))
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