var i = 0;
var j = 0;

var mas1 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
var mas2 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

function tim (){
	var timer, timer2;
	clearInterval(timer);
	clearInterval(timer2);
	timer =	setInterval(()=>{
		
		console.log(mas1[i]);
		i++;

		if(i > 3){
			clearInterval(timer);
			i=0;
			timer2 = setInterval(()=>{
				
				console.log(mas2[j]);

				j++;

				if(j > 3){
					clearInterval(timer2);
					j=0;
					tim();
				}
			}, 3000);
		} 
	}, 3000);	
}

tim();