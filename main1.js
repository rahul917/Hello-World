$(document).ready(function() {

$("input:eq(0)").click(function() {
	$("p").each(function () {
		var parts = $(this).html().split(" ");
		$(this).css({"font-size":parts[1] + "px", color:parts[0]})	
	});
});

$("input:eq(1)").click(function() {
	var items = $("p").map(function() {
		var parts = $(this).html().split(" ");
		return {color:parts[0], size:parts[1]};
	}).get();
	
	for (var i in items) {
		var item = items[i];
		var span = $("<span style='display:inline-block;color:black;text-align:center;background-color:" + item.color + ";width:" + size + "px;height:" + size + "px;'}>" + item.color + "</span>");
		//var span = $("<span>" +item.color + "</span>");
		var size = item.size*5;
		//span.css = ({"background-color":item.color; "font-size":item.size+"px"; width:size; height:size});
		$(".cl").append(span);
	}
});
});