package collectionclasses;


import java.util.*;

class EntryComparator implements Comparator<Entry> {

    public int compare(Entry ent1, Entry ent2) {

//The old way...parameters are of type Object, so  cast to Entry objects

        //Entry ent1 = (Entry) obj1;
        //Entry ent2 = (Entry) obj2;




        int compareValue = ent1.getFirstName().compareTo(ent2.getFirstName());
//		lastname is the same, check first name
        if (compareValue == 0) {
            compareValue = ent1.getLastName().compareTo(ent2.getLastName());
        }

        return compareValue;

    }
}
