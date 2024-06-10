package com.jws.reserv.signup;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet
public class SignUpServlet extends HttpServlet{
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException {
        String id = request.getParameter("ID");
        String pw = request.getParameter("PW");
        String name = request.getParameter("name");
        String email = request.getParameter("email");

        response.getWriter().println("Success Sign-Up" + id + "," + name + "," + email);
    }
}
