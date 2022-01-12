window.addEventListener('load',main,false);
function main(){
	var ctx= canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;


//function ball(x,y,color,       r,vx,vy,number)

var time = 0;
var dt = 5;
var num_cycle = 1;
var dist = 0;
var DX = 0;
var DY = 0;
var sin = 0;
var cos = 0;

var b1= new ball (w/2,h/2,'blue',40,1,2,1);
b2= new ball (w/3,h/4,'red',40,-2,1,2);


	function create (i){
		//var name = b + 'i'

		i = new ball (w/3,h/4,'red',40,-2,1,2);
		

		console.log('b'+i,  'initialised ')
		return
		}


	create(b2)

	

	function draw (i){
	
		ctx.clearRect(0,0,w,h);
		b1.draw(ctx)
		b2.draw(ctx)

		

	}
	function physics(){
		time++;
		b1.x += b1.vx*dt
		b1.y +=b1.vy*dt
		b1.away(w,h)

		
		b2.x += b2.vx*dt
		b2.y +=b2.vy*dt
		b2.away(w,h)

		dist = Math.sqrt( (b1.x - b2.x)*(b1.x - b2.x) + (b1.y - b2.y)*(b1.y - b2.y) )
		if (dist == 0){
			dist = 0.01;
		}
		if (b1.r+b2.r >= dist ) {
			console.log('столкновение')
			collision()


		}
		

	function collision(){
		DX = b1.x - b2.x;//считаем старую с.к.
		DY =b1.y - b2.y;
		sin =  DX/dist;
		cos = DY/dist;

		

		//временные коорды в новой с.к
		var vn1 = b1.vx*sin + b1.vy*cos
		var vn2 = b2.vx*sin + b2.vy*cos

		var vt1 = -b1.vx*cos + b1.vy*sin
		var vt2 = -b2.vx*cos + b2.vy*sin


	
		vn1 += vn2; vn2 = vn1 - vn2; vn1 -=vn2;
		
		b1.vx= vn1*sin - vt1*cos
		b1.vy= vn1*cos + vt1*sin

		b2.vx = vn2*sin -vt2*cos
		b2.vy=	vn2*cos +vt1*sin

	}

	}


	 function control(){

		 	draw();
		 	physics();

		 }

	function randomcolor(){
	
	}
 	setInterval(control,20)

	console.log();

	console.log();

	console.log();


	b1.draw();
	b2.draw();

}
