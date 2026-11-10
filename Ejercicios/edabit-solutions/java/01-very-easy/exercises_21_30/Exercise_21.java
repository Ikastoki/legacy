package exercises_21_30;

/*
Flip the int Boolean
Make a function that returns an int boolean opposite of an int boolean given (flip the int boolean).

Examples
flipIntBool(1) ➞ 0

flipIntBool(0) ➞ 1
Notes
N/A
 */

public class Exercise_21 {
    public static void main(String[] args) {
        System.out.println(flipIntBool(1));
        System.out.println(flipIntBool(0));
    }

    public static int flipIntBool(int number) {
        return number == 1 ? 0 : 1;
    }
}
