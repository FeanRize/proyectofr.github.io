$(window).scroll(function() {
  if ($(this).scrollTop() > 1500) {
    $(".btn-perfil").removeClass("black").addClass("white");
  } else {
    $(".btn-perfil").removeClass("white").addClass("black");
  }
  if ($(this).scrollTop() > 3350) {
    $(".btn-perfil").removeClass("white").addClass("black");
  }
});
