/* 
 * File:   Derived.h
 * Author: rjackson22
 *
 * Created on September 22, 2010, 1:30 PM
 */

#ifndef DERIVED_H
#define	DERIVED_H

class Derived : public Base {
public:
    Derived();
    Derived(const Derived& orig);
    virtual ~Derived();
private:

};

#endif	/* DERIVED_H */

