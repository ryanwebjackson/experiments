package collectionclasses;


import java.util.*;
import java.io.*;

/*
 * Created on Jan 28, 2005
 *
 * To change the template for this generated file go to
 * Window - Preferences - Java - Code Generation - Code and Comments
 */
/**
 * @author Power User
 *
 * Illustrates the key-value pair used to look up values in a hashmap.
 * Window - Preferences - Java - Code Generation - Code and Comments
 */
public class HashKey {
	public static Map<String,String> myHash = new  HashMap<String,String>();

	public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

	public static final String SENTINEL = "done";
	/**
         * Main entry for the Java Application
         * @param args
         * @throws IOException
         */
	public static void main(String[] args) throws IOException {
		int i = 0;
		String strValue = "";
		String key = "";
		//	Ask for key,value pairs until the SENTINEL Value is reached.
		while(!(strValue.equals( SENTINEL))) {
			System.out.println("Please enter a String value( " +SENTINEL + ") to quit");
			strValue = br.readLine();
			if(!(strValue.equals( SENTINEL)) ){
				System.out.println("Please enter a key value");
				key = br.readLine();	
				
				myHash.put(key,strValue);
			}
			
		}
		System.out.println(myHash);


		// Now, retrieve the value given a key
		while(!(key.equals( SENTINEL))) {
			
			System.out.println("Please enter a key value(" +SENTINEL + " to quit ) " +
			"and I will show you the value");
			
			key= br.readLine();
			
			if (!key.equals(SENTINEL)){
				System.out.println("value is " + myHash.get(key));
			}
			
		}
		
		
		
	}
}
