$(document).ready(function(){
  $(".clickable").click(function(){
    $("#funphoto-show").toggle();
    $("#funphoto-hide").toggle();
  });
});

$(document).ready(function(){
  $(".press").click(function(){
    $("#photo-show").toggle();
    $("#photo-hide").toggle();
  });
});

$(document).ready(function(){
  $("button#bark").click(function(){
    $("ul#Dog").prepend("<li>hei catty, Does human hair dye works on dogs?</li>");
    $("ul#Cat").prepend("<li>No</li>");
    $("ul#Dog").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#Cat").children("li").first().click(function(){
      $(this).remove();
    });
  });
  $("button#meow").click(function(){
    $("ul#Dog").prepend("<li>did you say that to just me up?</li>");
    $("ul#Cat").prepend("<li>yes</li>");
    $("ul#Dog").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#Cat").children("li").first().click(function(){
      $(this).remove();
    });
  })
});
