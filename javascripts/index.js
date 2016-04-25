$(document).ready(function() {
	$(".submit").on("click", function(e) {
		e.preventDefault();
		var post_object = {};
		post_object.test = $(".test").val();
		post_object.disease = $(".disease").val();
		post_object.sensitivity = $(".sensitivity").val();
		post_object.specificity = $(".specificity").val();
		post_object.notes = $(".notes").val();
		post_object.source = $(".source").val();
		post_object.link = $(".link").val();
		$.post("http://localhost:8080/api/submit", post_object);
	})
});
