package exercises_11_20;

/*
Re-Form the Word
A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

Examples
getWord("seas", "onal") ➞ "Seasonal"

getWord("comp", "lete") ➞ "Complete"

getWord("lang", "uage") ➞ "Language"
Notes
N/A
 */
public class Exercise_17 {
    public static void main(String[] args) {
        System.out.println(getWord("seas", "onal"));
        System.out.println(getWord("comp", "lete"));
        System.out.println(getWord("lang", "uage"));
    }

    public static String getWord(String str1, String str2) {
        return str1 + str2;
    }
}
