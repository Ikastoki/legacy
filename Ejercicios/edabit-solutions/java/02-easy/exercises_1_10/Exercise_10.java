package exercises_1_10;

/*
Stuttering Function
Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

Examples
stutter("incredible") ➞ "in... in... incredible?"

stutter("enthusiastic") ➞ "en... en... enthusiastic?"

stutter("outstanding") ➞ "ou... ou... outstanding?"
Notes
Assume all inputs are in lower case and at least two-character long.
Check on the Resources tab for more helpful tips on String formatting in Java.
 */

public class Exercise_10 {
    public static void main(String[] args) {
        System.out.println(stutter("incredible"));
        System.out.println(stutter("enthusiastic"));
        System.out.println(stutter("outstanding"));
    }

    public static String stutter(String str) {
        //  String stutteringWord = String.valueOf(str.charAt(0)) + String.valueOf(str.charAt(1)) + "...";
        String stutteringWord = str.charAt(0) + "" + str.charAt(1) + "...";
        return stutteringWord + " " + stutteringWord + " " + str + "?";
    }
}
