$(function(){
    $("#js-menuHam").on("click", function(){
        $("#Menu").animate({
            "top": "0%"
        }, 700, function() {
    $("#js-menuHam").toggle();
        $("#x").toggle();
  });
        
    })

    $("#x").on("click", function(){
         $("#js-menuHam").toggle();
        $("#x").toggle();
        $("#Menu").animate({
            "top": "-100%"
        }, 700);
    })
})