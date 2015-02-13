package javaII.dbBeans;

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

    // Getters
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

    // Setters
    public void setAuthor(String author) {
        this.author = author;
    }

    public void setDatePublished(String datePublished) {
        this.datePublished = datePublished;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    // Override toString method
    @Override
    public String toString (){
            return ("Title: " + this.title + "\nAuthor: " + this.author + " \nISBN: " +
                    this.isbn + " \nPublisher: " + this.publisher +
                    " \nPublishing Date: " + this.datePublished + " \nPrice: $" + this.price);
    }


    // No-arg constructor
    public Book() {
        this.title = "Title";
        this.author = "Author";
        this.isbn = "ISBN";
        this.publisher = "Publisher";
        this.datePublished = "Date Published";
        this.price = 0.00;
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


}
