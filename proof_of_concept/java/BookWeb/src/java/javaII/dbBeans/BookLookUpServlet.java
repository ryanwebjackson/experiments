package javaII.dbBeans;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Instantiate the  BookHashBean you created earlier in the provided firstServlet.java.
 * Print the contents of the titles from the HashMap to the web page using the
 * 'out' reference variable of type PrintWriter.
 * You do not need to put in in a particular format for now, unless you'd like to.
 * Do not forget to comment your code.
 * @author rjackson22
 */
public class BookLookUpServlet extends HttpServlet {

    // reference variable for a BookHashBean
    private javaII.dbBeans.BookHashBean dbBean = null;
    
    // This method is only called once, when servlet is loaded
    @Override
    public void init() {
        dbBean = new javaII.dbBeans.BookHashBean();
    }

    /**
     *  Handles HTTP GET requests.
     *
     *@param  request               the HttpServletRequest object
     *@param  response              the HttpServletResponse object
     *@exception  ServletException  if there is a Servlet failure
     *@exception  IOException       if there is an IO failure
     */
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Create a db bean if doesn't already exist!
        synchronized (this) {
        // synchronized single threads this code
            if (dbBean == null) {
                dbBean = new javaII.dbBeans.BookHashBean();
            }
        }

        response.setContentType("text/html");
        // set the response type before sending data
        PrintWriter out = response.getWriter();
        // Begin writing html as the reponse
        out.write("<!-- Displays a form that gets its content from a java Bean     -->\r\n");
        out.write("\r\n");
        out.write("\r\n");
        out.write("\r\n");
        out.write("\r\n");
        out.write("<!-- begin document -->\r\n");
        out.write("<html>\r\n");
        out.write("\r\n");
        out.write("   <!-- specify html head element -->\r\n");
        out.write("   <head>\r\n");
        out.write("<link type=\"text/css\" rel=\"stylesheet\" href=\"Styles.css\" />");
        out.write("      <title>Book Web Application - Lookup</title>\r\n");
        out.write("   </head>\r\n");
        out.write("\r\n");
        out.write("   <!-- specify html body element -->\r\n");
        out.write("   <body>\r\n");
        out.write("      <h1><a href=\"index.jsp\" id=\"logo\">Book Web Application</a></h1>\r\n");
        // We only want to execute the following code if
        // the BookHashBean has been populated
        if(dbBean.isPopulated()) {
            out.write("\r\n");
            out.write("      <h2>Book Lookup</h2>\r\n");
            out.write("      <!-- create form -->\r\n");
            out.write("      <form method = \"post\" action = \"BookData\">\r\n");
            out.write("\t\r\n");
            out.write("         <p>Select a name from the list and click\r\n");
            out.write("            the Get Book button</p>\r\n");
            out.write("\r\n");
            out.write("         <!-- create list that contains titles -->\r\n");
            out.write("         <select name = \"titleName\">\r\n");
            out.write("\r\n");
            out.write("            ");
            out.write("\r\n");
            out.write("\t   ");
            out.write(" \r\n");
            out.write("\r\n");
            out.write("            ");

            // Create an iterator to get a list of titles(keys of the hashmap)
            java.util.Iterator it = dbBean.getTitleList();

            while (it.hasNext()) {
                // Obtain titles from iterator and assign to local variable
                String currentName = (String) it.next();
                // output HTML for select list options
                out.write(' ');
                out.write(' ');
                out.write("\r\n");
                out.write("                ");
                out.write("\r\n");
                out.write("\r\n");
                out.write("                     <option>");
                out.print(currentName);
                out.write("</option>\r\n");
                out.write("\r\n");
                out.write("            ");

            } // end while "iterator has more contents"
            out.write("\r\n");
            out.write("\r\n");
            out.write("         </select>\r\n");
            out.write("\r\n");
            out.write("         <!-- create View Information button -->\r\n");
            out.write("         <p><input type = \"submit\" value = \"Get Book\"></p>\r\n");
            out.write("      </form>\r\n");
            out.write("\r\n");
        } // end if "dbBean is populated"
        else {
            out.write("<h2>Lookup service currently unavailable.</h2>");
            out.write("<p><a href=\"index.jsp\">Click here to return to the home page</a></p>");
        }
        out.write("   </body>\r\n");
        out.write("</html>\r\n");
        out.write("\r\n");
        out.write("      \r\n");
    } // end doGet

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // execute the same code as doGet method
        doGet(request, response);
    }
}
