const karmaCards = {
    "Awareness": {
        "name": "awareness",
        "description": "Karma for awareness",
        "icon": "awareness.png",
    },
    "Emotional-awareness": {
        "name": "Emotional-awareness",
        "description": "Karma for emotional awareness",
        "icon": "emotionalAwareness.png",
    },
    "Emotional-regulation": {
        "name": "Emotional-regulation",
        "description": "Karma for emotional regulation",
        "icon": "emotionalRegulation.png",
    },
    "Journaling": {
        "name": "Journaling",
        "description": "Karma for journaling",
        "icon": "journaling.png",
    },
    "Knowledge": {
        "name": "Knowledge",
        "description": "Karma for knowledge",
        "icon": "knowledge.png",
    },
    "Meditation": {
        "name": "Meditation",
        "description": "Karma for meditation",
        "icon": "meditation.png",
    },
    "Physical-wellness": {
        "name": "Physical-wellness",
        "description": "Karma for physical awareness",
        "icon": "physicalAwareness.png",
    },
    "Positive-self-image": {
        "name": "Positive-self-image",
        "description": "Karma for positive self image",
        "icon": "positiveSelfImage.png",
    },
    "Sleep-hygiene": {
        "name": "Sleep-hygiene",
        "description": "Karma for sleep hygiene",
        "icon": "sleepHygiene.png",
    },
}

let karmaUnlocked = {}

loadKarmaFromCookies()
function loadKarmaFromCookies() {
    if (getCookie("karmaUnlocked")) {
        karmaUnlocked = JSON.parse(getCookie("karmaUnlocked"))
    }
}