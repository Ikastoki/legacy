package exercises_11_20;

/*
Reverse the Order of a String
Create a method that takes a string as its argument and returns the string in reversed order.

Examples
reverse("Hello World") ➞ "dlroW olleH"

reverse("The quick brown fox.") ➞ ".xof nworb kciuq ehT"

reverse("Edabit is really helpful!") ➞ "!lufpleh yllaer si tibadE"
Notes
You can expect a valid string for all test cases.
 */

public class Exercise_16 {
    public static void main(String[] args) {
        System.out.println(reverse("Hello World"));
        System.out.println(reverse("The quick brown fox."));
        System.out.println(reverse("Edabit is really helpful!"));
        System.out.println("===================================");
        System.out.println("           StringBuilder          ");
        System.out.println("===================================");
        System.out.println(reverse2("Hello World"));
        System.out.println(reverse2("The quick brown fox."));
        System.out.println(reverse2("Edabit is really helpful!"));
    }

    public static String reverse(String str) {
        String reverseStr = "";

        for (int i = str.length() - 1; i >= 0; i--) {
            reverseStr += str.charAt(i);
        }

        return reverseStr;
    }

    public static String reverse2(String str) {
        StringBuilder sb = new StringBuilder(str);
        return sb.reverse().toString();
    }
}
