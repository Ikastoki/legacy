package exercises_1_10;

/*
Power Calculator

Create a function that takes voltage and current and returns the calculated power.
Examples

power(230, 10) ➞ 2300

power(110, 3) ➞ 330

power(480, 20) ➞ 9600

Notes
 p = v * c

 */

public class Exercise_8 {
    public static void main(String[] args) {
        System.out.println(power(230, 10));
        System.out.println(power(110, 3));
        System.out.println(power(480, 20));
    }

    public static int power(int voltage, int current) {
        return voltage * current;
    }
}
