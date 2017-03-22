	function SetEven() {
		$("li, span").css("font-weight","");
		$("li:even").css("font-weight","bold");
		$(".label").css("font-weight", "bold");
		$(".label").html("Even Planets");
	}
	
	function SetOdd() {
		$("li, span").css("font-weight","");
		$("li:odd").css("font-weight","bold");
		$(".label").css("font-weight", "bold");
		$(".label").html("Odd Planets");
	}
	
	function SetFirst(num) {
		
		if(typeof(num) == "undefined")
			num = 6;
		$("li, span").css("font-weight","");
		$("li:lt(" + num + ")").css("font-weight","bold");
		$(".label").css("font-weight", "bold");
		$(".label").html("First 4 Planets");
	}
	
	function SetLast() {
		
		$("li, span").css("font-weight","");
		$("li:gt(5)").css("font-weight","bold");
		$(".label").css("font-weight", "bold");
		$(".label").html("Last 2 Planets");
	}

	function keyUpd() {
		$(".ql").css("background-color", "lightgrey");
		
		$(".dl").each(function() {
			var $input = $(this).children("input:first");
			var $value = $input.val();
			
			var filter = "span:lt(" + $value + ")";
			$input.siblings(filter).css("background-color","blue");
			
		});
	}