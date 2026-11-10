package exercises_31_40;
/*
Is the Number Even or Odd?
Create a method that takes an integer as an argument and returns"even" for even integers and "odd" for odd integers.

Examples
isEvenOrOdd(3) ➞ "odd"

isEvenOrOdd(146) ➞ "even"

isEvenOrOdd(19) ➞ "odd"
Notes
Don't forget to return the result.
Input will always be a valid integer.
Expect negative integers (whole numbers).
Tests are case sensitive (return "even" or "odd" in lowercase).
 */

public class Exercise_40 {
    public static void main(String[] args) {
        System.out.println(isEvenOrOdd(3));
        System.out.println(isEvenOrOdd(146));
        System.out.println(isEvenOrOdd(19));
    }

    public static String isEvenOrOdd(int number) {
        return number % 2 == 0 ? "even" : "odd";
    }
}
