import javax.mail.*;
import javax.mail.internet.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;
import java.util.*;

@WebServlet("/forgot-password")
public class ForgotPassword extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String email = request.getParameter("email");
        String action = request.getParameter("action");

        if ("sendOtp".equals(action)) {
            sendOtp(email, response);
        } else if ("resetPassword".equals(action)) {
            String otp = request.getParameter("otp");
            String newPassword = request.getParameter("newPassword");
            resetPassword(email, otp, newPassword, response);
        }
    }

    private void sendOtp(String email, HttpServletResponse response) throws IOException {
        Connection conn = null;
        Statement stmt = null;
        try {
            conn = getConnection();
            stmt = conn.createStatement();
            String query = "SELECT * FROM users WHERE email = '" + email + "'";
            ResultSet rs = stmt.executeQuery(query);

            if (rs.next()) {
                String otp = generateOtp();
                String updateQuery = "UPDATE users SET otp = '" + otp + "' WHERE email = '" + email + "'";
                stmt.executeUpdate(updateQuery);

                sendEmail(email, otp);
                response.getWriter().write("OTP sent to your email!");
            } else {
                response.getWriter().write("Email not found.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            response.getWriter().write("An error occurred.");
        } finally {
            closeResources(stmt, conn);
        }
    }

    private void resetPassword(String email, String otp, String newPassword, HttpServletResponse response) throws IOException {
        Connection conn = null;
        Statement stmt = null;
        try {
            conn = getConnection();
            stmt = conn.createStatement();
            String query = "SELECT * FROM users WHERE email = '" + email + "' AND otp = '" + otp + "'";
            ResultSet rs = stmt.executeQuery(query);

            if (rs.next()) {
                String updateQuery = "UPDATE users SET password = '" + newPassword + "', otp = NULL WHERE email = '" + email + "'";
                stmt.executeUpdate(updateQuery);
                response.getWriter().write("Password updated successfully!");
            } else {
                response.getWriter().write("Invalid OTP.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            response.getWriter().write("An error occurred.");
        } finally {
            closeResources(stmt, conn);
        }
    }

    private void sendEmail(String to, String otp) {
        String from = "your-email@example.com";
        String host = "smtp.example.com"; 

        Properties properties = System.getProperties();
        properties.setProperty("mail.smtp.host", host);
        properties.setProperty("mail.smtp.port", "587"); 
        properties.setProperty("mail.smtp.auth", "true");
        properties.setProperty("mail.smtp.starttls.enable", "true");

        Session session = Session.getInstance(properties, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("your-email@example.com", "your-email-password"); 
            }
        });

        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setSubject("Your OTP Code");
            message.setText("Your OTP code is: " + otp);
            Transport.send(message);
        } catch (MessagingException mex) {
            mex.printStackTrace();
        }
    }

    private String generateOtp() {
        Random random = new Random();
        return String.format("%06d", random.nextInt(999999));
    }

    private Connection getConnection () throws SQLException {
        String url = "jdbc:mysql://localhost:3306/DCCHackathon"; 
        String user = "root"; 
        String password = "Root"; 
        return DriverManager.getConnection(url, user, password);
    }

    private void closeResources(Statement stmt, Connection conn) {
        try {
            if (stmt != null) stmt.close();
            if (conn != null) conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
