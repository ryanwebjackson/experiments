/* 
 * File:   main.cpp
 * Author: rjackson22
 * In this case project, you will develop a program that will help people calculate monthly mortgage payments for two different loan options.
 * The program should prompt the user for the loan principal, and the interest rates and lengths of two loan options.
 * The program should calculate the monthly payment for each loan using the formula provided below.
 * Finally the program should display the monthly payment for each loan.
 * Use an if statement to determine which option provides the lowest monthly payment. Display this information to the user.
 * Created on September 22, 2010, 2:17 PM
 */

#include <cstdlib>
#include <iostream>
#include <math.h>

using namespace std;

// calculate montly interest
double calculateMonthlyInterest(double principal, double rate) {
    return (principal * rate) / 1200;
}

// calculate monthly payment
double calculateMonthlyPayment(double principal, double monthlyInterest, int length) {
    return principal * (monthlyInterest / (pow(1 - (1 + monthlyInterest),-(length * 12))));
}

/*
 * Main entry point for the application
 */
int main(int argc, char** argv) {
    // Initialize variables
    double principal = 0;
    double opt1Rate = 0, opt2Rate = 0;
    int opt1Length = 0, opt2Length = 0;
    double opt1MonthlyPayment = 0, opt2MonthlyPayment;
    double opt1MonthlyInterest = 0, opt2MonthlyInterest;
    int bestOption = 0;

    // Input

    // obtain principal from the user
    cout << "Please input the principal amount (USD) for the loan: ";
    cin >> principal;
    // obtain first loan option's length from the user
    cout << "Please input the length of the first loan option: ";
    cin >> opt1Length;
    // obtain first loan option's interest rate from the user
    cout << "Please input interest rate of the first loan option: ";
    cin >> opt1Rate;
    // obtain second loan option's length rate from the user
    cout << "Please input the length of the second loan option: ";
    cin >> opt2Length;
    // obtain second loan option's interest rate from the user
    cout << "Please input the interest rate of the second loan option: ";
    cin >> opt2Rate;

    // Process

    // calculate monthly interest for both options
    opt1MonthlyInterest = calculateMonthlyInterest(principal, opt1Rate);
    opt2MonthlyInterest = calculateMonthlyInterest(principal, opt2Rate);

    // calculate monthly payment
    opt1MonthlyPayment = calculateMonthlyPayment(principal, opt1MonthlyInterest, opt1Length);
    opt2MonthlyPayment = calculateMonthlyPayment(principal, opt2MonthlyInterest, opt2Length);

    if(opt1MonthlyPayment < opt2MonthlyPayment) {
        bestOption = 1;
    }
    else {
        bestOption = 2;
    }

    // Output

    // clear buffer
    std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');

    // display monthly payments for each option
    cout << "\nMonthly payment for loan option 1: " << opt1MonthlyPayment << endl;
    cout << "Monthly payment for loan option 2: " << opt2MonthlyPayment << endl;
    // display best option suggestion
    cout << "Borrower will pay less interest with option " << bestOption << "."
            << endl;

    return 0;
}

