package exercises_11_20;

/*
Is the Number Less than or Equal to Zero?

Create a method that takes an integer as its only argument and returns true if it's less than or equal to zero, otherwise return false.
Examples

lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.
*/

public class Exercise_11 {
    public static void main(String[] args) {
        System.out.println(lessThanOrEqualToZero(5));
        System.out.println(lessThanOrEqualToZero(0));
        System.out.println(lessThanOrEqualToZero(-2));
    }

    public static boolean lessThanOrEqualToZero(int number) {
        if (number == 0 || number < 0) {
            return true;
        }
        return false;
    }
}
