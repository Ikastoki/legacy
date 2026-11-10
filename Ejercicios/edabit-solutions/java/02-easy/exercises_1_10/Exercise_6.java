package exercises_1_10;

/*
Basic Calculator
Create a function that takes two numbers and a mathematical operator + - / *
and will perform a calculation with the given numbers.

Examples
calculator(2, '+', 2) ➞ 4

calculator(2, '*', 2) ➞ 4

calculator(4, '/', 2) ➞ 2
Notes
If the input tries to divide by 0, return 0.
 */

public class Exercise_6 {
    public static void main(String[] args) {
        System.out.println(calculator(2, '+', 2));
        System.out.println(calculator(2, '*', 2));
        System.out.println(calculator(4, '/', 2));
    }

    public static int calculator(int n1, char operator, int n2) {
        switch (operator) {
            case '+':
                return n1 + n2;
            case '-':
                return n1 - n2;
            case '*':
                return n1 * n2;
            case '/':
                if (n2 != 0) {
                    return n1 / n2;
                }
            default:
                throw new IllegalArgumentException(operator + " is an invalid operator");
        }
    }


}
