$(function(){
    $.ajax({
        url:"footer.html",
        type:"get",
        success:function(html){
            // console.log(html);
            $(html).replaceAll("#footer_bg");
            $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head");
        }
    })
})