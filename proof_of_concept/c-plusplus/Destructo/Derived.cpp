/* 
 * File:   Derived.cpp
 * Author: rjackson22
 * This class inherits from Base
 * Created on September 22, 2010, 1:30 PM
 */

#include <iostream>
#include "Base.h"
#include "Derived.h"

using namespace std;

// default constructor
Derived::Derived() {
    cout<<"Derived constructor called."<<endl;
}

Derived::Derived(const Derived& orig) {
}

Derived::~Derived() {
    cout<<"Derived destructor called."<<endl;
}

