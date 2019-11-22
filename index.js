const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const myemail="izundukingsleyemeka@gmail.com";
const from = document.querySelector('#email')
const subject = document.querySelector('#subject')
const message_body = document.querySelector('#message_body')

//validation email when focus out
$(document).on('focusout','#email',(e)=>{
    const email = document.querySelector('#email')
    if (email.value !== '' && !(email.value.match(mailformat))){
        alert("email address is invalid")
        $('#email').attr("status",false)
    }
    else{
        $('#email').attr("status",true)
    }
    e.preventDefault()
})

//trigger submit button
$(document).on('click', ':submit',function (e) {
    event.preventDefault();
    let isEntryValid=validateEntry();
    sendMail(isEntryValid);

})

validateEntry=()=>{
    const email_input = document.querySelector('#email')
    const isEmail=email_input.getAttribute("status")
    const isSubject = document.querySelector('#subject').value !== '' && document.querySelector('#subject').value.length<=20
    const isBody = document.querySelector('#message_body').value !== '' && document.querySelector('#message_body').value.length <= 250
    return isEmail && isSubject && isBody
}


const sendMail=(isEntryValid)=>{
    if(isEntryValid!==false){

        const link = 'mailto:' + myemail + ' ?subject=' + subject.value + '&body=' + message_body.value;
        window.open(link,'send Mail')
    }
    else{
        alert("Error sending mail, please check that email is valid and subject less than 20 characters long and message body isnt empty")
    }
}

