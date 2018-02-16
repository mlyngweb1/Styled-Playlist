$('img').mouseover(function() {
  $(this).attr('src','assets/beethoven4.jpg');
});

$('img').mouseout(function() {
  $(this).attr('src','assets/beethoven3.jpg');
});

$(".delplaylist").click(function() {
  return confirm('Really delete this playlist?');
});

$(".delsong").click(function() {
  return confirm('Really delete this song?');
});