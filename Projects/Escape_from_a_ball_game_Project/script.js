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
var r = 13;
var num_balls = 15;
var balls = []
var ballsincolumn = h / r / 2
var ballsinrow = w / r / 2
var speedmultiplyer = 6;
var time = 0;
var gameover_status = false
var time =0;
var XX=w;
var YY=h;
var score = 0 ;
var score_ball = [w/2,h/2,20]


	
	start.onclick =()=>{
		diff = parseFloat(document.getElementById('difficulty_box').value);
		if (isNaN(diff)==true){
			diff = 5
			} 
		// было score_ball[2]*= diff/5
		score_ball[2]=20*diff/5
		speedmultiplyer = diff*1.2
		num_balls = 1.5*diff
		time =0;
		score = 0;
		gameover_status = false;


		for (i=0;i<num_balls;i++){
			create(i)
			}
			
		}

	
	
	function create (i){
		RED = Math.trunc(256*Math.random());
		GREEN = Math.trunc(256*Math.random());
		BLUE = Math.trunc(256*Math.random());
	
		var color =`rgb(${RED}, ${RED}, ${RED})`
		
		
		//расположим в сетку
		var row = Math.trunc(i/ballsinrow) + 1
		vx_r = Math.random()*0.5
		vy_r=Math.random()*0.5
		
		balls[i] = new ball (r+2*r*i,r+2*(r+10)*i,color,r,vy_r*speedmultiplyer,vy_r*speedmultiplyer,2);
		//function ball(x,y,color,r,vx,vy,number)	
		}
	
	function game(){
		var score_dist = (XX-score_ball[0])**2+(YY - score_ball[1])**2
		if (score_dist<= score_ball[2]**2){
			
			score_ball[0] = 50+Math.random()*0.9*w
			score_ball[1] = 50+Math.random()*0.9*h
			score++
		}

	}
	

	function draw (){
		ctx.clearRect(0,0,w,h);
		ctx.beginPath();
		ctx.fillStyle = `rgb(255, 215, 0)` ;
		ctx.arc(score_ball[0],score_ball[1],score_ball[2], 0 ,2*Math.PI);
		ctx.fill();
		ctx.stroke();

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
		if (gameover_status == false){
			canvas_example.onmousemove = (e)=>{
	           	XX=e.offsetX
	           	YY=e.offsetY
    	   		}
    	   	time+=0.02
    	   	game();
		 	draw();
		 	physics();
		 	
		 	}
		 	
		}

	for (i=0;i<num_balls;i++){

		create(i)
	}
	function gameover(){
		for (j=0;j<num_balls;j++){
			dist2 = (XX- balls[j].x)*(XX - balls[j].x) + (YY- balls[j].y)*(YY - balls[j].y) 
			if (dist2 <=r*r & gameover_status == false){ 
				gameover_status = true;
				for (k=0;k<num_balls;k++){
					balls[k].vy = 0
					balls[k].vx = 0
					ctx.fillStyle = `rgb(220, 20, 60)`
		            ctx.beginPath();

		  
		            ctx.fill();
		            ctx.stroke()
		            ctx.font = "30px Arial";
		            ctx.fillText(`Игра окончена. Ваше время: ${Math.round(time*100)/100}. Ваш счет: ${score}`, w/4, h/2);
				}
			}

		}
	}
	
		setInterval(control,20)
		setInterval(gameover,3)


}
