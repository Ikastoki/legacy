package exercises_1_10;

/*
Get Word Count
Create a method that takes a string and returns the word count. The string will be a sentence.

Examples
countWords("Just an example here move along") ➞ 6

countWords("This is a test") ➞ 4

countWords("What an easy task, right") ➞ 5
Notes
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
 */
public class Exercise_2 {
    public static void main(String[] args) {
        System.out.println(countWords("Just an example here move along"));
        System.out.println(countWords("This is a test"));
        System.out.println(countWords("What an easy task, right"));
    }

    public static int countWords(String str) {
        return str.split(" ").length;
    }
}
