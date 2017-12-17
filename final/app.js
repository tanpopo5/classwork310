var map;
var marker;
var markers = [];
var inforwindow;
var count=0;
var ctFlag = false;

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
        count=0;
        score.innerHTML = "You got " + count + " heart!<br>";
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
        var score = document.getElementById('score');

        //Clear out the old lists
        if (clist.hasChildNodes()) {
            clearChildNodes(clist);
            ctFlag = true;

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
                      
                      count++;
                    
                    }
                    score.innerHTML = "You got " + count + "/20 heart!<br>";
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
        infowindow.setContent("<b>" + place.name + "</b><br>"+ place.formatted_address);
        infowindow.open(map, this);
    });
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
