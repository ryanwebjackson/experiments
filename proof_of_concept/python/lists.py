#-------------------------------------------------------------------------------
# Name:        module1
# Purpose:
#
# Author:      Ryan
#
# Created:     29/03/2012
# Copyright:   (c) Ryan 2012
# Licence:     <your licence>
#-------------------------------------------------------------------------------

def main():
    # do some stuff
    a = [1, -7, 0, 0, 5, 10, 5, 15, 18]
    a[0] = [-1, -2]
    print a[0]
    b = a[0]
    c = a[3:]
    print type(a[0])
    print c

if __name__ == '__main__':
    main()