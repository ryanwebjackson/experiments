package javaII.dbBeans;

import java.util.*;
import java.io.*;

/**
 * Specification:
 * Create a Java Class called BookHashBean that contains a (non-static) HashMap of Book Objects called bookHash.
 * The Java Class should be placed in the javaII.dbBeans package. Populate the bookHash from a file containing a list of books.
 * This HashMap should be populated when the default constructor of the BookHashBean is called.
 * The file can have a format of your choosing, but each Book should contain the following data: ISBN, title, author, publisher, date published, and price.
 * You should have a reference variable for title in the BookHashBean Class. You should also have a (public) setter for title.
 * A getter called getTitleList should return a new iterator based upon the set of keys from the HashMap.
 * The key for the HashMap should be the title of the book. You should also have a reference variable for a Book Object.
 * When the getter for book is called (getBook()), you should return a Book from the HashMap based on the current value of title.
 * Implicit in this specification is the need for a Book Class.
 * This Book Class should also be in the javaII.dbBeans  package, and contain reference variables for ISBN, title, author, publisher, date published, and price.
 * One constructor of the Book class should take all of its attributes as arguments. The default constructor should assign the Book's attributes with default values.
 * @author rjackson22
 */
public class BookHashBean {
    // Initialize variables, constants

    private Map<String, Book> bookHash = null;
    private String title = "";
    private Iterator<String> titleIterator = null;
    private Book book = null;
    private final String FILEPATH = "C:/bookData.txt";
    private boolean populated = true; // assume the Bean will be populated, until we know it can't be

    // getters and setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
//        if (bookHash.containsKey(title)) {
//            book = bookHash.get(title);
//        }
//        else {
//            book = new Book(); // create a default book
//        }
    }

    public Iterator<String> getTitleList() {
        titleIterator = bookHash.keySet().iterator();
        return titleIterator;
    }

    public Book getBook() {
        return bookHash.get(getTitle());
    }

    // getter for populated property
    public boolean isPopulated() {
        return populated;
    }

    // Populate HashMap bookHash
    public void populateHashMap() {
        // Instantiate HashMap
        bookHash = new HashMap<String, Book>();

        // try to read input file data, and put it into the HashMap
        try {
            // Obtain data from file
            BufferedReader br = new BufferedReader(new FileReader(FILEPATH));
            // while BufferedReader has data to read, do the following
            while (br.ready()) {
                // Read a line from data, assign to array
                String[] strArray = br.readLine().split(":"); // line is split using a delimiter

                // Instantiate Book objects from input data, put into HashMap
                bookHash.put(strArray[0], new Book(strArray[0], strArray[1], strArray[2], strArray[3], strArray[4], Double.parseDouble(strArray[5])));
            }
        }
        // Catch unhandled exceptions
        catch (FileNotFoundException e) {
            e.printStackTrace();
            this.populated = false;
        } catch (IOException e) {
            e.printStackTrace();
            this.populated = false;
        }

    }

    /**
     * Default constructor for BookHashBean
     */
    public BookHashBean() {
        populateHashMap();
    }

    // test bean
    public static void main(String[] args) {
        BookHashBean b = new BookHashBean();
        Iterator it = b.getTitleList();
        // output hashmap using Iterator
        while (it.hasNext()) {
              System.out.println(it.next());
        }
        
        String title = new Scanner(System.in).nextLine();
        b.setTitle(title);
        System.out.println(b.getBook());
    }
} // end class BookHashBean

