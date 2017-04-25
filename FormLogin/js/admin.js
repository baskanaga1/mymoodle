 	$(document).ready(function() {
		
		
        if (typeof(localStorage) === 'undefined' ) {
            alert('Your browser does not support HTML5 localStorage. Try upgrading.');
        } else {
					//load the items
            getItems(); 
			localStorage.removeItem("user");
        }
				
		$( "#dialog-6" ).dialog({
			title: 'Enter User Details',
			modal: true,
	       autoOpen: false, 
               buttons: {
                  Save: function() {
					 if($("input[name='userid']").val()==""){
						 alert("enter userid")
					 }else if($("input[name='username']").val()==""){
						 alert("enter username")
					 }else if($("input[name='DOJ']").val()==""){
						 alert("enter DOJ")
					 }else if($("input[name='DOB']").val()==""){
						 alert("enter DOB")
					 }else if(document.getElementById("depart").value==""){
						 alert("enter department")
					 }else if($("input[name='Add1']").val()==""){
						 alert("enter addres1")
					 }else if($("input[name='Add2']").val()==""){
						 alert("enter address2")
					 }else if($("input[name='Phone']").val()==""){
						 alert("enter mobile no")
					 }else if(document.getElementById("city").value==""){
						 alert("enter city")
					 }else {
						 var userTimeLog, logLength, i, samval;				  
						i = 0;
						logLength = localStorage.length-1;
						for (i = 0; i <= logLength; i++) {
						itemKey = localStorage.key(i);
						value = localStorage.getItem(itemKey);
						//alert(""+value);
						if(value!="admin1"){
						values = JSON.parse(value);
						
						user_id = values.userid;
							
						if($("input[name='userid']").val()==user_id){
							
							alert("This user id already exist")
							break;
						}
						}
						}
						if($("input[name='userid']").val()!=user_id){
							$( this ).dialog( "close" );
							setAllItems();
							location.reload();
							
						}
					 }
					 
                     
					 }
               },
			  
               width: 500,
			   height: 530
        });
		$( "#new_reg_button" ).click(function() {
			
               $( "#dialog-6" ).dialog( "open" );
			   
        });
		
    });
	
var setAllItems = function(){
							
							var newDate, itemId, formSave;
								
							newDate = new Date();
							itemId = newDate.getTime();
				
				
							formSave = {
        					userid		: $("input[name='userid']").val(),
        					username 	: $("input[name='username']").val(),
        					DOJ 		: $("input[name='DOJ']").val(),
							DOB 		: $("input[name='DOB']").val(),
							depart 		: document.getElementById("depart").value,
							Add1 		: $("input[name='Add1']").val(),
							Add2 		: $("input[name='Add2']").val(),
							phone		: document.getElementById("phone").value,
        					city 		: $("select[name='city']").val()

								};
						
								// turn data into JSON string
								localStorage.setItem( itemId, JSON.stringify(formSave));  
								 
	};
	
	
	
var getItems = function() {
	
	 
		 
		var advalue = localStorage.getItem("admin");
		
		$("#adminid").append(""+advalue);
	
	
			/*	var timeLog, logLength, i;				  
        i = 0;
        logLength = localStorage.length-1; //how many items are in the database starting with zero
				timeLog = '';

        //now we are going to loop through each item in the database
        for (i = 0; i <= logLength; i++) {
						var itemKey, value, values, firstname, lastname, email, password, confirmpassword;
            //lets setup some variables for the key and values
            itemKey = localStorage.key(i);
							
            value = localStorage.getItem(itemKey);
			//alert(""+value); 
						values = JSON.parse(value);
            firstname = values.fname;
            lastname = values.lname;
            email = values.email;
						phone = values.phone;
						password = values.password;
						confirmpassword = values.cfmpassword;
						

            //now that we have the item, lets add it to the table
            timeLog += '<tr id="'+itemKey+'" class="tableRow"><td>'+firstname+'</td><td>'+lastname+'</td><td>'+email+'</td><td>'+phone+'</td><td>'+password+'</td><td>'+confirmpassword+'<a class="delete" title="Delete Entry" href="#"><img src="img/delete.png" width="24" height="24"></a></td></tr>';
        }

        $("#theLog").append(timeLog); //update the table with the list items
				
				$(".tableRow").mouseenter(function() {
								$(this).children().children(".delete").show();
					});
				$(".tableRow").mouseleave(function() {
								$(this).children().children(".delete").hide();
					});
				
				$("#reset_list").click(function() {
								//alert("clicked");
								localStorage.clear();
								getItems(); 
					});
				
			$(".delete").click(function() {
								var itemId = $(this).parent().parent().attr('id');								
								//alert(itemId);
								localStorage.removeItem(itemId);
								getItems(); 
					});*/
    }