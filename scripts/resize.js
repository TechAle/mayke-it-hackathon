let isSmall = false;

$(window).resize(function() {
    if (window.matchMedia("(max-width: 575px)").matches) {
        if (isSmall) {
            return;
        }
        onSmall()
    } else {
        changeHeaderPadding()
        if (!isSmall) {
            return;
        }
        onBig()
    }
});

function changeHeaderPadding() {
    var goBackSectionWidth = $('#goBackSection').width();
    $('#nameSection').css('padding-right', goBackSectionWidth + 'px');
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
}

function showChatSelection() {
    $("#greenDiv").show();
    $("#redDiv").hide();
}