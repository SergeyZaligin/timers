

var mas1 = ['images/group1/1.jpg', 'images/group1/2.jpg', 'images/group1/3.jpg', 'images/group1/4.jpg'];
var mas2 = ['images/group2/1.jpg', 'images/group2/2.jpg', 'images/group2/3.jpg', 'images/group2/4.jpg'];

function tim (){
	var timer, timer2;
	clearInterval(timer);
	clearInterval(timer2);
	var i = 0;
	var j = 0;

	timer =	setInterval(function() {
		
		console.log('i ====>', i);
		if(i == 0){
			$('#slide_show').slideUp(600, function() {   
		  $(this).attr('src', mas1[i]).slideDown(600);
		});
		}
		$('#slide_show').fadeOut(600, function() {   
		  $(this).attr('src', mas1[i]).fadeIn(600);
			i++;
	
		if(i > 3){

			clearInterval(timer);

			i = 0;

			timer2 = setInterval(function(){
				if(j == 0){
					$('#slide_show').hide(600, function() {   
					  $(this).attr('src', mas2[j]).show(600);
					});
				}
				$('#slide_show').fadeOut(600, function() {   
				  $(this).attr('src', mas2[j]).fadeIn(600);
				  j++;

				if(j > 3){
					clearInterval(timer2);
					j=0;
					tim();
				}
				});
					
			}, 3000);
		} 
		});
		
	}, 3000);	
}

tim();	
