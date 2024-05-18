let onOverlay = false;
$(document).on('click', 'img', (event) => {
    console.log("ciao")
    if (!onOverlay && event.target.id !== "closeOverlay" && event.target.id !== "overlay" && event.target.id !== "overlayPicture") {
        $("#overlayPicture").attr("src", event.target.src);
        $('#overlay').show();
        onOverlay = true;
    }
});

$('#closeOverlay').click(() => {
    $('#overlay').hide();
    onOverlay = false;
});
