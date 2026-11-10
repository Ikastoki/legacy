package exercises_1_10;

/*
Return the Next Number from the Integer Passed

Create a function that takes a number as an argument, increments the number by +1 and returns the result.
Examples

addition(0) ➞ 1

addition(9) ➞ 10

addition(-3) ➞ -2

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.
 */

public class Exercise_3 {
    public static void main(String[] args) {
        System.out.println(addition(0));
        System.out.println(addition(9));
        System.out.println(addition(-3));
    }

    public static int addition(int number) {
        return ++number;
    }
}
