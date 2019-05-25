$(function(){
    $("#email").blur(function(){
        var email=$("#email").val();
        var reg= /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        var ismail=reg.test(email);
        if(ismail){
            $.ajax({
                url:"http://localhost:8080/user/test",
                type:"get",
                data:{email},
                dataType:"json",
                success:function(result){
                    console.log(result);
                    if(result==1){
                        alert("对不起，该邮箱已被注册。");
                    }else{
                        $(".info1_success").removeClass("d-none");
                        $(".info1_fail").addClass("d-none");
                    }
                }
            })
            
        }else{
            $(".info1_fail").removeClass("d-none");
            $(".info1_success").addClass("d-none");
        }
    })
    $("#upwd").blur(function(){
        var upwd=$("#upwd").val();
        var reg= /^[A-Za-z0-9]{8}$/;
        var ispwd=reg.test(upwd);
        if(ispwd){
            $(".info2_success").removeClass("d-none");
            $(".info2_fail").addClass("d-none");
        }else{
            $(".info2_fail").removeClass("d-none");
            $(".info2_success").addClass("d-none");
        }
    })
    $("#reupwd").blur(function(){
        var upwd=$("#upwd").val();
        var reupwd=$("#reupwd").val();
        if(reupwd==upwd){
            $(".info3_success").removeClass("d-none");
            $(".info3_fail").addClass("d-none");
        }else{
            $(".info3_fail").removeClass("d-none");
            $(".info3_success").addClass("d-none");
        }
        
    })
    $("#clast").blur(function(){
        var clast=$("#clast").val();
        var reg= /^[\u4E00-\u9FA5]{1,3}$/;
        var isclast=reg.test(clast);
        var html="";
        var str="";
        if(isclast){
            $(".info4_success").removeClass("d-none");
            $(".info4_fail").addClass("d-none");
            $("#info_clast_icon").empty();
            $("#info_clast").empty();
        }else{
            $(".info4_fail").removeClass("d-none");
            $(".info4_success").addClass("d-none");
            html+=`<img src="image/reg/myprofile-error-icon.png" alt="" class="">`;
            str+=`<span>姓氏 不得包含 > < () % ; \ $</span>`;
            $("#info_clast_icon").html(html);
            $("#info_clast").html(str);
        }
    })
    $("#cfirst").blur(function(){
        var cfirst=$("#cfirst").val();
        var reg= /^[\u4E00-\u9FA5]{1,4}$/;
        var iscfirst=reg.test(cfirst);
        console.log(iscfirst);
        var html="";
        var str="";
        if(iscfirst){
            $(".info5_success").removeClass("d-none");
            $(".info5_fail").addClass("d-none");
            $("#info_cfirst_icon").empty();
            $("#info_cfirst").empty();
        }else{
            $(".info5_fail").removeClass("d-none");
            $(".info5_success").addClass("d-none");
            html+=`<img src="image/reg/myprofile-error-icon.png" alt="" class="">`;
            str+=`<span>名字 不得包含 > < () % ; \ $</span>`;
            $("#info_cfirst_icon").html(html);
            $("#info_cfirst").html(str);
        }
    })
    $("#elast").blur(function(){
        var elast=$("#elast").val();
        var reg= /^[\w]{1,12}$/;
        var iselast=reg.test(elast);
        var html="";
        var str="";
        if(iselast){
            $(".info6_success").removeClass("d-none");
            $(".info6_fail").addClass("d-none");
            $("#info_elast_icon").empty();
            $("#info_elast").empty();
        }else{
            $(".info6_fail").removeClass("d-none");
            $(".info6_success").addClass("d-none");
            html+=`<img src="image/reg/myprofile-error-icon.png" alt="" class="">`;
            str+=`<span>英文姓氏 不得包含 > < () % ; \ $</span>`;
            $("#info_elast_icon").html(html);
            $("#info_elast").html(str);
        }
    })
    $("#efirst").blur(function(){
        var efirst=$("#efirst").val();
        var reg= /^[\w]{1,12}$/;
        var isefirst=reg.test(efirst);
        console.log(isefirst);
        var html="";
        var str="";
        if(isefirst){
            $(".info7_success").removeClass("d-none");
            $(".info7_fail").addClass("d-none");
            $("#info_efirst_icon").empty();
            $("#info_efirst").empty();
        }else{
            $(".info7_fail").removeClass("d-none");
            $(".info7_success").addClass("d-none");
            html+=`<img src="image/reg/myprofile-error-icon.png" alt="" class="">`;
            str+=`<span>英文名字 不得包含 > < () % ; \ $</span>`;
            console.log(str);
            $("#info_efirst_icon").html(html);
            $("#info_efirst").html(str);
        }
    })
    $("#position").blur(function(){
        var position=$("#position").val();
        var reg=/^[\u4E00-\u9FA5]{1,4}$/;
        var isposition=reg.test(position);
        console.log(isposition);
        if(isposition){
            $(".info8_success").removeClass("d-none");
        }else{
            $(".info8_success").addClass("d-none");
        }
    })
    $("#tel").blur(function(){
        var tel=$("#tel").val();
        var reg= /(^(\d{3,4}-)?\d{7,8})$|(13[0-9]{9})/;
        var istel=reg.test(tel);
        if(istel){
            $(".info9_success").removeClass("d-none");
            $(".info9_fail").addClass("d-none");
        }else{
            $(".info9_fail").removeClass("d-none");
            $(".info9_success").addClass("d-none");
        }
    })
    $("#company").blur(function(){
        var company=$("#company").val();
        var reg=/^[\u4E00-\u9FA5]{1,20}$/;
        var iscompany=reg.test(company);
        if(iscompany){
            $(".info10_success").removeClass("d-none");
        }else{
            $(".info10_success").addClass("d-none");
        }
    })
    $("#address1").blur(function(){
        var address1=$("#address1").val();
        var reg=/^[\u4E00-\u9FA5]{1,40}$/;
        var isaddress=reg.test(address1);
        if(isaddress){
            $(".info11_success").removeClass("d-none");
        }else{
            $(".info11_success").addClass("d-none");
        }
    })
    $("#address2").blur(function(){
        var address2=$("#address2").val();
        var reg=/^[\u4E00-\u9FA5]{1,40}$/;
        var isaddress=reg.test(address2);
        if(isaddress){
            $(".info12_success").removeClass("d-none");
        }else{
            $(".info12_success").addClass("d-none");
        }
    })
    $("#city").blur(function(){
        var city=$("#city").val();
        var reg=/^[\u4E00-\u9FA5]{1,10}$/;
        var iscity=reg.test(city);
        if(iscity){
            $(".info13_success").removeClass("d-none");
        }else{
            $(".info13_success").addClass("d-none");
        }
    })
    $("#city").blur(function(){
        var city=$("#city").val();
        var reg=/^[\u4E00-\u9FA5]{1,10}$/;
        var iscity=reg.test(city);
        if(iscity){
            $(".info13_success").removeClass("d-none");
        }else{
            $(".info13_success").addClass("d-none");
        }
    })
    $("#postCode").blur(function(){
        var postCode=$("#postCode").val();
        var reg=/^\d{1,10}$/;
        var ispostCode=reg.test(postCode);
        if(ispostCode){
            $(".info14_success").removeClass("d-none");
        }else{
            $(".info14_success").addClass("d-none");
        }
    })
    $("#btn").click(function(){
        var email=$("#email").val();
        var upwd=$("#upwd").val();
        var clast=$("#clast").val();
        var cfirst=$("#cfirst").val();
        var position=$("#position").val();
        var tel=$("#tel").val();
        var company=$("#company").val();
        var address=$("#address1").val();
        var city=$("#city").val();
        var postCode=$("#postCode").val();
        var region=$("#select").val();
        var province=$("#province").val();
        console.log(region,province);
        $.ajax({
            url:"http://localhost:8080/user/reg",
            type:"get",
            data:{email,upwd,region,clast,cfirst,position,tel,company,address,city,province,postCode},
            dataType:"json",
            success:function(result){
                if(result==1){
                    confirm(`注册成功,请按确定跳转至主页.`)
                    location.href="http://127.0.0.1:5501/index.html";
                }else{
                    alert("注册信息不正确,请确认信息无误!")
                }
            }
        })
    })
})