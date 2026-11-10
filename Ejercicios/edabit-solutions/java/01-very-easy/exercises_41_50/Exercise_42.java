package exercises_41_50;

/*
Integer in Range?
Write a function that validates whether a number n is within the lower and upper bounds. Return true if so, false otherwise.

Examples
intWithinBounds(3, 1, 9) ➞ true

intWithinBounds(6, 1, 6) ➞ false

intWithinBounds(3, 3, 8) ➞ true
Notes
The term "within bounds" means, that, a number is considered greater than or equal to the lower bound but lesser than the upper bound, (see example #2).
Bounds will always be given as integers.
 */

public class Exercise_42 {
    public static void main(String[] args) {
        System.out.println(intWithinBounds(3, 1, 9));
        System.out.println(intWithinBounds(6, 1, 6));
        System.out.println(intWithinBounds(3, 3, 8));
    }

    public static boolean intWithinBounds(int n, int lower, int upper) {
        return n >= lower && n < upper;
    }
}
