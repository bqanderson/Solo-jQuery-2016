$(function() {
  var redCount = 1;
  var yellowCount = 1;
  var greenCount = 1;
  var blueCount = 1;

  var colorButton;

  $('.color-button').on('click', function(){
    colorButton = $(this).data('color');

console.log(colorButton);

    if(colorButton == 'red'){
      $('.container').append('<div class="color-cube red">red</div>');
      $('#red').text('Total red: ' + redCount++);

    }else if(colorButton == 'yellow'){
      $('.container').append('<div class="color-cube yellow">yellow</div>');
      $('#yellow').text('Total yellow: ' + yellowCount++);

    }else if(colorButton == 'green'){
      $('.container').append('<div class="color-cube green">green</div>');
      $('#green').text('Total green: ' + greenCount++);

    }else if(colorButton == 'blue'){
      $('.container').append('<div class="color-cube blue">blue</div>');
      $('#blue').text('Total blue: ' + blueCount++);
    }

  })
});
