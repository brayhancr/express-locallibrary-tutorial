var doc = $(document);

doc.ready(() => {

    show_flash_messages();

});

function show_flash_messages() {
    
    let flashMsgs = $('.flash-msg');

    $.each(flashMsgs, function(index, msg) {
        $(msg).fadeIn('slow').fadeOut(4000);
    });
}

