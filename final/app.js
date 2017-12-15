var map;
var marker;
var markers = [];
var inforwindow;

function initMap() {
    var styles = [
        {
            featureType: 'all',
            elementType: 'all',
            stylers: [{
                hue: '#FF989E'
        }, {
                saturation: 10
        }, {
                lightness: 0
        }, {
                gamma: 1
        }],

    }, {
            featureType: 'water',
            elementType: 'all',
            stylers: [{
                color: '#99ccff'
        }],
            }
        ];
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 16,
        styles: styles
    });
    
    infowindow = new google.maps.InfoWindow();
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });


    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();
        var clist = document.getElementById("clist");
        var pArray = [];

        //making Array list
        for (var i = 0; i < places.length; i++) {
            pArray[i] = [places[i].name, places[i].formatted_address, places[i].rating];
        }
    
        if (places.length == 0) {
            return;
        }
        
        //Clear out the old markers
        markers.forEach(function(marker){
           marker.setMap(null); 
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        var list = document.getElementById("list");
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "clist");

        //Clear out the old lists
        if (clist.hasChildNodes()) {
            clearChildNodes(clist);
        }
            
        places.forEach(function (place) {
                var p = document.createElement("p");
                p.setAttribute("class", "showlist");
                p.setAttribute("style", "background-image:url(" + generateRandomBalloon()+ ");");
                var targetspan = document.createElement("span");
                targetspan.setAttribute("class", "info");
                
                targetspan.setAttribute("data-num", place.rating);
                targetspan.innerHTML = place.name + "<br>" + place.rating;
                 
                //Add star mark
                var ht = document.createElement("i");
                ht.setAttribute("class", "fa");
                ht.classList.add("fa-star-o");                  
            
               targetspan.appendChild(ht);
               p.appendChild(targetspan);
               clist.appendChild(p);
            
               //Show the info when it clicked
                p.onclick = function() {
                    this.children[0].style.opacity = 1;
                    //If the place has rating over 4.5, background image will change
                    if(this.children[0].getAttribute("data-num")>=4.5){
                      this.style.width = "118px";
                      this.style.height = "118px";
                      this.style.backgroundImage = "url('heart.png')"; 
                    }
                }
            



                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }

                // Create a marker for each place.
                marker = createMarker(place);


                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });

        map.fitBounds(bounds);

        //function generateGraph(len){
        /*var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext('2d');
            var num = places.length;
        //max width size
        var w=canvas.width;
        //max height size
        var h=canvas.height;
        var count=0;
        function render(){
            ctx.clearRect(0,0, w, h);
          for(var i=0; i<num; i++){ 
            var name = places[i].name;
            ctx.beginPath();
            //center of circle
            var x=Math.floor(Math.random()*(w-1))+1;
            var y=Math.floor(Math.random()*(h-1))+1;
           // circle r
            var r=Math.floor(Math.random()*100)+1;
            //random color
            var col = generateRandomColor();
          
            ctx.arc(x+count, y, r, 0, Math.PI*2, false);
            ctx.strokeStyle = col;
            ctx.fillStyle = col;
            ctx.globalAlpha = '1.0';
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.fillText(name, x+count, y);
            ctx.fill();
              if(count>canvas.width){
                  count =0;
              }else{
                  count+=1
              }
         }
        }
            setInterval(render,1000/1);
        //}*/

    });


    //Get geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(pos);

        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }


    //var service = new google.maps.places.PlacesService(map);
    //service.textSearch(places, callback);


}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: "./pin.png",
        optimized: false
    });
    markers.push(marker);

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent("" + place.name + " " + place.rating);
        infowindow.open(map, this);
    });
}


function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
//        var marker = new google.maps.Marker({
//            map: map,
//            place: {
//                placeId: results[0].place_id,
//                location: results[0].geometry.location
//            }
//        });
//        google.maps.event.addListener(marker, 'click', function () {
//            infowindow.setContent(place.name);
//            infowindow.open(map, this);
//        });
       
    }
}

function clearChildNodes(elm) {
    while (elm.hasChildNodes()) {
        elm.removeChild(elm.lastChild);
    }
}



function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

function generateRandomBalloon() {
    var array = ["balloonp.png", "balloony.png", "balloonpi.png"];
    return array[Math.floor(Math.random() * array.length)];
}



function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}
