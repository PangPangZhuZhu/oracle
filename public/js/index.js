$(function(){
    $("#btn1").click(function(){
        location.href="http://127.0.0.1:5501/login.html"
    })
    var count=0;
    var move=1;
    $(".img2").click(function(){
        
        if(move==6){
            count=0;
            move=1;
        }
        console.log(`开始时:${count},${move}`)
        // if(move==6){
        //     $("#banner").css("left",`${-1423*0}px`)
        // }
        // if(move==0){
        //     $("#banner").css("left",`${-1423*0}px`)
        // }
        // if(move==5){
        //     $("#banner").css("transition","none");
        // $("#banner").css("left",`${-1423*0}px`);
        // }
        
        // if(move==6){
            //     move=0;
            //     $("#banner").css("left",`${-1423*move}px`);
            // }
            // $("#banner").css("transition","0.5s all linear")
            // move++;
            // if(move<5){    
            //     $("#banner").css("left",`${-1423*move}px`);
                
            // }
            // else{
            //     $("#banner").css("left",`${-1423*move}px`);  
            // }
            
            // console.log(move)
        // else{
        //     $("#banner").css("left",`${-1423*move}px`);
        
        // }
        if(count<5){
            $("#banner").css("left",`${-1423*move}px`);
            count++;//6
            move++;//5 
        }else{
            $("#banner").css("transition","none").css("left",`${-1423*2}px`);
            count++;
            move++;
        }
        console.log(`结束时:${count},${move}`)
    })
   
})