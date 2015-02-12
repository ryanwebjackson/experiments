class Convert {
public static void main(String[] args) {
String str = "Testing";
int ascii;
char array[] = new char[str.length()];
for ( int i = 0; i < str.length() ; i++)
{
ascii = str.charAt(i);
if ( ascii <91 && ascii>64)
{
array[i]= (char) (ascii + 32);
}
if ( ascii <123 && ascii > 96)
{
array[i]= (char) (ascii - 32);
}
}
char temp;
for ( int i = 0; i < str.length() / 2; i++)
{
temp = array[i];
array[i]= array[str.length() - i - 1];
array[str.length() - i - 1]= temp;
}

String s = new String(array);
System.out.println(s);
}
}