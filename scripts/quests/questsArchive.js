const questStory = {
    "Talk to techale": {
        "description": "Techale needs your help with stuff",
        "requiredQuest": "",
        "reward": ["dexterity 35"],
        "conversation": "TechAle1"
    },
    "Brainstorm with techale": {
        "description": "Lol yeha idk",
        "requiredQuest": "Talk to techale",
        "reward": ["dexterity 80", "strength 20"],
        "conversation": "Techle2"
    },
    "Test": {
        "description": "Test",
        "requiredQuest": "",
        "reward": [],
        "conversation": "Test"
    }
}

let conversationUnlock = {}

for (const name in questStory) {
    conversationUnlock[questStory[name]["conversation"]] = name
}