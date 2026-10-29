package com.sample.demo;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/details")
public class BasicDetailsServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html;charset=UTF-8");

        PrintWriter out = response.getWriter();

        out.println("<html>");
        out.println("<head><title>My Details</title></head>");
        out.println("<body>");
        out.println("<h1>My Basic Details</h1>");
        out.println("<p>Name: Dheenadhayalan</p>");
        out.println("<p>Contact: YOUR_CONTACT_NUMBER</p>");
        out.println("<p>Email: YOUR_EMAIL</p>");
        out.println("</body>");
        out.println("</html>");
    }
}