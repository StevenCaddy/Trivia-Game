$(document).ready(function() {
	$("#start-button").on("click", function(e) {
		var count = 30;

		var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

		function timer() {
 			count = count - 1;
 			if (count <= 0) {
    			clearInterval(counter);
    			//counter ended, do something here
    			return;
  			}
  			//Do code for showing the number of seconds here
  			$("#time-left").text(count + " seconds left!");
		}

		$("#question1").text("General Ulysses S. Grant was the first general of the Union Army.");
		
		$('#answer1').on('click', function(e) {
			var $answerOptions = $("#dvOptions");
			$answerOptions.empty();
			e.preventDefault();
			var arrayValues = ["True", "False"];

				for (var i = 0; i < arrayValues.length; i++) {

					var result = 0;
					if (i === 0) {
						$answerOptions.append($('<input type="radio" name="answers" value="' + i + '"checked>' + arrayValues[i] + '</input><br />'));
						result = 1;
					}
					else if (i === 1) {
						$answerOptions.append($('<input type="radio" name="answers" value="' + i + '"checked>' + arrayValues[i] + '</input><br />'));
						result = 2;
					}

					if (result = 1) {
						$("#result").text("wrong");
					}	

					else {
						$("#result").text("correct");
					}			
				}

			
		});
	});
		


	



























})