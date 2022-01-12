window.addEventListener('load', main, false);
function main(){

var ctx = canvas_example.getContext('2d');
var w = canvas_example.width;
var h = canvas_example.height;
console.log('запущен канвас размера',w,h );



	ctx.strokeStyle = '#90EE90'	;
	ctx.lineWidth = '3';
	
		//рисуем ПОЛЕ-СЕТКУ
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
	//ОТДЕЛЬНО РИСУЕМ ОСИ Х И У
		ctx.lineWidth = '3'
		ctx.beginPath();
		ctx.moveTo(w/2,0);
		ctx.lineTo(w/2,h);
		
		ctx.moveTo(0,h/2);
		ctx.lineTo(w,h/2);
		ctx.stroke(); 
						
}
			pole()
			

	//нарисовали поле
	//делаем кнопки для преима данных и вычисления
	var a =0,b=0,c=0
	start.onclick = function() {
		var a = parseFloat(start.value);
	;
	
		a = parseFloat(k1.value); //коэф при 6-ой степени
		b = parseFloat(k2.value); //ПРИ 5
		c = parseFloat(k3.value); //ПРИ 4
		d = parseFloat(k4.value); //ПРИ 3
		e = parseFloat(k5.value); //при х в квадрате
		f = parseFloat(k6.value); // при х
		g = parseFloat(k7.value); //свободный член

	
		if (isNaN(a)==true){a = 0}
		if (isNaN(b)==true){b = 0}
		if (isNaN(c)==true){c = 0}
		if (isNaN(d)==true){d = 0}
		if (isNaN(e)==true){e = 0}
		if (isNaN(f)==true){f = 0}
		if (isNaN(g)==true){g = 0}

		

 		ctx.clearRect(0,0,w,h) //очистка графика перед новым графиком
 		pole()
 		ctx.beginPath();

 		for (var x =-24*w/50; x<=24*w/50; x+=0.1){ // x - в пикселях
		
 		i = x*50/4/w //значение в клетках, при учете 1ед. = 4 клеточки поля
		j = Math.pow(i,6)*a + Math.pow(i,5)*b + Math.pow(i,4)*c +Math.pow(i,3)*d+ Math.pow(i,2)*e + i*f + g //в относительных клетках значение y 1 ед. = 4 клетки
		y = j*4*h/50 //значение y в пикселях


		ctx.fillRect(w/2+x,h/2-y,3,3) //рисуем точками из центра координат
		
		}
			
	}	
}	


		
		
