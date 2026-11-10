package exercises_21_30;

/*
Convert Hours and Minutes into Seconds
Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

Examples
convert(1, 3) ➞ 3780

convert(2, 0) ➞ 7200

convert(0, 0) ➞ 0
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
 */

public class Exercise_24 {
    public static void main(String[] args) {
        System.out.println(convert(1, 3));
        System.out.println(convert(2, 0));
        System.out.println(convert(0, 0));
    }

    public static int convert(int hours, int minutes) {
        return (hours * 3600) + (minutes * 60);
    }
}
