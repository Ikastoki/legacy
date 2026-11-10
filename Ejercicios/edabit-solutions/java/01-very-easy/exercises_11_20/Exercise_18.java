package exercises_11_20;

/*
Sum Of Polygon Angles

Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
Examples

sumOfAngles(3) ➞ 180

sumOfAngles(4) ➞ 360

sumOfAngles(6) ➞ 720

Notes

    n will always be greater than 2.
    The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
 */
public class Exercise_18 {
    public static void main(String[] args) {
        System.out.println(sumOfAngles(3));
        System.out.println(sumOfAngles(4));
        System.out.println(sumOfAngles(6));
    }

    public static int sumOfAngles(int n) {
        return (n - 2) * 180;
    }
}
