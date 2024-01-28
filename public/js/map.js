//Query to get data from mySQL via dbreceiver.php
let lmao;
let arrayPlacemark = [];

function getPlacemarks() {
    $.ajax({
        url: "php/dbreceiver.php",
        type: "GET",
        data: { "lmao": lmao },
        success: function (response) {
            let result = $.parseJSON(response);
            arrayPlacemark = Object.values(result);
        },
        error: function (response) {
        }
    });
}

getPlacemarks();

let map;
let center = [53.904269742126004, 27.566869389465666];
let hintLayout;

let coords = [];
let GeoObjects = [];
let Clusterer;

let oneCall = 1;
let dynamicCoords = [];
let geoPlacemark;
let dynamicPlacemark;
let form = document.querySelector('.form');
let cancelButton = document.querySelector('.form__button_cancel');
let geoLocationButton = document.querySelector('.attention__button');
let mapAttention = document.querySelector('.map__attention');
let mapView = document.querySelector('.map__view');


function init() {
    //Creation of the map

    map = new ymaps.Map('map', {
        center: center,
        zoom: 12,
    }, {
        searchControlProvider: 'yandex#search',
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');

    function stylizeHint() {
        hintLayout = ymaps.templateLayoutFactory.createClass("<div class='my_hint'>" +
            "<em>{{ properties.object }}</em>" +
            "</div>", {
            getShape: function () {
                var el = this.getElement(),
                    result = null;
                if (el) {
                    var firstChild = el.firstChild;
                    result = new ymaps.shape.Rectangle(
                        new ymaps.geometry.pixel.Rectangle([
                            [0, 0],
                            [firstChild.offsetWidth, firstChild.offsetHeight]
                        ])
                    );
                };
                return result;
            }
        });
    };

    //Creation of cluster for placemarks

    function cluster() {
        GeoObjects = [];

        Clusterer = new ymaps.Clusterer({
            preset: 'islands#invertedGreenClusterIcons',
            groupByCoordinates: false,
            gridSize: 128,
        });

        Clusterer.add(GeoObjects);
        map.geoObjects.add(Clusterer);
    };

    //Outputting placemarks on the map

    function dbPlacemarks() {
        for (let i = 0; i < (arrayPlacemark.length); i++) {
            let lat = arrayPlacemark[i][2];
            let lon = arrayPlacemark[i][3];

            arrayPlacemark[i][1] = new ymaps.Placemark([lat, lon], {
                object: arrayPlacemark[i][4]
            }, {
                preset: 'islands#greenDotIconWithCaption',
                hintLayout: hintLayout,
                openHintOnHover: true
            });

            GeoObjects.push(arrayPlacemark[i][1]);
            Clusterer.add(GeoObjects);
            map.geoObjects.add(Clusterer);
        }
    };

    //Creation of a placemark on user coords/geolocation

    function getCoords() {
        let geolocation = ymaps.geolocation;

        geoLocationButton.onclick = function () {
            if (oneCall == 1) {
                geolocation.get({
                    provider: 'yandex',
                }).then(function (result) {
                    dynamicCoords = result.geoObjects.position;

                    map.setZoom(16, {
                        smooth: true
                    });
                    map.panTo(result.geoObjects.position, {
                        flying: true,
                    });

                    geoPlacemark = new ymaps.Placemark([result.geoObjects.position[0], result.geoObjects.position[1]], {
                    }, {
                        preset: 'islands#blueDotIconWithCaption',
                        openHintOnHover: false,
                        openEmptyBalloon: false
                    });

                    map.geoObjects.add(geoPlacemark);
                });

                form.classList.add('_active');
                mapAttention.classList.add('_hidden');
                oneCall++;
            }
            else if (oneCall != 1) {
                alert("No marks for u");
            }
        }

        map.events.add('click', function (item) {
            dynamicCoords = item.get('coords');

            map.setZoom(16, {
                smooth: true
            });
            map.panTo(dynamicCoords, {
                flying: true,
            });

            if (oneCall == 1) {
                dynamicPlacemark = new ymaps.Placemark([dynamicCoords[0], dynamicCoords[1]], {
                }, {
                    preset: 'islands#redDotIconWithCaption',
                    openHintOnHover: false,
                    openEmptyBalloon: false
                });

                map.geoObjects.add(dynamicPlacemark);

                form.classList.add('_active');
                mapAttention.classList.add('_hidden');
                if (mapView.classList.contains('_active')) {
                    mapView.classList.remove('_active');
                }
                oneCall++;
            }
            else if (oneCall != 1) {
                alert("No marks for u");
            }
        });

        cancelButton.onclick = function () {
            form.classList.remove('_active');
            map.geoObjects.remove(geoPlacemark);
            map.geoObjects.remove(dynamicPlacemark);
            oneCall--;
        }

    };

    function mapEvents() {
        Clusterer.events
            .add(['mouseenter', 'mouseleave', 'click', 'balloonclose'], function (e) {
                let target = e.get('target'),
                    type = e.get('type');
                if (typeof target.getGeoObjects != 'undefined') {
                    if (type == 'mouseenter') {
                        target.options.set('preset', 'islands#invertedOrangeClusterIcons');
                    } else if (type == 'mouseleave') {
                        target.options.set('preset', 'islands#invertedGreenClusterIcons');
                    }
                } else {
                    if (type == 'mouseenter') {
                        target.options.set('preset', 'islands#orangeDotIconWithCaption');
                    } else if (type == 'mouseleave') {
                        target.options.set('preset', 'islands#greenDotIconWithCaption');
                    } else if (type == 'click') {
                        let clickedPlacemarkCoords = target.geometry._bounds[0][0];
                        for (let i = 0; i < (arrayPlacemark.length); i++) {
                            if (arrayPlacemark[i].indexOf(clickedPlacemarkCoords) !== -1){
                                document.querySelector('.view__title').innerHTML = `${arrayPlacemark[i][4]}`;
                                document.querySelector('.view__subtitle').innerHTML = `${arrayPlacemark[i][5]}`;
                                document.querySelector('.view__image').style.backgroundImage = `url('${arrayPlacemark[i][6]}')`;
                                break
                            }
                        }

                        target.options.set('preset', 'islands#orangeDotIconWithCaption');

                        let tempArr = [];
                        tempArr[0] = Number(target.geometry._coordinates[0]);
                        tempArr[1] = Number(target.geometry._coordinates[1]);
                        
                        map.setZoom(13, {
                            smooth: true
                        });

                        map.panTo(tempArr, {
                            flying: true,
                        });

                        mapView.classList.add('_active');
                        mapAttention.classList.add('_hidden');

                        if (oneCall != 1) {
                            form.classList.remove('_active');
                            map.geoObjects.remove(geoPlacemark);
                            map.geoObjects.remove(dynamicPlacemark);
                            oneCall--;
                        }
                    } else if (type == 'balloonclose') {
                        target.options.set('preset', 'islands#greenDotIconWithCaption');
                    };
                };
            });
    };

    stylizeHint();
    cluster();
    dbPlacemarks();
    getCoords();
    mapEvents();
};

let imgForm = document.getElementById('formImage');
let reader = [];
let imgUrl;

//Getting image url

imgForm.addEventListener('change', imgToUrl);
function imgToUrl() {
    reader[0] = new FileReader();
    reader[0].readAsDataURL(this.files[0]);
    (() => {
        reader[0].onload = (e) => {
            imgUrl = e.target.result;
        }
    })()
}

let submitButton = document.querySelector(".form__button_submit");

//Sending user's placemark to mySQL via dbsender.php

submitButton.onclick = function () {
    $.ajax({
        url: "php/dbsender.php",
        type: "POST",
        dataType: "html",
        data: {
            "hintHTML": document.querySelector('.form__name').value,
            "balloonTextHTML": document.querySelector('.form__about').value,
            "balloonImgHTML": imgUrl,
            "coordsLat": dynamicCoords[0],
            "coordsLon": dynamicCoords[1],
        },
        success: function (response) {
        },
        error: function (response) {
        }
    });
}

ymaps.ready(init);