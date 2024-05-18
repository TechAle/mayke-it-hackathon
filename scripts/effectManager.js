function onForm(event, name) {
    event.preventDefault()
    manageEffects(name)
}

function manageEffects(name) {
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

        case "startQuests":
            let newQuests = [];
            $('.form-check-input:checked').each(function() {
                newQuests.push($(this).attr('id'));
            });
            console.log(newQuests);
            $(".formSubmit").replaceWith("<p>Quests accepted!</p>")
            break

        case "None":
            break

        default:
            // Here checks like "Give X amount of xp"
            console.log(name)
    }
}