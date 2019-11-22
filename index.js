$(document).on('click', ':submit',function (e) {
    event.preventDefault();
    sendMail();

})

const sendMail=()=>{
    const from = document.querySelector('#email')
    const subject = document.querySelector('#subject')
    var message_body = document.querySelector('#message_body')
    const link = "mailto:izundukingsleyemeka@gmail.com" +
            "&from=" + escape(from.value) + 
            "&subject=" + escape(subject.value) +
            "&body=" + escape(message_body.value);

    window.location.href=link

}

