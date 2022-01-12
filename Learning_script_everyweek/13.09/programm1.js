window.addEventListener('load',main,false);
function main()
{
	start_button.onclick = function() {
		var a = parseFloat(number_input.value);
		console.log(Math.pow(a,4))

		my_span.innerHTML = Math.pow(a,2)
	}


	number_input.onchange = function() {

		var b = parseFloat(number_input.value);
		console.log(b*b*b)
		my_span.innerHTML = b*b
	}
	}