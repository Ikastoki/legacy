package exercises_11_20;

/*
Less Than 100?

Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
Examples

lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true

Notes

N/A
 */

public class Exercise_16 {
    public static void main(String[] args) {
        System.out.println(lessThan100(22, 15));
        System.out.println(lessThan100(83, 34));
        System.out.println(lessThan100(3, 77));
    }

    public static boolean lessThan100(int a, int b) {
        return (a + b) < 100;
    }
}
