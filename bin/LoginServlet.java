// Importing required basic classes
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

// Importing classes from java.servlet package
// for connectivity of application class
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// Since userlogin is used in action="userlogin"
// form tag in jsp page
@WebServlet("/userlogin")

// Class 1
// Helper class extending HttpServlet main class
public class LoginServlet extends HttpServlet 
{

    // Method
    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
    throws ServletException, IOException 
    {

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        // Customly setting name and password
        String name = request.getParameter("name");
        String password = request.getParameter("password");
        ....
        // Further programming
        // Code can be appended here onward so
    }
}
