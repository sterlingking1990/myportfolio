$(document).on('click',':submit',function(e){
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "izundukingsleyemeka@gmail.com",
        Password: "2c8329bf-752c-4a3e-a352-afaa00d69ada",
        To: 'contact@nextflixnebo.com',
        From: "izundukingsleyemeka@gmail.com",
        Subject: "Am testing this service",
        Body: "This is the body, Lets shoot it"
    }).then(
        message => alert(message)
    );

})
