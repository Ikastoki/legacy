package exercises_11_20;

/*
Equality of 3 Values
Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.

Examples
equal(3, 4, 3) ➞ 2

equal(1, 1, 1) ➞ 3

equal(3, 4, 1) ➞ 0
Notes
Your function must return 0, 2 or 3.
 */

public class Exercise_15 {
    public static void main(String[] args) {
        System.out.println(equal(3, 4, 3));
        System.out.println(equal(1, 1, 1));
        System.out.println(equal(3, 4, 1));
    }

    public static int equal(int a, int b, int c) {
        int count = 0;

        if (a == b) count++;
        if (a == c) count++;
        if (b == c) count++;

        return count;
    }

    public static int equal2(int a, int b, int c) {
        if (a == b && b == c) {
            return 3;
        } else if (a == b || a == c || b == c) {
            return 2;
        } else {
            return 0;
        }
    }
}
