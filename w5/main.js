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
    var strings_s4 = seednumbers + seedsymbol;
    var strings_all = seedletter + seedletter.toUpperCase() + seednumbers + seedsymbol;
    
    
    var pgLen = parseInt(pgLength.value, 10);
    //console.log(pgLen);
    
    var keyword = key.value;
    var phrase = "";
    var keyphrase ="";
    var ranNum= Math.floor(Math.random()*keyword.length);
    
    function getPhrase(sed) {
        phrase += sed.charAt(Math.floor(Math.random()*sed.length));
        return phrase;
    }
    
    function getKeyPhrase(ph) {
        for (var i=0; i < keyword.length; i++) {
        var ranNum= Math.floor(Math.random()*keyword.length);
        if(ranNum === i) {
            keyphrase += keyword.charAt(i).toUpperCase();
        }else{
            keyphrase += keyword.charAt(i);
        }
        return keyphrase;
    }
  
    if (keyword.length == 0) {
        if(numbers.checked && symboles.checked) {
            for (var i=0; i < pgLen; i++) {
                getPhrase(strings_all);
               //phrase += strings_all.charAt(Math.floor(Math.random()*strings_all.length));
            }
            
        }else if (numbers.checked === true) {
            for (var i=0; i < pgLen; i++) {
                getPhrase(strings_s2);
              //phrase += strings_s2.charAt(Math.floor(Math.random()*strings_s2.length));
            }
            
        }else if (symboles.checked === true) {
            for (var i=0; i < pgLen; i++) {
                getPhrase(strings_s3);
               //phrase += strings_s3.charAt(Math.floor(Math.random()*strings_s3.length));
            }
        }else {
            for (var i=0; i < pgLen; i++) {
                getPhrase(strings_s1);
               //phrase += strings_s1.charAt(Math.floor(Math.random()*strings_s1.length));
           }
            
        }
            
    } else {
        if (keyword.length < 6 && pgLen <= 6 ) {
           var addtext ='';
            
             if(numbers.checked === true && symboles.checked === true) {
                 for (var j=0; j< 6-keyword.length; j++){
                   addtext += strings_s4.charAt(Math.floor(Math.random()*strings_s4.length));
                 }
                 var addseed = keyword + addtext;
                 for (var k=0; k < addseed.length; k++) {
                     getPhrase(addseed);
                 }
                    
             }else if (numbers.checked === true) {
                 for (var j=0; j< 6-keyword.length; j++){
                   addtext += seednumbers.charAt(Math.floor(Math.random()*seednumbers.length));
                 }
                 var addseed = keyword + addtext;
                 for (var k=0; k < addseed.length; k++) {
                     getPhrase(addseed);
                 }
            }else if (symboles.checked === true) {
                for (var j=0; j< 6-keyword.length; j++){
                   addtext += seedsymbol.charAt(Math.floor(Math.random()*seedsymbol.length));
                 }
                 var addseed = keyword + addtext;
                for (var k=0; k < addseed.length; k++) {
                     getPhrase(addseed);
                 }
            }else {
                for (var j=0; j< 6-keyword.length; j++){
                   addtext += strings_all.charAt(Math.floor(Math.random()*strings_all.length));
                 }
                 var addseed = keyword + addtext;
                for (var k=0; k < addseed.length; k++) {
                     getPhrase(addseed);
                 }
            }
            

        
            
        }else{
        
            if(numbers.checked === true && symboles.checked === true) {
                
                var seedkey1 = keyphrase + numbers + symboles;
                for (var i=0; i < pgLen; i++) {
                  getPhrase(seedkey1);
                  //phrase += seedkey1.charAt(Math.floor(Math.random()*strings_s1.length));
                }
                    
             }else if (numbers.checked === true) {
                 var seedkey2 = keyphrase + numbers;
                 for (var i=0; i < pgLen; i++) {
                     getPhrase(seedkey2);
                  //phrase += seedkey2.charAt(Math.floor(Math.random()*strings_s1.length));
                 }
            }else if (symboles.checked === true) {
                var seedkey3 = keyphrase + symboles;
                for (var i=0; i < pgLen; i++) {
                    getPhrase(seedkey3);
                  //phrase += seedkey3.charAt(Math.floor(Math.random()*strings_s1.length));
                }
            }else {
                phrase = keyword;
            }
        }
    }
    
    }
    
    
    
    
    /*for (var i=0; i < keyword.length; i++) {
        var ranNum= Math.floor(Math.random()*keyword.length);
        if(ranNum === i) {
            phrase += keyword.charAt(i).toUpperCase();
        }else{
            phrase += keyword.charAt(i);
        }
    }*/

        //phrase += string.charAt(ranNum);
    console.log(  );
    newpw.innerHTML = getKeyPhrase(keyword);
    
    //console.log(phrase);
    
    
    
    
    //var randomess = eightball[Math.floor(Math.random()*eightball.length)];
    
        //挿入サンプル
        /*function insertStr(str, index, insert) {
    return str.slice(0, index) + insert + str.slice(index, str.length);
}*/
    
    
};