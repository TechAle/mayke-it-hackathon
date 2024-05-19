function onForm(event, name) {
    event.preventDefault()
    manageEffects(name)
}

function manageEffects(name) {
    let message = ""
    let before = false
    switch (name) {

        case "Print stats":
            message = ""
            before = false
            for(const skill in skills) {
                if (before) message += "<br>"
                message += "Skill: " + skill + " LVL: " + skills[skill]["lvl"] + " XP: " + skills[skill]["xp"] + "/100"
                before = true
            }
            setTimeout(function() {
                newMessage(message, true)
            }, 1000);
            break

        case "Print new quests":
            message = ""
            before = false

            message = '<form onsubmit="onForm(event, \'startPersonalQuests\')" class="formSubmit">\n' +
                '                        <div class="form-group">'

            for (let quest in questsPersonal) {
                if (startedQuestsPersonal.indexOf(quest) !== -1) continue
                const description = questsPersonal[quest]["description"]
                const reqs = questsPersonal[quest]["requiredQuest"]
                if (reqs === "" || (completedQuestsPersonal.hasOwnProperty(reqs))) {
                    if (!completedQuestsPersonal.hasOwnProperty(quest) || hasOneDayPassed(new Date(), completedQuestsPersonal[quest]))
                        message += '<div class="form-check">\n' +
                            '                                <input class="form-check-input" type="checkbox" value="" id="'+quest+'">\n' +
                            '                                <label class="form-check-label" for="quest3">\n' +
                            '                                    '+quest+': '+description+'\n' +
                            '                                </label>\n' +
                            '                            </div>'

                }
            }

            message += '</div>\n' +
                '                        <button type="submit" class="btn btn-primary">Start Quests</button>\n' +
                '                    </form>'

            setTimeout(function() {
                newMessage(message, true)
            }, 1000);
            break

        case "Print new quests story":
            message = ""
            before = false

            message = '<form onsubmit="onForm(event, \'startStoryQuests\')" class="formSubmit">\n' +
                '                        <div class="form-group">'

            for (let quest in questStory) {
                if (startedQuestsStory.indexOf(quest) !== -1) continue
                const description = questStory[quest]["description"]
                const reqs = questStory[quest]["requiredQuest"]
                if (reqs === "" || (completedQuestsStory.hasOwnProperty(reqs))) {

                    message += '<div class="form-check">\n' +
                        '                                <input class="form-check-input" type="checkbox" value="" id="'+quest+'">\n' +
                        '                                <label class="form-check-label" for="quest3">\n' +
                        '                                    '+quest+': '+description+'\n' +
                        '                                </label>\n' +
                        '                            </div>'

                }
            }

            message += '</div>\n' +
                '                        <button type="submit" class="btn btn-primary">Start Quests</button>\n' +
                '                    </form>'

            setTimeout(function() {
                newMessage(message, true)
            }, 1000);
            break

        case "Print current quests":
            message = ""
            before = false

            message = '<form onsubmit="onForm(event, \'completedQuests\')" class="formSubmit">\n' +
                '                        <div class="form-group">'

            for (let quest in startedQuestsPersonal) {
                quest = startedQuestsPersonal[quest]
                const description = questsPersonal[quest]["description"]
                message += '<div class="form-check">\n' +
                    '                                <input class="form-check-input" type="checkbox" value="" id="'+quest+'">\n' +
                    '                                <label class="form-check-label" for="quest3">\n' +
                    '                                    '+quest+': '+description+'\n' +
                    '                                </label>\n' +
                    '                            </div>'

                }


            message += '</div>\n' +
                '                        <button type="submit" class="btn btn-primary">Mark as completed</button>\n' +
                '                    </form>'

            setTimeout(function() {
                newMessage(message, true)
            }, 1000);
            break

        case "Print current quests story":
            message = ""
            before = false

            message = '<form onsubmit="onForm(event, \'completedQuests\')" class="formSubmit">\n' +
                '                        <div class="form-group">'

            for (let quest in startedQuestsStory) {
                let questNow = questStory[startedQuestsStory[quest]]
                const description = questNow["description"]
                message += '<div class="form-check" style="padding-left: 0">\n' +
                    '                                <label class="form-check-label" for="quest3">\n - ' +
                    '                                    '+startedQuestsStory[quest]+': '+description+'\n' +
                    '                                </label>\n' +
                    '                            </div>'

            }


            message += '</div>\n' +
                '                    </form>'

            setTimeout(function() {
                newMessage(message, true)
            }, 1000);
            break

        case "completedQuests":
            let reward = ""
            $('.form-check-input:checked').each(function() {
                let id = $(this).attr('id')
                completedQuestsPersonal[id] = new Date()
                // And delete from startedQuestsPersonal
                startedQuestsPersonal = startedQuestsPersonal.filter(function(value) {
                    return value !== id;
                });
                for(const r in questsPersonal[id]["reward"]) {
                    if (reward === "") reward += "Reward: "
                    reward += questsPersonal[id]["reward"][r] + " "
                    manageEffects(questsPersonal[id]["reward"][r])
                }
                // Save completedQuestsPersonal
                setCookie("completedQuestsPersonal", JSON.stringify(completedQuestsPersonal))
                // Save startedQuestsPersonal
                setCookie("startedQuestsPersonal", JSON.stringify(startedQuestsPersonal))
            });
            if (reward !== "")
                setTimeout(function() {
                        newMessage(reward, true)
                    }, 800);
                    $(".formSubmit").replaceWith("<p>Quests completed!</p>")
            break

        case "startPersonalQuests":
            $('.form-check-input:checked').each(function() {
                startedQuestsPersonal.push($(this).attr('id'));
            });
            $(".formSubmit").replaceWith("<p>Quests accepted!</p>")
            // Save startedQuestsPersonal
            setCookie("startedQuestsPersonal", JSON.stringify(startedQuestsPersonal))
            break

        case "startStoryQuests":
            $('.form-check-input:checked').each(function() {
                startedQuestsStory.push($(this).attr('id'));
                // Show the conversation with id
                $("#" + questStory[$(this).attr('id')]["conversation"])[0].style.display = "initial"
            });
            $(".formSubmit").replaceWith("<p>Quests accepted!</p>")
            // Save startedQuestsPersonal
            setCookie("startedQuestsStory", JSON.stringify(startedQuestsStory))
            break

        case "None":
            break

        default:
            if (name.split(" ").length > 1) {
                if (skills.hasOwnProperty(name.split(" ")[0])) {
                    const skill = name.split(" ")[0]
                    const xp = parseInt(name.split(" ")[1])
                    skills[skill]["xp"] += xp
                    if (skills[skill]["xp"] >= 100) {
                        skills[skill]["xp"] -= 100
                        skills[skill]["lvl"] += 1
                        setTimeout(function() {
                            newMessage("Level up! " + skill + " is now level " + skills[skill]["lvl"], true)
                        }, 800);
                    }
                    setCookie("skills", JSON.stringify(skills))
                }
            } else
                console.log(name)
    }
}

function hasOneDayPassed(date1, date2) {
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const differenceInMilliseconds = Math.abs(date1.getTime() - date2.getTime());

    return differenceInMilliseconds >= oneDayInMilliseconds;
}