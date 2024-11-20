import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

// UserScore class representing a user's score in the leaderboard
class UserScore {
    private String userId;
    private String name;
    private int score;
    private int projectCount;

    public UserScore(String userId, String name, int score, int projectCount) {
        this.userId = userId;
        this.name = name;
        this.score = score;
        this.projectCount = projectCount;
    }

    public String getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public int getScore() {
        return score;
    }

    public int getProjectCount() {
        return projectCount;
    }
}

// Task class representing a task in the to-do list
class Task {
    private int taskId;
    private String taskDescription;

    public Task(int taskId, String taskDescription) {
        this.taskId = taskId;
        this.taskDescription = taskDescription;
    }

    public int getTaskId() {
        return taskId;
    }

    public String getTaskDescription() {
        return taskDescription;
    }
}

@WebServlet("/student-dashboard")
public class Student extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // Database connection parameters
    private static final String DB_URL = "jdbc:mysql://localhost:3306/DCCHackathon";
    private static final String USER = "root";
    private static final String PASS = "Root";

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");

        // Fetch leaderboard data
        List<UserScore> leaderboard = fetchLeaderboard();
        List<Task> tasks = fetchTasks();

        // Write HTML response
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html>");
        out.println("<html lang=\"en\">");
        out.println("<head>");
        out.println("<meta charset=\"UTF-8\">");
        out.println("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
        out.println("<title>Student Dashboard</title>");
        out.println("<link rel=\"stylesheet\" href=\"student.css\">");
        out.println("<link rel=\"stylesheet\" href=\"todo.css\">");
        out.println("<link rel=\"stylesheet\" href=\"leaderboard.css\">");
        out.println("</head>");
        out.println("<body>");
        out.println("<div class=\"student\">");
        out.println("<div class=\"main-sect\">");
        out.println("<header>");
        out.println("<svg id=\"hamburger-menu\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 80\" width=\"40\" height=\"40\" fill=\"white\">");
        out.println("<rect width=\"100\" height=\"20\"></rect>");
        out.println("<rect y=\"30\" width=\"100\" height=\"20\"></rect>");
        out.println("<rect y=\"60\" width=\"100\" height=\"20\"></rect>");
        out.println("</svg>");
        out.println("<img src=\"./images/logo.png\" alt=\"Logo\" class=\"logo\">");
        out.println("</header>");
        out.println("<div id=\"backdrop\" class=\"backdrop hidden\"></div>");
        out.println("<div id=\"navbar\" class=\"sidenav\">");
        out.println("<ul>");
        out.println("<li><a href=\"homepage.html\">Home</a></li>");
        out.println("<li><a href=\"/\">Performance Matrix</a></li>");
        out.println("<li><a href=\"/\">Dashboard</a></li>");
        out.println("<li><a href=\"student.html\">Leaderboard</a></li>");
        out.println("<li><a href=\"student.html\">To-Do List </a></li>");
        out.println("</ul>");
        out.println("</div>");
        out.println("</div>");
        out.println("<section class=\"greeting-card\">");
        out.println("<h2>Good Morning!</h2>");
        out.println("<p>You've learned 75% of your goal this week! Keep it up and improve your results.</p>");
        out.println("</section>");
        out.println("<section class=\"todo\">");
        out.println("<h1>Sticky TO-DO Wall</h1>");
        out.println("<div id=\"task-container\" class=\"task-container\">");
        for (Task task : tasks) {
            out.println("<div>");
            out.println("<input type=\"checkbox\" id=\"" + task.getTaskId() + "\">");
            out.println("<label for=\"" + task.getTaskId() + "\">" + task.getTaskDescription() + "</label>");
            out.println("</div>");
        }
        out.println("</div>");
        out.println("</section>");
        out.println("<section class=\"leaderboard\">");
        out.println("<h1>Leaderboard</h1>");
        out.println("<table>");
        out.println("<tr><th>Name</th><th>Score</th><th>Projects</th></tr>");
        for (UserScore userScore : leaderboard) {
            out.println("<tr>");
            out.println("<td>" + userScore.getName() + "</td>");
            out.println("<td>" + userScore.getScore() + "</td>");
            out.println("<td>" + userScore.getProjectCount() + "</td>");
            out.println("</tr>");
        }
        out.println("</table>");
        out.println("</section>");
        out.println("</div>");
        out.println("</body>");
        out.println("</html>");
    }

    private List<UserScore> fetchLeaderboard() {
        List<UserScore> leaderboard = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT userId, name, score, projectCount FROM UserScore")) {
            while (rs.next()) {
                String userId = rs.getString("userId");
                String name = rs.getString("name");
                int score = rs.getInt("score");
                int projectCount = rs.getInt("projectCount");
                leaderboard.add(new UserScore(userId, name, score, projectCount));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return leaderboard;
    }

    private List<Task> fetchTasks() {
        List<Task> tasks = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT taskId, taskDescription FROM Task")) {
            while (rs.next()) {
                int taskId = rs.getInt("taskId");
                String taskDescription = rs.getString("taskDescription");
                tasks.add(new Task(taskId, taskDescription));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return tasks;
    }
}