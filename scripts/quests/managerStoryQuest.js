const questStory = {
    "Talk to techale": {
        "description": "Techale needs your help with stuff",
        "requiredQuest": "",
        "reward": ["dexterity 35"],
        "unlock": "TechAle1"
    },
    "Brainstorm with techale": {
        "description": "Lol yeha idk",
        "requiredQuest": "Talk to techale",
        "reward": ["dexterity 80", "strength 20"],
        "unlock": "Techle2"
    },
    "Test": {
        "description": "Test",
        "requiredQuest": "",
        "reward": [],
        "unlock": "Test"
    }
}
let startedQuestsStory = []
let completedQuestsStory = []

loadQuestsStoryFromCookies()
function loadQuestsStoryFromCookies() {
    if (getCookie("startedQuestsStory")) {
        startedQuestsStory = JSON.parse(getCookie("startedQuestsStory"))
    }
    if (getCookie("completedQuestsStory")) {
        completedQuestsPersonal = JSON.parse(getCookie("completedQuestsStory"))
    }
}