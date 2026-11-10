package exercises_11_20;

/*
Inches to Feet

Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
Examples

inches_to_feet(324) ➞ 27

inches_to_feet(12) ➞ 1

inches_to_feet(36) ➞ 3

Notes

    If inches are under 12, return 0.
    12 inches = 1 foot.
 */

public class Exercise_20 {
    public static void main(String[] args) {
        System.out.println(inchesToFeet(324));
        System.out.println(inchesToFeet(12));
        System.out.println(inchesToFeet(36));
    }

    public static int inchesToFeet(int inches) {
        return inches < 12 ? 0 : inches / 12;
    }
}
