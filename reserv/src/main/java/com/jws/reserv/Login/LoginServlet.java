package com.jws.reserv.Login;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet
public class LoginServlet extends HttpServlet{
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException {
        String id = request.getParameter("ID");
        String pw = request.getParameter("PW");

        if("user".equals(id) && "pass".equals(pw)) {
            response.getWriter().println("Success Login");
        }else {
            response.getWriter().println("Fail Login");
        }
    }
}
