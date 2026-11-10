package exercises_21_30;

/*
Basketball Points
You are counting points for a basketball game,
given the amount of 2-pointers scored and 3-pointers scored,
find the final points for the team and return that value.

Examples
points(13, 12) ➞ 62

points(17, 12) ➞ 70

points(38, 8) ➞ 100
Notes
N/A
 */

public class Exercise_22 {
    public static void main(String[] args) {
        System.out.println(points(13, 12));
        System.out.println(points(17, 12));
        System.out.println(points(38, 8));
    }

    public static int points(int two, int threes) {
        return (two * 2) + (threes * 3);
    }
}
