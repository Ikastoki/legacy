package exercises_11_20;

/*
Football Points

Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

    wins get 3 points
    draws get 1 point
    losses get 0 points

Examples

footballPoints(3, 4, 2) ➞ 13

footballPoints(5, 0, 2) ➞ 15

footballPoints(0, 0, 1) ➞ 0

Notes

Inputs will be numbers greater than or equal to 0.
 */

public class Exercise_19 {
    public static void main(String[] args) {
        System.out.println(footballPoints(3, 4, 2));
        System.out.println(footballPoints(5, 0, 2));
        System.out.println(footballPoints(0, 0, 1));
    }

    public static int footballPoints(int wins, int draws, int losses) {
        //return (wins * 3) + (draws * 1) + (losses * 0);
        return (wins * 3) + (draws);
    }
}
