window.addEventListener('load',main,false);
function main(){
	var ctx= canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;

/* ООП
класс == абстрактная модель
экземпляр == представитель

абстракция == выделения главной части задачи
инкапсуляция == сокрытие методов класса для работы с ними же внутри нее

наследование у подклассов

свойство полиморфизма == в дочерних классах(подклассах) функция материнского класса 
может иметь другую реализацию 
*/

var valera= new Fish (w/2,h/2,70,'male','blue',150,'Валера');
// new -важно
var klava = new Fish(w/2+100,h/2+100,50,'female', 'pink',100,'Клавдия');
var time = 0;
	function draw (){
	
		ctx.clearRect(0,0,w,h);
		valera.draw(ctx)
		klava.draw(ctx)

	}
	function physics(){
		valera.x +=5;
		klava.x += 10;
		time++;
		if (time%60 ==3){
			valera.grow();

		}
		if (time % 60 == 22){
			klava.grow();
		}

		if (valera.away(w)){
			valera.x = -valera.length/3;

		}
		if (klava.away(w)){
			klava.x = -valera.length/3;
			
		}

	}
 function control(){

 	draw();
 	physics();

 }
 setInterval(control,20)

	console.log(valera);

	console.log(valera.name);

	console.log(valera.sex);

	valera.sayhello();
	valera.grow();
	valera.draw();

}
