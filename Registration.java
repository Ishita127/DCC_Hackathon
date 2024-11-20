import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/Registration")
public class Registration extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        PrintWriter out = response.getWriter();
        
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String userRole = request.getParameter("RegisterAs").toLowerCase();;
        String password = request.getParameter("password");
        String confirmPassword = request.getParameter("confirmPassword");

        
        out.println(firstName);
        out.println(lastName);
        out.println(email);
        out.println(userRole);
        out.println(password);
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql:///DCCHackathon?useSSL=false","root","Root");
            Statement st = con.createStatement();
            String query = "INSERT INTO registration (firstName, lastName, email, registeras, password, confirmPassword) "   + "VALUES ('" + firstName + "', '" + lastName + "', '" + email + "', '" + userRole + "', '" + password + "', '" + confirmPassword + "')";
            st.executeUpdate(query);
            //out.println("<h3>Registration Successful!</h3>");
            
            response.sendRedirect("login.html");
            con.close();
        } catch (Exception e) {
            out.println(e);
        }
    }
}
