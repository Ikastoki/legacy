package exercises_11_20;

/*
Basic Variable Assignment

A student learning Java was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
Examples

nameString("Mubashir") ➞ "MubashirEdabit"

nameString("Matt") ➞ "MattEdabit"

nameString("java") ➞ "javaEdabit"

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.
 */

public class Exercise_14 {
    public static void main(String[] args) {
        System.out.println(nameString("Mubashir"));
        System.out.println(nameString("Matt"));
        System.out.println(nameString("java"));
    }

    public static String nameString(String name) {
        return name + "Edabit";
    }
}
