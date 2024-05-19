const conversations = {
    "diary" : {
        "description" : "A diary of the user's daily activitiesfsadljbkahjflsdlfjkbadslbfasdlb",
        "icon" : "diary.png",
        "default": true,
        "messages": {
            "firstMessage": {
                "text": "Hello! What do you want to do today?",
                "options": ["Check stats", "Check new quests improvement", "Check current quests improvement", "Check new quests story", "Check current quests improvement story"],
                "effect": "None"
            },
            "Check stats": {
                "text": "Here your stats:",
                "options": ["Check new quests improvement", "Check current quests improvement", "Check new quests story", "Check current quests story"],
                "effect": "Print stats"
            },
            "Check new quests improvement": {
                "text": "Here are your new quests:",
                "options": ["Check current quests improvement", "Check stats", "Check new quests story", "Check current quests story"],
                "effect": "Print new quests"
            },
            "Check current quests improvement": {
                "text": "Here are your current quests:",
                "options": ["Check new quests improvement", "Check stats", "Check new quests story", "Check current quests story"],
                "effect": "Print current quests"
            },
            "Check new quests story": {
                "text": "Here are your new story quests:",
                "options": ["Check current quests story", "Check stats", "Check new quests improvement", "Check current quests improvement"],
                "effect": "Print new quests story"
            },
            "Check current quests story": {
                "text": "Here are your current story quests:",
                "options": ["Check new quests story", "Check stats", "Check new quests improvement", "Check current quests improvement"],
                "effect": "Print current quests story"

            }
        }
    },
    "TechAle" : {
        "description" : "A chatbot that helps the user with their daily tasks",
        "icon" : "techale.png",
        "messages": {
            "firstMessage": {
                "text": "Hi",
                "options": ["Hi", "Hi but more excited (dexterity level 5 requiresafdshjpafdshjkfadjjafdjfdhjafdhjkfdashjlljhks)", "Hi honey (charisma level 5 requires)"],
                "effect": "None"
            },
            "Test": {
                "text": "Test",
                "options": ["Test"],
                "effect": "None",
            }
        }
    },
}