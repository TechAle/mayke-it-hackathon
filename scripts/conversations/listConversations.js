const conversations = {
    "diary" : {
        "description" : "A diary of the user's daily activitiesfsadljbkahjflsdlfjkbadslbfasdlb",
        "icon" : "diary.png",
        "default": true,
        "messages": {
            "firstMessage": {
                "text": "Hello! What do you want to do today?",
                "options": ["Check stats", "Check new quests", "Check current quests"],
                "effect": "None"
            },
            "Check stats": {
                "text": "Here your stats:",
                "options": ["Check new quests", "Check current quests"],
                "effect": "Print stats"
            },
            "Check new quests": {
                "text": "Here are your new quests:",
                "options": ["Check current quests", "Check stats"],
                "effect": "Print new quests"
            },
            "Check current quests": {
                "text": "Here are your current quests:",
                "options": ["Check new quests", "Check stats"],
                "effect": "Print current quests"
            }
        }
    },
    "TechAle" : {
        "description" : "A chatbot that helps the user with their daily tasks",
        "icon" : "techale.png"
    },
}