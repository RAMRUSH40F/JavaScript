window.addEventListener("load", main, false);
function main() {

    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;

    var RED = Math.trunc(256*Math.random());
    var GREEN = Math.trunc(256*Math.random());
    var BLUE = Math.trunc(256*Math.random());
    var color =`rgb(${RED}, ${GREEN}, ${BLUE})`

    
    var isPressedonball = false;
    var vx =0; var vy = 0; var dt=0.05; vx0=0;vy0=0;L2=0; var a = 10
   

    
    var ball = {
        x: w/2,
        r: 25,
        y: 8/10*h,
        draw: (ctx)=>{
            
            ctx.fillStyle = color
            ctx.beginPath();

            ctx.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI);

            ctx.moveTo(0,9/10*h);
            ctx.lineTo(w,9/10*h);

            ctx.fill();
            ctx.stroke()
            ctx.font = "30px Arial";
            ctx.fillText("Футбол на Луне", w/2, 70);


        },
    };
    
    ball.draw(ctx);

    

 

    canvas.onmouseup = (e)=>{
        if (isPressedonball){
            vx = vx0;
            vy= -vy0;
            console.log(vx,vy)
         
            isPressedonball = false

            console.log('pressed',isPressedonball)
            a=b
        } 
    }

    

    canvas.onmousedown = (e)=>{
       
        L2 = (ball.x-e.offsetX)**2 + (ball.y-e.offsetY)**2;
        
        if (L2 <= ball.r**2) {
            isPressedonball = true;
            console.log('pressed',isPressedonball)
            vx = 0;
            vy = 0;
            b=a;a=0;
           
            }

        }
        canvas.onmousemove = (e)=>{
        if (isPressedonball&L2 <= ball.r**2) {
            vx0 = (ball.x-e.offsetX)/w*800; 
            vy0 = -(ball.y-e.offsetY)/h*800
            

            }
        }
    function physics(){
       
        
        stop()
        ball.x+=dt*vx
        ball.y+=dt*vy
        ctx.clearRect(0, 0, w, h);
        ball.draw(ctx);
       
        if (ball.x+ball.r >= w || ball.x-ball.r <= 0 ){
            vx = -vx
        }
        if (ball.y-ball.r <= 0 || ball.y+ball.r >= 9/10*h){
            vy = -vy
        }

       // if (ball.y+ball.r >= 0.9*9/10*h){vy=0}
    }
    
    function stop(){
        if (ball.y-ball.r >= 0 && ball.y+ball.r <= 9/10*h){
            if (vx!=0){
                if (vx > 0){
                    vx-=a*dt}
                if (vx < 0){
                    vx+=a*dt
                }
            }
           
            vy+=a*dt*10
            }
        }
    
    
setInterval(physics,20)
    

    
}