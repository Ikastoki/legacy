package exercises_1_10;
/*
Upvotes vs Downvotes

Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
Examples

getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

Notes

You can expect only positive integers for vote counts.

En Java, no existe un tipo de objeto literal como en JavaScript, donde puedes definir objetos utilizando la sintaxis de llaves {}
Este ejercicio no es ta muy bien planteado.
 */

public class Exercise_5 {
    public static void main(String[] args) {
        System.out.println(getVoteCount(13, 0));
        System.out.println(getVoteCount(2, 33));
        System.out.println(getVoteCount(132, 132));
    }

    public static int getVoteCount(int upVotes, int dowVotes) {
        return upVotes - dowVotes;
    }

}
