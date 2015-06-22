$( document ).ready(function() {

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
	
	if ($('.iteminput').val() === '') {
			console.log('empty item');
		}


	var maxnumber = $('.iteminput').val();

	$('.input-number').click(function() {
		
	})
	
	for (i=1; i <= 100; i++){
		if (isFizzBuzz(i)) {
			console.log("fizzbuzz");
		} else if (isFizz(i)) {
			console.log("Fizz");
		} else if (isBuzz(i)) {
			console.log("Buzz");
		} else { 
			console.log(i); 
		}
	}	

	});

});