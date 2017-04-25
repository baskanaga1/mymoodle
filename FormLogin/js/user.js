 	$(document).ready(function() {
        if (typeof(localStorage) === 'undefined' ) {
            alert('Your browser does not support HTML5 localStorage. Try upgrading.');
        } else {
					//load the items
            getItems(); 
			
        }
		
		$("#new_reg_button").click(function() {
			window.location.href = "Login.html";
    
		});
			
    });
	

var getItems = function() {
	
		var usvalue = localStorage.getItem("user");  

		$("#userid").append(""+usvalue);
		
    }