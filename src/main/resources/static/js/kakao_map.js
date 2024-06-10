document.addEventListener("DOMContentLoaded", function() {
    // 카카오 지도 생성
    var mapContainer = document.getElementById('map');
    var mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 음식점 검색 함수
    window.searchRestaurants = function(location) {
        var places = new kakao.maps.services.Places();
        places.keywordSearch(location + ' 음식점', function(data, status, pagination) {
            var restaurantList = document.getElementById("restaurant-list");
            restaurantList.innerHTML = "";

            if (status === kakao.maps.services.Status.OK) {
                data.forEach(function(place) {
                    // 목록에 음식점 이름 추가
                    var li = document.createElement("li");
                    li.textContent = place.place_name;
                    restaurantList.appendChild(li);

                    // 지도에 마커 추가
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: new kakao.maps.LatLng(place.y, place.x)
                    });

                    // 마커에 클릭 이벤트 추가
                    kakao.maps.event.addListener(marker, 'click', function() {
                        alert(place.place_name);
                    });
                });

                // 지도 중심을 검색된 첫 번째 결과로 이동
                map.setCenter(new kakao.maps.LatLng(data[0].y, data[0].x));
            } else {
                var li = document.createElement("li");
                li.textContent = "No restaurants found.";
                restaurantList.appendChild(li);
            }
        });
    }
});
