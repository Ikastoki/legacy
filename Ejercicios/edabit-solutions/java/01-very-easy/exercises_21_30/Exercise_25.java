package exercises_21_30;

/*
Return the First Element of an Array
Create a function that takes an array containing only numbers and return the first element.

Examples
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500
Notes
The first element in an array always has an index of 0.
 */

public class Exercise_25 {
    public static void main(String[] args) {
        System.out.println(getFirstValue(new int[]{1, 2, 3}));
        System.out.println(getFirstValue(new int[]{80, 5, 100}));
        System.out.println(getFirstValue(new int[]{-500, 0, 50}));
    }

    public static int getFirstValue(int[] arr) {
        return arr[0];
    }
}
