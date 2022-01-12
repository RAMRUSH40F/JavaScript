window.addEventListener("load", main, false);
function main() {

	var ctx = canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;

	var X = [0];
	var Y = [f(0)];
	var dx = 0.01;
	var y_min = 0;
	var y_max = 0;
	var max_dist = 3*Math.PI;

	var scaleX = 10;
	var scaleY = 10;

	function f(x) {
		return Math.sin(30*x)*x*x;
	}

	function axis() {
		ctx.beginPath();
		ctx.moveTo(0, h/2);
		ctx.lineTo(w, h/2);
		ctx.stroke();
	}

	function plot(X, Y) {
		ctx.beginPath();
		for (var i=0; i<X.length; i++) {
			ctx.lineTo(scaleX*(X[i]-X[0]), h/2-scaleY*Y[i]);
		}
		ctx.stroke();
	}

	axis();

	//for (var x=0; x<3*Math.PI; x+=0.01) {
		//X.push(x);
		//Y.push(f(x));
	//}

	
	function draw() {
		ctx.clearRect(0, 0, w, h);
		axis();
		plot(X, Y);
	}

 ///Обращение к элементам массива: array[index]  X[X.length - 1] 

	function physics() {
		var x_new = X[X.length-1] + dx;
		var y_new = f(x_new);
		if (y_new < y_min) {
			y_min = y_new;
		}
		if (y_new > y_max) {
			y_max = y_new;
		}
		X.push(x_new);
		Y.push(y_new);

		if (x_new > max_dist) {
			X.shift();
			Y.shift();
		}

		scaleX = w/(X[X.length-1]-X[0]);
		scaleY = h/Math.max(y_max, -y_min)/2;
	}

	function control() {
		physics();
		draw();
	}

	setInterval(control, 5);

}