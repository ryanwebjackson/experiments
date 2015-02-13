/**
 * This program will populate a vector with employee objects.
 * It then will sort the vector and output it.
 *
 */

#include<iostream>
#include<vector>
#include <algorithm>
#include "Employee.h"
using namespace std;

/**
 * The main entry point for the C++ program.
 *
 */
int main(int argc, char ** argv) {
    vector<Employee>items; // the container for employees
    unsigned count; // for loop control variable
    bool inserted = false;
    Employee enteredVal; // used as a placeholder for the input data
    const char QUIT = 'n'; // the sentinel value for the while loop
    char quitChar; // the loop control variable for the while loop
    cout << "Do you want to enter an item? y or n ";
    cin >> quitChar;
    while (quitChar != QUIT) // until the user enters the sentinel, continue.
    {
        cout << "Enter an Employee : " << endl << "  ";
        cin >> enteredVal; // use the overloaded input operator >>
        items.push_back(enteredVal); // add the new object to the vector
        cout << "Do you want to enter a value? y or n ";
        cin >> quitChar;
    }
    std::sort(items.begin(), items.end()); // sort the vector
    for (count = 0; count < items.size(); ++count) { // output the vector.
        cout << items[count] << endl; // using the overloaded output << operator
    }
    cout << "Do you want to insert a new item into " <<
            "the list? y or n ";
    cin >> quitChar;
    while (quitChar != QUIT) {
        inserted = false; // reset the inserted boolean
        cout << "Enter a new Employee item " <<
                "to add to the list " << endl << "  ";
        cin >> enteredVal;
        // insert the item in the sorted vector
        for (count = 0; count < items.size() && !inserted; ++count) {
            if (enteredVal <= items[count]) { // use overloaded less than operator <
                items.insert(items.begin() + count, enteredVal);
                inserted = true; // break the loop condition
            }
        }
        if( !inserted){
            items.push_back( enteredVal);
        }
        // output the vector
        for (count = 0; count < items.size(); ++count) {
            cout << items[count] << endl;
        }
        cout << "Do you want to insert another new item " <<
                "into the list? y or n ";
        cin >> quitChar;
    }
    return 0;
}
