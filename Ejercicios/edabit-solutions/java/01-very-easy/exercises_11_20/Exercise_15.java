package exercises_11_20;

/*
Convert Age to Days

Create a function that takes the age in years and returns the age in days.
Examples

calcAge(65) ➞ 23725

calcAge(0) ➞ 0

calcAge(20) ➞ 7300

Notes

    Use 365 days as the length of a year for this challenge.
    Ignore leap years and days between last birthday and now.
    Expect only positive integer inputs.
 */

public class Exercise_15 {
    public static void main(String[] args) {
        System.out.println(calcAge(65));
        System.out.println(calcAge(0));
        System.out.println(calcAge(20));
    }

    public static int calcAge(int years) {
        return years * 365;
    }
}
