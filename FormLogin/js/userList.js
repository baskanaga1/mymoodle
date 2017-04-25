 	$(document).ready(function() {
		
		
        if (typeof(localStorage) === 'undefined' ) {
            alert('Your browser does not support HTML5 localStorage. Try upgrading.');
        } else {
					//load the items
            getItems(); 
		   
			
        }
		
		
		$("#reset_list").click(function() {
						var userTimeLog, logLength, i, itemKey, value;		
						var arrKey = [];
						//i = 0;
						logLength = localStorage.length;
						//alert("llll"+logLength)
						for (i = 0; i < logLength; i++) {
							itemKey = localStorage.key(i);
							//alert("kkkkkk: "+itemKey)  
							arrKey.push(itemKey);
						}
						
						for(var j=0; j<arrKey.length; j++){
							if(arrKey[j]!="admin"){
								//alert(""+arrKey[j])
								localStorage.removeItem(arrKey[j]);
							}
							
						}
							location.reload();
								
		});
		$(".tableRow").mouseenter(function() {
								$(this).children().children(".delete").show();
								$(this).children().children(".edit").show();
		});
		$(".tableRow").mouseleave(function() {
								$(this).children().children(".delete").hide();
								$(this).children().children(".edit").hide();
		});
				
				
		$(".delete").click(function() {
								var itemId = $(this).parent().parent().attr('id');								
								//alert(""+itemId);
								localStorage.removeItem(itemId); 
								location.reload();
								//getItems(); 
		});
		
		$("#searBtn").click(function() {
								
								var detailArr = [];
								var totalValArr = [];
								
								var logLength, i, j;
								var itemKey, value, values;								
								logLength = localStorage.length-1; 
								if(document.getElementById("searInp").value==""){
									//alert("Please Enter Search Value");
									location.reload();
								}else{
								for (i = 0; i < logLength; i++) {
									itemKey = localStorage.key(i);
									value = localStorage.getItem(itemKey);
									values = JSON.parse(value);
									totalValArr.push(itemKey);
									totalValArr.push(values.userid);
									totalValArr.push(values.username);
									totalValArr.push(values.DOB);
									totalValArr.push(values.DOJ);
									totalValArr.push(values.depart);
									totalValArr.push(values.phone);
									totalValArr.push(values.city);
									for(j=0; j<totalValArr.length; j++){
										if(totalValArr[j]==document.getElementById("searInp").value){
											//alert(""+itemKey);
											var totlength = totalValArr.length;
											for(var t=1; t<=8; t++){
												totalValArr.splice(totlength-t, 1);
											}
										}
									}
								}  
								//alert(""+totalValArr.length);
								for (var i = 0; i < totalValArr.length; i=i+8) {
									
									$('#' + totalValArr[i]).remove();
								}
								}
								
	});
		
			
	var itemId;  
	$(document).on('click', 'td a.edit', function () {
			itemId = $(this).parent().parent().attr('id');
			new_dialog('Edit', $(this).parents('tr'));
			//$('#itemId').remove();
			$(this).closest('tr').remove();
			return false;
	});
			
	

    var new_dialog = function (type, row) {
        var dlg = $("#dialog-6").clone();
        var userid = dlg.find(("#user-id")),
            username = dlg.find(("#user-name")),
            doj = dlg.find(("#doj1")),
            dob = dlg.find(("#dob1")),
			depart = dlg.find(("#departs")),
			phone = dlg.find(("#phones")),
			city = dlg.find(("#citys"));
        type = type || 'Create';
        var config = {
            autoOpen: true,
            height: 450,
            width: 400,
            modal: true,
            buttons: {
                "Create an account": save_data,
                    "Cancel": function () {
						location.reload();
						dlg.dialog("close");
					
                }  
            },
            close: function () {
                dlg.remove();
				location.reload();
            }
        };
        if (type === 'Edit') {
            config.title = "Edit User";
            get_data();
            delete(config.buttons['Create an account']);
            config.buttons['Edit account'] = function () {
                //row.remove();
				save_data();
				location.reload();

            };

        }
        dlg.dialog(config);

        function get_data() {
            var _userid = $(row.children().get(0)).text(),
                _username = $(row.children().get(1)).text(),
				_dob = $(row.children().get(2)).text(),
				_doj = $(row.children().get(3)).text(),
				_depart = $(row.children().get(4)).text(),
				_phone = $(row.children().get(5)).text(),
				_city = $(row.children().get(6)).text();
				
				
			city.val(_city);
            userid.val(_userid);
            username.val(_username);
			dob.val(_dob);
            doj.val(_doj);
			depart.val(_depart);
            phone.val(_phone);
			
			
           

        }

        function save_data() {
			
			var userTimeLog, logLength, i;				  
			i = 0;
			logLength = localStorage.length-1; //how many items are in the database starting with zero
			userTimeLog = '';

			//now we are going to loop through each item in the database
			for (i = 0; i < logLength; i++) {
				var itemKey, value, values, formSave;
				//lets setup some variables for the key and values
				itemKey = localStorage.key(i);
				if(itemId == itemKey){
				
			
					value = localStorage.getItem(itemKey);
			
					values = JSON.parse(value);
						
						formSave = {
        					userid		: userid.val(),
        					username 	: username.val(),
        					DOJ 		: doj.val(),
							DOB 		: dob.val(),
							depart 		: depart.val(),
							Add1 		: values.Add1,
							Add2 		: values.Add2,
							phone		: phone.val(),
        					city 		: city.val()

								};
						
						localStorage.setItem( itemId, JSON.stringify(formSave));  
						//alert(""+JSON.stringify(formSave));
            dlg.dialog("close");
			break;
			}
        }
			
			
        }
    };
			
			
    });
	
var getItems = function() {
			var userTimeLog, logLength, i;				  
        //i = 0;
        logLength = localStorage.length-1; //how many items are in the database starting with zero
				userTimeLog = '';

		
		
        //now we are going to loop through each item in the database
		
        for (i = 0; i < logLength; i++) {
						var itemKey, value, values, user_id, user_name, doj, dob, depart, add1, add2, phone, city1;
            //lets setup some variables for the key and values
            itemKey = localStorage.key(i);
			//alert(""+itemKey);				
            value = localStorage.getItem(itemKey);
			//alert(""+value);
			if(value!="admin1"){
					values = JSON.parse(value);
						user_id = values.userid;
						user_name = values.username;
						doj = values.DOJ;
						dob = values.DOB;
						depart = values.depart;
						add1 = values.Add1;
						add2 = values.Add2;
						phone = values.phone;
						city1 = values.city;
						
						//now that we have the item, lets add it to the table
					userTimeLog += '<tr id="'+itemKey+'" class="tableRow"><td id="ttd">'+user_id+'</td><td id="ttd">'+user_name+'</td><td id="ttd">'+dob+'</td><td id="ttd">'+doj+'</td><td id="ttd">'+depart+'</td><td id="ttd">'+phone+'</td><td id="ttd">'+city1+'<a class="edit" id="edit" title="Edit Entry" href="#"><img src="img/edt.png" width="24" height="24"></a><a class="delete" title="Delete Entry" href="#"><img src="img/delete.png" width="24" height="24"></a></td></tr>';
			}
        }
		

        $("#userLog").append(userTimeLog); //update the table with the list items
				  
				
				
				
    }