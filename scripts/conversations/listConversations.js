/*
    Note:
    - The conversation name must be unique
    - There cannot be 2 conversation with default=true
    The composition of every message:
    - Key = Key of the message, needed i  options
    - Message = What you send WIP, for now we send Key
    - options = Which options we can take
    - effect = What happens when we take the option
    Of the effects:
    - None = Nothing happens
    - Print stats = Print the stats
    - Print new quests = Print the new quests
    - Print current quests = Print the current quests
    - check-dexterity-5-firstMessage = Check if dexterity is 5, if no, print firstMessage, else continue like normal
        This can be used with every kind of skills
    - failure-Talk to techale = It sets to failure the quest Talk to techale
        TODO this should be automatic lol, but for now i dont have time, it should also solve Message tho
    - success-Talk to techale = It sets to success the quest Talk to techale
    - dexterity 35, it gives 35 xp to dexterity, it can be used with any skills
    - continue-Yes please-No please-Talk to techale-firstMessage = If Talk to techale is off cooldown, yes please, else no please
 */

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
            "Failure": {
                "message": "Failure",
                "response": "I dont want to talk anymore",
                "options": ["Can we continue?"],
                "effect": "failure-Talk to techale"
            },
            "Can we continue?": {
                "message": "Can we continue?",
                "response": "",
                "options": ["Can we continue?"],
                "effect": "continue-Yes please-No please-Talk to techale-firstMessage-Can we continue?",
                "suggestion": "Maybe try this: lalala"
            },
            "Success": {
                "message": "Success",
                "response": "I like talking to you",
                "options": [],
                "effect": "success-Talk to techale"
            }
        }
    },

    "TechAle2" : {
        "name": "TechAle",
        "description" : "A new generation lol",
        "icon" : "techale.png",
        "messages": {
            "firstMessage": {
                "response": "Hi",
                "options": ["Test"],
                "effect": "None"
            },
            "Test": {
                "response": "Test",
                "options": ["Test"],
                "effect": "success-Brainstorm with techale",
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