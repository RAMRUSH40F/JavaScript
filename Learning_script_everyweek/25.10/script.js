window.addEventListener('load',main,false);
function main(){
	var ctx= canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;
	var isPressed = false;
	//canvas_example.onmousemove = (e)=>{
	//canvas_example.onmousedown = (e) =>{}
	//canvas_example.down
	var L = {
		x:0,
		y:0,
	};
	var ball = { //кратко объявление объекта
	 	x: w/2,
	 	y: h/2,
	 	r: 50,
	 	draw: (ctx) =>{
		 	ctx.beginPath();
		 	ctx.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI);
		 	ctx.fill();
	 	}
	
	}

	ball.draw(ctx);


	function update (){

		ctx.clearRect(0,0,w,h);
		ball.draw(ctx);

	}


	canvas_example.onmousemove = (e)=>{
		if (isPressed) {
			ball.x = e.offsetX + L.x;
			ball.y = e.offsetY + L.y;
			update();

		}

	}	

	canvas_example.onmousedown = (e)=> {
		var L2 = (ball.x - e.offsetX)**2 + (ball.y - e.offsetY)**2;
		
		if(L2 <= ball.r**2){
	
			L.x = ball.x - e.offsetX + L.x;
			L.y = ball.y - e.offsetY +L.y;
			update();
			isPressed = true;

		}
		

	}

	canvas_example.onmouseup = (e)=>{
		isPressed = false;
	}
	





}




