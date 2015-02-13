/* 
 * File:   main.cpp
 * Author: rjackson22
 * This will be used to test the Destructor
 * Created on September 22, 2010, 1:24 PM
 */

#include <cstdlib>
// by convention, local includes are last
#include "Base.h"
#include "Derived.h"

using namespace std;

/*
 * Main entry point for the application
 */
int main(int argc, char** argv) {
    // create an object instance of the Derived class
    Base *der = new Derived; // der is a pointer to the Derived object
    // the above is polymorphism
    delete der; // removes the object from memory
    return 0;
}

