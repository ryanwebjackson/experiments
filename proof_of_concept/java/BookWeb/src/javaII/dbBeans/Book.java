package javaII.dbBeans;

import java.io.*;

/**
 * The book class represents the book data contained in a database or in a file
 * @author rjackson22
 */
public class Book {
    // Instance variables
    private String title;
    private String author;
    private String isbn;
    private String publisher;
    private String datePublished;
    private double price;

    // getters
    public String getAuthor() {
        return author;
    }

    public String getDatePublished() {
        return datePublished;
    }

    public String getIsbn() {
        return isbn;
    }

    public double getPrice() {
        return price;
    }

    public String getPublisher() {
        return publisher;
    }

    public String getTitle() {
        return title;
    }



    // No-arg constructor
    public Book() {

    }

    /**
     * Main constructor for Book
     * 
     * @param title
     * @param author
     * @param isbn
     * @param publisher
     * @param datePublished
     * @param price
     */
    public Book(String title, String author, String isbn, String publisher, String datePublished, double price) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publisher = publisher;
        this.datePublished = datePublished;
        this.price = price;
    }

    /**
     * Main entry point
     * @param args
     */
    public static void main(String[] args) throws FileNotFoundException, IOException {
        // Create book object from file data

        // Obtain data from file
        BufferedReader br = new BufferedReader(new FileReader("c:\bookData.txt"));
        // Read a line from data, assign to array
        String[] strArray = br.readLine().split(":"); // line is split using a delimiter

        // Instantiate Book object
        Book b = new Book(strArray[0],strArray[1],strArray[2],strArray[3],strArray[4],Double.parseDouble(strArray[5]));

        // Output book's title
        System.out.println(b.getTitle());
    }
}
