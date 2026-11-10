package exercises_11_20;

/*
Name Greeting!

Create a function that takes a name and returns a greeting in the form of a string.
Examples

helloName("Gerald") ➞ "Hello Gerald!"

helloName("Tiffany") ➞ "Hello Tiffany!"

helloName("Ed") ➞ "Hello Ed!"

Notes

    The input is always a name (as string).
    Don't forget the exclamation mark!
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.
 */

public class Exercise_17 {
    public static void main(String[] args) {
        System.out.println(helloName("Gerald"));
        System.out.println(helloName("Tiffany"));
        System.out.println(helloName("Ed"));
    }

    public static String helloName(String name) {
        return "Hello " + name + "!";
    }
}
