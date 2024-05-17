let onOverlay = false;
$('img').click((event) => {
    if (!onOverlay) {
        $("#overlayPicture").attr("src", event.target.src);
        $('#overlay').show();
        onOverlay = true;
    }
});

$('#closeOverlay').click(() => {
    $('#overlay').hide();
    onOverlay = false;
});
