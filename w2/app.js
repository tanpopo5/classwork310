

submit.onclick = function () {
	var submit = document.getElementById("submit");
	var silly1 = document.getElementById("silly1");
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
    
    message.innerText = silly1.value + lastname.value + illness.value + noun.value + adj1.value + adj2.value + silly2.value + place.value + num.value + adj3.value;
    
};