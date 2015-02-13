package javaII.dbBeans;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * BookData retrieves the Book from the BookHashBean
 * based on the provided titleName.  The titleName
 * comes from the request parameter sent from the BookLookUpServlet
 * @author rjackson22
 */
public class BookData extends HttpServlet {
    // Create a reference variable for the BookHashBean
    BookHashBean dbBean;
    // Create a constant for image file path
    private static final String AMAZON_IMG_PATH = "N:\\NetBeansProjects\\BookWebP1\\img\\Amazon-logo-small2.jpg";
   
    /** 
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        // Create a new BookHashBean if not exists
        synchronized(this) {
            if(dbBean == null) {
                dbBean = new BookHashBean();
            }
        }

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            // output the book information page here:
            out.println("<html>");
            out.println("<head>");
            out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"Styles.css\" />");
            out.println("<title>Book Web Application - Book Details Page</title>");
            out.println("</head>");
            out.println("<body>");
//            out.println("<p style=\"color:blue;\">Servlet BookData at " + request.getContextPath () + "</p>"); //debug
            out.println("<h1><a href=\"index.jsp\" id=\"logo\">Book Web Application</a></h1>");
            // Check if BookHashBean is populated
            if(dbBean.isPopulated()) {
                // Check that the user came from the Book Lookup page
                if(request.getParameter("titleName") != null) {
                    // Obtain book's title from BookLookUpServlet
                    String title = request.getParameter("titleName");
                    // Output title
                    out.println("<p style=\"font-weight:bold;\">Title: " + title + "</p>");
                    // Obtain corresponding data from the BookHashBean
                    dbBean.setTitle(title); // sets the title in the created BookHashBean
                    // Create local variables
                    Book b = dbBean.getBook();
                    // Output book data
                    out.println("<ul>");
                    out.println("<li>Author: " + b.getAuthor() + "</li>");
                    out.println("<li>ISBN: " + b.getIsbn() + "</li>");
                    out.println("<li>Publisher: " + b.getPublisher() + "</li>");
                    out.println("<li>Date Published: " + b.getDatePublished() + "</li>");
                    out.println("<li>Suggested Retail Price: " +
                            b.getPrice() + "</li>");
                    out.println("</ul>");
                    // link to search Amazon for book
                    try {
                        // Try to URL encode book's title
                        out.println("<a href=\"http://www.amazon.com/s/ref=nb_sb_ss_i_0_11?url=search-alias%3Dstripbooks&field-keywords="
                            + URLEncoder.encode(title, "UTF-8") + "&x=0&y=0&sprefix="
                            + URLEncoder.encode(title, "UTF-8") + "\">");
                    }
                    catch (UnsupportedEncodingException ex) {
                        // UTF-8 was not found on user's browser,
                        // output an error message on the server,
                        // and link without URL encoding book title
                        System.err.println("UTF-8 was not found on user's browser-"
                                + " attempting link without URL encoding book title");
                        out.println("<a href=\"http://www.amazon.com/s/ref=nb_sb_ss_i_0_11?url=search-alias%3Dstripbooks&field-keywords="
                            + title + "&x=0&y=0&sprefix="
                            + title + "\">");
                    }
                    finally {
                        out.println("<img src=\"" + AMAZON_IMG_PATH + "\" alt=\"amzon logo\" /></a>");
                    }
                } // end if "request.getParameter("titleName") != null"
                else {
                    out.println("<p>Please go to the <a href=\"BookLookUpServlet\">"
                            + "Book Look-Up page</a> to look up a book.</p>");
                }
            }
            else {
                out.write("<h2>Lookup service currently unavailable.</h2>");
                out.write("<p><a href=\"index.jsp\">Click here to return to the home page</a></p>");
            }
            out.println("</body>");
            out.println("</html>");
        } // end try
        finally {
            out.close();
        }
    } // end processRequest

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /** 
     * Handles the HTTP <code>GET</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    } 

    /** 
     * Handles the HTTP <code>POST</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    }

    /** 
     * Returns a short description of the servlet.
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
