package exercises_41_50;

/*
Similar Bread
Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

Examples
hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
) ➞ true

hasSameBread(
  ["brown bread", "chicken", "brown bread"],
  ["white bread", "chicken", "white bread"]
) ➞ false

hasSameBread(
  ["toast", "cheese", "toast"],
  ["brown bread", "cheese", "toast"]
) ➞ false
Notes
The arrays will always be three elements long.
The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.
 */

public class Exercise_49 {
    public static void main(String[] args) {
        System.out.println(hasSameBread(
                new String[]{"white bread", "lettuce", "white bread"},
                new String[]{"white bread", "lettuce", "white bread"}));
        System.out.println(hasSameBread(
                new String[]{"brown bread", "chicken", "brown bread"},
                new String[]{"white bread", "chicken", "white bread"}));
        System.out.println(hasSameBread(
                new String[]{"toast", "cheese", "toast"},
                new String[]{"brown bread", "cheese", "toast"}));
    }

    public static boolean hasSameBread(String[] a, String[] b) {
        return a[0].equals(b[0]) && a[2].equals(b[2]);
    }
}
