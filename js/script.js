$(document).ready(function(){
	$(".navbar a").click(function(event){
		if(this.hash !== ""){
			event.preventDefault();

			let hash = this.hash;

			$("html, body").animate({
				scrollTop: $(hash).offset().top}, 700, function(){
					window.location.hash = hash;
				}
			)
		}
	});

	$("form [type='submit']").click(function(){
		fname = $("#fname").val();
		lname = $("#lname").val();
		email = $("#email").val();
		message = $("#message").val()

		alert = $("#alert-message");
		$.ajax({
			type: "GET",
			url: "sendMessage.php",
			data: "fname="+fname+"&lname="+lname+"&email="+email+"&message="+message,
			success: function(response){
				if(response == "sent"){
					alert.html("<div class='alert alert-success'>Message Sent</div>");
				}
				else if(response == "fname_null"){
					alert.html("<div class='alert alert-danger'>First name required!</div>");
				}
				else if(response == "fname_short"){
					alert.html("<div class='alert alert-danger'>First name must be at least 2 characters!</div>");
				}
				else if(response == "lname_null"){
					alert.html("<div class='alert alert-danger'>Last name required!</div>");
				}
				else if(response == "lname_short"){
					alert.html("<div class='alert alert-danger'>Last name must be at least 2 characters!</div>");
				}
				else if(response == "email_null"){
					alert.html("<div class='alert alert-danger'>Email required!</div>");
				}
				else if(response == "email_invalid"){
					alert.html("<div class='alert alert-danger'>Invalid email format!</div>");
				}
				else if(response == "message_null"){
					alert.html("<div class='alert alert-danger'>No empty message please!</div>");
				}
				else if (response == "message_short"){
					alert.html("<div class='alert alert-info'>Please send a 'Hi' at least!</div>");
				}
				else {
					alert.html("<div class='alert alert-danger'>Message not sent, please check connection!</div>");
					console.log(response);
				}
			},

			error: function(xhr, status, error){
				console.log(error);
			},

			beforeSend: function(){
				alert.html("<span class='spinner-grow spinner-grow-sm text-info'></span> Loading...")
			}

		});
		return false;
	})
});