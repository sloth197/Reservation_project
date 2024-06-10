package com.jws.reserv.location;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LocationApi {
    
    private final LocationService locationService;
    public LocationApi(LocationService locationService) {
        this.locationService = locationService;
    }
    @GetMapping("/api/places")
    public String getPlaces(@RequestParam("location") String location) {
        return locationService.searchPlaces(location);
    }
}
