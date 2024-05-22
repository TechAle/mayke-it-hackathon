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
    },
    "Mani4": {
        "description": "Report back to Goldie what you discovered",
        "requiredQuest": "Mani3",
        "reward": [""],
        "conversation": "Goldie-Mani-Quest-2"
    },
    "Mani5": {
        "description": "Give the advices to Mani Jewel",
        "requiredQuest": "Mani4",
        "reward": [""],
        "conversation": "Mani-Jewel-End"
    }
}

let conversationUnlock = {}

for (const name in questStory) {
    conversationUnlock[questStory[name]["conversation"]] = name
}