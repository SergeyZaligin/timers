

var mas1 = ['images/group1/1.jpg', 'images/group1/2.jpg', 'images/group1/3.jpg', 'images/group1/4.jpg'];
var mas2 = ['images/group2/1.jpg', 'images/group2/2.jpg', 'images/group2/3.jpg', 'images/group2/4.jpg'];

function tim (){
	var timer, timer2;
	clearInterval(timer);
	clearInterval(timer2);
	var i = 0;
	var j = 0;

	
	timer =	setInterval(function(){

		$('#slide_show').fadeOut(600, function() {   
		  $(this).attr('src', mas1[i]).fadeIn(600);
i++;

		if(i > 3){

			clearInterval(timer);

			i = 0;

			timer2 = setInterval(function(){
				$('#slide_show').fadeOut(600, function() {   
				  $(this).attr('src', mas2[j]).fadeIn(600);
				  j++;

				if(j > 3){
					clearInterval(timer2);
					j=0;
					tim();
				}
				});
				//console.log(mas2[j]);
				console.log(j);
				
				
			}, 3000);
		} 
		});
		
		
	}, 3000);	
}

tim();	



// var n=0;
// time=800;
// play=setInterval("chgImg(0)", 5000);

// function chgImg(number) {
// if (number!=0) n=number-2;
//  $('#slide_show').fadeOut(time, function() {   
//   $(this).attr('src', imgs[n]).fadeIn(time);
//  });

//  $('#slide_text').fadeOut(time, function() {    //для текста
//   $(this).html(text[n]).fadeIn(time);
//  });

// n++;
// if (n>=imgs.length) n=0;
// }