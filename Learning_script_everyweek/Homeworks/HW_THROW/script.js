window.addEventListener('load',main,false);
function main(){



	var ctx= canvas_example.getContext('2d'); //канва как объект
	var w = canvas_example.width;
	var h = canvas_example.height;
	var fps = 60;
	var dt = 1/fps;

	
 	var vx =0;var vy = 0; var a = 0; var v =0; var x=0;var y=0; var dx =0 ;var dy=0; var g = 10;

	start.onclick = function() {
 	vx =0;vy = 0;  a = 0;  v =0;  x=0; y=0;  dx =0 ; dy=0; dy =0;
	v = parseFloat(speed.value); 
	a = parseFloat(angle.value);
	a = a *Math.PI/180

	vy = v * Math.sin(a);
	vx = v * Math.cos(a);

	//console.log('скорость vy',vy);
	//console.log('скорость vx',vx);
	
	example_var  = setInterval(control, 1000/fps); 
	
	

}		

/*
	angle.onchange = function() {
}
*/

function physics(){

if (y >= 0){
dx = vx*dt; //const
vy = vy - g*dt
dy = vy*dt
x = x + dx; // равномерно
y = y + dy;a

//console.log('dy',dy);
//console.log('vy',vy);

//console.log('y',y);
//console.log('dx',dx);
//console.log('x',x);
}

if (y <0){
	clearInterval(example_var);
}
if (isNaN(dx/dt)){
	clearInterval(example_var);
	
	ctx.lineWidth = '1'
	ctx.beginPath();
	ctx.arc(80,370,8,0,2*Math.PI); 
	ctx.fill()
}






}
function pole(){
	for(var i =0; i<w; i+=w/50) {
		
		ctx.lineWidth = '1'
		ctx.beginPath();
		ctx.moveTo(i,0);
		ctx.lineTo(i,h);
		ctx.stroke();
			
	}

	for(var i =0; i<h; i+=h/50) {
		
		ctx.lineWidth = '1'
		ctx.beginPath();
		ctx.moveTo(0,i);
		ctx.lineTo(w,i);
		ctx.stroke();
	}					
}

function draw(){
		
		ctx.clearRect(0,0,w,h)
		ctx.beginPath()
		ctx.arc(80+15*x,370-15*y,8,0,2*Math.PI); 
		ctx.fill()
		ctx.moveTo(80,380)
		ctx.lineTo(w,380)
		ctx.stroke();


	}


//запускать программку и обновление картинки
	function control(){
		physics();
		draw();
		console.log('lol')
		pole();
		

	}
	draw();
	pole();
}
