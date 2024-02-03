var map = null;
var pinPath = 'Motusbank/media/motusbank/pin.png';
var markers = [];
var infowindow = null;
var filteredList = null;

$(document).ready(function (e) {
    initMap();
    initInfoWindow();
    initEventListeners();
});

var initEventListeners = function () {
    $('.location-search').on('keypress', function (e) {
        if (13 == e.which) {
            e.preventDefault();
            e.stopPropagation();
            $(this).find('.button.search').click();
        }
    });

    $("fieldset.cbx-features").click(function () {
        triggerFeatureFilter();
    });

    $("select.language").change(function (e) {
        triggerLanguageFilter($(this).val());
    });
}

/* ### MAP functionality - START ### */
var initMap = function () {
    // Canada
    var lat = '57.49924';
    var lon = '-96.08711';
    filteredList = locationList;

    loadMap(lat, lon, 3);

    var searchVal = getQueryStringParameterByName("search");
    if (!searchVal) {
        loadMarkersForLowZoom();
    } else if (searchVal == 'here') {
        getUserCurrentLocation();
    } else {
        searchCommand(searchVal);
    }
    loadMarkersForLowZoom();
}

var loadMap = function (lat, lon, zoomLevel) {
    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2.00"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#9c9c9c"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7b7b7b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c8d7d4"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#070707"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
        ]
    );
    var mapOptions = {
        zoom: zoomLevel,
        center: new google.maps.LatLng(lat, lon),
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL },
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'styled_map']
        }
    };
    map = new google.maps.Map(document.getElementById("mapDiv"), mapOptions);
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    addMapEventListeners();
}

var addMapEventListeners = function () {
    map.addListener('dragend', function () {
        var zoomLevel = map.getZoom();
        if (zoomLevel >= 11) {
            ExecuteSearch(map.getCenter());
        }
    });
    map.addListener('zoom_changed', function () {
        var zoomLevel = map.getZoom();
        if (zoomLevel < 11) {
            if (filteredList != 0) {
                loadMarkersForLowZoom();
            }
        }
        else {
            ExecuteSearch(map.getCenter());
        }
    });
    map.addListener('mouseover', function () {
        dontUpdateFlag = false;
    });
}

var getUserCurrentLocation = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            showPosition(position);
            smoothScrollToElement('#mapDiv', 120);
        },
            function (error) {
                if (error.code == error.PERMSISION_DENIED) {
                    alert("Geolocation is disabled in your browser");
                }
            });
    }
    else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var search_center = new google.maps.LatLng(lat, lon);
    ExecuteSearch(search_center);
}

var loadMarkersForLowZoom = function () {
    deleteMarkers();
    hideFeaturesAndLocations();

    $.each(filteredList, function (key, value) {

        var marker = new google.maps.Marker({
            position: { lat: Number(value.Latitude), lng: Number(value.Longitude) },
            map: map,
            icon: pinPath
        });

        marker.addListener('click', function (event) {
            markerEventHandler(event);
        });

        markers.push(marker);
    });
    setMapOnAll(map);
};

function deleteMarkers() {
    markers.forEach(function (marker) {
        marker.setMap(null);
    });
    markers = [];
}

function setMapOnAll(map) {
    markers.forEach(function (marker) {
        marker.setMap(map);
    });
}

var initInfoWindow = function () {
    infowindow = new google.maps.InfoWindow({
        content: '<div id="contentInfoWindow" class="infowindow"></div>'
    });
};

/* ### MAP functionality - END ### */

/* ### FILTER functionality - START ### */

var triggerFeatureFilter = function () {
    // set filtered list
    filteredList = locationList;

    // feature check
    $('input.cbx-branch').attr('disabled', true);
    $('input.cbx-abm').attr('disabled', false);
    $('input.cbx-branch').prop('checked', false);

    var deposit = $('#cbx-deposit-s').is(':checked') || $('#cbx-deposit-l').is(':checked');
    var drivethru = $('#cbx-drivethru-s').is(':checked') || $('#cbx-drivethru-l').is(':checked');
    var pin = $('#cbx-pin-s').is(':checked') || $('#cbx-pin-l').is(':checked');
    var voice = $('#cbx-voice-s').is(':checked') || $('#cbx-voice-l').is(':checked');
    var visa = $('#cbx-visa-s').is(':checked') || $('#cbx-visa-l').is(':checked');
    var cirrus = $('#cbx-cirrus-s').is(':checked') || $('#cbx-cirrus-l').is(':checked');
    var mastercard = $('#cbx-mastercard-s').is(':checked') || $('#cbx-mastercard-l').is(':checked');
    var plus = $('#cbx-plus-s').is(':checked') || $('#cbx-plus-l').is(':checked');

    if (deposit) {
        filteredList = $.grep(filteredList, function (index) {
            return (index.AcceptsDeposits == true);
        });
    }
    if (drivethru) {
        filteredList = $.grep(filteredList, function (index) {
            return (index.DriveThru == true);
        });
    }
    if (pin) {
        filteredList = $.grep(filteredList, function (index) {
            return (index.PINChange == true);
        });
    }
    if (voice) {
        filteredList = $.grep(filteredList, function (index) {
            return (index.VoiceGuidance == true);
        });
    }
    if (visa) {
        filteredList = $.grep(filteredList, function (index) {
            return (index.Visa == true);
        });
    }
    if (plus) {
        filteredList = $.grep(filteredList, function (index) {
            return (index.Plus == true);
        });
    }
    if (mastercard) {
        filteredList = $.grep(filteredList, function (index) {
            return (index.MasterCard == true);
        });
    }
    if (cirrus) {
        filteredList = $.grep(filteredList, function (index) {
            return (index.Cirrus == true);
        });
    }

    refreshMap();
};

var triggerLanguageFilter = function (str) {
    filteredList = $.grep(locationList, function (index) {
        return (index.English == true || index.French == true);
    });
    switch (str) {
        case "Chinese":
            filteredList = $.grep(filteredList, function (index) {
                return (index.Chinese == true);
            });
            break;
        case "Italian":
            filteredList = $.grep(filteredList, function (index) {
                return (index.Italian == true);
            });
            break;
        case "Korean":
            filteredList = $.grep(filteredList, function (index) {
                return (index.Korean == true);
            });
            break;
        case "Polish":
            filteredList = $.grep(filteredList, function (index) {
                return (index.Polish == true);
            });
            break;
        case "Punjabi":
            filteredList = $.grep(filteredList, function (index) {
                return (index.Punjabi == true);
            });
            break;
        default:
            filteredList = $.grep(filteredList, function (index) {
                return (index.English == true || index.French == true);
            });
            break;
    }
    refreshMap();
};

var refreshMap = function () {
    var zoomLevel = map.getZoom();
    if (zoomLevel < 11) {
        if (locationList != 0) {
            loadMarkersForLowZoom();
        }
    }
    else {
        ExecuteSearch(map.getCenter());
    }
};
/* ### FILTER functionality - END ### */

/* ### SEARCH functionality - START ### */
var searchCommand = function (searchVal) {
    if (searchVal == null) {
        searchVal = $('#searchBtn').val();
    }
    SearchByAddress(searchVal);
    smoothScrollToElement('#mapDiv', 120);
}

var SearchByAddress = function (address) {
    if (address.length > 3 && address.length < 6) {
        var re = /(\b[a-z]\d[a-z])/g;
        var m;
        while ((m = re.exec(address)) !== null) {
            if (m.index === re.lastIndex) {
                re.lastIndex++;
            }
            var check = m;
        }
        if (check != null && check.length > 0) {
            var result = check[0];
            if (result.length >= 3) {
                address = address.substring(0, 3);
            }
        }
    }
    $('#searchBtn').addClass('.active');
    var geocoder = new google.maps.Geocoder();
    var search_center = null;
    geocoder.geocode({
        'address': address, componentRestrictions: {
            country: 'CA'
        }
    }, function (results, status) {
        if (status == "ZERO_RESULTS") {
            console.log("Not valid address");
        }
        else {
            search_center = results[0].geometry.location;
            ExecuteSearch(search_center);
        }
    });
    $('#searchBtn').blur();
}

var ExecuteSearch = function (search_center) {
    clearResults();
    showFeaturesAndLocations();

    $.each(filteredList, function (key, value) {
        var latLng = new google.maps.LatLng(value["Latitude"], value["Longitude"]);
        var distance = google.maps.geometry.spherical.computeDistanceBetween(search_center, latLng);
        value['Distance'] = Math.round(distance / 100) / 10;
    });

    var sorted = filteredList.sort(function (a, b) {
        return a.Distance - b.Distance;
    });

    var sumDistance = 0;
    var zoom = 11;
    if (sorted.length) {
        if (sorted[0].Distance > 50) {
            displayCriticalMessage();
            if (typeof (search_center) !== 'undefined') {
                loadMap(search_center.lat(), search_center.lng(), zoom);
            }
        }
        else {
            var limit = 6;
            if (sorted.length < limit) {
                limit = sorted.length;
            }
            for (var i = 0; i < limit; i++) {
                sumDistance += sorted[i].Distance;
            }
            if (sumDistance < 15) {
                zoom = 13;
            }
            else if (sumDistance >= 15 && sumDistance < 25) {
                zoom = 12;
            }
            loadMap(search_center.lat(), search_center.lng(), zoom);

            deleteMarkers();
            for (var i = 0; i < sorted.length; i++) {
                var value = sorted[i];
                if (value.Distance < 50 && i < 36) {
                    var marker = new google.maps.Marker({
                        position: { lat: parseFloat(value.Latitude), lng: parseFloat(value.Longitude) },
                        map: map,
                        icon: pinPath
                    });

                    marker.set("id", value.AtmId);
                    marker.set("title", value.Institution);
                }

                marker.addListener('click', function (event) {
                    markerEventHandler(event);
                });

                marker.addListener('mouseover', function () {
                    infowindow.open(map, this);
                    $('.infowindow').text(this.title);
                });

                marker.addListener('mouseout', function () {
                    infowindow.close();
                });

                markers.push(marker);

                if (value.Distance < 50 && i < 36) {
                    updateLocationDetails(value);
                }
            }
        }
        setMapOnAll(map);
    }
}

var markerEventHandler = function (event) {
    var position = event.latLng;
    if (map.getZoom() < 11) {
        map.setCenter(position);
        map.setZoom(11);
    }
    var atmId = "";
    $.each(markers, function (index, value) {
        var markPos = value.getPosition();
        if (markPos == position) {
            atmId = value.get("id");
            return false;
        }
    })
    var $locMarkup = $('.location[data-id="' + atmId + '"]');
    $locMarkup.css("background-color", "#defcf7");
    setTimeout(function () {
        smoothScrollToElement($locMarkup, 120);
    }, 500);
}

var updateLocationDetails = function (location) {
    var $template = '<div class="small-12 medium-6 xlarge-3 cell location" data-id=' + location.AtmId + '>';
    $template += '<div class="location-type">';
    $template += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
    $template += '<use xlink:href="#icon-marker" href="#icon-marker" />';
    $template += '</svg>';
    $template += '<h6>' + location.Institution + '</h6>';
    $template += '</div>';
    $template += '<p class="address">' + location.Address.StreetAddres + ', ' + location.Address.City + ', ' + location.Province + ' ' + location.Address.Postal + '</p>';
    $template += '<a href="https://maps.google.com?daddr=' + location.Latitude + ',' + location.Longitude + '" target="_blank" class="accent-text">Get directions</a >';
    $template += '<div class="location-features">';
    if (location.AcceptsDeposits) {
        $template += '<div class="feature-icon deposits">';
        $template += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
        $template += '<use xlink:href="#icon-deposits" href="#icon-deposits" />';
        $template += '</svg>';
        $template += '</div>';
    }
    if (location.DriveThru) {
        $template += '<div class="feature-icon drive-thru">';
        $template += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
        $template += '<use xlink:href="#icon-drive-thru" href="#icon-drive-thru" />';
        $template += '</svg>';
        $template += '</div>';
    }
    // This Data is not available yet, in Exchange Data service
    //if (location.AcceptsDeposits) {
    //    $template += '<div class="feature-icon accessible">';
    //    $template += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
    //    $template += '<use xlink:href="#icon-accessible" href="#icon-accessible" />';
    //    $template += '</svg>';
    //    $template += '</div>';
    //}
    if (location.PINChange) {
        $template += '<div class="feature-icon pin">';
        $template += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
        $template += '<use xlink:href="#icon-pin" href="#icon-pin" />';
        $template += '</svg>';
        $template += '</div>';
    }
    if (location.VoiceGuidance) {
        $template += '<div class="feature-icon voice">';
        $template += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
        $template += '<use xlink:href="#icon-voice" href="#icon-voice" />';
        $template += '</svg>';
        $template += '</div>';
    }
    $template += '</div>';
    $template += '</div>';

    $('div[data-location-results]').append($template);

};
/* ### SEARCH functionality - END ### */

// Smooth Scroll convenience function
var smoothScrollToElement = function (element, offset) {
    var $element = $(element);
    if ($element.length) {
        $('html, body').animate({
            scrollTop: $element.first().offset().top - (offset || 0)
        }, 500);
    }
};

/* ### Visibility functions - START ### */
var hideFeaturesAndLocations = function () {
    $('div.features').addClass("hide");
    $('div.locations').addClass("hide");
}

var showFeaturesAndLocations = function () {
    $('div.no-locations').addClass("hide");

    $('div.features').removeClass("hide");
    $('div.locations').removeClass("hide");
}

var displayCriticalMessage = function () {
    $('div.no-locations').removeClass("hide");
    hideFeaturesAndLocations();
}

var clearResults = function () {
    $('div[data-location-results]').empty();
}
/* ### Visibility functions - END ### */

var getQueryStringParameterByName = function (name) {
    var _url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(_url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}