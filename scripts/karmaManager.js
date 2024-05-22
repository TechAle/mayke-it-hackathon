const karmaCards = {
    "Awareness": {
        "name": "Awareness",
        "description": "Karma for awareness",
        "icon": "awareness.png",
    },
    "Emotional_awareness": {
        "name": "Emotional_awareness",
        "description": "Karma for emotional awareness",
        "icon": "emotionalAwareness.png",
    },
    "Emotional_regulation": {
        "name": "Emotional_regulation",
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
    "Physical_wellness": {
        "name": "Physical_wellness",
        "description": "Karma for physical awareness",
        "icon": "physicalAwareness.png",
    },
    "Positive_self_image": {
        "name": "Positive_self_image",
        "description": "Karma for positive self image",
        "icon": "positiveSelfImage.png",
    },
    "Sleep_hygiene": {
        "name": "Sleep_hygiene",
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