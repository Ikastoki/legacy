package exercises_31_40;

/*
Return Negative
Create a function that takes a number as an argument and returns negative of that number.
Return negative numbers without any change.

Examples
returnNegative(4) ➞ -4

returnNegative(5) ➞ -5

returnNegative(-54) ➞ -54

returnNegative(0) ➞ 0
Notes
N/A
 */
public class Exercise_31 {
    public static void main(String[] args) {
        System.out.println(returnNegative(4));
        System.out.println(returnNegative(5));
        System.out.println(returnNegative(-54));
        System.out.println(returnNegative(0));
    }

    public static int returnNegative(int number) {
        return number < 0 ? number : -number;
    }
}
