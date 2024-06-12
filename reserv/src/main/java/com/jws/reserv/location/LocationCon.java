package com.jws.reserv.location;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LocationCon {
    
    @GetMapping("/location")
    public String getLocation(@RequestParam("location") String location, Model model) {
        model.addAttribute("location", location);
        return "location";
    }
}
