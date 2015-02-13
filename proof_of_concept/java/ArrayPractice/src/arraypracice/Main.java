package arraypracice;

import java.util.*;

/**
 * ArrayPractice program
 * practice creating, sorting, searching array
 * @author rjackson22
 */
public class Main {
    // Declare constants
    public static final int SZ = 5;

    /**
     * Display method - to view contents of array
     */
    public static void display(String message, int[] array) {
        System.out.println(message);
        for(int i = 0;i < array.length;i++) {
            System.out.println(array[i]);
        }
//        for(int val: array) {  // Same as above code, Java only
//            System.out.println(val);
//        }
    }

    /**
     * Checks the array for any duplicate values
     * @param array
     * @return
     */
    public static boolean checkDuplicates(int [] array) {
    for(int i=0;i<array.length-1;i++) {
                    for(int j=i+1;j<array.length;j++) {
                            if(array[i]==array[j]) {
                                    return true;
                            }
                    }
            }
            return false;
    }
    
    /**
     *
     */
    public static void numberArray(int [] array) {
        for(int i = 0;i < array.length;i++) {
            array[i]=i;
        }
    }


    /**
     * The main entry point for the ArrayPractice program
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // Create an array of type int
        int[] myScores = new int[SZ];
        // Create a variable to hold copy of myScores
        int[] scoresCopy = new int[SZ];
        // Displays array using 'display' method
        display("Original array",myScores);
        // Uses fill function to fill array with SZ value
        Arrays.fill(myScores,SZ);
        display("Filled array",myScores);
        // Change values
        myScores[2] = 6;
        myScores[4] = 3;
        display("Changed array",myScores);
        // Assign a deep copy of myScores to scoresCopy
        scoresCopy = Arrays.copyOf(myScores,SZ);
        // Sort array
        Arrays.sort(myScores); // integers have a natural sorting order
        display("Sorted array",myScores);
        display("Copy (deep) of Changed array",scoresCopy);
        // Utilize binarySearch method
        int index = Arrays.binarySearch(myScores, SZ);
        System.out.println(SZ + " found at element " + index);
        System.out.println("Check duplicates:"+checkDuplicates(myScores));
        numberArray(scoresCopy);
        display("Numbered array:",scoresCopy);
        System.out.println("Check duplicates in scoresCopy:"+checkDuplicates(scoresCopy));

        
    }

}
