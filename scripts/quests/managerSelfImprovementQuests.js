const questsPersonal = {
    "Wake up": {
        "description": "Wake up before 6:00 AM",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["dexterity 35"]
    },
    "Wake up even earlier": {
        "description": "Wake up before 5:00 AM",
        "type": "bool",
        "requiredQuest": "Wake up",
        "reward": ["dexterity 80", "strength 20"]
    },
    "Write things": {
        "description": "Write 500 words",
        "type": "text",
        "requiredQuest": "",
        "reward": ["intelligence 20"]
    },
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
