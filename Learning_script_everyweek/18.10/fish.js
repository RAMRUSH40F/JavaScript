//используем функиональный вариант создания класс

function Fish(x,y,age,sex,color,length,name){
	this.length = length; //ссылка на экземпляр класса
	this.x= x;
	this.y= y;
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.color = color;
	//this.SayHello = function(){
		var that = this;
	//}
	this.sayhello = ()=>{
		console.log('...');

	}
	this.grow = ()=>{
		this.age++;
		this.length +=3;

		console.log(`Happy birthday, dear ${this.name}!. Тебе уже ${this.age}!`)

	}
	this.draw =(ctx) =>{
		var ctx = canvas_example.getContext('2d')

		var r = this.length/3;
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x,this.y, r, 0 ,2*Math.PI);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(this.x-r, this.y);
		ctx.lineTo(this.x - 2*r, this.y -r);
		ctx.lineTo(this.x - 2*r, this.y + r);
		ctx.lineTo(this.x - r, this.y);

	this.away = (w)=>{

		return this.x -this.length *2/3 > w;
	}





		ctx.fill();
		ctx.stroke();


	}
}