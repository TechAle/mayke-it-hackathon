let onOverlay = false;
$('img').click((event) => {
    if (!onOverlay) {
        console.log(event.target)
        $("#overlayPicture").attr("src", event.target.src);
        $('#overlay').show();
        onOverlay = true;
    }
});

$('#closeOverlay').click(() => {
    $('#overlay').hide();
    onOverlay = false;
});
