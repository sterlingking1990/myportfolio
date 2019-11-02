function sendMailOnLocalStorage(message){
    //check if their is an old mail else initialize 
    var oldMail= JSON.parse(localStorage.getItem('Message')) || [];

    const {email,subject,message_body}=message;

    newMail={
        email:email,
        subject:subject,
        message_body:message_body
    }

    if(oldMail){
        oldMail.push(newMail)
        localStorage.setItem("Message",JSON.stringify(oldMail))
    }
    else{
        localStorage.setItem("Message",JSON.stringify(newMail))
    }

}

$(document).on('click',':submit',function(e){

})
