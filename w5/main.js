submit.onclick = function () {
    var key = document.getElementById("key");
    var pgLength = document.getElementById("pgLength");
    var numbers = document.getElementById("numbers");
    var symboles = document.getElementById("symboles");
    var newpw = document.getElementById("newpw");
    
    var seednumbers = '012345678';
    var seedletter = 'abcdefghijklmnopqrstuvwxyz';
    var seedsymbol = '!#$%&()?+';
    var strings_s1 = seedletter + seedletter.toUpperCase();
    var strings_s2 = strings_s1 + seednumbers;
    var strings_s3 = strings_s2 + seedsymbol;
    var strings_all = seedletter + seedletter.toUpperCase() + seednumbers + seedsymbol;
    
    
    var pgLen = parseInt(pgLength.value, 10);
    //console.log(pgLen);
    
    var keyword = key.value;
    var phrase = "";
    
    
    
    if (keyword == 0) {
        if(numbers.checked === true && symboles.checked === true) {
            for (var i=0; i < pgLen; i++) {
               phrase += strings_all.charAt(Math.floor(Math.random()*strings_all.length));
            }
            //console.log(phrase);
        }else if (numbers.checked === true) {
            for (var i=0; i < pgLen; i++) {
              phrase += strings_s2.charAt(Math.floor(Math.random()*strings_s2.length));
            }
            //console.log(phrase);
        }else if (symboles.checked === true) {
            for (var i=0; i < pgLen; i++) {
               phrase += strings_s3.charAt(Math.floor(Math.random()*strings_s3.length));
            }
            //console.log(phrase);
        }else {
            for (var i=0; i < pgLen; i++) {
               phrase += strings_s1.charAt(Math.floor(Math.random()*strings_s1.length));
           }
            //console.log(phrase);
        }
            
    } else {
        if(numbers.checked === true && symboles.checked === true) {

            console.log("both checked");
        }else if (numbers.checked === true) {
            
            console.log("number checked");
        }else if (symboles.checked === true) {
            
            console.log("symbol checked");
        }else {
            
            console.log("onlykey");
        
        }
    };
    
    
    
    
    
    
    /*for (var i=0; i < keyword.length; i++) {
        var ranNum= Math.floor(Math.random()*keyword.length);
        if(ranNum === i) {
            phrase += keyword.charAt(i).toUpperCase();
        }else{
            phrase += keyword.charAt(i);
        }
    }*/

        //phrase += string.charAt(ranNum);
    
   newpw.innerHTML = phrase;
    
    //console.log(phrase);
    
    
    
    
    //var randomess = eightball[Math.floor(Math.random()*eightball.length)];
    
    
    
};