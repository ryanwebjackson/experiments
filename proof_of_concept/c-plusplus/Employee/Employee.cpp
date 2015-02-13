/*
 * File:   Employee.cpp
 * Implementation of the Employee class
 * Author: dave
 *
 * Created on March 8, 2010, 10:59 AM
 */

#include "Employee.h"
/**
* Overload the output operator, allows one to output the object.
*/
ostream& operator<<(ostream& out, const Employee& emp)
{
	out << "Name-->" << emp.name << "   Employee Number-->" << emp.number;
   return out;
}
/**
* Overload the input operator, allows one to input the object.
*/
istream& operator>>(istream& in, Employee& emp)
{
	cout << "Enter name: ";
	in >> emp.name;
	cout << "Enter number: ";
	in >> emp.number;
	return in;
}
/**
* Overload the less than operator, used by the sort algorithm
* to sort an array or vector of objects.
*/
bool operator<(Employee emp, Employee  emp1)
{
	return(emp.number < emp1.number);
}
/**
* Overload less than or equal to
*/
bool Employee::operator<=(Employee& emp)
{
	return(number <= emp.number);
}

