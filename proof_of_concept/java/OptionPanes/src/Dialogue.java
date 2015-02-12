import javax.swing.JOptionPane;
/**
 *  A demonstration of GUI dialogue; input, confirmation and message.
 */

/**
 * @author ddalsveen
 *
 */
public class Dialogue {

	/**
         * The main method is the starting point...
	 * @param args not used
	 */
	public static void main(String[] args) {
		// declare variables.
		String wageString, dependentsString;
		double wage, weeklyPay;
		int dependents;
		int selection;
		boolean isYes;
		double hoursInWeek = 37.5;

		// showInput is used here to get a name(a String) from the user
		String name = JOptionPane.showInputDialog("Please enter your name");
                // showMessageDialog is used to inform the user.
		JOptionPane.showMessageDialog(null, "Hello " + name);
		wageString = JOptionPane.showInputDialog(null,
				name + ", please enter your hourly wage", "Salary dialog 1",
				JOptionPane.INFORMATION_MESSAGE);
		weeklyPay = Double.parseDouble(wageString) *
		hoursInWeek;
		dependentsString = JOptionPane.showInputDialog(null,
				"How many dependents?", "Salary dialog 2",
				JOptionPane.QUESTION_MESSAGE);
                // convert the String to an integer using the Integer wrapper class.
		dependents = Integer.parseInt(dependentsString);
                // showMessageDialog is used to inform the user.
		JOptionPane.showMessageDialog(null,"Weekly salary is $" +
				weeklyPay + "\nDeductions will be made for " +
				dependents + " dependents");
                // showConfirm is used to ask a user a question
		selection = JOptionPane.showConfirmDialog(null,
				"Do you want to continue working?",
				"",
				JOptionPane.YES_NO_CANCEL_OPTION,
				JOptionPane.QUESTION_MESSAGE);
		isYes = (selection == JOptionPane.YES_OPTION);
                // print the boolean response to the question
		JOptionPane.showMessageDialog(null,
				"You responded " + isYes);
                // print the integer response to the question
		JOptionPane.showMessageDialog(null,
				"Your actual response in integer form " + selection);

		System.exit(0);

	}

}
