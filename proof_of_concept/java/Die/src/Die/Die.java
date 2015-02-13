package Die;

import javax.swing.*;
import java.util.*;

/**
 * Assignment: Die Assignment:Due week5
 * Date Last Modified: 30 March 2010
 * @author Ryan W. Jackson
 */
public class Die {
    // Declare variables
    private int value;
    final int HIGHEST_DIE_VALUE = 6;
    final int LOWEST_DIE_VALUE = 1;

    // default constructor //
    public Die() {
        Roll();
    }

    // overload constructor //
    public Die(int num) {
        value =  num;
    }

    /**
     * Getter for die value
     */
    public int getValue() {
        return value;
    }

    /**
     * Roll method for die
     */
    public void Roll() {
        value = (int)((Math.random()*100) % HIGHEST_DIE_VALUE + LOWEST_DIE_VALUE);
    }

    /**
     * main code logic
     */
    public static void main(String[] args) {
        // Create class instances
        Die die1 = new Die();
        Die die2 = new Die(Integer.parseInt(JOptionPane.showInputDialog("Please enter a die value")));

        // output area //
        System.out.print("Random die value = " + die1.value + "\n");
        System.out.print("Input die value = " + die2.value + "\n");


       DiceGUI appObject = new DiceGUI();
	        appObject.init();
	        JFrame frame = new JFrame("DiceGUI");
	        frame.getContentPane().add(appObject);



	    	//getContentPane returns a Container object, so we must cast
	    	// it to a JComponent to use the setPreferredSize method.
	    	((JComponent)frame.getContentPane()).setPreferredSize(appObject.getSize());


	    	// kill the application on close
	    	frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	    	// pack to the needed size
	    	//frame.pack();
	    	frame.setSize(150, 200); //200,200
	    	frame.setVisible(true);

    }

}
