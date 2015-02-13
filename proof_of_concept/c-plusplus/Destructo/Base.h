/* 
 * File:   Base.h
 * Author: rjackson22
 *
 * Created on September 22, 2010, 1:25 PM
 */

#ifndef BASE_H
#define	BASE_H

class Base {
public:
    Base();
    Base(const Base& orig);
    virtual ~Base(); // allows the subclass Destructor to be called
private:

};

#endif	/* BASE_H */

