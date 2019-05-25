$(function(){  
    $("#alarm").focus(function(){
        $(this).addClass("change");
    })
    $("#btn").click(function(){
        var email=$("#email").val();
        var upwd=$("#upwd").val();
        $.ajax({
            url:"http://localhost:8080/user/login",
            type:"get",
            data:{email,upwd},
            dataType:"json",
            success:function(result){
                if(result==1){
                    alert("登录成功");
                    $("#login_err").addClass("d-none");
                    $("#login_fail").addClass("d-none");
                    location.href="http://localhost:8080/index.html";
                }else if(result==2){
                    $("#login_err").removeClass("d-none");
                }else{
                    $("#login_fail").removeClass("d-none");
                }
            }
        })
    })
    $("#btn1").click(function(){
        location.href="http://127.0.0.1:5501/reg.html"
    })
})