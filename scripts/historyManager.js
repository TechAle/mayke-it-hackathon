let history = {}
let optionsHistory = {}

loadHistoryFromCookies()
function loadHistoryFromCookies() {

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