submit.onclick = function () {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var upercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowercase =["a","b","c","d","e","f","g","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var symbol = ["+","-","*","/","?","!","@","#","$","%","&"];
    
    var key = document.getElementById("key");
    var pgLength = document.getElementById("pgLength");
    var newpw = document.getElementById("newpw");
    
    var keyword = key.value;
    var separator = ",";
    var keyArray = (keyword).split(separator);
    
    console.log(keyArray);
    
    
    
    //var randomess = eightball[Math.floor(Math.random()*eightball.length)];
    
    
    
};