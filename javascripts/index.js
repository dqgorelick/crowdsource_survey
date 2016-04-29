$(document).ready(function() {
	function form_submission() {
		window.location.href = "form_response.html";
	};

	$("#submit_button").on("click", function(e) {
        e.preventDefault();
        // Grab all values 
    	var post_object = {};
    	post_object.test = $(".test").val();
    	post_object.disease = $(".disease").val();
    	post_object.sensitivity = $(".sensitivity").val();
    	post_object.specificity = $(".specificity").val();
    	post_object.notes = $(".notes").val();
    	post_object.source = $(".source").val();
    	post_object.link = $(".link").val();


        $.post(
        	"http://ec2-52-37-252-133.us-west-2.compute.amazonaws.com/api/submit", 
        	post_object,
        	form_submission()
        )
    });
});