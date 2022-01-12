window.addEventListener('load',main,false);
function main() {
	var ctx= canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;
	

	console.log(w,h)
	var pi = Math.PI


	ctx.fillStyle= 'green'
	ctx.strokeStyle = 'blue'
	ctx.lineWidth = 2 
	var style = 'blue'



	ctx.fillRect(w/2,h/2,100,100)
	ctx.strokeRect(w/2-100,h/2-100,100,100);



	ctx.fillStyle= 'red'
	ctx.beginPath()
	ctx.arc(w/2, h/2, 100,0,2*pi); 
	ctx.stroke() /* пустой с обводкой */

		ctx.fillStyle = style 
	ctx.beginPath();
	ctx.moveTo(50,50)
	ctx.lineTo(100,50)
	ctx.lineTo(50,100)
	ctx.fill()  /*заполненный с цветом */

	/*
	таранарный оператор 
	condition ? value1:value2

	console.log(1<2 ?:'math works': 'math doesntr work')

	do{  --- редко

	зацикленное действие 


	} while ( condition)

	while(condition){
	
	actionssss
	}


*/

/*Рисуем фигуры с помощью циклов 

*/

ctx.clearRect(0,0,w,h);

	var n =4 ; /*10 кругов вдоль*/
	for(var i =0; i<n; i++) {
		for (var j=0; j<n; j++) {

		//math.random --> [0;1)
		var red = Math.trunc(256*Math.random())
		var green = Math.trunc(256*Math.random())
		var blue = Math.trunc(256*Math.random())

		ctx.fillStyle = `rgb(${red}, ${red}, ${red})` 

		var r = w/n/2;
		var x = r + 2*r*i;
		var y = r + 2*r*j; 
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*pi); 
		ctx.fill();



		



		}	
	}
}