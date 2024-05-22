const karmaCards = {
    "awareness": {
        "name": "awareness",
        "description": "Karma for awareness",
        "icon": "awareness.png",
    },
    "emotionalAwareness": {
        "name": "emotionalAwareness",
        "description": "Karma for emotional awareness",
        "icon": "emotionalAwareness.png",
    },
    "emotionalRegulation": {
        "name": "emotionalRegulation",
        "description": "Karma for emotional regulation",
        "icon": "emotionalRegulation.png",
    },
    "journaling": {
        "name": "journaling",
        "description": "Karma for journaling",
        "icon": "journaling.png",
    },
    "knowledge": {
        "name": "knowledge",
        "description": "Karma for knowledge",
        "icon": "knowledge.png",
    },
    "meditation": {
        "name": "meditation",
        "description": "Karma for meditation",
        "icon": "meditation.png",
    },
    "physicalAwareness": {
        "name": "physicalAwareness",
        "description": "Karma for physical awareness",
        "icon": "physicalAwareness.png",
    },
    "positiveSelfImage": {
        "name": "positiveSelfImage",
        "description": "Karma for positive self image",
        "icon": "positiveSelfImage.png",
    },
    "sleepHygiene": {
        "name": "sleepHygiene",
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