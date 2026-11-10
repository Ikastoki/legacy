package exercises_1_10;

/*
Check if String Ending Matches Second String
Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

Examples
checkEnding("abc", "bc") ➞ true

checkEnding("abc", "d") ➞ false

checkEnding("samurai", "zi") ➞ false

checkEnding("feminine", "nine") ➞ true

checkEnding("convention", "tio") ➞ false
Notes
All test cases are valid one word strings.
 */

public class Exercise_4 {
    public static void main(String[] args) {
        System.out.println(checkEnding("abc", "bc"));
        System.out.println(checkEnding("abc", "d"));
        System.out.println(checkEnding("samurai", "zi"));
        System.out.println(checkEnding("feminine", "nine"));
        System.out.println(checkEnding("convention", "tio"));
    }

    public static boolean checkEnding(String str1, String str2) {
        return str1.endsWith(str2);
    }

}
