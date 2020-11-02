$(document).ready(function(){
    $(".close").click(function(){
        $(".popup").hide();
    });
    // $(".headermenu").click(function(){
    //     $(".headernav").show();
    // });
    // $(".headermenu").click(function(){
    //     $(".headernav").hide();
    // });
    $(".headermenu").click(function(){
        $(".headernav").toggle();
        $(".input").hide();
        $(".sub1").hide();
        $(".sub2").hide();
        $(".sub3").hide();
        $(".sub4").hide();
        $(".sub5").hide();
    });
    $(".headermenu").click(function(){
        $(".menubg").toggle();
    });
    $(".searchopen").click(function(){
        $(".input").toggle();
        $(".sub1").hide();
        $(".sub2").hide();
        $(".sub3").hide();
        $(".sub4").hide();
        $(".sub5").hide();
    });
    $(".list1").click(function(){
        $(".sub1").toggle();
        $(".sub2").hide();
        $(".sub3").hide();
        $(".sub4").hide();
        $(".sub5").hide();
        $(".input").hide();
    })
    $(".list2").click(function(){
        $(".sub2").toggle();
        $(".sub1").hide();
        $(".sub3").hide();
        $(".sub4").hide();
        $(".sub5").hide();
        $(".input").hide();
    })
    $(".list3").click(function(){
        $(".sub3").toggle();
        $(".sub2").hide();
        $(".sub1").hide();
        $(".sub4").hide();
        $(".sub5").hide();
        $(".input").hide();
    })
    $(".list4").click(function(){
        $(".sub4").toggle();
        $(".sub2").hide();
        $(".sub3").hide();
        $(".sub1").hide();
        $(".sub5").hide();
        $(".input").hide();
    })
    $(".list5").click(function(){
        $(".sub5").toggle();
        $(".sub2").hide();
        $(".sub3").hide();
        $(".sub4").hide();
        $(".sub1").hide();
        $(".input").hide();
    })
    $(".fmenu").click(function(){
        $(".fnav").show();
    })
    $(".fdown").click(function(){
        $(".fnav").hide();
    })
});
$(document).ready(function() {
    $('.btn_close').click(function() {

        var chkd = $("#pop_day").is(":checked");
        if(chkd){
            $.cookie('popup', 'hidden', {expires : 1});
        }
        $('.popup').hide();
    }); 

    if($.cookie('popup') == 'hidden'){
        $('.popup').hide();
        }else{
        $('.popup').show();
    }
});
$(document).ready(function(){
    $(".mobilenavopen").click(function(){
        $(".mobilenav").show();
    });
    $(".mobilenavclose").click(function(){
        $(".mobilenav").hide();
    });
    $(".loginopen").click(function(){
        $(".login").show();
    });
    $(".loginclose").click(function(){
        $(".login").hide();
    });
    $(".left1").click(function(){
        $(".mnavsub1").show();
    });
    $(".mnavsub1close").click(function(){
        $(".mnavsub1").hide();
    });
    $(".left2").click(function(){
        $(".mnavsub2").show();
    });
    $(".mnavsub2close").click(function(){
        $(".mnavsub2").hide();
    });
    $(".left3").click(function(){
        $(".mnavsub3").show();
    });
    $(".mnavsub3close").click(function(){
        $(".mnavsub3").hide();
    });
    $(".left4").click(function(){
        $(".mnavsub4").show();
    });
    $(".mnavsub4close").click(function(){
        $(".mnavsub4").hide();
    });
    $(".left5").click(function(){
        $(".mnavsub5").show();
    });
    $(".mnavsub5close").click(function(){
        $(".mnavsub5").hide();
    });
    $(".right1").click(function(){
        $(".mnavsub6").show();
    });
    $(".mnavsub6close").click(function(){
        $(".mnavsub6").hide();
    });
    $(".right2").click(function(){
        $(".mnavsub7").show();
    });
    $(".mnavsub7close").click(function(){
        $(".mnavsub7").hide();
    });
    $(".right3").click(function(){
        $(".mnavsub8").show();
    });
    $(".mnavsub8close").click(function(){
        $(".mnavsub8").hide();
    });
    $(".right4").click(function(){
        $(".mnavsub9").show();
    });
    $(".mnavsub9close").click(function(){
        $(".mnavsub9").hide();
    });
    $(".right5").click(function(){
        $(".mnavsub10").show();
    });
    $(".mnavsub10close").click(function(){
        $(".mnavsub10").hide();
    });
    $(".right6").click(function(){
        $(".mnavsub11").show();
    });
    $(".mnavsub11close").click(function(){
        $(".mnavsub11").hide();
    });
    $(".right7").click(function(){
        $(".mnavsub12").show();
    });
    $(".mnavsub12close").click(function(){
        $(".mnavsub12").hide();
    });
    $(".right8").click(function(){
        $(".mnavsub13").show();
    });
    $(".mnavsub13close").click(function(){
        $(".mnavsub13").hide();
    });
});
//Buttonslide구현
$(".btnSlide_next").click(function() {//next버튼을 눌렀을때
    if(!$(".images li").last().is(":visible")){
        //!는 부정연산자로써, li 마지막 객체가 :visible이 flase일때를 뜻한다
        $(".images li:visible").hide().next("li").fadeIn(400);
        //보이던 객체를 숨기고 다음객체를 0.4초안에 보여줌
        //fadeIn(400) 1000분의 1초*400이며 기본값이다
        $(".btnSlide_prev").removeClass("off");
    }
    if($(".images li").last().is(":visible")){//li 마지막 객체가 :visible이 true일때
        $(".btnSlide_next").addClass("off");
    }
    return false;
});
$(".btnSlide_prev").click(function() {//prev버튼을 눌렀을때
    if(!$(".images li").first().is(":visible")){
        //!는 부정연산자로써, li 첫번째 객체가 :visible이 flase일때를 뜻한다
        $(".images li:visible").hide().prev("li").fadeIn(400);
        //보이던 객체를 숨기고 이전객체를 0.4초안에 보여줌
        //fadeIn(400) 1000분의 1초*400이며 기본값이다
        $(".btnSlide_next").removeClass("off");
    }
    if($(".images li").first().is(":visible")){//li 첫번째 객체가 :visible이 true일때
        $(".btnSlide_prev").addClass("off");
    }
    return false;
});
$(document).ready(function(){
    $(".reser").click(function(){
        $(".rpopup").show();
    });
    $(".rclose").click(function(){
        $(".rpopup").hide();
    });
    $(".rcheck").click(function(){
        $(".rfinish").show();
        $(".rpopup").hide();
    });
    $(".rrclose").click(function(){
        $(".rfinish").hide();
    });
});
$(document).ready(function(){
    if($(window).width() < 641){
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }
    else if($(window).width() > 640){
        $('.slider').slick('unslick');
    }
});