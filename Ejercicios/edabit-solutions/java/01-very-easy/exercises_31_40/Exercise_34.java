package exercises_31_40;

/*
Is the String Empty?
Create a function that returns true if a string is empty and false otherwise.

Examples
isEmpty("") ➞ true

isEmpty(" ") ➞ false

isEmpty("a") ➞ false
Notes
A string containing only whitespaces " " does not count as empty.
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
 */
public class Exercise_34 {
    public static void main(String[] args) {
        System.out.println(isEmpty(""));
        System.out.println(isEmpty(" "));
        System.out.println(isEmpty("a"));
    }

    public static boolean isEmpty(String str) {
        return str.isEmpty();
    }
}
