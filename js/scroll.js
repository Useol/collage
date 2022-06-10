$(function(){
  $("#collage").on('mousewheel',function(e){
    	var wheelDelta = e.originalEvent.wheelDelta;
      	if(wheelDelta > 0){
          $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
        }else{
        			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
            }
      });
});


$(function(){
  $('.box').on('click', function(){
   var imgNumber = $(this).attr('data-number');
   var imgReNumber = '<img src="/collage/img/'+imgNumber+'.jpg" alt="'+imgNumber+'" class="image_'+imgNumber+'">';
   $('.popup').fadeIn();
   $('.popup').html(imgReNumber);
  });

  $('.popup').on('click', function(){
    $('.popup').fadeOut();
  });
});
