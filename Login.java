package HarshitaBackend;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/Login")
public class Login extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        PrintWriter out = response.getWriter();
        
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql:///DCCHackathon?useSSL=false","root","Root");
            Statement st = con.createStatement();
            String query = "SELECT * FROM registration WHERE email = '" + email + "' AND password = '" + password + "'";
            ResultSet rs = st.executeQuery(query);
            
            if(rs.next())
                out.println("<h3>Login Successful!</h3>");
            //response.sendRedirect("Home.jsp");
            else 
                out.println("User not found");
            con.close();
        } catch (Exception e) {
            out.println(e);
        }
    }
}