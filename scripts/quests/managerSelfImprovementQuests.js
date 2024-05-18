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