const questStory = {
    "Mani1": {
        "description": "Mani Jewel has been stuck on his phone for hours and hours. She needs your help managing this!",
        "requiredQuest": "",
        "reward": [""],
        "conversation": "Mani-Jewel-Start"
    },
    "Mani2": {
        "description": "Mani Jewel has been stuck on his phone for hours and hours. Maybe Goldie can help you with this!",
        "requiredQuest": "Mani1",
        "reward": [""],
        "conversation": "Goldie-Mani-Quest"
    },
    "Mani3": {
        "description": "Investigate this TubeYuber that Mani Jewel is so obsessed with!",
        "requiredQuest": "Mani2",
        "reward": [""],
        "conversation": "TubeYuber-Mani-Quest"
    }
}

let conversationUnlock = {}

for (const name in questStory) {
    conversationUnlock[questStory[name]["conversation"]] = name
}