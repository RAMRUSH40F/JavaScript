window.addEventListener('load',main,false);
function main(){
var ctx= canvas_example.getContext('2d');
var w = canvas_example.width;
var h = canvas_example.height;


var dt = 5;
var dist = 0;
var DX = 0;
var DY = 0;
var sin = 0;
var cos = 0;
var r = 12;
var num_balls = 15;
var balls = []
var ballsincolumn = h / r / 2
var ballsinrow = w / r / 2
var speedmultiplyer = 5;
var time = 0;

	
	start.onclick =()=>{
		diff = parseFloat(difficulty.value);
		if (isNaN(diff)==true){
			diff = 5} 
			console.log(diff)

		speedmultiplyer = diff

		for (i=0;i<num_balls;i++){

		create(i)
		
		}
	}


	
	
	function create (i){
		RED = Math.trunc(256*Math.random());
		GREEN = Math.trunc(256*Math.random());
		BLUE = Math.trunc(256*Math.random());

		var color =`rgb(${RED}, ${GREEN}, ${BLUE})` 
		
		//расположим в сетку
		var row = Math.trunc(i/ballsinrow) + 1
		//console.log('шаров в ряду',ballsinrow,'. Шар',i,'в ряду', row) // 'в колонне',ballsincolumn)
		
		

	
		
		//var column = Math.trunc(i/ballsincolumn)

		//balls[i] = new ball (30+2*r*(i%ballsinrow),30+2*(r+10)*row,color,r,0.1+0.05*i,0.1 +0.1*i,2);
		balls[i] = new ball (r+2*r*i,r+2*(r+10)*i,color,r,0.1+0.01*i*speedmultiplyer,0.1 +0.02*i*speedmultiplyer,2);
	
			//function ball(x,y,color,r,vx,vy,number)	
		}
	
	
	

	function draw (){
	
		ctx.clearRect(0,0,w,h);
		for (k=0;k<num_balls;k++){
			balls[k].draw(ctx)
		}
		
	
		

	}
	function physics(){
			
		for (k=0;k<num_balls;k++){	//проверка расстояний между всеми шарами		
			for(j=0;j<num_balls;j++){
				if (k != j){ //НЕ ПРОВЕРЯЕТ расстояние до себя
					dist = Math.sqrt( (balls[k].x - balls[j].x)*(balls[k].x - balls[j].x) + (balls[k].y - balls[j].y)*(balls[k].y - balls[j].y) )
					//console.log('дистанция',dist)

					if (dist <= 2*r ) {
						//console.log('столкновение между',k,j)
						collision(balls[k],balls[j])
						}
					}
				}
			balls[k].x += balls[k].vx*dt
			balls[k].y += balls[k].vy*dt
			balls[k].away(w,h)

			//time ++

			}
					
	}
		

	function collision(b1,b2){
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
		//испроавляем баг с застревание шаров друг в друге
		ddt = (2*r-dist)/(vn1-vn2)
		
		b1.x -= b1.vx*ddt
		b2.x -= b2.vx*ddt
		b1.y -= b1.vy*ddt
		b2.y -= b2.vy*ddt

		


		b1.vx= vn1*sin - vt1*cos
		b1.vy= vn1*cos + vt1*sin
		b2.vx = vn2*sin -vt2*cos
		b2.vy=	vn2*cos +vt1*sin
	}


	
	function control(){

		 	draw();
		 	physics();
		 }

	for (i=0;i<num_balls;i++){

		create(i)
	}
		
	
	setInterval(control,20)

}
