package exercises_1_10;

/*
How Much is True?
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).
 */

public class Exercise_1 {
    public static void main(String[] args) {
        System.out.println(countTrue(new boolean[]{true, false, false, true, false}));
        System.out.println(countTrue(new boolean[]{false, false, false, false}));
        System.out.println(countTrue(new boolean[]{}));
    }

    public static int countTrue(boolean[] arr) {
        int count = 0;
        for (boolean value : arr) {
            if (value) count++;
        }
        return count;
    }
}
