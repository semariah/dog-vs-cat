$(document).ready(function(){
  $(".clickable").click(function(){
    $("#funphoto-show").toggle();
    $("#funphoto-hide").toggle();
  });



  $(".press").click(function(){
    $("#photo-show").toggle();
    $("#photo-hide").toggle();
  });



  $("button#bark").click(function(){
    $("ul#Dog").append("<li>Bark, Bark, Bark catty, Does human hair dye works on dogs?</li>");
    $("ul#Dog").children("li").first().click(function(){
      $(this).remove();
    });
  });



  $("button#meow").click(function(){
    $("ul#Cat").append("<li>meowwww hell no silly!</li>");
    $("ul#Cat").children("li").first().click(function(){
      $(this).remove();
    });
  });



  $("button#bark").click(function(){
    $("ul#Dog").append("<li>Bark, Bark, Bark did you just say that to shut me up?</li>");
    $("ul#Dog").children("li").first().click(function(){
      $(this).remove();
    });
  });


  $("button#meow").click(function(){
    $("ul#Cat").append("<li>meowww yes!</li>");
    $("ul#Cat").children("li").first().click(function(){
      $(this).remove();
    });
  });



  $("button#bark").click(function(){
    $("ul#Dog").append("<li>Bark, Bark, Don't you want to know why i am asking?</li>");
    $("ul#Dog").children("li").first().click(function(){
      $(this).remove();
    });
  });



  $("button#meow").click(function(){
    $("ul#Cat").append("<li>meowww you want to dye yourself blonde?!</li>");
    $("ul#Cat").children("li").first().click(function(){
      $(this).remove();
    });
  });



  $("button#bark").click(function(){
    $("ul#Dog").append("<li>Bark, Yes!! I'd look like madonna!</li>");
    $("ul#Dog").children("li").first().click(function(){
      $(this).remove();
    });
  });



  $("button#meow").click(function(){
    $("ul#Cat").append("<li>meowww oh stop it!</li>");
    $("ul#Cat").children("li").first().click(function(){
      $(this).remove();
    });
  });

});
