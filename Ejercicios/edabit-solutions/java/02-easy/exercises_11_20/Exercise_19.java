package exercises_11_20;

/*
Phone Number Formatting
Create a method that takes an array of 10 integers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

Examples
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468"

formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) ➞ "(345) 501-2527"
Notes
Don't forget the space after the closing parenthesis
 */

public class Exercise_19 {
    public static void main(String[] args) {
        System.out.println(formatPhoneNumber(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}));
        System.out.println(formatPhoneNumber(new int[]{5, 1, 9, 5, 5, 5, 4, 4, 6, 8}));
        System.out.println(formatPhoneNumber(new int[]{3, 4, 5, 5, 0, 1, 2, 5, 2, 7}));
    }

    public static String formatPhoneNumber(int[] arr) {
        String numberFormat = "";

        for (int i = 0; i < arr.length; i++) {
            if (i == 0 || i == 1 || i == 2) {
                numberFormat += arr[i];
            } else if (i == 3) {
                numberFormat += ") ";
                numberFormat += arr[i];
            } else if (i == 4 || i == 5 || i == 6) {
                numberFormat += arr[i];
            } else if (i == 7) {
                numberFormat += "-";
                numberFormat += arr[i];
            } else {
                numberFormat += arr[i];
            }
        }

        return "(" + numberFormat;
    }
}
