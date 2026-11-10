package exercises_1_10;

/*
Shuffle the Name
Create a method that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.

Examples
nameShuffle("Donald Trump") ➞ "Trump Donald"

nameShuffle("Rosie O'Donnell") ➞ "O'Donnell Rosie"

nameShuffle("Seymour Butts") ➞ "Butts Seymour"
Notes
There will be exactly one space between the first and last name.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
 */

public class Exercise_8 {
    public static void main(String[] args) {
        System.out.println(nameShuffle("Donald Trump"));
        System.out.println(nameShuffle("Rosie O'Donnell"));
        System.out.println(nameShuffle("Seymour Butts"));
    }

    public static String nameShuffle(String name){
        String arr [] = name.split(" ");
        return arr[1] + " " + arr[0];
    }
}
