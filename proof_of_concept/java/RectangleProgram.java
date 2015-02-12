package rectanglegui;

/*
 * Given the length and width of a rectangle, 
 * this Java program determines its area 
 * and perimeter.
 * 
 * @author ddalsveen
 * History:
 *  Modified to allow Applet or Application capability.
**/


import javax.swing.*; // provides a search path for classes that have
                      // not been defined in this class
import java.awt.*;
import java.awt.event.*;

// extends means 'inherits from', RectPro IS A JApplet
public class RectangleProgram extends JApplet
{
	// Make reference variables to hold GUI
	// component references.
    JLabel lengthL, widthL,
           areaL, perimeterL;
    JTextField lengthTF, widthTF,
		           areaTF, perimeterTF;
    JButton calculateB, exitB;
    CalculateButtonHandler calculateHandler;
    ExitButtonHandler exitHandler;
    Container pane;
    // Constants for window sizing
    private static final int WIDTH = 400; //400
    private static final int HEIGHT = 300; //300
   /**
    * init method is called automatically when run as an applet
    */
    // JApplet starts here to build GUI
    public void init()
    {
    	try {
            // "new Runnable" creates a seperate thread
            SwingUtilities.invokeAndWait(new Runnable() {
                public void run() {
                	
                    buildGUI();
                     
                    System.out.println("GUI created");
                    
                }
                
            });
        } catch (Exception e) {
            System.err.println("GUI didn't successfully complete");
            e.printStackTrace();
        }
			  
    }
    /**
     * Actually instantiate the GUI components
     *
     */
    public void buildGUI(){
        // Create four labels
              // declarations use existing reference variables to assign JLabel
              // objects
	      lengthL = new JLabel("Enter the length: ",
	                            SwingConstants.RIGHT);
	      widthL = new JLabel("Enter the width: ",
				                     SwingConstants.RIGHT);
	      areaL = new JLabel("Area: ",SwingConstants.RIGHT);
	      perimeterL = new JLabel("Perimeter: ",
				                       	SwingConstants.RIGHT);

              //Create four textfields
	      lengthTF = new JTextField(10);
	      widthTF = new JTextField(10);
	      areaTF = new JTextField(10);
	      areaTF.setEditable(false);
	      perimeterTF = new JTextField(10);
	      perimeterTF.setEditable(false);

              //create Calculate Button
	      calculateB = new JButton("Calculate");
	      calculateHandler = new CalculateButtonHandler();
	      // register the event handler
	      calculateB.addActionListener(calculateHandler);

              //Create Exit Button
	      exitB = new JButton("Exit");
	      exitHandler = new ExitButtonHandler();
	      // register the event handler
	      exitB.addActionListener(exitHandler);

		      
	      

		          //Get the container
	      pane = getContentPane();

		          //Set the layout
          pane.setLayout(new GridLayout(5,2));

		          //Place all items created
	      pane.add(lengthL);
	      pane.add(lengthTF);
	      pane.add(widthL);
	      pane.add(widthTF);
	      pane.add(areaL);
	      pane.add(areaTF);
	      pane.add(perimeterL);
	      pane.add(perimeterTF);
	      pane.add(calculateB);
	      pane.add(exitB);

	      //set the size of the window and display it
	      setSize(WIDTH,HEIGHT);
	      setVisible(true);
			  
    }
/**
 * CalculateButtonHandler is used to handle
 * Calculate Button events
 * @author ddalsveen
 *
 */
    // private embedded class
    private class CalculateButtonHandler implements ActionListener
    {
	      public void actionPerformed(ActionEvent e)
	      {
	          double width, length, area, perimeter;

	          length = Double.parseDouble(lengthTF.getText());
	          width = Double.parseDouble(widthTF.getText());
	          area = length * width;
	          perimeter = 2 * (length + width);

	          areaTF.setText("" + area);
	          perimeterTF.setText("" + perimeter);
	      }
    }
/**
 * ExitButtonHandler is used to handle Exit Button
 * events
 * @author ddalsveen
 *
 */
    private class ExitButtonHandler implements ActionListener
    {
	      public void actionPerformed(ActionEvent e)
	      {
		        System.exit(0);
	      }
    }
/**
 * Creates a Rectangle Applet, and adds it to a JFrame,
 * thus alloewing this program to run as an application.
 * @param args not used
 */
//    public static void main( String args[] )
//    {
//	        RectangleProgram rectObject = new RectangleProgram();
//	        rectObject.init();
//	        JFrame frame = new JFrame("Frame to hold an Applet");
//	        frame.getContentPane().add(rectObject);
//
//
//
//	    	//getContentPane returns a Container object, so we must cast
//	    	// it to a JComponent to use the setPreferredSize method.
//	    	((JComponent)frame.getContentPane()).setPreferredSize(rectObject.getSize());
//
//
//	    	// kill the application on close
//	    	frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
//	    	// pack to the needed size
//	    	frame.pack();
//	    	// frame.setSize(300, 200); alternative to .pack
//	    	frame.setVisible(true);
//
//
//
//
//    }
}
