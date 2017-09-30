submit.onclick = function () {
    var ball = document.getElementById("ball");
    var result = document.getElementsByName("result");
    var eightball = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"    
    ];
         
    var dx = new Array( 12,-20, 8,-16, 20, -4, 16, -8, 4,-12,0);
    var dy = new Array(-20, 8,-16, 12,-12, 16, -4, 20, -8, 4,0);
    var cnt = 0;
    
    var randomess = eightball[Math.floor(Math.random()*eightball.length)];
    
    var countup = function(){
        cnt++;
        ball.style.left = dx[cnt];
        ball.style.top  = dy[cnt];
        var cntid=setTimeout(countup, 100);
        if(cnt>dx.length) {
            clearTimeout(cntid);
            ball.src = 'eightball2.png';
            message.innerHTML = randomess;
        }       
    }
    countup();
    
    setTimeout("location.reload()",5000);
    
};