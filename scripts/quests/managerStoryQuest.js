let startedQuestsStory = []
let completedQuestsStory = []
let cooldownQuestsStory = {}

loadQuestsStoryFromCookies()
function loadQuestsStoryFromCookies() {
    if (getCookie("startedQuestsStory")) {
        startedQuestsStory = JSON.parse(getCookie("startedQuestsStory"))
    }
    if (getCookie("completedQuestsStory")) {
        completedQuestsStory = JSON.parse(getCookie("completedQuestsStory"))
    }
    if (getCookie("cooldownQuestsStory")) {
        cooldownQuestsStory = JSON.parse(getCookie("cooldownQuestsStory"))
        for(const name in cooldownQuestsStory) {
            cooldownQuestsStory[name] = new Date(cooldownQuestsStory[name])

        }
    }
}