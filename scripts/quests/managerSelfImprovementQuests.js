const questsPersonal = {
    "Eat Vegetables and Fruits Lvl1": {
        "description": "Eat one serving of vegetables",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["Physical-wellness 10"]
    },
    "Eat Vegetables and Fruits Lvl5": {
        "description": "Eat two servings of vegetables and one serving of fruit",
        "type": "bool",
        "requiredQuest": "Eat Vegetables and Fruits Lvl1",
        "reward": ["Physical-wellness 25"]
    },
    "Eat Vegetables and Fruits Lvl10": {
        "description": "Eat three servings of vegetables and two servings of fruit",
        "type": "bool",
        "requiredQuest": "Eat Vegetables and Fruits Lvl5",
        "reward": ["Physical-wellness 50"]
    },
    "Walking Lvl1": {
        "description": "Go on a 10 minute walk",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["Physical-wellness 10"]
    },
    "Walking Lvl5": {
        "description": "Go on a 20 minute walk",
        "type": "bool",
        "requiredQuest": "Walking Lvl1",
        "reward": ["Physical-wellness 25"]
    },
    "Evening Routine Lvl1": {
        "description": "Make an evening routine",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["Sleep-hygiene 10"]
    },
    "Evening Routine Lvl5": {
        "description": "Follow your evening routine",
        "type": "bool",
        "requiredQuest": "Evening Routine Lvl1",
        "reward": ["Sleep-hygiene 25"]
    },
    "Morning Sunlight Lvl1": {
        "description": "Get sunlight for 5 mins in the morning",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["Sleep-hygiene 10"]
    },
    "Morning Sunlight Lvl5": {
        "description": "Get sunlight for 10 minutes in the morning",
        "type": "bool",
        "requiredQuest": "Morning Sunlight Lvl1",
        "reward": ["Sleep-hygiene 25"]
    },
    "Morning Sunlight Lvl10": {
        "description": "Get sunlight for 20 minutes in the morning",
        "type": "bool",
        "requiredQuest": "Morning Sunlight Lvl5",
        "reward": ["Sleep-hygiene 50"]
    },
    "Phone-Free Sleep Lvl1": {
        "description": "Put your phone in a different room when sleeping",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["Sleep-hygiene 10"]
    },
    "Phone-Free Sleep Lvl5": {
        "description": "Don’t use your phone 30 minutes before bed",
        "type": "bool",
        "requiredQuest": "Phone-Free Sleep Lvl1",
        "reward": ["Sleep-hygiene 25"]
    },
    "Phone-Free Sleep Lvl10": {
        "description": "Don’t use your phone 1 hour before bed",
        "type": "bool",
        "requiredQuest": "Phone-Free Sleep Lvl5",
        "reward": ["Sleep-hygiene 50"]
    },
    "Study Tools Lvl1": {
        "description": "Use 1 tool to help you when you are studying/learning",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["Knowledge 10"]
    },
    "Study Tools Lvl5": {
        "description": "Use 3 tools to help you when you are studying/learning",
        "type": "bool",
        "requiredQuest": "Study Tools Lvl1",
        "reward": ["Knowledge 25"]
    },
    "Study Tools Lvl10": {
        "description": "Use 3+ tools to help you when you are studying/learning and practice spaced repetition",
        "type": "bool",
        "requiredQuest": "Study Tools Lvl5",
        "reward": ["Knowledge 50"]
    },
    "Resource Reflections Lvl1": {
        "description": "Write reflections you’ve had after reading 1 resource",
        "type": "text",
        "requiredQuest": "",
        "reward": ["Knowledge 10"]
    },
    "Resource Reflections Lvl5": {
        "description": "Write reflections you’ve had after reading 3 resources",
        "type": "text",
        "requiredQuest": "Resource Reflections Lvl1",
        "reward": ["Knowledge 25"]
    },
    "Resource Reflections Lvl10": {
        "description": "Write down 5+ things you’ve learnt from resources and how it’s helped you",
        "type": "text",
        "requiredQuest": "Resource Reflections Lvl5",
        "reward": ["Knowledge 50"]
    },
    "Positive Journaling Lvl1": {
        "description": "Journal using 1 prompt that cultivates a positive self image for 5 mins, For help on what to write: <a href='https://docs.google.com/document/d/1thhoFvxXaqQ4PLGprhFAOIQgSpIaxB_u4zQZsPiuWSE/edit?usp=sharing'>CLICK HERE</a>",
        "type": "text",
        "requiredQuest": "",
        "reward": ["Positive-self-image 10", "Journaling 25"]
    },
    "Positive Journaling Lvl5": {
        "description": "Journal using 2 prompts that cultivate a positive self image for 5 mins each, For help on what to write: <a href='https://docs.google.com/document/d/1thhoFvxXaqQ4PLGprhFAOIQgSpIaxB_u4zQZsPiuWSE/edit?usp=sharing'>CLICK HERE</a>",
        "type": "text",
        "requiredQuest": "Positive Journaling Lvl1",
        "reward": ["Positive-self-image 25", "Journaling 50"]
    },
    "Positive Journaling Lvl10": {
        "description": "Journal using 2+ prompts that cultivate a positive self image for 20+ mins in total, For help on what to write: <a href='https://docs.google.com/document/d/1thhoFvxXaqQ4PLGprhFAOIQgSpIaxB_u4zQZsPiuWSE/edit?usp=sharing'>CLICK HERE</a>",
        "type": "text",
        "requiredQuest": "Positive Journaling Lvl5",
        "reward": ["Positive-self-image 50", "Journaling 75"]
    },
    "Values Alignment Lvl1": {
        "description": "Do one thing that is aligned with your values",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["Positive-self-image 10"]
    },
    "Values Alignment Lvl5": {
        "description": "Do three things that are aligned with your values and remove one thing that isn’t",
        "type": "bool",
        "requiredQuest": "Values Alignment Lvl1",
        "reward": ["Positive-self-image 25"]
    },
    "Values Alignment Lvl10": {
        "description": "Do 5+ things that are aligned with your values and quit 3 things that are not",
        "type": "bool",
        "requiredQuest": "Values Alignment Lvl5",
        "reward": ["Positive-self-image 50"]
    },
    "Identify Negative Emotions Lvl1": {
        "description": "Can you identify the moments where you feel consistently overwhelmed/frustrated/overcome with negative emotions?",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["Emotional-regulation 10"]
    },
    "Identify Negative Emotions Lvl5": {
        "description": "Write down a scenario where you can practice radical acceptance",
        "type": "text",
        "requiredQuest": "Identify Negative Emotions Lvl1",
        "reward": ["Emotional-regulation 25"]
    },
    "Identify Negative Emotions Lvl10": {
        "description": "Practice radical acceptance at least once a week",
        "type": "bool",
        "requiredQuest": "Identify Negative Emotions Lvl5",
        "reward": ["Emotional-regulation 50"]
    },
    "Physical Idle Time Lvl1": {
        "description": "Do a physical task that allows for mental idle time without a goal for 5 mins",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["Physical-wellness 10"]
    },
    "Physical Idle Time Lvl5": {
        "description": "Do a physical task that allows for mental idle time without a goal for 10 mins",
        "type": "bool",
        "requiredQuest": "Physical Idle Time Lvl1",
        "reward": ["Physical-wellness 25"]
    },
    "Physical Idle Time Lvl10": {
        "description": "Do a physical task that allows for mental idle time without a goal for 20+ mins",
        "type": "bool",
        "requiredQuest": "Physical Idle Time Lvl5",
        "reward": ["Physical-wellness 50"]
    },
    "Self Care Menu Lvl1": {
        "description": "Make a self care menu and do the sides whenever you need a distraction",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["Emotional-regulation 10"]
    },
    "Urge Surfing Lvl1": {
        "description": "Try urge surfing/distress tolerance when you feel a negative emotion for 7 mins",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["Emotional-regulation 10"]
    },
    "Urge Surfing Lvl5": {
        "description": "Try urge surfing/distress tolerance when you feel a negative emotion for 15 mins",
        "type": "bool",
        "requiredQuest": "Urge Surfing Lvl1",
        "reward": ["Emotional-regulation 25"]
    },
    "Urge Surfing Lvl10": {
        "description": "Try urge surfing/distress tolerance when you feel a negative emotion for 15 mins and do STOP (impulse control)",
        "type": "bool",
        "requiredQuest": "Urge Surfing Lvl5",
        "reward": ["Emotional-regulation 50"]
    },
    "Meditation Lvl1": {
        "description": "Meditate for 10 mins",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["Emotional-regulation 10", "Meditation 25"]
    },
    "Meditation Lvl5": {
        "description": "Meditate for 20 mins",
        "type": "bool",
        "requiredQuest": "Meditation Lvl1",
        "reward": ["Emotional-regulation 25", "Meditation 50"]
    },
    "Meditation Lvl20": {
        "description": "Meditate for 30 mins",
        "type": "bool",
        "requiredQuest": "Meditation Lvl5",
        "reward": ["Emotional-regulation 50", "Meditation 75"]
    },
    "Energy Tracking Lvl1": {
        "description": "Set an alarm for every 2 hours three times a day to write your energy/emotions at that moment",
        "type": "bool",
        "requiredQuest": "",
        "reward": ["Awareness 10"]
    },
    "Energy Tracking Lvl5": {
        "description": "Set an alarm for every hour for 6 hours per day to write your energy/emotions at that moment",
        "type": "bool",
        "requiredQuest": "Energy Tracking Lvl1",
        "reward": ["Awareness 25"]
    },
    "Energy Tracking Lvl10": {
        "description": "Set an alarm for every hour for 10 hours per day to write your energy/emotions at that moment",
        "type": "bool",
        "requiredQuest": "Energy Tracking Lvl5",
        "reward": ["Awareness 50"]
    },
    "Karma Cards Lvl1": {
        "description": "Look at your Karma cards and write about one change you can make to improve them",
        "type": "text",
        "requiredQuest": "",
        "reward": ["Awareness 15"]
    },
    "Karma Cards Lvl5": {
        "description": "Look at your Karma cards and write what you already do that helps you have good karma cards and what can you do to reduce bad ones",
        "type": "text",
        "requiredQuest": "Karma Cards Lvl1",
        "reward": ["Awareness 25"]
    },
    "Karma Cards Lvl10": {
        "description": "Write about what you do to have mostly good karma cards",
        "type": "text",
        "requiredQuest": "Karma Cards Lvl5",
        "reward": ["Awareness 50"]
    },
    "Bad Habit Analysis Lvl1": {
        "description": "Think of the most important/annoying/limiting bad habit that you have. What are the 5 cons and the 5 pros of the habit?",
        "type": "text",
        "requiredQuest": "",
        "reward": ["Awareness 10"]
    },
    "Bad Habit Analysis Lvl5": {
        "description": "Think of one bad habit you have and play out what would happen if you engage in it",
        "type": "text",
        "requiredQuest": "Bad Habit Analysis Lvl1",
        "reward": ["Awareness 25"]
    },
    "Bad Habit Analysis Lvl10": {
        "description": "Write about your core values and which actions you can do if you slip back into an old habit",
        "type": "text",
        "requiredQuest": "Bad Habit Analysis Lvl5",
        "reward": ["Awareness 50"]
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
