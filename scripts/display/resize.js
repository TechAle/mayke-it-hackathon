let isSmall = false;
const statusNow = $("#StatusUser")
const statudDiv = $("#StatusDiv")

$(window).resize(function() {

    onResize()

});

function onResize() {
    if (window.matchMedia("(max-width: 575px)").matches) {
        if (isSmall) {
            return;
        }
        onSmall()
    } else {
        fixDiv()
        changeHeaderPadding()
        if (!isSmall) {
            return;
        }
        onBig()
    }
}

function fixDiv() {
    let lenStatus = statusNow.width()
    const lenDiv = statudDiv.width()
    let space = lenStatus - lenDiv

    if (space === 0)
        return;
    if (space > -50) {
        while (space > -50) {
            statusNow.text(status.substring(0, statusNow.text().length - 3))
            if (statusNow.text() !== status) {
                statusNow.text(statusNow.text() + "..")
                lenStatus = statusNow.width()
                space = lenStatus - lenDiv
            } else break
        }

    } else {
        while (space < -80 && statusNow.text() !== status) {
            statusNow.text(status.substring(0, statusNow.text().length - 1))
            if (statusNow.text() !== status) {
                statusNow.text(statusNow.text() + "..")
                lenStatus = statusNow.width()
                space = lenStatus - lenDiv
            } else break
        }
    }
}

function changeHeaderPadding() {
    /*var goBackSectionWidth = $('#goBackSection').width();
    $('#nameSection').css('padding-right', goBackSectionWidth + 'px')
                     .css('width', "calc(100% + " + goBackSectionWidth + "px");*/
}

function onSmall() {
    $("#redDiv").hide();
    $("#greenDiv").css("max-width", "100%")
    isSmall = true
}

function onBig() {
    $("#redDiv").show();
    $("#greenDiv").show().css("max-width", "300px");
    isSmall = false
}

function showConversation() {
    $("#greenDiv").hide();
    $("#redDiv").show();
    fixDiv()
}

function showChatSelection() {
    $("#greenDiv").show();
    $("#redDiv").hide();
}

onResize()