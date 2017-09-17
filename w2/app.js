

submit.onclick = function () {
    var madlibs = document.getElementById("madlibs");
	var submit = document.getElementById("submit");
    var lastname = document.getElementById("lastname");
    var illness = document.getElementById("illness");
	var noun = document.getElementById("noun");
	var adj1 = document.getElementById("adj1");
	var adj2 = document.getElementById("adj2");
    var silly2 = document.getElementById("silly2");
    var place = document.getElementById("place");
    var num = document.getElementById("num");
    var adj3 = document.getElementById("adj3");
    var message = document.getElementById("message"); 
	console.log(message);  
    
    message.innerHTML = "<p>Dear School Nurse: </p><p>" + lastname.value + " will not be attending school today. He/she has come down with a case of " + illness.value + " and has horrible " + noun.value + " and a/an " + adj1.value + " fever. We have made an appointment with the " + adj2.value + " Dr." + silly2.value + ", who studied for many years in " + place.value + " and has " + num.value + " degrees in pediatrics. He will send you all the information you need.</p> <p>Thank you!</p>" + "Sincerely,<br>" + "Mrs." + adj3.value + ".";
    
    message.style.display = "block";
    madlibs.style.display = "none";
    
};