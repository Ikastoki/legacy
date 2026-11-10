package exercises_41_50;

/*
Number of Stickers
Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.

Pictures of Rubik's Cubes

The Rubik's cube of side length 1 has 6 stickers.
The Rubik's cube of side length 2 has 24 stickers.
The Rubik's cube of side length 3 has 54 stickers.
Examples
howManyStickers(1) ➞ 6

howManyStickers(2) ➞ 24

howManyStickers(3) ➞ 54
Notes
Keep in mind there are 6 faces to keep track of.
Expect only positive whole numbers.
 */
public class Exercise_45 {
    public static void main(String[] args) {
        System.out.println(howManyStickers(1));
        System.out.println(howManyStickers(2));
        System.out.println(howManyStickers(3));
    }

    public static int howManyStickers(int n) {
        return 6 * n * n;
    }
}
