
import java.io.*;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/LeaderboardShow")
public class LeaderboardShow extends HttpServlet {
    Connection con = null;
    Statement stmt = null;
    ResultSet rs = null;

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        response.setContentType("text/html;charset=UTF-8");
        try {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Leaderboard</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Leaderboard</h1>");
            List<String> leaderboardEntries = new ArrayList<>();
            
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/DCCHackathon", "root", "Root");
            stmt = con.createStatement();
            rs = stmt.executeQuery("SELECT * FROM leaderboard");

            while (rs.next()) {
                String entry = "ID: " + rs.getInt("userid") +
                               ", Name: " + rs.getString("userName") +
                               ", Score: " + rs.getInt("score") +
                               ", Project: " + rs.getInt("projectno");
                leaderboardEntries.add(entry);
            }

            for (String entry : leaderboardEntries) {
                out.println("<p>" + entry + "</p>");
            }
            out.println("</body>");
            out.println("</html>");
        } catch (Exception ex) {
            out.println(ex);
        } finally {
            // Close resources in the finally block to ensure they are closed even if an exception occurs
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (con != null) con.close();
            } catch (SQLException ex) {
            out.println(ex);
            }
        }
    }
}
