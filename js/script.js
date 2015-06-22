$( document ).ready(function() {
	var list = $('ul');

	function isFizzBuzz(number) {
		return number % 3 === 0 && number % 5 === 0;
	}

	function isFizz(number) {
		return number % 3 === 0;
	}

	function isBuzz(number) {
		return number % 5 === 0;
	}

	$('form').submit(function(e) {
		e.preventDefault(); 
		var maxnumber = $('.iteminput').val();
			// maxnumber = +(maxnumber);
			// console.log(maxnumber); this is parseInt 
		
		if ($.isNumeric(maxnumber) === false  || maxnumber >100 ) {
			console.log('empty item');


		} else { 
			for (i=1; i <= 100; i++){
				if (isFizzBuzz(i)) {
					list.append('<li>FizzBuzz</li>')
					console.log("fizzbuzz");
				} else if (isFizz(i)) {
					list.append('<li>Fizz</li>')
					console.log("Fizz");
				} else if (isBuzz(i)) {
					list.append('<li>Buzz</li>')
					console.log("Buzz");
				} else { 
					list.append('<li>' + i + '</li>')
					console.log(i); 
				}
			}
		}

	});

});