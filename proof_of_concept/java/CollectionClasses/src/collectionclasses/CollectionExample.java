package collectionclasses;


import java.util.*;
import java.io.*;

/**
 * @author ddalsveen
 * An example of Collections; ArrayLists and HashSets
 */
public class CollectionExample {
    // private instance variables
    private Scanner console; // Scanner is in java.util package
    private PrintWriter pw; // PrintWriter is in java.io package
    private List<String> list; // A list is an ordered collection
    // Why would you want to use a set?  To get rid of duplicates.
    private Set<String> set; // A set is a collection in which no duplicates are allowed.
    private Map<String, String> map; // A map is not a subset of the collection interface.
    // this map's keys are of type String and the values are of type String

    /**
     * Method buildList
     * Creates an instance of ArrayList.
     * Reads from an input file and populates the list with the data
     * from the file.
     */
    public void buildList() {
        list = new ArrayList<String>(); // Do NOT instantiate UNTIL you are going to use it!
                                        // ArrayList is a subclass of List, it is conventional
                                        // to instantiate objects this way in Java
        try {
            console = new Scanner(new FileReader("c:/infile.txt"));
            pw = new PrintWriter(new FileWriter("c:/outfile.txt"));
            System.out.println("While reading from input..");
            while (console.hasNextLine()) { // while there is data in the file
                String s = console.nextLine(); // get entire line as a string
                list.add(s);
                System.out.println(s); // printing to standard output
                System.out.flush();

            }
            System.out.println("\n\n\n");
        } catch (IOException e) {
            e.printStackTrace();
            System.exit(0);
        } finally {

            console.close();
            pw.close();


        }
    }

    /**
     * Print the list of items to standard output.
     */
    public void printStringList() {

        System.out.println(list); // toString of List allows this


    }

    /**
     * method RemoveDuplicates
     * 	Removes duplicates from a collection and stores
     * 	the result to a file.
     *  Uses a HashSet implementation to remove the duplicates
     *  from the (Array)list.
     *
     */
    public void removeDuplicates() {
        set = new HashSet<String>(list); // HashSet is a subclass of Set
                                         // by assigning our ArrayList to a HashSet
                                         // duplicates are removed

        Iterator<String> it = set.iterator(); //Get the iterator from the set!

        try { // try to copy the data to the output file
            pw = new PrintWriter(new FileWriter("unique.txt"));
            while (it.hasNext()) {
                String s = it.next();
                pw.println(s);
                System.out.println(s);
                System.out.flush();

            }
        } catch (IOException e) { // if an IOException is thrown, print the stack
                                  // trace and exit the program
            e.printStackTrace();
            System.exit(0);
        } finally { // no matter what, close the PrinterWriter

            pw.close();


        } // End finally


    } // End removeDuplicates

    /**
     * Sort the list
     */
    public void sortList() {
        Collections.sort(list);
    }

    /**
     * Create an instance of CollectionExample and call its methods..
     * The main method is in the static domain - This is beautiful
     * @param args (Unused)
     */
    public static void main(String[] args) {
        // instantiate the Object instance of this class
        CollectionExample example = new CollectionExample();
        example.buildList(); // call the method to create the list
        example.printStringList(); // print the list
        example.removeDuplicates(); // remove duplicates from the list
        example.sortList();

    }
}
