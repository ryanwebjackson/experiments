package collectionclasses;


/**
 * @author ddalsveen
 * A phone book entry.
 */
public class Entry implements Comparable<Entry> {

    private String lastName;
    private String firstName;
    private String homeNumber;
    private String cellNumber;

    public Entry() {
    }

    public Entry(String lastName, String firstName, String homeNumber, String cellNumber) {
        super();
        // TODO Auto-generated constructor stub
        this.lastName = lastName;
        this.firstName = firstName;
        this.homeNumber = homeNumber;
        this.cellNumber = cellNumber;
    }

    /**
     * @return
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * @param firstName
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * @return
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * @param lastName
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * @return
     */
    public String getCellNumber() {
        return cellNumber;
    }

    /**
     * @param cellNumber
     */
    public void setCellNumber(String cellNumber) {
        this.cellNumber = cellNumber;
    }

    /**
     * @return
     */
    public String getHomeNumber() {
        return homeNumber;
    }

    /**
     * @param homeNumber
     */
    public void setHomeNumber(String homeNumber) {
        this.homeNumber = homeNumber;
    }

    /**
     * CompareTo is called for every sort..
     * We must implement this method if we are implementing the Comparable
     * Interface.
     * @param entry
     * @return
     */
    public int compareTo(Entry entry) {
        //Entry entry = (Entry) o;
        int compareValue = 0;
        compareValue = lastName.compareTo(entry.lastName);
        // lastname is the same, check first name
        if (compareValue == 0) {
            compareValue = firstName.compareTo(entry.firstName);
        }

        return compareValue;
    }

    @Override
    public String toString() {
        return "LastName : " + lastName + " FirstName : " + firstName
                + " Home Phone: " + homeNumber + " Cell: " + cellNumber + " \n ";
    }
}
