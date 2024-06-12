package com.jws.reserv.location;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class LocationService {
    @Value("${kakao.api.key}")
    private String kakaoApiKey;

    public String searchPlaces(String location) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://dapi.kakao.com/v2/local/search/keyword.json?query=" + location + "음식점";
        
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "KakaoAK" + kakaoApiKey);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        return response.getBody();
        
    }
}
