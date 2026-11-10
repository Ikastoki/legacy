package exercises_31_40;

/*
Recreating the abs() Function
The Math.abs() function returns the absolute value of a number. This means that it returns a number's positive value. You can think of it as the distance away from zero.

Create a function that recreates this functionality.

Examples
absolute(-1.217197940) ➞ 1.21719794

absolute(-12.1320) ➞ 12.132

absolute(-544.0) ➞ 544.0

absolute(4666) ➞ 4666.0

absolute(-3.14) ➞ 3.14

absolute(250) ➞ 250
Notes
Tests will only include valid numbers.
Don't use the Math.abs() function (it will defeat the purpose of the challenge).
 */

public class Exercise_36 {
    public static void main(String[] args) {
        System.out.println(absolute(-1.217197940));
        System.out.println(absolute(-12.1320));
        System.out.println(absolute(-544.0));
        System.out.println(absolute(4666));
        System.out.println(absolute(-3.14));
        System.out.println(absolute(250));
    }

    public static double absolute(double number) {
        return number > 0 ? number : -number;
    }
}
