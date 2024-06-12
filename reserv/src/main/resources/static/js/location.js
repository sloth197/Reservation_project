document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get("location");
    document.getElementById("location-title").textContent = location + "의 음식점";

    fetch("/api/places?location=${location}")
        .then(response => response.json())
        .then(data => {
            displayPlaces(data.documents);
        });

    /*
    카카오 맵을 이용한 음식점 위치 검색
    Kakao.init("bafce1a91ffcd9118ec0e1d7b47e8119"); //Insert Kakao App key & API 초기화
    const mapContainer = document.getElementById("map");
    const mapOption = {
        center: new kakao.maps.LatLng(37.566535, 126.97796919999996), //초기 좌표 값 ->  바꿀 것
        level: 4 //확대 수준
    };
    */

    const map = new kakao.maps.Map(mapContainer, mapOption);
    const places = new kakao.maps.services.Places();
    places.keywordSearch(location + "음식점", placesSearchCB);

    function placesSearchCB(data, status, page) {
        if(status === kakao.maps.services.Status.OK) {
            displayPlaces(data);
        }
    }

    function displayPlaces(places) {
        const listEl = document.getElementById("places-list");
        listEl.innerHTML = "";

        places.forEach(place => {
            const itemEl = document.createElement("div");
            itemEl.className = "place-item";
            listEl.innerHTML = '<h3>${place.place_name}</h3></br><p>${place.place_address}</p></br><p>${place.place_number}</p></br><p>${place.place_menu}</p>';
            listEl.appendChild(itemEl);

            const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.x, place.y)
            });
            itemEl.addEventListener("click", () => {
                showPlaceDetail(place);
            });
        });
    }
    function showPlaceDetail(place) {
        const detailEl = document.getElementById("places-detail");
        detailEl.style.display = "block";
        document.getElementById("place-name").innerText = place.place_name;
        document.getElementById("place-address").innerText = place.place_address;
        document.getElementById("place-number").innerText = place.place_number;
        document.getElementById("place-menu").innerText = place.place_menu;

        const moveLatLon = new kakao.maps.LatLng(place.x, place.y);
        map.setCenter(moveLatLon);
        map.setLevel(4);
    }
});



