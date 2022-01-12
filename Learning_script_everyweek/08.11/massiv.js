var m = [1,2,3,4,5];

m.forEach((item,i,m)=>{
	console.log(item,i,m)
})
m.forEach(some_function)

var sorted = m.filter((number)=>{return number%2 == 0})
console.log()

var sqrs = m.map((number)=>{return number**2}) -умножение всего в **2
var sum = m.reduce((sum,current)=>{return sum+current;},startingindex) - тоже самое что форич, только есть функция запоминания


