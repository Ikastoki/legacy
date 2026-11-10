package exercises_1_10;

/*
Are the Numbers Equal?

Create a function that returns true when x is equal to y; otherwise return false.
Examples

isSameNum(4, 8) ➞ false

isSameNum(2, 2) ➞  true

isSameNum(42, 32) ➞  false

Notes

Don't forget to return the result.
 */
public class Exercise_4 {
    public static void main(String[] args) {
        System.out.println(isSameNum(4, 8));
        System.out.println(isSameNum(2, 2));
        System.out.println(isSameNum(42, 32));
    }

    public static boolean isSameNum(int a, int b) {
        return a == b;
    }
}
