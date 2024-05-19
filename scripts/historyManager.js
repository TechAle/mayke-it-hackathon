let history = {}

loadHistoryFromCookies()
function loadHistoryFromCookies() {
    if (getCookie("history")) {
        history = JSON.parse(getCookie("history"))
    }
    for(let conv in conversations) {
        if (!history[conv])
            history[conv] = []
    }

    // Save history on cookies
    setCookie("history", JSON.stringify(history))
}