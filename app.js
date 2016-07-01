$(function() {
  var redCount = 1;
  var yellowCount = 1;
  var greenCount = 1;
  var blueCount = 1;

  var colorButton;

if(colorButton=$('.color-button').data('color', 'red')){
  $('.color-button').data('color', 'red').on('click', function(){
    $('.container').append('<div class="color-cube red"></div>');
    $('#red').text('Total red: ' + redCount++);
  })

}else if (colorButton=$('.color-button').data('color', 'yellow')) {
  $('.color-button').data('color', 'yellow').on('click', function(){
    $('.container').append('<div class="color-cube yellow"></div>');
    $('#yellow').text('Total yellow: ' + yellowCount++);
  })
}


  // $('.color-button').on('click', function(){
  //   if(colorButton=$('.color-button').data('color', 'red')){
  //     $('.container').append('<div class="color-cube red"></div>');
  //     $('#red').text('Total red: ' + redCount++);

    // }else if (colorButton=$('.color-button').data('color', 'yellow')) {
    //   $('.container').append('<div class="color-cube yellow"></div>');
    //   $('#yellow').text('Total yellow: ' + yellowCount++);
    //
    // }else if (colorButton=$('.color-button').data('color', 'green')) {
    //   $('.container').append('<div class="color-cube green"></div>');
    //   $('#green').text('Total green: ' + greenCount++);
    //
    // }else if (colorButton=$('.color-button').data('color', 'blue')) {
    //   $('.container').append('<div class="color-cube blue"></div>');
    //   $('#blue').text('Total blue: ' + blueCount++);
    // }

  // });

  // $('.color-button').on('click', function(){
  //   $('.container').append('<div class="color-cube yellow"></div>');
  //   $('#yellow').text('Total red: ' + yellowCount++);
  // });
  //
  // $('.color-button').on('click', function(){
  //   $('.container').append('<div class="color-cube green"></div>');
  //   $('#green').text('Total red: ' + greenCount++);
  // });
  //
  // $('.color-button').on('click', function(){
  //   $('.container').append('<div class="color-cube blue"></div>');
  //   $('#blue').text('Total red: ' + blueCount++);
  // });


  // $.data('color').on('click', function(){
  //   $('.container').append('<div class="color-cube red"></div>');
  // });



});
