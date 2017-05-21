window.onload=function(){
		js = $('.shop_mapPlaceA').attr('js');
		
			dateBloc="";
		if(js == "4641")
		dateBloc="?id=4641";
		//$('.shop_mapPlace').css('display','none'); 
		$('.shop_mapPlace').html('<img class="loadingImage" src="/assets/image/loadingImage.gif">');
		
	  if(js == "4641")
		  url = 'mapajax-egs.html';
		 else
		 url = 'mapajax.html';
	    $.ajax({
        type: 'GET',
        url: url + dateBloc,
        success: function(msg){			
         $('.shop_mapPlace').html(msg);		
 
        }
      });
}


$(document).ready(function(){
	
	$(document).on('click', '.paginationContainerB', function()
	{
		date_JS="";
		js = $(this).attr('js');
		if(js == "4641")
		date_JS="&js=1";
		window.mas;
		var masN=[];
		var j;
		j=0;

	   for(key in  window.mas )
	   {
		 console.log(window.mas[key]);
		 // console.log(j);
	   j++;
	       if(j<=7)  
		   {   
	                 $.ajax({
  type: "GET",
  url: "/ajax.html",
  data: "id=" + window.mas[key] + date_JS,
  success: function(msg){
   $('.tovar #pdopage .rows').append(msg);
    
  }

}); 
		   }
		   else
		   masN[masN.length]=window.mas[key];
		   
		   
		   }
		   window.mas=masN;
		   console.log(  window.mas);
     $('.paginationContainerB').removeClass('activeB')			
if(window.mas.length > 1)
$('.paginationContainerB').addClass('activeB')	 
		   
	window.mas=masN;
	});
	$(document).on('click', '.shop_mapPlaceA', function(){
	js = $(this).attr('js');
	dateBloc="";
		if(js == "4641")
		dateBloc="?id=4641";	
		
	shop_mapPlace = $('.shop_mapPlace').html();
	if(shop_mapPlace=="")
	{
		$('.shop_mapPlace').html('<img class="loadingImage" src="/assets/image/loadingImage.gif">');
		  if(js == "4641")
		  url = 'mapajax-egs.html';
		 else
		 url = 'mapajax.html';
	    $.ajax({
        type: 'GET',
        url: url + dateBloc,
        success: function(msg){
         $('.shop_mapPlace').html(msg);
		 $('.shop_mapPlace').slideToggle();
        }
      });	
	}
	else
	{
	console.log($('#pdopage').css('margin-top'));
	if($('#pdopage').css('min-height')=="485px")
	{
	$('#pdopage').css('margin-top','0px');	
	$('#pdopage').css('min-height','auto');
	}
	else
		$('.shop_mapPlace').slideToggle();

	}
	return false;
	 });
	
	  $(document).on('click', '.columns a', function(){
	
           window.open(this.href, '_blank');
   
   
   return false;
	  });
	
   $(document).on('click', '.shopInform .claim', function(){
       var id = $(this).parents('.shopInform').attr('data-id');
       var top = parseInt( $(this).offset().top );
       var left = parseInt( $(this).offset().left );
       
       var new_top = top + 32;
       var new_left = left - 60;
       $('#shopClaimForm input[name="id"]').val(id);
       $('#shopClaimForm').css({'top': new_top+'px','left': new_left+'px'}).fadeIn();
       
   });
   
   $(document).on('click', '#shopClaimForm .closeIt span', function(){
        $('#shopClaimForm').fadeOut();
   });
   
   
   $(document).on('click', '.shop_comments .addComment button', function(){
       
        $('#formReviewPlace').fadeIn();
   });
   
   $(document).on('click', '.shop_reviews .one .hideIt', function(){
        var parent = $(this).parents('.one');
        $(parent).find('.hideIt, .Rtext').slideUp();
        $(parent).find('.title').addClass('open');
   });
   
   $(document).on('click', '.shop_reviews .one .title.open', function(){
        var parent = $(this).parents('.one');
        $(parent).find('.hideIt, .Rtext').slideDown();
        $(parent).find('.title').removeClass('open');
   });
   
   // add count
   $(document).on('click', '.shopAddCountShow, .shopInform .assorti .columns a', function() {
      var url = $(this).parents('.shopInform').data('url');

      $.ajax({
        type: 'GET',
        url: url,
        success: function(msg){
          //msg = JSON.parse(msg);
          //window.location.href = msg.url;
        }
      });
      return true;
    });
    
    // route
        $('.route .control').on('click', function(){
        var inside = $(this).parents('.route').find('.inside');
        var viewPortWidth = $(this).parents('.route').find('.viewport').width();
        var margin =  Math.abs( parseInt( $(inside).css("margin-left") ) );
        var width = $(inside).find('.one').outerWidth();
        var size = $(inside).find('.one').size();
        var max = size*width;
        var maxSize = Math.abs( viewPortWidth/width ).toFixed();
        
        if( max <= (margin+(width*maxSize)) && size > 3  ) {
            
            if( $(this).hasClass('l') ) {
                $(inside).stop(true,true).animate({"margin-left":"+="+width+"px"}, function(){
                    var margin = Math.abs( parseInt( $(inside).css("margin-left") ) );
                });
            } else {
                $(inside).stop(true,true).animate({"margin-left":"0px"}, function(){
                    var margin = Math.abs( parseInt( $(inside).css("margin-left") ) );
                });
            }
        } else if( margin == 0 && size > 3 ) {
            
            if( $(this).hasClass('l') ) {
                $(inside).stop(true,true).animate({"margin-left":"-"+(max-(width*maxSize))+"px"}, function(){
                    var margin = Math.abs( parseInt( $(inside).css("margin-left") ) );
                });
            } else {
                $(inside).stop(true,true).animate({"margin-left":"-="+width+"px"}, function(){
                    var margin = Math.abs( parseInt( $(inside).css("margin-left") ) );
                });
            }
        } else {
            if(  size > 3 ) {
           
            if( $(this).hasClass('l') ) {
                $(inside).stop(true,true).animate({"margin-left":"+="+width+"px"}, function(){
                    var margin = Math.abs( parseInt( $(inside).css("margin-left") ) );
                });
            } else {
                $(inside).stop(true,true).animate({"margin-left":"-="+width+"px"}, function(){
                    var margin = Math.abs( parseInt( $(inside).css("margin-left") ) );
                });
            }
            }
        }
    });
   
});