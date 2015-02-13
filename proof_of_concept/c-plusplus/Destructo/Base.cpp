/* 
 * File:   Base.cpp
 * Author: rjackson22
 * This is the base class in the inheritance hierarchy
 * Created on September 22, 2010, 1:25 PM
 */

#include <iostream>
#include "Base.h"

using namespace std;

Base::Base() {
    cout<<"Called the base class constructor."<<endl;
}

Base::Base(const Base& orig) {
}

/*
 * Destructor allows one to remove the object from memory by accessing its pointer
 */
Base::~Base() {
    cout<<"Called the base class destructor."<<endl;
}

