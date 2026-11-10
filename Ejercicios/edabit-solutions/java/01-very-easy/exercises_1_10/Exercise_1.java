package exercises_1_10;

/*
Return the Sum of Two Numbers

Create a method that takes two integers as arguments and returns their sum.
Examples

SumOfTwoNumbers(3, 2) ➞ 5

SumOfTwoNumbers(-3, -6) ➞ -9

SumOfTwoNumbers(7, 3) ➞ 10

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.
*/

public class Exercise_1 {
    public static void main(String[] args) {
        System.out.println(SumOfTwoNumbers(3,2));
        System.out.println(SumOfTwoNumbers(-3,-6));
        System.out.println(SumOfTwoNumbers(7,3));
    }

    public static int SumOfTwoNumbers(int a, int b){
        return a + b;
    }
}
