package exercises_21_30;

/*
Divides Evenly
Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

Examples
dividesEvenly(98, 7) ➞ true
// 98/7 = 14

dividesEvenly(85, 4) ➞ false
// 85/4 = 21.25
Notes
a will always be greater than or equal to b.
 */

public class Exercise_30 {
    public static void main(String[] args) {
        System.out.println(dividesEvenly(98, 7));
        System.out.println(dividesEvenly(85, 4));
    }

    public static boolean dividesEvenly(int a, int b) {
        return a % b == 0;
    }
}
