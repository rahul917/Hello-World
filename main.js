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
		$("li:lt(4)").css("font-weight","bold");
		$(".label").css("font-weight", "bold");
		$(".label").html("First 4 Planets");
	}
	
	function SetLast() {
		
		$("li, span").css("font-weight","");
		$("li:gt(5)").css("font-weight","bold");
		$(".label").css("font-weight", "bold");
		$(".label").html("Last 2 Planets");
	}

