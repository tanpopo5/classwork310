
submit.onclick = function () {
  var americano = document.getElementsByName("americano");
  var espresso = document.getElementsByName("espresso");
  var pdcountry = document.getElementsByName("pdcountry");
  var average = document.getElementsByName("average");
  var benefit = document.getElementsByName("benefit");
  var caffeine = document.getElementsByName("caffeine");
  
  var message1 = document.getElementById("message1");
  var message2 = document.getElementById("message2");
  var message3 = document.getElementById("message3");
  var message4 = document.getElementById("message4");
  var message5 = document.getElementById("message5");
  var message6 = document.getElementById("message6");
  var totalans = document.getElementById("totalans");

  var count = 0;

    
for (var i=0; i<americano.length; i++) {
    if(americano[i].checked) {
        var qz1 = americano[i].value;
        console.log(qz1);
        break;  
    }
}
for (var i=0; i<espresso.length; i++) {
    if(espresso[i].checked) {
        var qz2 = espresso[i].value;
        console.log(qz2);
        break;  
    }
}
for (var i=0; i<pdcountry.length; i++) {
    if(pdcountry[i].checked) {
        var qz3 = pdcountry[i].value;
        console.log(qz3);
        break;  
    }
}
for (var i=0; i<average.length; i++) {
    if(average[i].checked) {
        var qz4 = average[i].value;
        console.log(qz4);
        break;  
    }
}
for (var i=0; i<benefit.length; i++) {
    if(benefit[i].checked) {
        var qz5 = benefit[i].value;
        console.log(qz5);
        break;  
    }
}
for (var i=0; i<caffeine.length; i++) {
    if(caffeine[i].checked) {
        var qz6 = caffeine[i].value;
        console.log(qz6);
        break;  
    }
}

if(qz1==="qz1-2") {
    message1.innerHTML = "You are right!";
    count++;
    
}else{
    message1.innerHTML = "Hint: If you want to make cold brew by esspresso, what do you want to add?";
}
if(qz2==="qz2-1") {
    message2.innerHTML = "You are right!";
    count++;
    
}else{
    message2.innerHTML = "Hint: Oops! Cappuccino has more creamy milk form than Latte.";
}
if(qz3==="qz3-1") {
    message3.innerHTML = "You are right!";
    count++;
    
}else{
    message3.innerHTML = "Hint: That's a tough question. Which country has a big land?";
}
if(qz4==="qz4-1") {
    message4.innerHTML = "You are right!";
    count++;
    
}else{
    message4.innerHTML = "Hint: Let's try another answer!";
}
if(qz5==="qz5-3") {
    message5.innerHTML = "You are right!";
    count++;
    
}else{
    message5.innerHTML = "Hint: Let's try another answer!";
}
if(qz6==="qz6-3") {
    message6.innerHTML = "You are right!";
    count++;
    
}else{
    message6.innerHTML = "Hint: Esresso seems more caffeine but it is not!";
}

if(count==6) {
   totalans.innerHTML = "You are perfect! You got " + count + " /6 Score!";    
}else if (count >= 5){
    totalans.innerHTML = "You are almost perfect! You got " + count + " /6 Score!";
}else if (count >= 4) {
    totalans.innerHTML = "Do you want to be perfect? Try again! You got " + count + " /6 Score!";
}else if (count <= 3 ){
    totalans.innerHTML = "You don't like coffee? You got " + count + " /6 Score!";
}
 
    
    
};