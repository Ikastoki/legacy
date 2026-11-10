package exercises_1_10;

/*
Convert Minutes into Seconds

Write a function that takes an integer minutes and converts it to seconds.
Examples

convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.
 */

public class Exercise_2 {
    public static void main(String[] args) {
        System.out.println(convert(5));
        System.out.println(convert(3));
        System.out.println(convert(2));
    }

    public static int convert(int minutes){
        return  minutes * 60;
    }
}
