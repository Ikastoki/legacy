package exercises_41_50;

/*
Nth Even Number
Create a function that takes a number n and returns the nth even number beginning with 0 as the first.

Examples
even(1) ➞ 0
// 0 is first even number

even(2) ➞ 2
// 2 is second even number

even(100) ➞ 198
Notes
N/A
 */

public class Exercise_43 {
    public static void main(String[] args) {
        System.out.println(even(1));
    }

    public static int even(int n) {
        return (n - 1) * 2;
    }
}
