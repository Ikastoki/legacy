package exercises_21_30;

/*
Flip the Boolean
Create a function that reverses a boolean value.

Examples
reverse(true) ➞ false

reverse(false) ➞ true
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
 */
public class Exercise_26 {
    public static void main(String[] args) {
        System.out.println(reverse(true));
        System.out.println(reverse(false));
    }

    public static boolean reverse(boolean bool) {
        //return bool == true ? false : true;
        return !bool;
    }
}
