$(document).ready(function(){
    $("#login").click(function(){
        let account = $("#account").val();
        let pwd = $("#pwd").val();
        login(account, pwd);
    });
 });

 function login(name, pwd) {
    let url = 'http://127.0.0.1:8000/v1/api/user/login';
    let params = {
        "username": name,
        "password": pwd
    };
    $.ajax({
        type: "post",
        url: url,
        data: JSON.stringify(params),  
        contentType: "application/json; charset=utf-8",  
        dataType: "json", 
        success: function(response) {  
            console.log(response);  
            let data = response.data;
            console.log(data.token)
            localStorage.setItem("token", data.token)
        },
        error: function(xhr,status,error) {
        }
    });
};