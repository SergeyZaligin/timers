var i = 0;
var j = 0;

function tim (){
	var timer, timer2;
	clearInterval(timer);
	clearInterval(timer2);
	timer =	setInterval(()=>{
		i++;
		console.log(i);
		if(i > 3){
			clearInterval(timer);
			i=0;
			timer2 = setInterval(()=>{
				j += 10;
				console.log(j);

				if(j > 30){
					clearInterval(timer2);
					j=0;
					tim();
				}
			}, 3000);
		} 
	}, 3000);	
}

tim();