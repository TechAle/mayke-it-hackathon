let skills = {
    "intelligence": {
        "lvl": 0,
        "xp": 0
    },
    "strength": {
        "lvl": 0,
        "xp": 0
    },
    "agility": {
        "lvl": 0,
        "xp": 0
    },
    "charisma": {
        "lvl": 0,
        "xp": 0
    },
    "dexterity": {
        "lvl": 0,
        "xp": 0
    }
}

function loadSkillsFromCookies() {
    if (getCookie("skills")) {
        skills = JSON.parse(getCookie("skills"))
    }
}

loadSkillsFromCookies()