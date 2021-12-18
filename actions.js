$(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
        $("#header").addClass('not-top');
    } else {
        $("#header").removeClass('not-top');
    }
});


function chatWithUs() {
    var url="https://api.whatsapp.com/send";
    var text="Hello! I want to know more your products. Let's discuss.";
    window.open(url + '?phone=+919923213941&text='+ encodeURIComponent(text));
}