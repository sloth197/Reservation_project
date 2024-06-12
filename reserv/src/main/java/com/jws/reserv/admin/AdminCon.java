package com.jws.reserv.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminCon {
    @GetMapping("/admin/login")
    public String showAdminLoginPage() {
        return "admin-login";
    }
    @GetMapping("/admin/dashboard")
    public String showAdminDashboard() {
        return "admin-dashboard";
    }
    
}
