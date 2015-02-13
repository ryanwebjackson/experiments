/**
 * File:   main.cpp
 * Author: rjackson22
 *
 * Develop a BankAccount structure for a bank.
 * The BankAccount should contain attributes account number, account balance, and annual interest rate.
 * Add functions that will facilitate bank account information.
 * The function that takes in user input will utilize a loop to do so...in other words, prompt and input data while data is invalid.
 * The names of the functions are given below:
 * function enterAccountData: no formal parameters in the formal parameter list.
 *   The function will prompt the user for each of the parameters in the BankAccount,
 *   and will not allow negative numbers for account balance or the annual rate. This function returns a bankAccount object.
 *   Thus, the prototype for this function is: BankAccount enterAccountData(); // return type is BankAccount.
 * function computeInterest: This function will accept a BankAccount object(declared in the formal parameter list).
 *   In the function, prompt the user for the number of years the account will earn interest.
 *   The function will display the account balance for each year it earns interest. What type of loop will you use?
 * function displayAccount: Displays the BankAccount object information.
 * function main(): This function declares a BankAccount object,
 *   and continues to get and display BankAccount information(using the functions) until the user enters a BankAccount with an account number of zero.
 * 
 * Created on October 20, 2010, 1:23 PM
 */

#include <cstdlib>
#include <iostream>

using namespace std;

// Create a bank account data structure
struct BankAccount {
    /**
     Unique identfier for the account. Must be an integer. Set in enterAccountData().
     */
    int accountNumber;
    /**
     * Current balance for the account. Set in enterAccountData().
     */
    double accountBalance;
    /**
     * Current interest rate for the account. Value may be changed. Set in enterAccountData().
     */
    double annualInterestRate;
};

// Prototype functions
BankAccount enterAccountData();
void computeInterest(BankAccount);
void displayAccount(BankAccount);

/**
 * Main entry point for the application
 */
int main(int argc, char** argv) {
    BankAccount b;
    do {
        b = enterAccountData();
        if(b.accountNumber != 0) {
            displayAccount(b);
            computeInterest(b);
        }
    } while(b.accountNumber != 0);
    return 0;
}

// Define functions
BankAccount enterAccountData() {
    // Create a BankAccount object
    BankAccount bankAccount;
    // Obtain account data from user
    cout << "Please enter the account number, zero to quit: ";
    cin >> bankAccount.accountNumber;
    if(bankAccount.accountNumber != 0){
        do {
        cout << "Please enter the balance: ";
        cin >> bankAccount.accountBalance;
        } while(bankAccount.accountBalance < 0); // validate account balance input
        do {
        cout << "Please enter the annual interest rate: ";
        cin >> bankAccount.annualInterestRate;
        } while(bankAccount.annualInterestRate < 0); // validate account interest rate input
    }

    return bankAccount;
}

void computeInterest(BankAccount bankAccount) {
    // Declare local variables
    int years;
    double currentInterest = 0, totalInterest = 0;
    // Obtain time for interest calculation
    cout << "Please enter number of years account will earn interest: ";
    cin >> years;
    // Calculate interest
    for(int i=1;i<=years;i++) {
        // I=prt
        currentInterest = (bankAccount.accountBalance*bankAccount.annualInterestRate*i);
        cout << "Interest for year " << i << "= " << currentInterest << endl;
        // Accumulate total interest
        totalInterest += currentInterest;
    }
    // Output total interest
    cout << "Total interest on account #" << bankAccount.accountNumber
            << ": " << totalInterest << endl << endl;
}

void displayAccount(BankAccount bankAccount) {
    cout << "\nBank account #" << bankAccount.accountNumber << endl;
    cout << "APR= " << bankAccount.annualInterestRate << endl;
    cout << "Balance= " << bankAccount.accountBalance << endl << endl;
}
