let currentChat = null
let firstMessage = true
$(document).ready(function () {
    $(document).on('click', '.chatSelector', function() {
        changeConversation($(this).attr('id'))
        if (window.matchMedia("(max-width: 575px)").matches) {
            showConversation()
        }
    });

    $("#back").click(function () {
        if (window.matchMedia("(max-width: 575px)").matches) {
            showChatSelection()
        }
    });
    changeHeaderPadding()
    loadConversations()
});



function newMessage(input, isReceived) {
    if (input === "")
        return
    let wait = 0
    if (isReceived) {
        wait = 750
    } else {
        // TODO if i have time, maybe try to change the input with "message"
    }
    setTimeout(function() {
        const message = buildMessage(input, isReceived);
        $('#chat').append(message);
        saveHistory(message)
        firstMessage = false
        let divElement = document.getElementById('chat');
        divElement.scrollTop = divElement.scrollHeight;
    }, wait);
}

function saveHistory(message) {
    if (history[currentChat].length === 0 || (!firstMessage || message.classList.contains("sent"))) {
        // Decrease the length of history[currentChat] to 4 by removing the first elements
        while (history[currentChat].length >= 4) {
            history[currentChat].shift()
        }
        history[currentChat].push(message.outerHTML)
        // Save in cookie history
        setCookie("history", JSON.stringify(history))
    }
}

function buildMessage(text, isReceived = false) {
    var element = document.createElement('div');

    element.classList.add('message', isReceived ? 'received' : 'sent');

    element.innerHTML = text;

    return element;
}

let tutorial = ""
function loadConversations() {
    if (getCookie("tutorial"))
        tutorial = getCookie("tutorial")

    for(const name in conversations) {
        values = conversations[name]
        // Use appendchild to add the image and text
        let imageTextContainer = document.createElement('div')
        imageTextContainer.classList.add('image-text-container')
        let image = document.createElement('img')
        image.src = "images/conversation/" + values['icon']
        image.alt = "Image of " + name
        image.classList.add('rounded-circle')
        imageTextContainer.appendChild(image)
        let toAdd = values['description']
        imageTextContainer.innerHTML += values['name'] + "<br>" + toAdd
        let chatSelector = document.createElement('div')
        chatSelector.classList.add('row')
        chatSelector.classList.add('chatSelector')
        chatSelector.id = name
        chatSelector.appendChild(imageTextContainer)


        if ((values["default"] === true && tutorial === "done") || (tutorial !== "done" && name==="Tutorial")) {
            $("#greenDiv")[0].appendChild(chatSelector)
            changeConversation(name)
        } else {
            // hide the chat selector
            if (!startedQuestsStory.includes(conversationUnlock[name]) && !completedQuestsStory.includes(conversationUnlock[name]) && name !== "Tutorial") {
                chatSelector.style.display = "none"
            }
            $("#greenDiv")[0].appendChild(chatSelector)
        }

    }
}

$('#arrow').click(() => {
    newMessage($('#selectInput').val(), false)
    sendMessage($('#selectInput').val())
});

function sendMessage(message) {
    const currentChatOptions = conversations[currentChat]["messages"][message]
    if (manageEffects(currentChatOptions["effect"])) {
        newMessage(currentChatOptions["response"], true)
        const options = currentChatOptions["options"]
        $("#selectInput").empty()
        options.forEach(option => {
            $("#selectInput").append(`<option value="${option}">${option}</option>`)
        })
        optionsHistory[currentChat] = options
        // Save in cookie options
        setCookie("options", JSON.stringify(optionsHistory))

    }
}

let status = ""
function changeConversation(id) {
    $("#chat").empty()
    currentChat = id
    if (history[currentChat].length === 0) {
        sendMessage("firstMessage")
    } else {
        for (let i = 0; i < history[currentChat].length; i++) {
            $("#chat").append(history[currentChat][i])
        }
        // And now set the new options
        $("#selectInput").empty()
        optionsHistory[currentChat].forEach(option => {
            $("#selectInput").append(`<option value="${option}">${option}</option>`)
        })
        // Scroll all the way down

    }
    $("#pfp").attr("src", "images/conversation/" + conversations[id]["icon"])
    $("#StatusUser").text(conversations[id]["description"])
    status = conversations[id]["description"]
    $("#NameUser").text(conversations[id]["name"])
    fixDiv()
}

