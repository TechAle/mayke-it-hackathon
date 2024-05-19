const questsPersonal = {
    "Wake up": {
        "description": "Wake up before 6:00 AM",
        "requiredQuest": "",
        "reward": ["dexterity 35"]
    },
    "Wake up even earlier": {
        "description": "Wake up before 5:00 AM",
        "requiredQuest": "Wake up",
        "reward": ["dexterity 80", "strength 20"]
    },
    "Test": {
        "description": "Test",
        "requiredQuest": "",
        "reward": []
    }
}
let startedQuestsPersonal = []
let completedQuestsPersonal = {}

loadQuestsImprovementFromCookies()
function loadQuestsImprovementFromCookies() {
    if (getCookie("startedQuestsPersonal")) {
        startedQuestsPersonal = JSON.parse(getCookie("startedQuestsPersonal"))
    }
    if (getCookie("completedQuestsPersonal")) {
        completedQuestsPersonal = JSON.parse(getCookie("completedQuestsPersonal"))
        for(let quest in completedQuestsPersonal) {
            completedQuestsPersonal[quest] = new Date(completedQuestsPersonal[quest])
        }
    }
}