submit.onclick = function () {
    var key = document.getElementById("key");
    var message = document.getElementById("message");
    var pgLength = document.getElementById("pgLength");
    var numbers = document.getElementById("numbers");
    var symbols = document.getElementById("symbols");
    var newpw = document.getElementById("newpw");
    
    var seednumbers = '012345678';
    var seedletter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var seedsymbol = '!#$%&()?+';
    var seed_all = seedletter + seednumbers + seedsymbol;
    var seed_chnum = seedletter + seednumbers;
    var seed_chsym = seedletter + seedsymbol;
     
    var keyword = key.value;
    var phrase = "";
    var addtext ="";
    var addseed;
    
    var pgLen = parseInt(pgLength.value, 10);
    var addLen = pgLen-(keyword.length);
    
    function getKeyPhrase(ph) {
        for (var i=0; i < ph.length; i++) {
        var ranNum= Math.floor(Math.random()*ph.length);
        if(ranNum === i) {
            keyphrase += ph.charAt(i).toUpperCase();
        }else{
            keyphrase += ph.charAt(i);
        }
      }
        return keyphrase;
    }
    
    if(keyword.length == 0) {
        if(numbers.checked && symbols.checked) {
            for (var i=0; i < pgLen; i++) {
               phrase += seed_all[Math.floor(Math.random()*seed_all.length)];
            }
            
        }else if (numbers.checked) {
            for (var i=0; i < pgLen; i++) {
              phrase += seed_chnum[Math.floor(Math.random()*seed_chnum.length)];
            }
            
        }else if (symbols.checked) {
            for (var i=0; i < pgLen; i++) {
                phrase += seed_chsym[Math.floor(Math.random()*seed_chsym.length)];
            }
        }else {
            for (var i=0; i < pgLen; i++) {
                phrase += seedletter[Math.floor(Math.random()*seedletter.length)];
           }
            
        }
    }else if(addLen < 0) {
        message.innerHTML = "*Enter the keyword less them password length.";
    
    }else {

        var keyphrase ="";

        if(numbers.checked && symbols.checked) {
            for (var j=0; j< addLen; j++){
                   addtext += seed_all[Math.floor(Math.random()*seed_all.length)];
                 }
                
                phrase = getKeyPhrase(keyword) + addtext;
        }else if (numbers.checked) {
            for (var j=0; j< addLen; j++){
                   addtext += seed_chnum[Math.floor(Math.random()*seed_chnum.length)];
                 }
                phrase = getKeyPhrase(keyword) + addtext;
            
        }else if (symbols.checked) {
            for (var j=0; j< addLen; j++){
                   addtext += seed_chsym[Math.floor(Math.random()*seed_chsym.length)];
                 }
            phrase = getKeyPhrase(keyword) + addtext;
        }else {
            for (var j=0; j< addLen; j++){
                   addtext += seedletter[Math.floor(Math.random()*seedletter.length)];
                 }
            phrase = getKeyPhrase(keyword) + addtext;
        }
        
        
    }
    
    
     newpw.innerHTML = phrase;

};