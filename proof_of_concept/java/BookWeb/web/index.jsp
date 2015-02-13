<%-- 
    Document   : index
    Created on : Sep 28, 2010, 12:24:13 PM
    Author     : rjackson22

Landing page for the Book Web Application
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link type="text/css" rel="stylesheet" href="Styles.css" />
        <title>Book Web Application</title>
    </head>
    <body>
        <h1>Book Web Application</h1>
        <h2>Book Lookup</h2>
        <% javaII.dbBeans.BookHashBean dbBean =
                new javaII.dbBeans.BookHashBean(); %>
        <p><a href="BookLookUpServlet">Look up a book by clicking here</a>
        <% if(!dbBean.isPopulated()) {
            out.println("(Service currently unavailable.)");
        } %>
        </p>
    </body>
</html>
