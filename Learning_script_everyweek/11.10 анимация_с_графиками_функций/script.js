window.addEventListener('load',main,false);
function main(){
	var ctx= canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;
 	var scaleX= 10;
 	var scaleY =10;
 	var y_min = 0;var y_max = 0;
 	var dx = 0.01;
 	var max_dist = 3*Math.PI;

	var X = [0];
	var Y = [f(0)];

	function f(x){
		return Math.sin(x)*x;
	}

	function axis(){

		ctx.beginPath();
		ctx.moveTo(0,h/2);
		ctx.lineTo(w,h/2);
		ctx.moveTo(w/2,h);
		ctx.lineTo(w/2,0);
		ctx.stroke();

	}
	function draw(){
		ctx.clearRect(0,0,w,h);
		axis();
		graph(X,Y)

	}
	function physics(){
var x_new = X[x.length-1] +dx;
var y_new = f(x_new);
if (y_new <y_min){
	y_min = y_new;

}
if (y_new>y_max){
	y_max=y_new;
}
if(x_new >max_dist){
	X.shift();
	Y.shift();
			}


X.push(x_new);
Y.push(y_new);

scaleX = w/(X[X.length-1]-X[0])
scaleY = h/Math.max(y_min, -y_min)/2;


	}

	function graph(X,Y){
		ctx.beginPath();
		for(var i =0; i<X.length;i++){
			ctx.lineTo(Scale*X[i],h/2-10*Y[i])
			//ctx.arc(X[i],Y[i],1,0,2*Math.PI); 
			//ctx.fill()
		}

		ctx.stroke();
	}
	
	
	for (var x=0;x<3*Math.PI; x+=0.05){

		X.push(x);
		Y.push(f(x));


	}
	axis();
	graph(X,Y);
	
	function control(){
		physics();
		draw();

	}
	setInterval(control,5)

}