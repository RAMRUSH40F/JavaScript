window.addEventListener('load',main,false);
function main(){



	var ctx= canvas_example.getContext('2d'); //канва как объект
	var w = canvas_example.width;
	var h = canvas_example.height;
	var fps = 60;
	
	var x = w/3;
	var y = h/3;
	var r = 30;

	var vx = 70;

	var vy = 50;

	var dt = 1/fps;


	function draw(){
		
		ctx.clearRect(0,0,w,h)
		ctx.beginPath()
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.fill()

	}
	

	function physics(){
		x += vx*dt+Math.abs(1*Math.sin(x));
		y += vy*dt+Math.abs(1*Math.sin(y));

		if (x > w-r){ //важно определить границы отталкивания как границы канваса с припуском

			vx *=-1;
				change_color_black();

		}
		if (y > h-r){

			vy *=-1;
			change_color();
		}
		if (y < r){

			vy *=-1 ;// в этом моменте, очевидно, мы можем ускорять и замедлять шарик 
			change_color();
		}
		if (x < r){

			vx *=-1;
			change_color_black();
		}

	}	




	function control(){
		physics();
		draw();



	}

	function change_color() {
		var red = Math.trunc(256*Math.random())
		var green = Math.trunc(256*Math.random())
		var blue = Math.trunc(256*Math.random())

		ctx.fillStyle = `rgb(${red}, ${green}, ${blue})` 
	}

	function change_color_black(){
		var red = Math.trunc(256*Math.random())
		var green = Math.trunc(256*Math.random())
		var blue = Math.trunc(256*Math.random())

		ctx.fillStyle = `rgb(${red}, ${red}, ${red})` 
		
	}
	function change_clr(){ //меняем цвет каждую секунду
		var red = Math.trunc(256*Math.random())
		var green = Math.trunc(256*Math.random())
		var blue = Math.trunc(256*Math.random())

		ctx.fillStyle = `rgb(${red}, ${green}, ${blue})` 
	}

	setInterval(change_clr,300)

	draw();
	setInterval(control, 1000/fps);
}
