package exercises_1_10;

/*
Find the Discount
Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.

Alternative Text

Examples
discount(1500, 50) ➞ 750

discount(89, 20) ➞ 71.2

discount(100, 75) ➞ 25
Notes
Your answer should be rounded to two decimal places.
 */

public class Exercise_9 {
    public static void main(String[] args) {
        System.out.println(discount(1500, 50));
        System.out.println(discount(89, 20));
        System.out.println(discount(100, 75));
    }

    public static double discount(int price, int percentage) {
        double monto = (price * percentage) / 100;
        double finalPrice = price - monto;

        return Math.round(finalPrice);
    }
}
