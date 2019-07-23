$(function(){
	var k = $(window).height();
	 $(".next").click(function(event) {
       $.fn.fullpage.moveSectionDown();
    });
    $('#fullpage').fullpage({
        'css3': true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        'navigation': true,
        'navigationPosition': 'right',
        afterLoad: function(anchorLink, index){
    	if(index == 2){
    		$(".next").fadeOut();
    		$('.serch').show().animate({'right': 370}, 1500, "easeOutBack", function(){
    			$('.words-02').animate({'opacity': 1}, 1500, function(){
    				$('.serch').hide();
    				$('.serchword').show().animate({"height": 30, "right": 250, "bottom": 452}, 1000);
    				$('.moresf').show().animate({"height": 218}, 1000, "easeInOutQuart");
    				$('.words-01-2').animate({"opacity": 1}, 500, function(){
    					 $(".next").fadeIn();
    				});
    			});
    			
    		});
    	}
   },
   		onLeave: function(index, nextIndex, direction){
   			$(".next").fadeOut();
   			if(index == 2 && nextIndex == 3){
   				$('.sf-02').show().animate({"bottom": -(k - 250), "width": 207 , "left": 260}, 2000, function(){
   					$('.img-01-a').animate({'opacity': 1}, 1000, function(){
   						$('.btn-01-a').animate({'opacity': 1}, 500, function(){
   							 $(".next").fadeIn();
   						});
   					});
   				});
   				$('.cover').show();
   			}
   			if (index == 3 && nextIndex == 4) {
   				$('.sf-02').hide();
   				$('.t1f').show().animate({"bottom" : -((k - 250) + 50), "left": 260}, 2000, function(){
   					$(this).hide();
   					$('.car-ing').show();
   					$('.car').animate({"left": "150%"}, 3000, "easeInElastic",function(){
   						$('.words-a').animate({'opacity': 1}, 500);
   						$('.note').show();
   						$('.note-img').animate({'opacity': 1}, 500, function(){
   							 $(".next").fadeIn();
   						});
   					});
   				});
   			}
   			if (index == 4 && nextIndex == 5){
   				$('.hand-05').animate({"bottom": 0}, 2000, function() {
   					$('.mouse-05-a').animate({'opacity': 1});
   					$('.words-05').show();
   					$('.t1f-05').show().animate({"bottom": 70}, 1000, function() {
   						$('.order-05').animate({"bottom": 390}, function(){
   							 $(".next").fadeIn();
   						});
   					});

   				});
   			}
   			if (index == 5 && nextIndex == 6) {
   				 $(".t1f-05").animate({"bottom": -(k - 500), "left": "40%", "width": 65}, 1500, function() {
                        $(".t1f-05").hide();
                    });
   				 $(".box-06").animate({"left": "38%"}, 1500, function(){
   				 	$(".box-06").animate({"bottom": 40}, 500, function(){
   				 		$(this).hide();
   				 		$('.lgo-06').show();
   				 		$('.pop-06').show();
   				 		$(".section6").animate({"backgroundPositionX": "100%"}, 4000, function(){
   				 			$('.man').animate({"height": 305, "bottom": 116}, 1000, function(){
   				 				$(this).animate({ "right": 500}, 500, function(){
   				 					$('.door').animate({"opacity": 1}, 200, function(){
   				 						$('.women').show().animate({"right": 350, "height": 306 },500, function() {
   				 							$('.t8').show();
   				 							$('.lgo').animate({"opacity": 1}, function(){
   				 								 $(".next").fadeIn();
   				 							});
   				 						});
   				 					});
   				 				});
   				 			});
   				 		});
   				 	});
   				 });
   			}
   			if (index == 6 && nextIndex == 7) {
   				 setTimeout(function() {
                    $(".star").animate({"width": 120}, 500, function() {
                        $(".good-07").show();
                         $(".next").fadeIn();
                    });

                }, 2000);
   			}
   			 $(".beginShoping").hover(function() {
                   $(".btn-08-a").toggle();  //  toggle  显示和隐藏的切换
              });
   			 $(document).mousemove(function(event) {
                   var x = event.pageX - $(".hand-08").width() / 2;  
                   var y = event.pageY + 10;                      
                   var minY = k - 449; 
                   if(y < minY ) {
                      y = minY;
                   }
                
                 $(".hand-08").css({"left": x, "top": y});
              });
               // 当我们点击 再来一次的 时候， 分两步进行
               $(".again").click(function(event) {
                 // 1. 返回第1屏幕 
                   $.fn.fullpage.moveTo(1);
                   $("img, .move").attr("style", "");
               });
   		},
    })  
})