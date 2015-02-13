/* 
 * File:   Employee.h
 * Author: ddalsveen
 *
 * Created on November 17, 2010, 12:18 PM
 */

#ifndef EMPLOYEE_H
#define	EMPLOYEE_H
#include<string>
#include <iostream>

using namespace std;
class Employee
{
	public:
	   //bool operator<(Employee&); // overloaded < template
	   bool operator<=(Employee&); // overloaded <= template

   private:
      int number;
      string name;
   // a friend is not a member of the class...but has special permissions
   friend ostream& operator<<(ostream&, const Employee&);
   friend istream& operator>>(istream&, Employee&);
   friend bool operator <(Employee , Employee );
};



#endif	/* EMPLOYEE_H */

