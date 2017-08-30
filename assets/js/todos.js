// Check Off Specific Todo by Clicking
	//listening for li's inside ul
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
	//listening for span's inside ul
$("ul").on("click", "span", function(event) {
						// Pass in call back that will run after
	// this refers to span
	$(this).parent().fadeOut(500, function() {
		// this refers to li
		$(this).remove();
	});
	// JQuery method that stops event from bubbling up
	event.stopPropagation();
})

//Clicking enter adds new Todo
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// Grabs new text from input
		var todoText = $(this).val();
		// Setter that clears input text
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});
