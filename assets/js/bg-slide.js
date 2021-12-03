
var slideImgs = [];
function onStart(){
    $("body .content main .grid1 .BG img").each(function (i, elm) {
        console.log(i+", "+$(elm).attr("src"));
        slideImgs.push(elm);
    });

    slideImg(1, true);

}
function slideImg(num, next) {
    setTimeout(() => {
        $(slideImgs[num]).addClass("show");
        if (num==0) $(slideImgs[slideImgs.length-1]).css("z-index", "2010");
        setTimeout(() => {
            if(num == 0){
                $(slideImgs[slideImgs.length-1]).removeClass("show");
                $(slideImgs[slideImgs.length-1]).removeAttr("style");
            }else{
                $(slideImgs[num-1]).removeClass("show");
            }
        }, 800);
        if(next){
            if(num == slideImgs.length-1) slideImg(0, true);
            slideImg(num+1, true);
        }
    }, 5000);
}
onStart();