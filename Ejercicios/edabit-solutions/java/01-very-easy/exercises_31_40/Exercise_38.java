package exercises_31_40;

/*
Area of a Rectangle
Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

Examples
area(3, 4) ➞ 12

area(10, 11) ➞ 110

area(-1, 5) ➞ -1

area(0, 2) ➞ -1
Notes
N/A
 */

public class Exercise_38 {
    public static void main(String[] args) {
        System.out.println(area(3, 4));
        System.out.println(area(10, 11));
        System.out.println(area(-1, 5));
        System.out.println(area(0, 2));
    }

    static public int area(int a, int b) {
        return a <= 0 || b <= 0 ? -1 : a * b;
    }
}
