package exercises_11_20;

/*
Capture the Rook
Write a function that returns true if two rooks can attack each other, and false otherwise.

Examples
canCapture(["A8", "E8"]) ➞ true

canCapture(["A1", "B2"]) ➞ false

canCapture(["H4", "H3"]) ➞ true

canCapture(["F5", "C8"]) ➞ false
Notes
Assume no blocking pieces.
Two rooks can attack each other if they share the same row (letter) or column (number).
 */

public class Exercise_11 {
    public static void main(String[] args) {
        System.out.println(canCapture(new String[]{"A8", "E8"}));
        System.out.println(canCapture(new String[]{"A1", "B2"}));
        System.out.println(canCapture(new String[]{"H4", "H3"}));
        System.out.println(canCapture(new String[]{"F5", "C8"}));
    }

    public static boolean canCapture(String[] moves) {
        char firstMoveRow = moves[0].charAt(0);
        char firstMoveCol = moves[0].charAt(1);
        char secondMoveRow = moves[1].charAt(0);
        char secondMoveCol = moves[1].charAt(1);

        return firstMoveRow == secondMoveRow || firstMoveCol == secondMoveCol;
    }
}
