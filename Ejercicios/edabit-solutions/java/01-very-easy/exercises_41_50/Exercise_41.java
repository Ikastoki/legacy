package exercises_41_50;

import java.util.Arrays;

/*
Pair Management
Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215]
Notes
N/A
 */


public class Exercise_41 {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(makePair(1, 2)));
        System.out.println(Arrays.toString(makePair(51, 21)));
        System.out.println(Arrays.toString(makePair(512124, 215)));

    }

    public static int[] makePair(int number1, int number2) {
        return new int[]{number1, number2};
    }
}
