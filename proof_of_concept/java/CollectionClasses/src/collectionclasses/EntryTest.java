package collectionclasses;

import java.io.FileReader;
import java.io.IOException;
/**
 * An example illustrating the use of the Comparator and
 * Comparable interfaces.
 *  The TreeSet is created using the Comparable interface
 *   (see class Entry and the compareTo) and sorts by last name
 *   ,then first name.
 *   
 *   The phoneList is sorted with the Collections.sort method
 *    passed the EntryComparator class (with the Comparator Interface).
 *    This sorts by first name, then last name.
 * @author ddalsveen
 */
import java.util.*;

public class EntryTest {

    private ArrayList<Entry> phoneList;
    private Scanner console;
    private String inFile;
    TreeSet<Entry> ts;

    /**
     * Default Constructor
     *
     */
    public EntryTest() {
        this.inFile = "c:/inphonefile.txt";

    }

    /**
     * A Constructor that takes an input file name.
     * @param inFile
     */
    public EntryTest(String inFile) {
        this.inFile = inFile;

    }

    /**
     * Print the lists.
     */
    public void printList() {
        System.out.println(" Sorted Phonelist using comparator: " + phoneList);
        System.out.println(" Sorted TreeSet using comparable: " + ts);
    }

    /**
     * Method buildList
     * Creates an instance of ArrayList.
     * Reads from an input file and populates the list with the data
     * from the file.
     */
    public void buildList() {

        phoneList = new ArrayList<Entry>();
        try {
            console = new Scanner(new FileReader(inFile));

            System.out.println("While reading from input..");
            while (console.hasNextLine()) {
                String s = console.nextLine();

                String[] sArray = s.split(" ");

                System.out.flush();
                Entry ent = new Entry(sArray[0], sArray[1], sArray[2], sArray[3]);
                phoneList.add(ent);
                System.out.println(s);
                System.out.flush();

            }
            System.out.println("\n\n\n");
        } catch (IOException e) {
            System.err.println(e);
        } finally {
            if (console != null) {
                console.close();
                // sort using the Comparator
                Collections.sort(phoneList, new EntryComparator());
                // sort using Comparable(defined in the Entry Class)
                ts = new TreeSet<Entry>(phoneList);
            }



        }
    }

    /**
     * @param args
     */
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        if (args.length == 1) {
            EntryTest test = new EntryTest(args[0]);

            test.buildList();
            test.printList();
        } else {// print usage
            System.out.println("java EntryTest inputfilename");
        }
    }
}
