import java.io.*;
import java.sql.*;
import java.util.logging.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

//
//@WebServlet("/leaderboardinput")
public class leaderboardinput extends HttpServlet {

    
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
          
            
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet java</title>");            
            out.println("</head>");
            out.println("<body>");
          
       
            String userid =request.getParameter("userid");
            String userName = request.getParameter("userName");
            int score = Integer.parseInt(request.getParameter("score"));
            int projectno = Integer.parseInt(request.getParameter("projectno"));
            
               out.println(userid);
               out.println(score);
          Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/DCCHackathon","root","Root");
               //?useSSL=false
               //out.println("krde");
           Statement st = con.createStatement();
            String s = "INSERT INTO leaderboard (userid, userName, score, projectno)VALUES('"+userid+"', '"+userName+"', '"+score+"', '"+projectno+"');";
           // 
               out.println("data not saved successfully");
          
            st.executeUpdate(s);
            
            out.println("data saved successfully");
            response.sendRedirect("leaderboardshow");
            con.close();
            out.println("</body>");
            out.println("</html>");
            
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(leaderboardinput.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(leaderboardinput.class.getName()).log(Level.SEVERE, null, ex);
        }
    }}