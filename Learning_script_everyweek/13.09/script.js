window.addEventListener('load', main, false);
function main () {


	console.log('Заработало');

	a= 'Присвоили строку'
	/* 
	Какие бываеют типы данных?

	-строки
	-целые
	-вещественные
	-логические
	-функция
	-объекты( массивы и строки)
	- тип undefined

	Термины
	
	операнд


	*/
	var b = 3;
	var a = 1;
	const pi = 3.14; // константы нельзя переписать
	const okrugl = Math.round

// Арифметические операции

	console.log(a/b);
	console.log(a -b)
	console.log(a%b);

	console.log(Math.PI);
	console.log(Math.cos(Math.PI/2))
	console.log(Math.pow(2,8)) 		// от слова power , т.е. возведение в степень
	console.log(Math.round(2,5))	// классическое округление
	console.log(Math.floor(2,5)) 	//округление вниз 
	console.log(Math.ceil(2,5))		//округление вверх
	console.log(Math.trunc(2,5))	//выделение целой части
	console.log(okrugl(2,5))
	console.log(b);

//Унарные операции (  ! == отрицание)
	console.log(!true)


//Логичесие операции

	//и 
	console.log(true&&true)
	//или

//Операции сравнения ( дает бинарную систему на вывод)
/*
	<
	>
	>=
	!=
	== 
	===  для сравнения разных типов данных
	!==

//Перевод чисел 
 	parsefloat в вещественные
 	parseint в целые
*/
}