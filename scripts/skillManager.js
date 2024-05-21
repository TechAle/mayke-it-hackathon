let skills = {
    "Physical-wellness": {
        "lvl": 0,
        "xp": 0
    },
    "Sleep-hygiene": {
        "lvl": 0,
        "xp": 0
    },
    "Knowledge": {
        "lvl": 0,
        "xp": 0
    },
    "Positive-self-image": {
        "lvl": 0,
        "xp": 0
    },
    "Emotional-regulation": {
        "lvl": 0,
        "xp": 0
    },
    "Emotional-awareness": {
        "lvl": 0,
        "xp": 0
    },
    "Awareness": {
        "lvl": 0,
        "xp": 0
    },
    "Journaling": {
        "lvl": 0,
        "xp": 0
    },
    "Meditation": {
        "lvl": 0,
        "xp": 0
    },
}

function loadSkillsFromCookies() {
    if (getCookie("skills")) {
        skills = JSON.parse(getCookie("skills"))
    }
}

loadSkillsFromCookies()