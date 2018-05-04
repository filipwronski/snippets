var customPopup = {
    customPopup: $('.custom-popup'),
    closePopup: $('.custom-popup__close'),
    init: function () {
        this.closePopup.on('click', function () {
            $(this).parent().parent().removeClass('open');
            $('html, body').removeClass('no-scroll');
        });
    },
    open: function () {
        this.customPopup.addClass('open');
        $('html, body').addClass('no-scroll');
    },
};

customPopup.init();

$('.popup-open').on('click', function () {
    customPopup.open();
})
console.log('test');