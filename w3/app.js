
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
　
  var response = [];
// qa1    
for (var i=0; i<americano.length; i++) {
    if(americano[i].checked) {
        response[0] = (americano[i].value === "qz1-2");
        break;  
    }
}
if(response[0]) {
    message1.innerHTML = "You are right!";
    count++;
    
}else{
    message1.innerHTML = "Hint: If you want to make cold brew by esspresso, what do you want to add?";
}
    
// qa2
for (var i=0; i<espresso.length; i++) {
    if(espresso[i].checked) {
        response[1] = (espresso[i].value === "qz2-1");
        break;  
    }
}
if(response[1]) {
    message2.innerHTML = "You are right!";
    count++;
    
}else{
    message2.innerHTML = "Hint: Oops! Cappuccino has more creamy milk form than Latte.";
}
    
// qa3    
for (var i=0; i<pdcountry.length; i++) {
    if(pdcountry[i].checked) {
        response[2] = (pdcountry[i].value === "qz3-1");
        break;  
    }
}
if(response[2]) {
    message3.innerHTML = "You are right!";
    count++;
    
}else{
    message3.innerHTML = "Hint: That's a tough question. Which country has a big land?";
}
    
// qa4
for (var i=0; i<average.length; i++) {
    if(average[i].checked) {
        response[3] = (average[i].value === "qz4-1");
        break;  
    }
}
if(response[3]) {
    message4.innerHTML = "You are right!";
    count++;
    
}else{
    message4.innerHTML = "Hint: Let's try another answer!";
}
    
// qa5
for (var i=0; i<benefit.length; i++) {
    if(benefit[i].checked) {
        response[4] = (benefit[i].value === "qz5-3");
        break;  
    }
}
if(response[4]) {
    message5.innerHTML = "You are right!";
    count++;
    
}else{
    message5.innerHTML = "Hint: Let's try another answer!";
}
    
// qa6
for (var i=0; i<caffeine.length; i++) {
    if(caffeine[i].checked) {
        response[5] = (caffeine[i].value === "qz6-3");
        break;  
    }
}
if(response[5]) {
    message6.innerHTML = "You are right!";
    count++;
    
}else{
    message6.innerHTML = "Hint: Esresso seems more caffeine but it is not!";
}

// Messages 
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