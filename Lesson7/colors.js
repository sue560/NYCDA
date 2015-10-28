 
// Change Background Color on SpaceBar

$(window).keypress(function(e) {
  var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  $("body").animate({color: newColor}, 2000); // animate
    console.log('Space pressed');
});

// Nick's Version

//On spacebar, get a new background color
$(document).on("keyup", function(e)) {
  if(e.keyCode == 32) {
    var newBackgroundColor = getBackgroundColor();
    setBackground(newBackgroundColor);
  }

//display new background color as the background color and as the text

function getBackgroundColor() {
  var result = "#";
  for(i=0, i<6; i++) {
      var character = values[Math.floor(Math.random()*messages.length)] 
    result + character
  }
  i = i + 1;
  return result 
}

var values = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


