let currentChat = null
$(document).ready(function () {
    $(".chatSelector").click(function () {
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
    let wait = 0
    if (isReceived) {
        wait = 750
    }
    setTimeout(function() {
        const message = buildMessage(input, isReceived);
        $('#chat').append(message);
    }, wait);
}

function buildMessage(text, isReceived = false) {
    var element = document.createElement('div');

    element.classList.add('message', isReceived ? 'received' : 'sent');

    element.innerHTML = text;

    return element;
}

function loadConversations() {
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
        imageTextContainer.innerHTML += name + "<br>" + toAdd
        let chatSelector = document.createElement('div')
        chatSelector.classList.add('row')
        chatSelector.classList.add('chatSelector')
        chatSelector.id = "diary"
        chatSelector.appendChild(imageTextContainer)

        $("#greenDiv")[0].appendChild(chatSelector)

        if (values["default"] === true) {
            changeConversation(name)
        }

    }
}

$('#arrow').click(() => {
    newMessage($('#selectInput').val(), false)
    sendMessage($('#selectInput').val())
});

function sendMessage(message) {
    const currentChatOptions = conversations[currentChat]["messages"][message]
    newMessage(currentChatOptions["text"], true)
    const options = currentChatOptions["options"]
    $("#selectInput").empty()
    options.forEach(option => {
        $("#selectInput").append(`<option value="${option}">${option}</option>`)
    })
    manageEffects(currentChatOptions["effect"])
}

let status = ""
function changeConversation(id) {
    //$("#chat").empty()
    currentChat = id
    sendMessage("firstMessage")
    $("#pfp").attr("src", "images/conversation/" + conversations[id]["icon"])
    $("#StatusUser").text(conversations[id]["description"])
    status = conversations[id]["description"]
    $("#NameUser").text(id)
}

