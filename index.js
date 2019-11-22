
const DATABASE_URI = 'http://localhost:3000/messages';

$(document).ready(function () {
    $('#submit').on('click', function (e) {
        e.preventDefault();
        sendMessage();
    });
});

const sendMessage=()=>{
    const data= new Object();

    data.email=$("input[name='email']").val()
    data.subject=$("input[name='subject']").val()
    data.body=$("textarea[name='body']").val()

    console.log(data.email,data.subject,data.body)
    $.ajax({
        type:'POST',
        url: DATABASE_URI,
        data:JSON.stringify(data),
        contentType:'application/json',
        success:setTimeout((e) => {
            e.preventDefault()
            document.getElementById("#success-mail").innerHTML = "Mail sent succesl"
            },5000
        ),error:function(){
            alert("couldnt send mail")
        }
    })
}




    