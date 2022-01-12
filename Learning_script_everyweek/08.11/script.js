window.addEventListener('load',main,false);
function main(){
	
	function poly(slov){
		 var status = true;
		for (var i=0;i<=slov.length/2;i++){
			status = status && (slov[i] == slov[slov.length-i-1])
			
		}
		return status	
	}

	function check(word){
		var result = false;
		for(var i =1; i < word.length; i++){
			var w1 = word.slice(0,i);
			var w2= word.slice(i,word.length);
			result = result || (poly(w1)) && (poly(w2))
		}
		return result
	}
	
	console.log(check('rotator'))
}