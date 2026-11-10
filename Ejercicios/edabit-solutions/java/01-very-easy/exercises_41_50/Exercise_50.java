package exercises_41_50;

/*
Recursion: Length of a String
Write a function that returns the length of a string. Make your function recursive.

Examples
length("apple") ➞ 5

length("make") ➞ 4

length("a") ➞ 1

length("") ➞ 0
Notes
Check the Resources tab for info on recursion.
 */

public class Exercise_50 {
    public static void main(String[] args) {
        System.out.println(lenght("apple"));
        System.out.println(lenght("make"));
        System.out.println(lenght("a"));
        System.out.println(lenght(""));
    }

    public static int lenght(String str) {
        if (str.isEmpty()) {
            return 0;
        } else {
            return 1 + lenght(str.substring(1));
        }
    }
}
