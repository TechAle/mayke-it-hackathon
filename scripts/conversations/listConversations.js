const conversations = {
    "diary" : {
        "name": "Diary",
        "description" : "A diary of the user's daily activitiesfsadljbkahjflsdlfjkbadslbfasdlb",
        "icon" : "diary.png",
        "default": true,
        "messages": {
            "firstMessage": {
                "message": "Hi",
                "response": "Hello! What do you want to do today?",
                "options": ["Check stats", "Check new quests improvement", "Check current quests improvement", "Check new quests story", "Check current quests story"],
                "effect": "None"
            },
            "Check stats": {
                "message": "Check my stats",
                "response": "Here your stats:",
                "options": ["Check new quests improvement", "Check current quests improvement", "Check new quests story", "Check current quests story"],
                "effect": "Print stats"
            },
            "Check new quests improvement": {
                "message": "What are some new quests for improvement?",
                "response": "Here are your new quests:",
                "options": ["Check current quests improvement", "Check stats", "Check new quests story", "Check current quests story"],
                "effect": "Print new quests"
            },
            "Check current quests improvement": {
                "message": "What are the quests for improvements that i have ongoing?",
                "response": "Here are your current quests:",
                "options": ["Check new quests improvement", "Check stats", "Check new quests story", "Check current quests story"],
                "effect": "Print current quests"
            },
            "Check new quests story": {
                "message": "What are some new story quests?",
                "response": "Here are your new story quests:",
                "options": ["Check current quests story", "Check stats", "Check new quests improvement", "Check current quests improvement"],
                "effect": "Print new quests story"
            },
            "Check current quests story": {
                "message": "What are the story quests that i have ongoing?",
                "response": "Here are your current story quests:",
                "options": ["Check new quests story", "Check stats", "Check new quests improvement", "Check current quests improvement"],
                "effect": "Print current quests story"

            }
        }
    },
    "TechAle1" : {
        "name": "TechAle",
        "description" : "A chatbot that helps the user with their daily tasks",
        "icon" : "techale.png",
        "messages": {
            "firstMessage": {
                "message": "Hi",
                "response": "Hi",
                "options": ["firstMessage", "Hi (dexterity level 5)", "Success", "Failure", "Test"],
                "effect": "None"
            },
            "Test": {
                "message": "Test",
                "response": "Test",
                "options": ["Test", "firstMessage"],
                "effect": "None",
            },
            "Hi (dexterity level 5)": {
                "message": "Hi but i go really fast lol",
                "response": "Hi lol",
                "options": ["firstMessage", "Hi (dexterity level 5)"],
                "effect": "check-dexterity-5-firstMessage"
            },
        }
    },

    "TechAle2" : {
        "name": "TechAle",
        "description" : "A new generation lol",
        "icon" : "techale.png",
        "messages": {
            "firstMessage": {
                "response": "Hi",
                "options": ["Hi", "Hi but more excited (dext 5)", "Hi honey (charisma level 5 requires)"],
                "effect": "None"
            },
            "Test": {
                "response": "Test",
                "options": ["Test"],
                "effect": "None",
            },
        }
    },

    "Test" : {
        "name": "Test",
        "description": "A test conversation",
        "icon": "test.png",
        "messages": {
            "firstMessage": {
                "response": "Test",
                "options": ["Test"],
                "effect": "None"
            }
        }

    }
}