$(document).ready(function(){

    onClick()

});

function onClick(){
    $("#buttonemail").click(function(){
        // console.log($('#uemail').val());
        var useremail = $('#uemail').val();
/*        console.log(useremail);*/
        $.ajax({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users?email="+useremail,
            dataType: 'json',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Headers':'*'
            },
            success: function(data) { 
                /*console.log(data[0].email);*/

                if (data.length == 1){
                    // console.log ("Success with "+data[0].email);
                    window.location.href = "https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif";


                }
                else {
                    /*console.log (useremail +" not found");*/
                     window.location.href = "https://thumbs.gfycat.com/OrangeAjarIriomotecat-size_restricted.gif"
                }

            },
            error: function(xhr, status, error) { 
                console.log("ERROR: ", error) 
            }
        })
    })
}


