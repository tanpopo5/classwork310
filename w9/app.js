$(document).ready(function(){
    $('#query').on("keypress", function(event){
        if(event.keyCode == 13){
            //console.log(this.value);
            /* keyCode 13 is the enter key to submit query */
            var query = this.value;
            var key = "A7Dqv4QCeJWJQA5bobMoMNA8QjFocQYy";
            var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + key + "&limit=6";
            $.getJSON(url, function(json){
                
                /* memory game */
                
                
                // need two copies of each image in a list
                var cards =[];
                
                // place image into a grid
                // obscure images
                var $game=$('#game');
                var matches=2;
                for(let j=0; j< matches; j++){
                
                
                for (let i=0; i<json.data.length; i++){
                    var img=json.data[i];
                    var div = $('<div>')
                         .addClass('card')
                         .attr('data-num', i);
                    var imgElem = new Image();
                    imgElem.src=img.images.downsized.url;
                    imgElem.style.display ="none";
                    div.append(imgElem);
                    
                    cards.push(div);
                }
                }
                console.log(cards);
                cards.sort(function() {return 0.5 - Math.random() });
                
                for( let i=0; i<cards.length; i++){
                    $game.append(cards[i]);
                }
                
                var clickedCards = [];
                var points = 0;
                //each card/image needs click event
                $('.card').click(function(){
                    const $card = $(this);
                   
                    //reveal image;
                    $card.toggleClass('flipped');
                    $card.children().show();
                    
                    
                     // is three another image to compare
                    if(clickedCards.length == matches-1) {
                        // compare images
                        var allMatch = true;
                        for(let i =0; i<clickedCards.length; i++){
                             if(clickedCards[i].num !== $card.data().num){
                                 allMatch=false;
                             }
                        }
                        
                        if(allMatch){
                            //match, stay face up
                            $score =$('#gamescore');
                            $reset =$('#reset');
                            console.log("this is a match");
                            points++;
                           
                            // if all matches ame is won
                            if(points == cards.length/2){
                                $score.html("Congraturation!");
                                $reset.html("<a href='index.html' class='rest'>Reset the game</a>");
                            }else{
                                $score.html("Your Score: "+ points );
                                
                            }
                            
                        }else{
                            //not a match, hide the images
                            //$card.children().delay(1000).hide(0);
                            $card.children().delay(1000).hide(0);
                            for(let i =0; i<clickedCards.length; i++){
                                clickedCards[i].img.delay(1000).hide(0);
                            }
                            
                            
                        }
                        // clear the current image
                       clickedCards = [];
                       
                    }else{
                        // keep track of current image 
                        clickedCards.push({
                            num: $card.data().num,
                            img: $card.find('img')
                        });
                    }
                        
                    
                   
                    
                    
                });
                
                   

            });
        }
    });
});