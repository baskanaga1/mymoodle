$(document).ready(function() {
        if (!window.localStorage) {
            alert('Your browser does not support HTML5 localStorage. Try upgrading.');
        } else {
            $("#submit_return_form_button").click(function(){  
					//setAllItems();
					getItemsforAdmin();
            });						
		}
		$("#username").val('');
		
});
  


	var chkusername, chkpass;
	
	var getItemsforAdmin = function() {
		
		var adminuser = "admin1";
		var userhome = "user1";
		chkusername = document.getElementById("username").value;
		chkpass = document.getElementById("password").value;
		
		
		if(chkusername == "admin1" && chkpass == "admin1"){
			localStorage.setItem("admin", chkusername);
			
			window.location.href = "adminHome.html";
			
			
		}else if(chkusername=="user1" && chkpass=="user1"){
			localStorage.setItem("user", chkusername);
			window.location.href="userHome.html"; 

			 
		}else if(chkusername==""){ 
			
			alert("Enter the Username");
		}else if(chkpass==""){
			alert("Enter the Password");
		}else{
			alert("Error Login");
		}
		
	}
	
function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

function moveNext(){
 $(location).attr('href', url);  
 alert(""+url);
//window.location.href='index2.html';
}