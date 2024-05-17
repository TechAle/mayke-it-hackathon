function newMessage(input, isReceived) {
    const message = buildMessage(input, isReceived);
    $('#chat').append(message);
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

